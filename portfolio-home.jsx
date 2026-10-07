// portfolio-home.jsx — homepage: notes hero, three featured projects,
// archive reel of everything else, connect. Builds on the shared pieces in
// portfolio-core.jsx (Media, Typewriter, DottedLogo, Magnetic, useReveal …)
// and portfolio-sections.jsx (ConnectTile).
const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

// ────────────────────────────────────────────────────────────────────────────
// DATA — which projects lead the page. Everything else drops into the reel.
// ────────────────────────────────────────────────────────────────────────────
const FEATURED_HREFS = ["atlas.html", "everyday-innovation.html", "teddy.html", "armenia.html"];
const KIND_LABEL = { ux: "Design project", hacks: "Hackathon" };

const ALL_PROJECTS = SECTIONS.flatMap((s) => s.projects.map((p) => ({ ...p, kind: s.id })));
const FEATURED = FEATURED_HREFS.map((h) => ALL_PROJECTS.find((p) => p.href === h)).filter(Boolean);
// the rest keep their original order within each kind; "All" interleaves the
// two lists — design project 1, hackathon 1, design project 2, hackathon 2 …
const restOf = (kind) => ALL_PROJECTS.filter((p) => p.kind === kind && !FEATURED_HREFS.includes(p.href));
const ARCHIVE = (() => {
  const ux = restOf("ux"), hacks = restOf("hacks"), out = [];
  for (let i = 0; i < Math.max(ux.length, hacks.length); i++) {
    if (ux[i]) out.push(ux[i]);
    if (hacks[i]) out.push(hacks[i]);
  }
  return out;
})();

const HOME_SECTIONS = [
  ["top", "Intro"],
  ["work", "Selected"],
  ["archive", "Archive"],
  ["contact", "Connect"]
];

const SANS = "'Hanken Grotesk', sans-serif";
const MONO = "'JetBrains Mono', monospace";
const GUTTER = "clamp(20px, 4vw, 56px)";
const EASE = "cubic-bezier(.2,.8,.2,1)";

const monoLabel = {
  fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em",
  textTransform: "uppercase", color: "var(--muted)"
};

