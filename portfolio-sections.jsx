// portfolio-sections.jsx  Hero, Projects, About, Skills, Footer
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

// ────────────────────────────────────────────────────────────────────────────
// NAV  minimal: About · Projects · Connect, top right
// ────────────────────────────────────────────────────────────────────────────
function Nav({ onHover }) {
  const link = (href, label) =>
  <a href={href}
  style={{ color: "var(--ink)", textDecoration: "none",
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 14, fontWeight: 400, letterSpacing: "-0.005em" }}>
      {label}
    </a>;

  return (
    <nav style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "flex-end", alignItems: "center",
      padding: "36px 64px",
      color: "var(--ink)"
    }}>
      <div style={{ display: "flex", gap: 48 }}>
        {link("index.html#work", "Projects")}
        {link("index.html#contact", "Connect")}
      </div>
    </nav>);

}

// ────────────────────────────────────────────────────────────────────────────
// HERO  small breathable text, portrait box top-right, Selected works pill below
// ────────────────────────────────────────────────────────────────────────────
function Hero({ onHover }) {
  const isMobile = useIsMobile();
  return (
    <section id="top" style={{
      height: "100%",
      padding: isMobile ? "clamp(96px, 24vw, 120px) clamp(20px, 6vw, 64px) 48px" : "100px 64px 60px",
      position: "relative", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      justifyContent: "center"
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 40 : 60, alignItems: "center"
      }}>
        {/* LEFT  text block */}
        <div>
          <p style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 400, letterSpacing: "-0.005em",
            color: "var(--ink)"
          }}>Hi</p>

          <p style={{
            margin: "26px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 400, letterSpacing: "-0.005em",
            color: "var(--ink)",
            display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 6
          }}>
            I`m <em style={{ fontStyle: "italic", fontWeight: 400 }}>Lin Nora</em>, a
            <span style={{
              display: "inline-flex", alignItems: "baseline",
              minWidth: 180,
              borderBottom: "1px dotted var(--ink)",
              paddingBottom: 1
            }}>
              <Typewriter words={ROTATOR_WORDS} />
            </span>
            designer
          </p>

          <h1 style={{
            margin: "60px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(32px, 6vw, 42px)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            maxWidth: 520
          }}>
            Connecting the dots<br />
            between people & design
          </h1>
        </div>

        {/* RIGHT  connect-the-dots portrait, no box */}
        <div style={{
          width: "100%", maxWidth: isMobile ? 320 : "none",
          margin: isMobile ? "0 auto" : 0,
          position: "relative", aspectRatio: "1 / 1"
        }}>
          <iframe
            src="connect-dots-portrait.html?v=4"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              border: "none", display: "block",
              background: "transparent"
            }}
            scrolling="no"
          />
        </div>
      </div>

      {/* "Selected works ↓" + "About me →" pills  bottom left, well below the grid */}
      <div style={{ marginTop: isMobile ? 48 : 80, display: "flex", flexWrap: "wrap", gap: 16 }}>
        <a href="#work"
        onMouseEnter={() => onHover && onHover("link")}
        onMouseLeave={() => onHover && onHover("default")}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "12px 24px",
          border: "1px dashed var(--ink)",
          borderRadius: 999,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 14, fontWeight: 400, letterSpacing: "-0.005em",
          color: "var(--ink)", textDecoration: "none"
        }}>
          Selected works <span aria-hidden style={{ fontSize: 13 }}>↓</span>
        </a>
        <a href="about.html"
        onMouseEnter={() => onHover && onHover("link")}
        onMouseLeave={() => onHover && onHover("default")}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "12px 24px",
          border: "1px dashed var(--ink)",
          borderRadius: 999,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 14, fontWeight: 400, letterSpacing: "-0.005em",
          color: "var(--ink)", textDecoration: "none"
        }}>
          About me <span aria-hidden style={{ fontSize: 13 }}>→</span>
        </a>
      </div>
    </section>);

}

// ────────────────────────────────────────────────────────────────────────────
// PROJECTS  title + intro + centered pill tabs + 2-col clean placeholder grid
// ────────────────────────────────────────────────────────────────────────────
function Projects({ onHover, activeOverride }) {
  const [active, setActive] = useStateS(activeOverride || "ux");
  const current = activeOverride || active;
  const section = SECTIONS.find((s) => s.id === current);
  const isMobile = useIsMobile();

  const TAB_LABELS = { ux: "Projects", strategy: "Strategy & systems", hacks: "Hackatons" };

  return (
    <section id="work" style={{ padding: "clamp(80px, 14vw, 140px) clamp(20px, 6vw, 64px) clamp(64px, 12vw, 100px)" }}>
      {/* Header  left aligned */}
      <div style={{ maxWidth: 720 }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 400, fontSize: "clamp(32px, 6vw, 44px)",
          lineHeight: 1.02, letterSpacing: "-0.025em",
          color: "var(--ink)"
        }}>Projects<span style={{ color: "var(--muted)" }}>.</span></h2>
        <p style={{
          margin: "14px 0 0",
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 13, lineHeight: 1.45, letterSpacing: "-0.005em",
          color: "var(--ink)",
          maxWidth: 640
        }}>
          I work multidiciplinary mostly targeting human interacitol work multidisciplinary,
          focusing on human interaction within the evolving world of technology. Let's dive
          in.n with the world of technology, let´s deepdive
        </p>
      </div>

      {/* Centered pill tabs */}
      <div style={{
        display: "flex", justifyContent: "center",
        margin: isMobile ? "48px 0 40px" : "80px 0 60px"
      }}>
        <div style={{
          display: "inline-flex", gap: 4,
          padding: 6,
          background: "rgba(14,14,12,0.05)",
          border: "1px solid var(--line-soft)",
          borderRadius: 999
        }}>
          {SECTIONS.map((s) => {
            const on = current === s.id;
            return (
              <button key={s.id}
              onClick={() => !activeOverride && setActive(s.id)}
              style={{
                appearance: "none", border: 0, cursor: "pointer",
                padding: "10px 28px", borderRadius: 999,
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13.5, fontWeight: 400, letterSpacing: "-0.005em",
                background: on ? "var(--ink)" : "transparent",
                color: on ? "var(--bg)" : "var(--ink)",
                transition: "background .25s, color .25s"
              }}>
                {TAB_LABELS[s.id]}
              </button>);

          })}
        </div>
      </div>

      {/* 2-column placeholder grid, max 4 cards */}
      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: isMobile ? 48 : 64, rowGap: isMobile ? 48 : 64,
        maxWidth: 1000, margin: "0 auto"
      }}>
        {section.projects.map((p, i) =>
        <ProjectCard key={p.num} p={p} onHover={onHover} index={i} />
        )}
      </div>
    </section>);

}

function ProjectCard({ p, onHover, index = 0 }) {
  const [hov, setHov] = useStateS(false);
  const [pos, setPos] = useStateS({ x: 50, y: 50 });
  const [ref, visible] = useReveal(0.15);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100
    });
  };

  return (
    <a ref={ref} href={p.href || "#"}
    onMouseEnter={() => {setHov(true);onHover && onHover("default");}}
    onMouseLeave={() => {setHov(false);onHover && onHover("default");}}
    style={{
      display: "flex", flexDirection: "column", gap: 22,
      textDecoration: "none", color: "var(--ink)",
      ...revealStyle(visible, (index % 2) * 90)
    }}>
      {/* Image area */}
      <div
      onMouseMove={onMove}
      style={{
        position: "relative", overflow: "hidden",
        aspectRatio: "1 / 1",
        background: p.cardLattice && !p.cardImg ? "#0E0E0C" : "var(--bg-soft)",
        border: "1px solid var(--line-soft)",
        borderRadius: 22,
        transition: "transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 24px 60px -30px rgba(14,14,12,0.25)" : "0 0 0 rgba(0,0,0,0)"
      }}>
        {/* project card media */}
        {p.cardLattice && !p.cardImg && <CarbonLattice />}
        {p.cardVideo && (
          <video src={p.cardVideo} autoPlay loop muted playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.04)" }} />
        )}
        {p.cardImg && (
          <img src={p.cardImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        )}
        {p.cardLattice && p.cardImg && (
          <div style={{ position: "absolute", left: "3%", bottom: "4%", width: "44%", height: "26%", overflow: "hidden", pointerEvents: "none" }}>
            <CarbonLattice />
          </div>
        )}

        {/* subtle warm highlight */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(120% 90% at 80% 20%, rgba(255,255,255,0.5), transparent 60%), radial-gradient(120% 80% at 15% 90%, rgba(14,14,12,0.05), transparent 60%)",
          pointerEvents: "none"
        }} />

        {/* hover veil */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(14,14,12,0.10)",
          opacity: hov ? 1 : 0,
          transition: "opacity .35s",
          pointerEvents: "none"
        }} />

        {/* collab logo  bottom right, sits above media but below pill */}
        {p.cardLogo && (
          <img src={p.cardLogo} alt={p.collab} style={{
            position: "absolute", bottom: 16, right: 16,
            height: 28, width: "auto",
            pointerEvents: "none"
          }} />
        )}

        {/* cursor-following pill */}
        <div style={{
          position: "absolute",
          left: pos.x + "%", top: pos.y + "%",
          transform: "translate(-50%, -50%) scale(" + (hov ? 1 : 0.7) + ")",
          opacity: hov ? 1 : 0,
          transition: "opacity .25s, transform .4s cubic-bezier(.2,.8,.2,1)",
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "12px 22px",
          borderRadius: 999,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 13, fontWeight: 400, letterSpacing: "-0.005em",
          display: "inline-flex", alignItems: "center", gap: 8,
          pointerEvents: "none", whiteSpace: "nowrap",
          willChange: "left, top, transform"
        }}>
          See project <span aria-hidden style={{ fontSize: 12 }}>→</span>
        </div>
      </div>

      {/* Title + subtitle */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
          <h3 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 19, letterSpacing: "-0.012em",
            color: "var(--ink)"
          }}>{p.title}</h3>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 11.5, color: "var(--muted)", letterSpacing: "0.02em",
            textTransform: "uppercase", whiteSpace: "nowrap"
          }}>{p.year}</span>
        </div>
        <p style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 13, lineHeight: 1.45, letterSpacing: "-0.005em",
          color: "var(--muted)",
          maxWidth: 380
        }}>{p.line}</p>
      </div>
    </a>);

}

// ────────────────────────────────────────────────────────────────────────────
// ROADMAP NODE  editorial catalog column: index number, photo + title, static
// height always. Detail/tags reveal in a floating overlay on hover/tap so the
// row itself never resizes — no scale/zoom on the photo either (that crops it).
// ────────────────────────────────────────────────────────────────────────────
function RoadmapNode({ s, onHover, index, total }) {
  const [hov, setHov] = useStateS(false);
  const [tapped, setTapped] = useStateS(false);
  const isMobile = useIsMobile();
  const active = isMobile ? tapped : hov;
  const hasReveal = !!(s.detail2 || (s.tags && s.tags.length > 0));
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";
  const pad2 = (n) => String(n).padStart(2, "0");
  const isLast = index === total;

  const indexLabel = (
    <span style={{
      display: "block",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: isMobile ? 10.5 : 11, letterSpacing: "0.1em",
      color: s.featured ? "var(--ink)" : "var(--muted)",
      fontWeight: s.featured ? 500 : 400
    }}>{pad2(index)}</span>
  );

  return (
    <div
      onMouseEnter={() => { if (!isMobile) { setHov(true); onHover && onHover("link"); } }}
      onMouseLeave={() => { if (!isMobile) { setHov(false); onHover && onHover("default"); } }}
      onClick={() => isMobile && hasReveal && setTapped((v) => !v)}
      style={{
        position: "relative",
        flex: isMobile ? "none" : "1 1 0",
        minWidth: 0,
        width: isMobile ? "100%" : undefined,
        borderRight: !isMobile && !isLast ? "1px solid var(--line-soft)" : "none",
        borderBottom: isMobile && !isLast ? "1px solid var(--line-soft)" : "none",
        cursor: (isMobile && hasReveal) || !isMobile ? "pointer" : "default",
        padding: isMobile ? "18px 20px" : "20px 20px 22px"
      }}
    >
      <div style={{
        display: "flex", flexDirection: isMobile ? "row" : "column",
        alignItems: isMobile ? "center" : "stretch",
        gap: isMobile ? 16 : 0
      }}>
        {!isMobile && <div style={{ marginBottom: 14 }}>{indexLabel}</div>}

        <div style={{
          width: isMobile ? 60 : "100%", flexShrink: 0,
          aspectRatio: "3 / 4", borderRadius: 3, overflow: "hidden",
          position: "relative"
        }}>
          {s.img ? (
            <div style={{ position: "absolute", inset: 0 }}>
              <img src={s.img + "-base.png"} alt={s.name} draggable={false} style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "contain", userSelect: "none"
              }} />
              <img src={s.img + "-accent.png"} alt="" draggable={false} style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "contain", userSelect: "none",
                opacity: active ? 1 : 0,
                filter: active ? s.glow : "none",
                transition: "opacity .45s ease, filter .45s ease"
              }} />
            </div>
          ) : (
            <div style={{ position: "absolute", inset: 0, background: CHECKER }} />
          )}
        </div>

        <div style={{ flex: isMobile ? "1 1 0" : "none", minWidth: 0 }}>
          {isMobile && <div style={{ marginBottom: 4 }}>{indexLabel}</div>}
          <p style={{
            margin: isMobile ? 0 : "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 500, fontSize: 13.5, lineHeight: 1.3, letterSpacing: "-0.005em",
            color: "var(--ink)"
          }}>{s.name}</p>
          {!hasReveal && s.detail && (
            <p style={{
              margin: "3px 0 0",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 10.5, lineHeight: 1.3, color: "var(--muted)"
            }}>{s.detail}</p>
          )}
        </div>
      </div>

      {/* floating overlay  reveals on hover/tap without ever resizing the row/column itself.
          Desktop: fixed generous width instead of stretching to the narrow column (which
          crammed long copy into a near-vertical sliver) — anchored left, except the last
          couple of nodes flip to a right anchor so it doesn't spill past the page edge. */}
      {hasReveal && (
        <div style={{
          position: "absolute", top: "100%",
          ...(isMobile
            ? { left: 0, right: 0 }
            : (index >= total - 1
                ? { right: 0, width: 300 }
                : { left: 0, width: 300 })),
          marginTop: 8,
          background: "var(--bg)",
          border: active ? "1px solid var(--line-soft)" : "1px solid transparent",
          borderRadius: 8,
          boxShadow: active ? "0 16px 40px -16px rgba(14,14,12,0.22)" : "none",
          padding: active ? "14px 16px" : "0 16px",
          maxHeight: active ? 320 : 0,
          opacity: active ? 1 : 0,
          overflow: "hidden",
          zIndex: active ? 20 : -1,
          pointerEvents: "none",
          transition: "max-height .4s cubic-bezier(.2,.8,.2,1), opacity .3s ease, padding .4s ease" + (active ? " .05s" : "")
        }}>
          {s.detail && (
            <p style={{
              margin: 0,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 10.5, lineHeight: 1.3, color: "var(--muted)"
            }}>{s.detail}</p>
          )}
          {s.detail2 && (
            <p style={{
              margin: s.detail ? "8px 0 0" : 0,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11.5, lineHeight: 1.5, letterSpacing: "-0.005em",
              color: "var(--ink-2)"
            }}>{s.detail2}</p>
          )}
          {s.tags && s.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
              {s.tags.map((tag) => (
                <span key={tag} style={{
                  padding: "3px 9px", borderRadius: 999,
                  border: "1px solid var(--line-soft)",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 9.5, color: "var(--muted)", letterSpacing: "-0.005em",
                  background: "var(--bg-soft)", whiteSpace: "nowrap"
                }}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// BEYOND WORK — single-card polaroid slider, auto-advances on a timer and
// also advances immediately on click (click resets the timer so it doesn't
// double-step). Sits as a sidebar next to the About-page hero text.
// ────────────────────────────────────────────────────────────────────────────
function BeyondWorkBoard() {
  const isMobile = useIsMobile();
  const [idx, setIdx] = useStateS(0);
  const timerRef = useRefS(null);

  const items = [
    { src: "assets/about/roulette/animal-lover.jpg", caption: "hanging out with animals" },
    { src: "assets/about/roulette/chinese-roots.jpg", caption: "connecting with my Chinese roots" },
    { src: "assets/about/roulette/drawing.jpg", caption: "drawing" },
    { src: "assets/about/roulette/art-and-design.jpg", caption: "engaging with art and design" },
    { src: "assets/about/roulette/new-technology.jpg", caption: "exploring up and coming technology" },
    { src: "assets/about/roulette/hackathon.jpg", caption: "at a hackathon" },
    { src: "assets/about/roulette/need-for-speed.mov", caption: "cruising", video: true },
    { src: "assets/about/roulette/tennis.jpg", caption: "playing tennis" },
    { src: "assets/about/roulette/violin.jpg", caption: "playing violin" }
  ];

  // deterministic per-card tilt — restrained, not chaotic
  const rotations = [-3, 2, -2.5, 3, -1.5, 2.5, -2, 1.5, -3];

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx((i) => (i + 1) % items.length), 4000);
  };

  useEffectS(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const advance = () => {
    setIdx((i) => (i + 1) % items.length);
    restartTimer();
  };

  const current = items[idx];

  return (
    <div style={{ width: "100%" }}>
      <p style={{
        margin: 0,
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontSize: 16, fontWeight: 400, letterSpacing: "-0.005em",
        color: "var(--ink)"
      }}>Outside of designing, you'll find me....</p>

      <button
        type="button"
        onClick={advance}
        aria-label="Next photo"
        style={{
          appearance: "none", border: "none", padding: 0, margin: 0,
          marginTop: 24,
          background: "transparent", cursor: "pointer", display: "block",
          width: isMobile ? 220 : 240,
          transform: `rotate(${rotations[idx % rotations.length]}deg)`,
          transition: "transform .5s cubic-bezier(.2,.8,.2,1)"
        }}
      >
        <div style={{
          background: "var(--card, #fff)",
          padding: "12px 12px 30px",
          boxShadow: "0 16px 36px -16px rgba(14,14,12,0.22)"
        }}>
          <div style={{ width: "100%", aspectRatio: "3 / 4", overflow: "hidden", position: "relative", background: "var(--bg-soft)" }}>
            {items.map((item, i) => (
              <div key={item.src} style={{
                position: "absolute", inset: 0,
                opacity: i === idx ? 1 : 0,
                transition: "opacity .6s cubic-bezier(.2,.8,.2,1)"
              }}>
                {item.video
                  ? <video src={item.src} autoPlay loop muted playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  : <img src={item.src} alt={item.caption}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                }
              </div>
            ))}
          </div>
          <p style={{
            margin: "10px 0 0", textAlign: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase",
            color: "var(--ink-2)"
          }}>{current.caption}</p>
        </div>
      </button>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ABOUT
// ────────────────────────────────────────────────────────────────────────────
function About({ onHover }) {
  const isMobile = useIsMobile();
  const isSmallMobile = useIsMobile(480);

  const SECTION_H = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 400, fontSize: "clamp(24px, 4vw, 30px)", letterSpacing: "-0.02em",
    color: "var(--ink)"
  };
  const MAJOR_GAP = isMobile ? 100 : 200;

  // scroll-reveal for each below-the-fold block — subtle fade + rise, no stagger noise
  const [philosophyRef, philosophyVisible] = useReveal(0.15);
  const [roadmapRef, roadmapVisible] = useReveal(0.1);
  const [connectRef, connectVisible] = useReveal(0.15);

  return (
    <section id="about" style={{
      padding: isMobile ? "clamp(64px, 16vw, 100px) clamp(20px, 6vw, 64px) 64px" : "140px 64px 100px",
      boxSizing: "border-box"
    }}>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 380px",
        gap: isMobile ? 48 : 64, alignItems: "start"
      }}>
        <div>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(28px, 5vw, 38px)", letterSpacing: "-0.02em",
            color: "var(--ink)"
          }}>
            Who is <em style={{ fontStyle: "italic", fontWeight: 400 }}>Lin Nora</em>?
          </h1>

          <p style={{
            margin: isMobile ? "40px 0 0" : "80px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 400, lineHeight: 1.5, letterSpacing: "-0.005em",
            color: "var(--ink)", maxWidth: 380,
            display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 6
          }}>
            <span>As a</span>
            <span style={{
              display: "inline-flex", alignItems: "baseline",
              minWidth: 160,
              borderBottom: "1px dotted var(--ink)", paddingBottom: 1
            }}>
              <Typewriter words={["designer", "teammate", "project leader", "dying optimist"]} />
            </span>
          </p>
        </div>

        {/* ─── BEYOND WORK (scattered polaroid board) ─────────────────── */}
        <BeyondWorkBoard />
      </div>

      {/* ─── DESIGN PHILOSOPHY ────────────────────────────────────────── */}
      <div ref={philosophyRef} style={{ marginTop: MAJOR_GAP, ...revealStyle(philosophyVisible) }}>
        <h2 style={{ ...SECTION_H, textAlign: "center" }}>My design philosophy<span style={{ color: "var(--muted)" }}>....</span></h2>

        <div style={{
          marginTop: isMobile ? 40 : 56,
          display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 48 : 100, alignItems: "center", maxWidth: 1000,
          marginLeft: "auto", marginRight: "auto"
        }}>
          {/* quote with small image */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <img src="assets/about/john-heskett.png" alt="John Heskett" style={{
              width: isMobile ? 150 : "clamp(180px, 14vw, 260px)",
              height: isMobile ? 150 : "clamp(180px, 14vw, 260px)",
              objectFit: "contain", display: "block"
            }} />
            <blockquote style={{
              margin: 0, textAlign: "center", maxWidth: 380,
              fontFamily: "Georgia, serif", fontStyle: "italic",
              fontSize: 15, lineHeight: 1.5, color: "var(--ink-2)"
            }}>
              "Design is the human capacity for shaping and making in ways that
              satisfy our utilitarian needs and create meaning."
              <span style={{
                display: "block", marginTop: 8,
                fontFamily: "'Hanken Grotesk', sans-serif", fontStyle: "normal",
                fontSize: 12, color: "var(--muted)"
              }}> John Heskett</span>
            </blockquote>
          </div>

          {/* statement of belief */}
          <div style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13.5, lineHeight: 1.6, letterSpacing: "-0.005em",
            color: "var(--ink-2)", maxWidth: 440
          }}>
            <p style={{ margin: 0 }}>
              I believe design is a powerful tool for positive change. My design philosophy
              centers on the belief that meaningful solutions emerge from deep empathy,
              collaborative processes, and strategic thinking. I'm passionate about creating
              experiences that not only solve problems but inspire positive behavior change.
            </p>
          </div>
        </div>
      </div>

      {/* ─── ROADMAP ──────────────────────────────────────────────────── */}
      <div ref={roadmapRef} style={{ marginTop: 200, ...revealStyle(roadmapVisible) }}>
        <h2 style={SECTION_H}>My roadmap<span style={{ color: "var(--muted)" }}>.</span></h2>

        {/* editorial catalog frame  bordered container with a kicker bar, columns divided
            by hairlines (no floating dot/line). Horizontal scroll on desktop, stacked rows on mobile. */}
        {(() => {
          const roadmapItems = [
              {
                name: "Telenor",
                detail: "Internship, AI for Software Engineering",
                detail2:
                  "Working inside an AI for Software Engineering team, designing agentic systems and LLM-powered internal tools. Learned prompt architecture, conversational flow design, and human-in-the-loop testing, and how to design for AI systems that behave unpredictably rather than static interfaces. This is where systems thinking and UX design actually merged into one skill.",
                tags: ["Agentic system design", "Prompt engineering", "System mapping", "UX strategy for AI tools"],
                img: "assets/about/roadmap/telenor",
                glow: "drop-shadow(0 0 8px rgba(13,171,228,0.65)) drop-shadow(0 0 20px rgba(13,171,228,0.35))"
              },
              {
                name: "CBS × KADK, Copenhagen",
                detail: "Strategic Design & Entrepreneurship",
                featured: true,
                detail2:
                  "Paired with business students and had to defend design decisions in business terms. Learned to translate a design choice into value, risk, or opportunity for a stakeholder who doesn't think in Figma. This is where I got sharper at making design legible to non-designers.",
                tags: ["Strategic design", "Client relations", "Process consulting"],
                img: "assets/about/roadmap/copenhagen",
                glow: "drop-shadow(0 0 6px rgba(255,190,120,0.45)) drop-shadow(0 0 16px rgba(255,190,120,0.2))"
              },
              {
                name: "Tongji, Shanghai",
                detail2:
                  "Studied design at scale in a completely different system, in Mandarin. Learned how design education, critique culture, and even what counts as \"good design\" shift across contexts. Came out with real fluency working cross-culturally, not just language but process and expectations too.",
                tags: ["Smart service system design", "Business design", "AI design", "System-oriented design", "Spatial awareness"],
                img: "assets/about/roadmap/tongji",
                glow: "drop-shadow(0 0 8px rgba(160,90,220,0.6)) drop-shadow(0 0 20px rgba(160,90,220,0.3))"
              },
              {
                name: "SAHO",
                detail2:
                  "Stepped in as interim chair when the student organization needed to be rebuilt from the ground up. Led its re-establishment as an independent entity, recruited and managed a full team, and drove a full rebrand alongside new structures to strengthen engagement long-term. Learned what it actually takes to lead when there's no existing playbook, and that design thinking applies just as well to organizations as it does to products.",
                tags: ["Leadership", "Communication and collaboration", "Meeting facilitation", "Organizational development", "Team coordination"],
                img: "assets/about/roadmap/saho",
                glow: "drop-shadow(0 0 8px rgba(215,205,10,0.65)) drop-shadow(0 0 20px rgba(215,205,10,0.35))"
              },
              {
                name: "AHO",
                detail2:
                  "Learned design as a way of thinking, not just making. Systems thinking, mapping relationships between users, context, and constraints, and how to spot the connection nobody else has noticed yet. This is where I built my process: research, synthesis, iteration, and learned to make invisible structures visible through design.",
                tags: ["User-centered design", "Service design", "UX design", "Interaction design", "UX research", "Wireframing", "Figma (teaching)", "Peer tutoring"],
                img: "assets/about/roadmap/aho",
                glow: "drop-shadow(0 0 10px rgba(255,106,0,0.65)) drop-shadow(0 0 22px rgba(255,106,0,0.35))"
              },
              {
                name: "Edvard Munch VGS",
                detail2:
                  "Grew up playing violin, music was my first language for expressing things. Took the music specialization expecting that to be the path, until elective courses in design and architecture showed me another way to shape ideas. Same instinct, new outlet.",
                img: "assets/about/roadmap/violin",
                glow: "drop-shadow(0 0 8px rgba(206,84,22,0.7)) drop-shadow(0 0 20px rgba(206,84,22,0.4))"
              }
          ];
          const KICKER = {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--muted)"
          };
          const pad2 = (n) => String(n).padStart(2, "0");

          return (
            <div style={{ marginTop: isMobile ? 40 : 64 }}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                marginBottom: isMobile ? 18 : 20
              }}>
                <span style={KICKER}>Timeline</span>
                <span style={KICKER}>{pad2(1) + " / " + pad2(roadmapItems.length)}</span>
              </div>

              <div style={{
                display: "flex", flexDirection: isMobile ? "column" : "row",
                borderTop: "1px solid var(--line-soft)"
              }}>
                {roadmapItems.map((s, i) => (
                  <RoadmapNode key={i} s={s} index={i + 1} total={roadmapItems.length} onHover={onHover} />
                ))}
              </div>
            </div>
          );
        })()}

        {/* paragraph below  extra clearance on desktop so the longest hover overlay (tags) never touches it */}
        <div style={{ marginTop: isMobile ? 48 : 240, maxWidth: 760 }}>
          <p style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em",
            color: "var(--ink)"
          }}>Designing Between People, Systems, and Technology</p>
          <p style={{
            margin: "4px 0 0",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>2019 Present</p>
          <p style={{
            margin: "18px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13.5, lineHeight: 1.6, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>
            I've always been drawn to detail, collaboration, and creative expression.
            Before design, that world was music  I played violin for most of my life.
            Over time, that same mindset naturally shifted into design: understanding rhythm,
            structure, emotion, and how people experience something together. What started as
            curiosity in high school slowly became a clear direction  and since then, I've been
            exploring how design can create meaningful value between humans, technology, and society.
          </p>
        </div>
      </div>

      {/* ─── MY SHAPE (I/T/Pi) ──────────────────────────────────────────── */}
      <div style={{ marginTop: MAJOR_GAP }}>
        <SkillShape onHover={onHover} />
      </div>

      {/* ─── MY TOOLBOX ─────────────────────────────────────────────────
          extra clearance vs. the usual MAJOR_GAP: the "?" info panel above
          floats without pushing layout, so this section needs enough headroom
          that its open state never visually overlaps this heading. */}
      <div style={{ marginTop: isMobile ? 440 : 240 }}>
        <Toolbox onHover={onHover} />
      </div>

      {/* ─── LET'S CONNECT ────────────────────────────────────────────── */}
      <div ref={connectRef} style={{ marginTop: MAJOR_GAP, ...revealStyle(connectVisible) }}>
        <h2 style={SECTION_H}>Let´s connect<span style={{ color: "var(--muted)" }}>.</span></h2>

        <div style={{
          marginTop: isMobile ? 32 : 56,
          display: "grid", gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(2, 1fr)",
          gap: isMobile ? 16 : 24, maxWidth: 660
        }}>
          {[
            { label: "Email", caption: "linnoratollefsen@gmail.com", href: "mailto:linnoratollefsen@gmail.com", icon: "mail" },
            { label: "LinkedIn", caption: "/in/linnoratollefsen", href: "https://www.linkedin.com/in/linnoratollefsen", icon: "linkedin" },
          ].map((c, i) => (
            <ConnectTile key={i} c={c} index={i} onHover={onHover} />
          ))}
        </div>
      </div>
    </section>);

}

// ────────────────────────────────────────────────────────────────────────────
// SKILL CIRCLE  I/T/Pi shape-of-skill cluster — custom illustration (default,
// crossfading to a hover variant) sitting directly on the page background
// (no bubble), with the shape's tags wrapped below as pills. The illustration
// itself carries the shape's name, so no separate label is rendered here.
// ────────────────────────────────────────────────────────────────────────────
// CONNECT TILE — Email/LinkedIn card with a hand-drawn dotted icon that
// animates on hover: the envelope opens, the LinkedIn mark switches from ink
// to a glowing gradient. Base/accent-crossfade convention, same as
// RoadmapNode and SkillCircle above.
// ────────────────────────────────────────────────────────────────────────────
function ConnectTile({ c, index, onHover }) {
  const [hov, setHov] = useStateS(false);
  const maskProps = {
    WebkitMaskImage: "url(assets/about/icons/linkedin/stipple-mask.png)",
    maskImage: "url(assets/about/icons/linkedin/stipple-mask.png)",
    WebkitMaskSize: "contain", maskSize: "contain",
    WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
    WebkitMaskPosition: "center", maskPosition: "center"
  };

  return (
    <a href={c.href} target="_blank" rel="noopener noreferrer"
    onMouseEnter={() => { setHov(true); onHover && onHover("link"); }}
    onMouseLeave={() => { setHov(false); onHover && onHover("default"); }}
    style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: 18, textDecoration: "none", color: "var(--ink)"
    }}>
      <div style={{ width: "clamp(140px, 18vw, 220px)", aspectRatio: "1 / 1", position: "relative" }}>
        {c.icon === "mail" && (
          <>
            <img src="assets/about/icons/mail/closed.png" alt="" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain",
              opacity: hov ? 0 : 1, transition: "opacity .5s ease"
            }} />
            <img src="assets/about/icons/mail/open.png" alt="" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain",
              opacity: hov ? 1 : 0, transition: "opacity .5s ease"
            }} />
          </>
        )}
        {c.icon === "linkedin" && (
          <>
            <div style={{
              position: "absolute", inset: 0, background: "var(--ink)",
              opacity: hov ? 0 : 1, transition: "opacity .5s ease", ...maskProps
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, #38bdf8, #22d3ee, #6366f1)",
              opacity: hov ? 1 : 0, transition: "opacity .5s ease",
              filter: hov
                ? "drop-shadow(0 0 2px #22d3ee) drop-shadow(0 0 8px #38bdf8) drop-shadow(0 0 16px #6366f1)"
                : "none",
              ...maskProps
            }} />
          </>
        )}
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 16, fontWeight: 400, letterSpacing: "-0.01em",
          color: "var(--ink)"
        }}>{c.label}</p>
        <p style={{
          margin: "4px 0 0",
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 12, color: "var(--muted)", letterSpacing: "-0.005em"
        }}>{c.caption}</p>
      </div>
    </a>
  );
}

// ────────────────────────────────────────────────────────────────────────────
function SkillCircle({ group, label, items, onHover }) {
  const [hov, setHov] = useStateS(false);
  const isMobile = useIsMobile();
  const size = isMobile ? 168 : "clamp(180px, 20vw, 400px)";

  return (
    <div
      onMouseEnter={() => { setHov(true); onHover && onHover("link"); }}
      onMouseLeave={() => { setHov(false); onHover && onHover("default"); }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
    >
      <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
        <img src={`assets/toolkit/itpi/${group}-default.svg?v=2`} alt={label} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain",
          opacity: hov ? 0 : 1, transition: "opacity .35s ease"
        }} />
        <img src={`assets/toolkit/itpi/${group}-hover.svg?v=2`} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain",
          opacity: hov ? 1 : 0, transition: "opacity .35s ease"
        }} />
      </div>

      <div style={{
        marginTop: isMobile ? 20 : "clamp(20px, 1.6vw, 30px)", display: "flex", flexWrap: "wrap",
        gap: isMobile ? 8 : "clamp(8px, 0.6vw, 12px)",
        justifyContent: "center", maxWidth: isMobile ? 280 : "clamp(240px, 21vw, 300px)"
      }}>
        {items.map((it) => (
          <span key={it} style={{
            padding: isMobile ? "6px 12px" : "clamp(6px, 0.5vw, 9px) clamp(12px, 1vw, 17px)",
            borderRadius: 999,
            border: "1px solid var(--line-soft)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: isMobile ? 11.5 : "clamp(11.5px, 0.9vw, 14px)", color: "var(--ink-2)", letterSpacing: "-0.005em",
            background: "var(--bg)"
          }}>{it}</span>
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TOOLKIT HOVER BOX  interactive toolkit illustration — hover to open the box
// ────────────────────────────────────────────────────────────────────────────
function ToolkitHoverBox() {
  const [hov, setHov] = useStateS(false);

  const icons = [
    { src: "assets/toolkit/icons/figma.png", alt: "Figma", tx: -31, ty: -43, rot: -11, w: 15, delay: 0 },
    { src: "assets/toolkit/icons/miro.svg", alt: "Miro", tx: 17, ty: -49, rot: 9, w: 15, delay: 0.05 },
    { src: "assets/toolkit/icons/notion.png", alt: "Notion", tx: -3, ty: -53, rot: -5, w: 15, delay: 0.1 },
    { src: "assets/toolkit/icons/claude.png", alt: "Claude", tx: 14, ty: -25, rot: 6, w: 13, delay: 0.03 },
    { src: "assets/toolkit/icons/illustrator.png", alt: "Illustrator", tx: 39, ty: -19, rot: -13, w: 11, delay: 0.08 },
    { src: "assets/toolkit/icons/cursor.png", alt: "Cursor", tx: -26, ty: -24, rot: -19, w: 10, delay: 0.13 },
    { src: "assets/toolkit/icons/excel.svg", alt: "Excel", tx: 33, ty: -35, rot: 12, w: 10, delay: 0.16 },
    { src: "assets/toolkit/icons/github.svg", alt: "GitHub", tx: -42, ty: -18, rot: 15, w: 10, delay: 0.2 },
    { src: "assets/toolkit/icons/lovable.png", alt: "Lovable", tx: -9, ty: -30, rot: -17, w: 10, delay: 0.23 }
  ];

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onFocus={() => setHov(true)}
      onBlur={() => setHov(false)}
      tabIndex={0}
      aria-label="Lin Nora's toolkit, hover to open"
      style={{
        position: "relative",
        width: "100%", maxWidth: "clamp(360px, 34vw, 760px)", margin: "0 auto",
        aspectRatio: "928 / 640",
        containerType: "inline-size",
        cursor: "pointer", outline: "none"
      }}
    >
      <img src="assets/toolkit/box-closed.png" alt="Closed toolbox" style={{
        position: "absolute", left: "50%", bottom: 0, width: "100%", height: "auto",
        transform: hov ? "translateX(-50%) translateY(-6px) scale(0.97)" : "translateX(-50%) translateY(0) scale(1)",
        opacity: hov ? 0 : 1,
        transition: hov ? "opacity .35s ease, transform .35s ease" : "opacity .35s ease .05s, transform .35s ease .05s",
        userSelect: "none"
      }} />
      <img src="assets/toolkit/box-open.png" alt="Open toolbox" style={{
        position: "absolute", left: "50%", bottom: 0, width: "100%", height: "auto",
        transform: hov ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(8px) scale(0.97)",
        opacity: hov ? 1 : 0,
        transition: hov ? "opacity .35s ease .05s, transform .35s ease .05s" : "opacity .35s ease, transform .35s ease",
        userSelect: "none"
      }} />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <span style={{
          position: "absolute",
          left: "75.4%", top: hov ? "76.4%" : "74.6%", width: hov ? "14%" : "13.4%",
          fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, color: "#2d2d2d",
          textAlign: "center", whiteSpace: "nowrap",
          fontSize: hov ? "1.85cqw" : "1.65cqw",
          transition: "top .35s ease, font-size .35s ease"
        }}>Lin Nora´s toolkit</span>
        <span style={{
          position: "absolute",
          left: "77.65%", top: hov ? "80.6%" : "78.9%", width: hov ? "9.5%" : "9%",
          fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, color: "#2d2d2d",
          textAlign: "center", whiteSpace: "nowrap",
          fontSize: hov ? "1.85cqw" : "1.65cqw",
          transition: "top .35s ease, font-size .35s ease"
        }}>Oslo, Norway</span>
      </div>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {icons.map((ic) => (
          <img key={ic.alt} src={ic.src} alt={ic.alt} style={{
            position: "absolute", left: "50%", top: "32%",
            width: ic.w + "cqw", height: "auto",
            transform: hov
              ? `translate(-50%, -50%) translate(${ic.tx}cqw, ${ic.ty}cqw) rotate(${ic.rot}deg) scale(1)`
              : "translate(-50%, -50%) scale(0.15) rotate(0deg)",
            opacity: hov ? 1 : 0,
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.15))",
            transition: hov
              ? `transform .65s cubic-bezier(.34,1.56,.64,1) ${ic.delay}s, opacity .4s ease ${ic.delay}s`
              : "transform .35s ease, opacity .3s ease",
            userSelect: "none"
          }} />
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ITP INFO BOX  a small "?" button that sits beside the I/T/Pi shapes. Hovering
// (desktop) or tapping (mobile) reveals a compact floating panel with the
// Dorothy/Tim portraits and the explanation — doesn't push any layout around it.
// ────────────────────────────────────────────────────────────────────────────
function ITPInfoBox({ isMobile, onHover }) {
  const [hov, setHov] = useStateS(false);
  const [tapped, setTapped] = useStateS(false);
  const active = isMobile ? tapped : hov;

  return (
    <div
      onMouseEnter={() => { if (!isMobile) { setHov(true); onHover && onHover("link"); } }}
      onMouseLeave={() => { if (!isMobile) { setHov(false); onHover && onHover("default"); } }}
      style={{
        position: "relative", alignSelf: "center",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8
      }}
    >
      <button
        onClick={() => isMobile && setTapped((v) => !v)}
        aria-label="What is I, T, Pi?"
        aria-expanded={active}
        style={{
          width: isMobile ? 42 : "clamp(42px, 3vw, 54px)", height: isMobile ? 42 : "clamp(42px, 3vw, 54px)",
          borderRadius: "50%",
          border: "1.5px solid var(--ink)",
          background: active ? "var(--ink)" : "transparent",
          color: active ? "var(--bg)" : "var(--ink)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500,
          fontSize: isMobile ? 17 : "clamp(17px, 1.2vw, 21px)", lineHeight: 1,
          cursor: "pointer", padding: 0,
          transition: "background .3s ease, color .3s ease"
        }}
      >?</button>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: isMobile ? 10 : "clamp(10px, 0.75vw, 12px)", letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--muted)", whiteSpace: "nowrap"
      }}>What is I, T, Pi?</span>

      {/* floating panel — absolutely positioned, never resizes the row it sits in.
          Centered under the button on mobile (avoids clipping off the narrow viewport),
          right-anchored on desktop. maxWidth is a viewport-relative safety net so it can
          never run past the edge of the screen regardless of where the button lands.
          Editorial layout: kicker + bold statement, then a hairline-divided definition
          list (mirrors a services/index list) rather than a dense paragraph block. */}
      <div style={{
        position: "absolute", top: "100%", marginTop: 14,
        right: isMobile ? "auto" : 0,
        left: isMobile ? "50%" : "auto",
        transform: isMobile ? "translateX(-50%)" : "none",
        width: isMobile ? 280 : 340,
        maxWidth: "calc(100vw - 48px)",
        background: "var(--bg)",
        border: active ? "1px solid var(--line-soft)" : "1px solid transparent",
        borderRadius: 18,
        boxShadow: active ? "0 20px 48px -18px rgba(14,14,12,0.25)" : "none",
        padding: active ? "24px 24px" : "0 24px",
        maxHeight: active ? 340 : 0,
        opacity: active ? 1 : 0,
        overflow: "hidden",
        zIndex: active ? 30 : -1,
        transition: "max-height .45s cubic-bezier(.2,.8,.2,1), opacity .35s ease, padding .45s ease" + (active ? " .05s" : "")
      }}>
        {/* inner content scrolls if it's ever taller than the panel's own cap — keeps the
            panel's footprint predictable (and never overlapping the section below) no
            matter how the text reflows at a given width. */}
        <div style={{ maxHeight: 292, overflowY: "auto" }}>
          <span style={{
            display: "block",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>The theory</span>

          <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "16px 0 18px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <img src="assets/toolkit/people/dorothy.png" alt="Dorothy Leonard-Barton" style={{
                width: 56, height: 56, objectFit: "cover"
              }} />
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10.5, lineHeight: 1.3,
                color: "var(--muted)", textAlign: "center", maxWidth: 90
              }}>Dorothy<br />Leonard-Barton</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <img src="assets/toolkit/people/tim.png" alt="Tim Brown" style={{
                width: 56, height: 56, objectFit: "cover"
              }} />
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10.5, lineHeight: 1.3,
                color: "var(--muted)", textAlign: "center", maxWidth: 90
              }}>Tim Brown</span>
            </div>
          </div>

          <p style={{
            margin: 0, paddingBottom: 12,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12.5, lineHeight: 1.6, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>
            It's a theory about how deep versus how wide your skills go. I-shaped means going deep in one thing. T-shaped adds breadth, one specialism plus enough range to work well with others. Pi-shaped pushes it further still, two deep specialisms connected by broad collaborative range.
          </p>
          <p style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12.5, lineHeight: 1.6, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>
            The idea comes from Dorothy Leonard-Barton (<em style={{ fontStyle: "italic" }}>Wellsprings of Knowledge</em>, 1995), later popularized in design by Tim Brown at IDEO. Here's how I've applied it to myself, to give you a bit of insight into what kind of designer I am!
          </p>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TOOLKIT  "My toolbox" — intro, interactive illustration, programs list
// ────────────────────────────────────────────────────────────────────────────
function Toolbox({ onHover }) {
  const isMobile = useIsMobile();
  const tools = SKILLS.find((g) => g.group === "tools");
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="toolbox" ref={ref} style={revealStyle(visible)}>
      <div style={{ maxWidth: 720 }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 400, fontSize: "clamp(24px, 4vw, 30px)",
          letterSpacing: "-0.02em",
          color: "var(--ink)"
        }}>My toolbox<span style={{ color: "var(--muted)" }}>.</span></h2>
        <p style={{
          margin: "14px 0 0",
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: "clamp(13px, 1.1vw, 16px)", lineHeight: 1.45, letterSpacing: "-0.005em",
          color: "var(--ink)"
        }}>
          My role is identifying what needs to be created, these are the tools I use to build it
        </p>
      </div>

      {/* Interactive toolkit illustration, no box, sits directly on the page */}
      <div style={{ margin: isMobile ? "56px auto 0" : "100px auto 0", maxWidth: 1400, display: "flex", justifyContent: "center" }}>
        <ToolkitHoverBox />
      </div>

      {/* Programs — simple list, not part of the I/T/Pi model */}
      {tools && (
        <div style={{
          marginTop: isMobile ? 48 : 72,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "100px 1fr",
          gap: isMobile ? 10 : "clamp(24px, 2vw, 36px)", alignItems: "start",
          maxWidth: isMobile ? 1000 : "clamp(700px, 50vw, 1200px)", marginLeft: "auto", marginRight: "auto"
        }}>
          <div style={{ paddingTop: 6 }}>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: isMobile ? 13 : "clamp(13px, 1vw, 16px)", fontWeight: 400, letterSpacing: "-0.005em",
              color: "var(--muted)", display: "block", lineHeight: 1
            }}>{tools.group}</span>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: isMobile ? 11 : "clamp(11px, 0.85vw, 13px)", color: "var(--muted)", letterSpacing: "0.05em",
              textTransform: "uppercase", display: "block", marginTop: 4
            }}>{tools.label}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 8 : "clamp(8px, 0.7vw, 12px)" }}>
            {tools.items.map((it) => (
              <span key={it} style={{
                padding: isMobile ? "7px 14px" : "clamp(7px, 0.6vw, 10px) clamp(14px, 1.1vw, 19px)",
                borderRadius: 999,
                border: "1px solid var(--line-soft)",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: isMobile ? 12 : "clamp(12px, 0.95vw, 15px)", color: "var(--ink-2)", letterSpacing: "-0.005em",
                background: "var(--bg)"
              }}>{it}</span>
            ))}
          </div>
        </div>
      )}
    </section>);

}

// ────────────────────────────────────────────────────────────────────────────
// SKILL SHAPE  "My shape" — I/T/Pi depth-vs-range model, its own section
// ────────────────────────────────────────────────────────────────────────────
function SkillShape({ onHover }) {
  const isMobile = useIsMobile();
  const shapes = SKILLS.filter((g) => g.group !== "tools");
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="shape" ref={ref} style={revealStyle(visible)}>
      <div style={{ maxWidth: 720 }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 400, fontSize: "clamp(24px, 4vw, 30px)",
          letterSpacing: "-0.02em",
          color: "var(--ink)"
        }}>My shape<span style={{ color: "var(--muted)" }}>.</span></h2>
        <p style={{
          margin: "14px 0 0",
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: "clamp(13px, 1.1vw, 16px)", lineHeight: 1.45, letterSpacing: "-0.005em",
          color: "var(--ink)"
        }}>
          A quick look at how I balance depth and range across my skills
        </p>
      </div>

      {/* Skill shape clusters — I / T / Pi side by side, question button rides along to the right.
          flexWrap is the safety net: at in-between (tablet) widths three fluid-sized circles plus
          the button can outgrow the viewport before their own floor kicks in — wrapping instead of
          overflowing keeps the row from ever clipping off the edge of the page. */}
      <div style={{
        marginTop: isMobile ? 56 : 96,
        display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap",
        justifyContent: "center", alignItems: isMobile ? "center" : "flex-start",
        gap: isMobile ? 48 : "clamp(28px, 3.2vw, 56px)",
        maxWidth: 1400, marginLeft: "auto", marginRight: "auto"
      }}>
        {shapes.map((g) => (
          <SkillCircle key={g.group} group={g.group} label={g.label} items={g.items} onHover={onHover} />
        ))}
        <ITPInfoBox isMobile={isMobile} onHover={onHover} />
      </div>
    </section>);

}

// ────────────────────────────────────────────────────────────────────────────
// FOOTER / CONNECT
// ────────────────────────────────────────────────────────────────────────────
function Footer({ onHover }) {
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="contact" ref={ref} style={{
      padding: "140px 64px 60px", height: "100%", boxSizing: "border-box",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      ...revealStyle(visible)
    }}>
      <div>
        <h2 style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 400, fontSize: "clamp(32px, 6vw, 44px)",
          lineHeight: 1.02, letterSpacing: "-0.025em"
        }}>
          Connect<span style={{ color: "var(--muted)" }}>.</span>
        </h2>

        <div style={{
          marginTop: 56,
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24, maxWidth: 660
        }}>
          {[
            { label: "Email", caption: "linnoratollefsen@gmail.com", href: "mailto:linnoratollefsen@gmail.com", icon: "mail" },
            { label: "LinkedIn", caption: "/in/linnoratollefsen", href: "https://www.linkedin.com/in/linnoratollefsen", icon: "linkedin" },
          ].map((c, i) => (
            <ConnectTile key={i} c={c} index={i} onHover={onHover} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 80, display: "flex", justifyContent: "flex-end" }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--muted)"
        }}>© 2026 Lin Nora · Oslo</span>
      </div>
    </section>);

}

Object.assign(window, { Nav, Hero, Projects, About, Toolbox, Footer });