// ────────────────────────────────────────────────────────────────────────────
// TOP BAR — quiet mono row; the floating island takes over once you scroll
// ────────────────────────────────────────────────────────────────────────────
function TopBar() {
  const isMobile = useIsMobile();
  const link = (href, label) => (
    <a key={label} href={href} className="pf-ulink" style={{ ...monoLabel, color: "var(--ink)", textDecoration: "none" }}>{label}</a>
  );
  return (
    <header style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 40,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: `22px ${GUTTER}`, borderBottom: "1px solid var(--line-soft)", background: "var(--bg)"
    }}>
      <a href="index.html#top" style={{ ...monoLabel, color: "var(--ink)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
        <DottedLogo size={20} />
        Lin Nora Tollefsen
      </a>
      {!isMobile && (
        <nav style={{ display: "flex", gap: 32 }}>
          {link("#work", "Work")}
          {link("#archive", "Archive")}
          {link("about.html", "About")}
          {link("#contact", "Connect")}
        </nav>
      )}
    </header>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// FLOATING ISLAND — glass pill pinned to the bottom of the viewport with a
// scroll-spy over the homepage sections. Hidden while the hero is in view.
// ────────────────────────────────────────────────────────────────────────────
function FloatingIsland() {
  const isMobile = useIsMobile();
  const [active, setActive] = useStateH("top");
  const [shown, setShown] = useStateH(false);

  useEffectH(() => {
    const els = HOME_SECTIONS.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((el) => io.observe(el));
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav aria-label="Page sections" style={{
      position: "fixed", left: "50%", bottom: isMobile ? 14 : 22, zIndex: 90,
      transform: `translateX(-50%) translateY(${shown ? 0 : 90}px)`,
      opacity: shown ? 1 : 0,
      transition: `transform .55s ${EASE}, opacity .4s ease`,
      display: "flex", alignItems: "center", gap: 2,
      padding: 5, borderRadius: 999,
      background: "rgba(255,255,255,0.72)",
      backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)",
      border: "1px solid var(--line-soft)",
      boxShadow: "0 10px 30px rgba(14,14,12,0.10)",
      maxWidth: "calc(100vw - 24px)"
    }}>
      <a href="#top" aria-label="Back to top" style={{ display: "inline-flex", padding: "0 8px 0 6px" }}>
        <DottedLogo size={18} />
      </a>
      {HOME_SECTIONS.map(([id, label]) => {
        const on = active === id;
        return (
          <a key={id} href={"#" + id} style={{
            textDecoration: "none", whiteSpace: "nowrap",
            fontFamily: SANS, fontSize: isMobile ? 12 : 13, letterSpacing: "-0.005em",
            padding: isMobile ? "8px 11px" : "8px 15px", borderRadius: 999,
            background: on ? "var(--ink)" : "transparent",
            color: on ? "var(--bg)" : "var(--ink)",
            transition: "background .3s, color .3s"
          }}>{label}</a>
        );
      })}
    </nav>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// HERO — a pinboard of paper notes that can be picked up and moved around
// (desktop). On mobile they stack in a column, still slightly askew.
// ────────────────────────────────────────────────────────────────────────────
function DragNote({ id, at, rot, z, onFront, draggable, delay = 0, style, onHoverChange, children }) {
  const [off, setOff] = useStateH({ x: 0, y: 0 });
  const [dragging, setDragging] = useStateH(false);
  const [mounted, setMounted] = useStateH(false);
  const start = useRefH(null);

  useEffectH(() => { const t = setTimeout(() => setMounted(true), 120 + delay); return () => clearTimeout(t); }, [delay]);

  const onDown = (e) => {
    if (!draggable || e.button !== 0) return;
    if (e.target.closest("a, button")) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, ox: off.x, oy: off.y };
    setDragging(true);
    onFront(id);
  };
  const onMove = (e) => {
    if (!start.current) return;
    setOff({ x: start.current.ox + e.clientX - start.current.px, y: start.current.oy + e.clientY - start.current.py });
  };
  const onUp = () => { start.current = null; setDragging(false); };

  const r = dragging ? rot * 0.4 : rot;
  return (
    <div
      onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
      onMouseEnter={onHoverChange && (() => onHoverChange(true))}
      onMouseLeave={onHoverChange && (() => onHoverChange(false))}
      style={{
        position: draggable ? "absolute" : "relative",
        ...(draggable ? at : {}),
        zIndex: z,
        cursor: draggable ? (dragging ? "grabbing" : "grab") : "default",
        touchAction: draggable ? "none" : "auto",
        userSelect: "none",
        transform: `translate(${off.x}px, ${off.y + (mounted ? 0 : 40)}px) rotate(${r}deg) scale(${dragging ? 1.03 : 1})`,
        opacity: mounted ? 1 : 0,
        boxShadow: dragging ? "0 24px 48px rgba(14,14,12,0.18)" : "0 2px 6px rgba(14,14,12,0.06)",
        transition: dragging
          ? "box-shadow .2s, transform .12s"
          : `transform .7s ${EASE}, opacity .6s ease, box-shadow .4s`,
        ...style
      }}>
      {children}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// INVESTIGATION BOARD — every hero note is a "lead" pinned to the page, with
// red thread strung between the pins. Threads are re-measured every frame so
// they follow the notes while they're dragged around.
// ────────────────────────────────────────────────────────────────────────────
const LEAD_IDS = ["intro", "portrait", "type", "logo", "about"];
const THREADS = [["intro", "portrait"], ["logo", "intro"], ["logo", "type"], ["type", "about"], ["portrait", "about"]];
// on mobile the leads stack, so the thread becomes one chain down the left edge
const THREADS_STACKED = [["intro", "portrait"], ["portrait", "type"], ["type", "about"]];
const THREAD_COLOR = "#3A3A36";
// every pin is pushed in at its own angle; "flip" mirrors it so it leans the
// other way (highlight and all), like pins stuck in by hand
const PIN_POSE = {
  intro: { rot: 38 },
  portrait: { rot: 26, flip: true },
  type: { rot: 54 },
  logo: { rot: 14, flip: true },
  about: { rot: 30 }
};

// invisible anchor marking where a note's pin goes; the board draws the pin
function PinAnchor({ id, x = "50%", y = 14 }) {
  return <span data-pin={id} aria-hidden style={{ position: "absolute", left: x, top: y, width: 2, height: 2, marginLeft: -1, marginTop: -1 }} />;
}

function Hero() {
  const isMobile = useIsMobile();
  const boardRef = useRefH(null);
  const [order, setOrder] = useStateH(LEAD_IDS);
  const front = (id) => setOrder((o) => [...o.filter((x) => x !== id), id]);
  const z = (id) => 10 + order.indexOf(id);
  const common = { onFront: front, draggable: !isMobile };
  const [osloHover, setOsloHover] = useStateH(false);

  return (
    <section id="top" style={{
      position: "relative", minHeight: isMobile ? "auto" : "100vh",
      padding: isMobile ? `110px ${GUTTER} 72px` : `96px ${GUTTER} 40px`,
      display: "flex", flexDirection: "column", overflow: "hidden"
    }}>
      {/* vertical side label */}
      {!isMobile && (
        <div style={{
          position: "absolute", left: GUTTER, top: 120,
          writingMode: "vertical-rl", ...monoLabel, color: "var(--ink)"
        }}>Case file · Lin Nora</div>
      )}

      <div ref={boardRef} style={{
        position: "relative", flex: 1,
        minHeight: isMobile ? 0 : 600,
        maxWidth: 1240, width: "100%", margin: "0 auto",
        display: isMobile ? "flex" : "block", flexDirection: "column", gap: 44, alignItems: "center"
      }}>
        <DragNote id="intro" {...common} z={z("intro")} rot={-3} delay={0}
          at={{ left: "11%", top: "9%", width: "min(44%, 540px)" }}
          style={{ background: "var(--ink)", color: "var(--bg)", padding: "40px 34px 34px", ...(isMobile ? { width: "100%" } : {}) }}>
          <PinAnchor id="intro" x={isMobile ? "93%" : 22} y={18} />
          <h1 style={{
            margin: 0, fontFamily: SANS, fontWeight: 300,
            fontSize: isMobile ? 28 : "clamp(28px, 2.8vw, 42px)", lineHeight: 1.15, letterSpacing: "-0.025em"
          }}>
            Lin Nora is a multidisciplinary designer connecting the dots between users, systems & strategy.
          </h1>
        </DragNote>

        <DragNote id="portrait" {...common} z={z("portrait")} rot={4} delay={200}
          at={{ right: "3%", top: "7%", width: "min(33%, 400px)" }}
          style={{ background: "var(--bg)", border: "1px solid var(--line-soft)", padding: "28px 14px 14px", ...(isMobile ? { width: "88%" } : {}) }}>
          <PinAnchor id="portrait" x={isMobile ? "93%" : "50%"} y={13} />
          <div style={{ position: "relative", aspectRatio: "1 / 1" }}>
            <iframe src="connect-dots-portrait.html?v=5" title="Connect the dots portrait" scrolling="no" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block", background: "transparent"
            }} />
          </div>
        </DragNote>

        <DragNote id="type" {...common} z={z("type")} rot={2.5} delay={340}
          at={{ left: "42%", top: "58%", width: "min(32%, 400px)" }}
          style={{ background: "var(--bg-soft)", padding: "38px 26px 28px", ...(isMobile ? { width: "92%" } : {}) }}>
          <PinAnchor id="type" x={isMobile ? "93%" : "88%"} y={14} />
          <p style={{ margin: 0, fontFamily: MONO, fontSize: isMobile ? 14 : 15, lineHeight: 1.6, color: "var(--ink)" }}>
            Hi, I'm a{" "}
            <span style={{ borderBottom: "1px dotted var(--ink)" }}><Typewriter words={ROTATOR_WORDS} /></span>
            <br />designer.
          </p>
        </DragNote>

        <DragNote id="logo" {...common} onHoverChange={setOsloHover} z={z("logo")} rot={-7} delay={460}
          at={{ left: "2%", top: "60%", width: 170 }}
          style={{ background: "var(--bg)", border: "1px solid var(--line-soft)", padding: "30px 16px 18px", display: isMobile ? "none" : "flex", flexDirection: "column", alignItems: "center" }}>
          <PinAnchor id="logo" y={13} />
          <DottedLogo size={88} override={osloHover ? "text:OSLO" : null} />
        </DragNote>

        <DragNote id="about" {...common} z={z("about")} rot={-4} delay={580}
          at={{ right: "4%", top: "76%" }}
          style={{ background: "var(--bg)", border: "1px dashed var(--ink)", borderRadius: 999, ...(isMobile ? { alignSelf: "flex-end", marginRight: 8 } : {}) }}>
          <PinAnchor id="about" x={20} y="50%" />
          <a href="about.html" className="pf-arrow" style={{
            display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 26px 14px 54px",
            fontFamily: SANS, fontSize: 15, color: "var(--ink)", textDecoration: "none"
          }}>Who am I? <span aria-hidden>→</span></a>
        </DragNote>

        <PinBoard boardRef={boardRef} ids={LEAD_IDS} threads={isMobile ? THREADS_STACKED : THREADS} poses={PIN_POSE} color={THREAD_COLOR} />
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16,
        marginTop: isMobile ? 48 : 0, ...monoLabel
      }}>
        {isMobile && <span>UX · Service · Strategy</span>}
        <a href="#work" className="pf-ulink" style={{ ...monoLabel, color: "var(--ink)", textDecoration: "none", marginLeft: "auto" }}>Selected work ↓</a>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SECTION HEAD — the hard divider between chapters: hairline, number, title
// ────────────────────────────────────────────────────────────────────────────
function SectionHead({ title, meta, children }) {
  const isMobile = useIsMobile();
  const [ref, visible] = useReveal(0.2);
  // title on the page's left gutter (same edge as the logo, reel and footer),
  // its filters/intro directly after it, the count pushed to the far right
  return (
    <div ref={ref} style={{ padding: `0 ${GUTTER}` }}>
      <div style={{
        height: 1, background: "var(--line-soft)",
        transform: `scaleX(${visible ? 1 : 0})`, transformOrigin: "left",
        transition: `transform 1.1s ${EASE}`
      }} />
      <div style={{
        display: "flex", flexWrap: "wrap", alignItems: "center",
        columnGap: isMobile ? 16 : 40, rowGap: 16, paddingTop: isMobile ? 20 : 28,
        ...revealStyle(visible, 120)
      }}>
        <h2 style={{
          margin: 0, fontFamily: SANS, fontWeight: 400,
          fontSize: isMobile ? 26 : "clamp(24px, 2.2vw, 32px)", lineHeight: 1.1, letterSpacing: "-0.025em",
          color: "var(--ink)"
        }}>{title}</h2>
        {children}
        {meta && !isMobile && <span style={{ ...monoLabel, whiteSpace: "nowrap", marginLeft: "auto" }}>{meta}</span>}
      </div>
    </div>
  );
}

// cursor-following "See project" pill, shared by featured panels + reel cards
function SeePill({ hov, pos }) {
  return (
    <div style={{
      position: "absolute", left: pos.x + "%", top: pos.y + "%", zIndex: 3,
      transform: `translate(-50%, -50%) scale(${hov ? 1 : 0.7})`,
      opacity: hov ? 1 : 0,
      transition: `opacity .25s, transform .4s ${EASE}`,
      background: "var(--ink)", color: "var(--bg)",
      padding: "12px 22px", borderRadius: 999,
      fontFamily: SANS, fontSize: 13, letterSpacing: "-0.005em",
      display: "inline-flex", alignItems: "center", gap: 8,
      pointerEvents: "none", whiteSpace: "nowrap"
    }}>See project <span aria-hidden style={{ fontSize: 12 }}>→</span></div>
  );
}

function useFollow() {
  const [hov, setHov] = useStateH(false);
  const [pos, setPos] = useStateH({ x: 50, y: 50 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  return { hov, pos, bind: { onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false), onMouseMove: onMove } };
}

// project card media: video / image / Carbon's 3D lattice — same rules as the
// old ProjectCard so every project's card art keeps working unchanged
// panel colour behind a card's media; letterboxed artwork sits on its own
// near-white so the bands around it don't show
function mediaBg(p) {
  if (p.cardLattice && !p.cardImg) return "#0E0E0C";
  if (p.cardImgFit === "contain") return "#FEFEFA";
  return "var(--bg-soft)";
}

function CardMedia({ p, hov }) {
  return (
    <>
      {p.cardLattice && !p.cardImg && <CarbonLattice />}
      {p.cardVideo && <Media src={p.cardVideo} fill style={{ transform: "scale(1.04)" }} />}
      {p.cardImg && (
        <Media src={p.cardImg} fill style={{
          transform: p.cardImgZoom ? `scale(${p.cardImgZoom})` : undefined, transformOrigin: "top center",
          // "contain" shows the whole artwork, letterboxed on its own white
          objectFit: p.cardImgFit || "cover"
        }} />
      )}
      {p.cardLattice && p.cardImg && (
        <div style={{ position: "absolute", left: "3%", bottom: "4%", width: "44%", height: "26%", overflow: "hidden", pointerEvents: "none" }}>
          <CarbonLattice />
        </div>
      )}
      <div style={{ position: "absolute", inset: 0, background: "rgba(14,14,12,0.10)", opacity: hov ? 1 : 0, transition: "opacity .35s", pointerEvents: "none", zIndex: 1 }} />
      {p.cardLogo && (
        <img src={p.cardLogo} alt={p.collab} style={{ position: "absolute", bottom: 16, right: 16, height: 28, width: "auto", pointerEvents: "none", zIndex: 2 }} />
      )}
    </>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      padding: "6px 14px", borderRadius: 999, border: "1px solid var(--line-soft)",
      fontFamily: SANS, fontSize: 12, color: "var(--ink-2)", whiteSpace: "nowrap"
    }}>{children}</span>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// FEATURED — three large panels, alternating sides, the grey panel bleeding
// off the page edge with a vertical title beside it
// ────────────────────────────────────────────────────────────────────────────
// while a featured project is hovered its whole row flips to ink: the colour
// tokens are re-pointed on the <article>, so every child that reads them
// (title, copy, tags, button, cursor pill) inverts with it
const INVERTED = {
  "--bg": "#0E0E0C",
  "--ink": "#FFFFFF",
  "--ink-2": "rgba(255,255,255,0.78)",
  "--muted": "rgba(255,255,255,0.55)",
  "--line-soft": "rgba(255,255,255,0.24)"
};

function FeaturedProject({ p, i, total }) {
  const isMobile = useIsMobile();
  const flip = i % 2 === 1;
  const [ref, visible] = useReveal(0.18);
  const { hov, bind } = useFollow();
  const [rowHov, setRowHov] = useStateH(false);
  const dark = rowHov && !isMobile;

  // the "See project" pill follows the pointer across the whole row: dark
  // over the artwork, white over the inverted (dark) row, hidden over the
  // row's own See project button so the two don't double up
  const [pill, setPill] = useStateH({ x: 0, y: 0 });
  const [overMedia, setOverMedia] = useStateH(false);
  const [overButton, setOverButton] = useStateH(false);
  const pointer = useRefH(null);
  const placePill = () => {
    const el = ref.current;
    if (!el || !pointer.current) return;
    const r = el.getBoundingClientRect();
    setPill({ x: pointer.current.x - r.left, y: pointer.current.y - r.top });
  };
  useEffectH(() => {
    if (!dark) return;
    window.addEventListener("scroll", placePill, { passive: true });
    return () => window.removeEventListener("scroll", placePill);
  }, [dark]);
  const rowBind = {
    onMouseEnter: () => setRowHov(true),
    onMouseLeave: () => setRowHov(false),
    onMouseMove: (e) => {
      pointer.current = { x: e.clientX, y: e.clientY };
      setOverButton(!!e.target.closest(".pf-arrow"));
      placePill();
    },
    // the whole row opens the project, not just the image and button
    onClick: (e) => { if (!isMobile && !e.target.closest("a")) window.location.href = p.href; }
  };
  const pillOn = dark && !overButton;

  // the media's own box (not the whole row) triggers its wipe-in from the page
  // edge, so it plays while it's actually on screen; the artwork drifts in
  // behind it. Observed on an unclipped wrapper — a fully clipped element
  // counts as invisible to IntersectionObserver and would never fire.
  const [mediaRef, mediaIn] = useReveal(0.3);
  const media = (
    <div ref={mediaRef} onMouseEnter={() => setOverMedia(true)} onMouseLeave={() => setOverMedia(false)}>
    <a href={p.href} {...bind} aria-label={`See project: ${p.title}`} style={{
      position: "relative", display: "block", overflow: "hidden",
      aspectRatio: "1 / 1",
      background: mediaBg(p),
      clipPath: mediaIn ? "inset(0 0 0 0)" : (flip ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)"),
      transition: `clip-path 1.3s ${EASE}`
    }}>
      <div style={{
        position: "absolute", inset: 0,
        transform: mediaIn ? "none" : `translateX(${flip ? 18 : -18}%)`,
        transition: `transform 1.6s ${EASE}`
      }}>
        <CardMedia p={p} hov={hov} />
      </div>
    </a>
    </div>
  );

  const title = (
    <h3 style={{
      margin: 0, fontFamily: SANS, fontWeight: 400, color: "var(--ink)",
      fontSize: isMobile ? 28 : "clamp(26px, 2.4vw, 36px)", lineHeight: 1, letterSpacing: "-0.02em",
      writingMode: isMobile ? "horizontal-tb" : "vertical-rl",
      maxHeight: isMobile ? undefined : "100%"
    }}>{p.title}</h3>
  );

  const body = (
    <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 380 }}>
      <span style={monoLabel}>{String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {p.collab} · {p.year}</span>
      <p style={{ margin: 0, fontFamily: SANS, fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>{p.line}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
      <div>
        <Magnetic strength={0.25}>
          <a href={p.href} className="pf-arrow" style={{
            display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 24px",
            border: "1px dashed var(--ink)", borderRadius: 999,
            fontFamily: SANS, fontSize: 14, color: "var(--ink)", textDecoration: "none"
          }}>See project <span aria-hidden>→</span></a>
        </Magnetic>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <article ref={ref} style={{ display: "flex", flexDirection: "column", gap: 22, paddingBottom: 72 }}>
        {media}
        <div style={{ padding: `0 ${GUTTER}`, display: "flex", flexDirection: "column", gap: 16, ...revealStyle(visible, 200) }}>
          {title}
          {body}
        </div>
      </article>
    );
  }

  const text = (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      alignItems: flip ? "flex-end" : "flex-start", gap: 40,
      padding: flip ? `8px clamp(32px, 4vw, 72px) 8px ${GUTTER}` : `8px ${GUTTER} 8px clamp(32px, 4vw, 72px)`,
      ...revealStyle(visible, 350)
    }}>
      {title}
      <div style={{ alignSelf: "center" }}>{body}</div>
    </div>
  );

  return (
    <article ref={ref} {...rowBind} className="pf-feat" style={{
      position: "relative", cursor: dark ? "pointer" : undefined,
      padding: "clamp(48px, 5vw, 80px) 0",
      background: "var(--bg)",
      transition: "background-color .5s ease",
      ...(dark ? INVERTED : {})
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: flip ? "1fr 50%" : "50% 1fr", alignItems: "stretch"
      }}>
        {flip ? <>{text}{media}</> : <>{media}{text}</>}
      </div>
      <div aria-hidden style={{
        position: "absolute", left: pill.x, top: pill.y, zIndex: 5,
        transform: `translate(-50%, -50%) scale(${pillOn ? 1 : 0.7})`,
        opacity: pillOn ? 1 : 0,
        background: overMedia ? "#0E0E0C" : "#FFFFFF",
        color: overMedia ? "#FFFFFF" : "#0E0E0C",
        transition: `opacity .25s, transform .4s ${EASE}, background-color .3s, color .3s`,
        padding: "12px 22px", borderRadius: 999,
        fontFamily: SANS, fontSize: 13, letterSpacing: "-0.005em",
        display: "inline-flex", alignItems: "center", gap: 8,
        pointerEvents: "none", whiteSpace: "nowrap"
      }}>See project <span aria-hidden style={{ fontSize: 12 }}>→</span></div>
    </article>
  );
}

function Featured() {
  const isMobile = useIsMobile();
  return (
    <section id="work" style={{ paddingTop: isMobile ? 88 : 160 }}>
      <SectionHead title="Selected work" meta={`${FEATURED.length} projects`} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: isMobile ? 40 : 64 }}>
        {FEATURED.map((p, i) => <FeaturedProject key={p.href} p={p} i={i} total={FEATURED.length} />)}
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ARCHIVE REEL — every other project on one horizontal strip. Drag, swipe,
// shift-scroll or use the arrows; filter by kind.
// ────────────────────────────────────────────────────────────────────────────
const REEL_FILTER_KEY = "pf:reelFilter";

function ReelCard({ p, index, wasDragged }) {
  const { hov, pos, bind } = useFollow();
  const isMobile = useIsMobile();
  return (
    <a href={p.href} draggable={false}
      onClick={(e) => { if (wasDragged()) e.preventDefault(); }}
      style={{
        flex: "0 0 auto", width: isMobile ? "78vw" : "clamp(280px, 27vw, 400px)",
        scrollSnapAlign: "start", textDecoration: "none", color: "var(--ink)",
        animation: `reelIn .7s ${EASE} both`, animationDelay: `${Math.min(index, 6) * 70}ms`
      }}>
      <div {...bind} style={{
        position: "relative", overflow: "hidden", aspectRatio: "1 / 1",
        background: mediaBg(p)
      }}>
        <CardMedia p={p} hov={hov} />
        {!isMobile && <SeePill hov={hov} pos={pos} />}
      </div>
      <div style={{ paddingTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={monoLabel}>{KIND_LABEL[p.kind]} · {p.year}</span>
        <h3 style={{ margin: 0, fontFamily: SANS, fontWeight: 400, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.012em" }}>{p.title}</h3>
        <p style={{ margin: 0, fontFamily: SANS, fontSize: 13.5, lineHeight: 1.5, color: "var(--muted)" }}>{p.line}</p>
      </div>
    </a>
  );
}

function ArchiveReel() {
  const isMobile = useIsMobile();
  const [filter, setFilter] = useStateH(() => {
    try { return sessionStorage.getItem(REEL_FILTER_KEY) || "all"; } catch (e) { return "all"; }
  });
  const [progress, setProgress] = useStateH(0);
  const [atEnds, setAtEnds] = useStateH({ start: true, end: false });
  const [current, setCurrent] = useStateH(1);
  const trackRef = useRefH(null);
  const dragRef = useRefH({ down: false, x: 0, left: 0, moved: 0 });

  const items = ARCHIVE.filter((p) => filter === "all" || p.kind === filter);

  const pick = (f) => {
    setFilter(f);
    try { sessionStorage.setItem(REEL_FILTER_KEY, f); } catch (e) {}
    if (trackRef.current) trackRef.current.scrollTo({ left: 0 });
  };

  const sync = () => {
    const el = trackRef.current; if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    const end = el.scrollLeft > max - 4;
    setAtEnds({ start: el.scrollLeft < 4, end });
    const card = el.querySelector("a");
    const w = card ? card.getBoundingClientRect().width + 24 : 1;
    const n = el.querySelectorAll("a").length;
    setCurrent(end ? n : Math.min(n, Math.round(el.scrollLeft / w) + 1));
  };
  useEffectH(() => { sync(); window.addEventListener("resize", sync); return () => window.removeEventListener("resize", sync); }, [filter]);

  const step = (dir) => {
    const el = trackRef.current; if (!el) return;
    const card = el.querySelector("a");
    const w = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  // mouse drag-to-scroll (touch already scrolls natively)
  const onDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    dragRef.current = { down: true, x: e.clientX, left: trackRef.current.scrollLeft, moved: 0 };
  };
  const onMove = (e) => {
    const d = dragRef.current; if (!d.down) return;
    const dx = e.clientX - d.x;
    d.moved = Math.max(d.moved, Math.abs(dx));
    if (d.moved > 4) {
      trackRef.current.style.scrollSnapType = "none";
      trackRef.current.style.cursor = "grabbing";
      trackRef.current.scrollLeft = d.left - dx;
    }
  };
  const onUp = () => {
    const d = dragRef.current; if (!d.down) return;
    d.down = false;
    trackRef.current.style.cursor = "";
    trackRef.current.style.scrollSnapType = "";
  };
  const wasDragged = () => dragRef.current.moved > 4;

  const filters = [["all", "All", ARCHIVE.length], ["ux", "Design projects", ARCHIVE.filter((p) => p.kind === "ux").length], ["hacks", "Hackathons", ARCHIVE.filter((p) => p.kind === "hacks").length]];

  const arrowBtn = (dir, disabled) => (
    <button type="button" onClick={() => step(dir)} disabled={disabled} aria-label={dir < 0 ? "Previous" : "Next"} style={{
      width: 46, height: 46, borderRadius: "50%", border: "1px solid var(--ink)",
      background: "var(--bg)", color: "var(--ink)", fontSize: 16, cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.25 : 1, transition: "opacity .3s, background .25s, color .25s"
    }} className="pf-circle">{dir < 0 ? "←" : "→"}</button>
  );

  return (
    <section id="archive" style={{ paddingTop: isMobile ? 110 : 200 }}>
      <SectionHead title="Archive" meta={`${ARCHIVE.length} more projects`}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {filters.map(([id, label, n]) => {
            const on = filter === id;
            return (
              <button key={id} type="button" onClick={() => pick(id)} style={{
                appearance: "none", cursor: "pointer", borderRadius: 999,
                padding: "9px 18px", fontFamily: SANS, fontSize: 13.5,
                border: "1px solid " + (on ? "var(--ink)" : "var(--line-soft)"),
                background: on ? "var(--ink)" : "transparent",
                color: on ? "var(--bg)" : "var(--ink)",
                transition: "background .25s, color .25s, border-color .25s"
              }}>{label} <sup style={{ fontFamily: MONO, fontSize: 9, opacity: 0.6 }}>{n}</sup></button>
            );
          })}
        </div>
      </SectionHead>

      <div
        ref={trackRef} key={filter}
        className="pf-reel"
        onScroll={sync}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
        style={{
          marginTop: isMobile ? 40 : 72,
          display: "flex", gap: 24, overflowX: "auto", overflowY: "hidden",
          scrollSnapType: "x mandatory", scrollPaddingLeft: GUTTER,
          padding: `0 ${GUTTER} 8px`, cursor: "grab"
        }}>
        {items.map((p, i) => <ReelCard key={p.href} p={p} index={i} wasDragged={wasDragged} />)}
        <div aria-hidden style={{ flex: "0 0 1px" }} />
      </div>

      {/* rail + counter + arrows */}
      <div style={{
        padding: `28px ${GUTTER} 0`, display: "flex", alignItems: "center", gap: isMobile ? 16 : 28
      }}>
        <span style={{ ...monoLabel, color: "var(--ink)", minWidth: 64 }}>
          {String(current).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <div style={{ position: "relative", flex: 1, height: 1, background: "var(--line-soft)" }}>
          <div style={{
            position: "absolute", top: -1, height: 3, background: "var(--ink)",
            width: `${Math.max(8, 100 / Math.max(1, items.length) * 2)}%`,
            left: `${progress * (100 - Math.max(8, 100 / Math.max(1, items.length) * 2))}%`,
            transition: "left .12s linear"
          }} />
        </div>
        {!isMobile && <span style={monoLabel}>Drag or use arrows</span>}
        <div style={{ display: "flex", gap: 10 }}>
          {arrowBtn(-1, atEnds.start)}
          {arrowBtn(1, atEnds.end)}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// CONNECT
// ────────────────────────────────────────────────────────────────────────────
function Connect() {
  const isMobile = useIsMobile();
  const [ref, visible] = useReveal(0.15);
  return (
    <section id="contact" style={{ paddingTop: isMobile ? 110 : 200, paddingBottom: 40 }}>
      <SectionHead title="Let's talk" />

      <div ref={ref} style={{
        padding: `0 ${GUTTER}`, marginTop: isMobile ? 56 : 96,
        ...revealStyle(visible)
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 240px))", gap: isMobile ? 16 : 48 }}>
          {[
            { label: "Send me a letter", caption: "linnoratollefsen@gmail.com", href: "mailto:linnoratollefsen@gmail.com", icon: "mail" },
            { label: "LinkedIn", caption: "/in/linnoratollefsen", href: "https://www.linkedin.com/in/linnoratollefsen", icon: "linkedin" }
          ].map((c, i) => <ConnectTile key={i} c={c} index={i} />)}
        </div>
      </div>

      <div style={{
        margin: `${isMobile ? 96 : 160}px ${GUTTER} 0`, paddingTop: 18, borderTop: "1px solid var(--line-soft)",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, ...monoLabel,
        paddingBottom: isMobile ? 70 : 60
      }}>
        <span>© 2026 Lin Nora Tollefsen · Oslo</span>
        <a href="#top" className="pf-ulink" style={{ ...monoLabel, color: "var(--ink)", textDecoration: "none" }}>Back to top ↑</a>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────────────────
function HomeApp() {
  useEffectH(() => {
    if (document.getElementById("__pf_kf")) return;
    const s = document.createElement("style");
    s.id = "__pf_kf";
    s.textContent = KEYFRAMES;
    document.head.appendChild(s);
  }, []);

  // Save scroll position continuously so a project page's back button can
  // return here at exactly the right spot (the page renders client-side, so
  // the browser's own restoration has nothing to scroll into yet).
  useEffectH(() => {
    const KEY = "pf:scrollY:index";
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { sessionStorage.setItem(KEY, String(window.scrollY)); raf = null; });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const saved = parseInt(sessionStorage.getItem(KEY) || "0", 10);
    if (saved > 0) {
      const restore = () => window.scrollTo({ top: saved, behavior: "instant" });
      requestAnimationFrame(restore);
      setTimeout(restore, 60);
      setTimeout(restore, 250);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pf-artboard">
      <TopBar />
      <Hero />
      <Featured />
      <ArchiveReel />
      <Connect />
      <FloatingIsland />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
