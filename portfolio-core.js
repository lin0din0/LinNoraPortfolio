function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// portfolio.jsx — main app for Lin Nora's UX portfolio
const {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useLayoutEffect
} = React;

// ────────────────────────────────────────────────────────────────────────────
// DATA
// ────────────────────────────────────────────────────────────────────────────
const ROTATOR_WORDS = ["Interaction", "Strategic", "Product", "Innovative", "Human-Centered", "AI", "System-Oriented", "Multidisciplinary"];
const SECTIONS = [{
  id: "ux",
  label: "UX Design",
  projects: [{
    num: "01",
    title: "Atlas",
    line: "An AI agent that automates repetitive fault-ticket decisions inside Telenor's broadband support workflow.",
    collab: "Telenor",
    year: "2026",
    tags: ["AI/LLM Evaluation", "Decision Logic Design", "Applied AI"],
    href: "atlas.html",
    cardVideo: "assets/atlas/project-card-video.mov"
  }, {
    num: "02",
    title: "Volunteering, my way",
    line: "Redefining how young people connect with volunteering.",
    collab: "Red Cross",
    year: "2024",
    tags: ["Interaction and Service Design"],
    href: "volunteering.html",
    cardVideo: "assets/volunteering/project-card-video.mov"
  }, {
    num: "03",
    title: "Mixed Signals",
    line: "How the lack of information integrity influences the Armenian people and their democratic process.",
    collab: "UNDP",
    year: "2025",
    tags: ["Systems Oriented Design"],
    href: "armenia.html",
    cardImg: "assets/armenia/slides/mixed-signals.svg"
  }, {
    num: "04",
    title: "Everyday Innovation",
    line: "Helping a public hospital find the innovation that was already happening, and the language to see it.",
    collab: "Rigshospitalet",
    year: "2026",
    tags: ["Process Consultancy", "UX Strategy"],
    href: "everyday-innovation.html",
    cardVideo: "assets/everyday-innovation/project-card-video.mov"
  }, {
    num: "05",
    title: "More Than a Trip",
    line: "Exploring how to motivate eco-conscious travel through personal incentives.",
    collab: "Entur",
    year: "2024",
    tags: ["Service Design", "UX Design"],
    href: "project.html",
    cardVideo: "assets/project/project-card-video.mov"
  }, {
    num: "06",
    title: "Tøyen Takt",
    line: "Turning a building without an identity into a neighbourhood's reason to come back.",
    collab: "AHO",
    year: "2023",
    tags: ["Service Design", "UX Design"],
    href: "toyen-takt.html",
    cardVideo: "assets/toyen-takt/project-card-video.mov"
  }, {
    num: "07",
    title: "EVA: Emotional Vehicle Assistant",
    line: "Designing AI for human-centered mobility.",
    collab: "HUF",
    year: "2025",
    tags: ["Interaction Design", "AI Design"],
    href: "eva.html",
    cardVideo: "assets/eva/project-card-video.mov",
    cardLogo: "assets/eva/huf-logo-card.svg"
  }, {
    num: "08",
    title: "Worth it?",
    line: "Data as a design material for digital services.",
    collab: "Æra",
    year: "2023",
    tags: ["UI Design", "Design Systems"],
    href: "worth-it.html",
    cardVideo: "assets/worth-it/project-card-video.mov"
  }]
}, {
  id: "hacks",
  label: "Hackathons",
  projects: [{
    num: "01",
    title: "Stackt",
    line: "A gamified financial literacy app that teaches 17–21 year olds how to think about money, not just what to know about it.",
    collab: "Work in Fintech",
    year: "2026",
    tags: ["Product Design", "UX Design", "FinTech"],
    href: "stackt.html",
    cardVideo: "assets/stackt/project-card.mov"
  }, {
    num: "02",
    title: "Togather",
    line: "Relationship-first calendar.",
    collab: "Royal Hacks",
    year: "2026",
    tags: ["UX Design", "Product Design"],
    href: "togather.html",
    cardVideo: "assets/togather/project-card-video.mov"
  }, {
    num: "03",
    title: "Carbon",
    line: "A regulator-supervised on-chain exchange for EU compliance carbon credits.",
    collab: "ETH Prague",
    year: "2026",
    tags: ["UX Design", "Web3"],
    href: "carbon-dex.html",
    cardImg: "assets/carbon-dex/card.svg",
    cardLattice: true
  }, {
    num: "04",
    title: "Ankr",
    line: "An AI mentor app that helps Danish gymnasium students figure out what to study, and stay on track once they do.",
    collab: "TechLabs Copenhagen",
    year: "2026",
    tags: ["UX/UI Design", "Product Design", "Ed-tech"],
    href: "ankr.html",
    cardVideo: "assets/ankr/project-card-video.mov"
  }, {
    num: "05",
    title: "Teddy",
    line: "Step-by-step travel companion helping neurodivergent travelers navigate overwhelming journeys.",
    collab: "Disability Tech",
    year: "2026",
    tags: ["UX Design", "Inclusive Design"],
    href: "teddy.html",
    cardImg: "assets/teddy/project-card.svg",
    cardImgZoom: 1.3
  }, {
    num: "06",
    title: "Local",
    line: "Helping global marketing teams adapt campaigns across markets: AI that supports rather than replaces.",
    collab: "CBS AI Academy",
    year: "2026",
    tags: ["AI Product Design", "UX Design"],
    href: "local.html",
    cardVideo: "assets/local/project-card-video.mov"
  }]
}];
const SKILLS = [{
  group: "i",
  label: "I-shaped",
  items: ["UX Research (qual + quant)", "Interaction Design", "Design Systems", "Information Architecture", "Digital Prototyping (Figma)", "WCAG / Accessibility", "Drawing"]
}, {
  group: "t",
  label: "T-shaped",
  items: ["Design Thinking", "Co-creation", "Workshop Facilitation", "Interdisciplinary Collaboration", "Teaching Design", "Project Management"]
}, {
  group: "pi",
  label: "Pi-shaped",
  items: ["Agentic & AI System Design", "System-Oriented / Service Design", "Future Scenario Building", "Product-Service System Design", "Strategic Storytelling"]
}, {
  group: "tools",
  label: "Programs",
  items: ["Figma", "Adobe", "Miro", "Notion", "Excel", "Cursor", "Claude Code", "Lovable"]
}];

// ────────────────────────────────────────────────────────────────────────────
// CUSTOM CURSOR — follower + magnetic + project-hover "See project" pill
// ────────────────────────────────────────────────────────────────────────────
function Cursor({
  mode,
  label
}) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({
    x: -100,
    y: -100
  });
  const ring = useRef({
    x: -100,
    y: -100
  });
  useEffect(() => {
    const onMove = e => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    let raf;
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  const isProject = mode === "project";
  const isLink = mode === "link";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: ringRef,
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9998,
      width: isProject ? 132 : isLink ? 56 : 36,
      height: isProject ? 44 : isLink ? 56 : 36,
      marginLeft: isProject ? -66 : isLink ? -28 : -18,
      marginTop: isProject ? -22 : isLink ? -28 : -18,
      borderRadius: isProject ? 999 : "50%",
      border: isProject ? "none" : "1px solid var(--ink)",
      background: isProject ? "var(--ink)" : "transparent",
      color: "var(--bg)",
      pointerEvents: "none",
      transition: "width .25s cubic-bezier(.2,.8,.2,1), height .25s cubic-bezier(.2,.8,.2,1), border-radius .25s, background .25s, margin .25s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: ".02em",
      mixBlendMode: isProject ? "normal" : "difference",
      willChange: "transform"
    }
  }, isProject && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, label || "See project", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: "translateY(-1px)"
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: dotRef,
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
      width: 5,
      height: 5,
      marginLeft: -2.5,
      marginTop: -2.5,
      borderRadius: "50%",
      background: "var(--ink)",
      pointerEvents: "none",
      mixBlendMode: "difference",
      opacity: isProject ? 0 : 1,
      transition: "opacity .2s",
      willChange: "transform"
    }
  }));
}

// ────────────────────────────────────────────────────────────────────────────
// MAGNETIC button — subtle pull toward cursor
// ────────────────────────────────────────────────────────────────────────────
function Magnetic({
  children,
  strength = 0.35,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const leave = () => {
      el.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: className,
    style: {
      display: "inline-block",
      transition: "transform .25s cubic-bezier(.2,.8,.2,1)",
      ...style
    }
  }, rest), children);
}

// ────────────────────────────────────────────────────────────────────────────
// TYPEWRITER ROTATOR
// ────────────────────────────────────────────────────────────────────────────
function Typewriter({
  words
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | hold | deleting

  useEffect(() => {
    const word = words[idx];
    let t;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 70 + Math.random() * 40);
      } else {
        t = setTimeout(() => setPhase("hold"), 1400);
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), 35);
      } else {
        setPhase("typing");
        setIdx(i => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, words]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, text), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 3,
      height: "0.85em",
      background: "var(--ink)",
      marginLeft: 4,
      transform: "translateY(2px)",
      animation: "blink 1s steps(2) infinite"
    }
  }));
}

// ────────────────────────────────────────────────────────────────────────────
// RESPONSIVE HELPERS
// ────────────────────────────────────────────────────────────────────────────

// true once viewport width is at or below the breakpoint  used to switch
// hover-only interactions to tap-driven ones and to disable the custom cursor
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= breakpoint);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

// scroll-reveal  fade + rise once, the first time an element enters the viewport
const REVEAL_TRANSITION = "opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1)";
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.unobserve(el);
      }
    }, {
      threshold
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}
function revealStyle(visible, delayMs = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: REVEAL_TRANSITION,
    transitionDelay: delayMs ? `${delayMs}ms` : undefined
  };
}

// keyframes injected once
const KEYFRAMES = `
  @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes cardEnter {
    from { transform: scale(0.88) translateY(20px); opacity: 0; }
    to   { transform: scale(1)    translateY(0px);  opacity: 1; }
  }
  /* .rise intentionally a no-op in canvas mode — animations stutter inside the
     pan/zoom transform context */
  .rise { opacity: 1; }
  .dots-bg {
    background-image: radial-gradient(circle, var(--dashed) 1px, transparent 1px);
    background-size: 14px 14px;
  }
  .process-step + .process-step {
    border-top: 1px solid var(--line-soft);
    padding-top: 40px;
    margin-top: 8px;
  }
`;

// ────────────────────────────────────────────────────────────────────────────
// MEDIA STACK — shared across all project pages
// Every image/video for a step is laid out full-width in a vertical sequence,
// at its own natural aspect ratio, so the whole step is visible by scrolling
// rather than clicking through a carousel. Small numbered captions, editorial
// magazine style.
// ────────────────────────────────────────────────────────────────────────────
function MediaStack({
  items,
  featured
}) {
  const isMobile = useIsMobile();
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";
  if (!items || items.length === 0) return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "3/2",
      background: CHECKER,
      borderRadius: 18
    }
  });

  // opt-in layout for exactly 3 items: first image runs full-width on top,
  // the other two sit side by side underneath
  if (!isMobile && featured && items.length === 3) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minHeight: 480,
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(StackItem, {
      src: items[0],
      index: 0,
      total: items.length
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StackItem, {
      src: items[1],
      index: 1,
      total: items.length
    }), /*#__PURE__*/React.createElement(StackItem, {
      src: items[2],
      index: 2,
      total: items.length
    })));
  }

  // a lone image next to a long paragraph used to leave dead space below it —
  // reserve room and center it instead, still at its own natural ratio
  if (!isMobile && items.length === 1) {
    return /*#__PURE__*/React.createElement(StackItem, {
      src: items[0],
      index: 0,
      total: 1,
      style: {
        minHeight: 480,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    });
  }

  // exactly two items: stacked instead of side-by-side, so each image stays
  // legible (e.g. diagrams with fine print) — slightly narrower than full
  // width so they don't dominate the row
  if (!isMobile && items.length === 2) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 24,
        width: "88%"
      }
    }, items.map((src, i) => /*#__PURE__*/React.createElement(StackItem, {
      key: src,
      src: src,
      index: i,
      total: items.length
    })));
  }

  // three or more items: bound the stack to a 2-col grid on desktop so a step
  // with many assets doesn't tower over its neighbors (odd count spans the
  // last item). Same dead-space fix as the single-item case: reserve room and
  // center the grid vertically when it's shorter than the text column beside it.
  if (!isMobile && items.length > 2) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        minHeight: 480,
        alignContent: "center"
      }
    }, items.map((src, i) => {
      const isLastOdd = items.length % 2 === 1 && i === items.length - 1;
      return /*#__PURE__*/React.createElement(StackItem, {
        key: src,
        src: src,
        index: i,
        total: items.length,
        style: isLastOdd ? {
          gridColumn: "1 / -1"
        } : undefined
      });
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 36
    }
  }, items.map((src, i) => /*#__PURE__*/React.createElement(StackItem, {
    key: src,
    src: src,
    index: i,
    total: items.length
  })));
}

// one image/video within a MediaStack  fades + rises in on its own as it
// scrolls into view, giving the stack a light staggered feel
function StackItem({
  src,
  index,
  total,
  style
}) {
  const [ref, visible] = useReveal(0.1);
  const isVideo = /\.(mov|mp4|webm)$/i.test(src);
  const pad2 = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      ...revealStyle(visible),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 6px 24px rgba(0,0,0,0.09)"
    }
  }, isVideo ? /*#__PURE__*/React.createElement("video", {
    src: src,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })), total > 1 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10.5,
      letterSpacing: "0.1em",
      color: "var(--muted)"
    }
  }, "(", pad2(index + 1), " / ", pad2(total), ")"));
}

// ────────────────────────────────────────────────────────────────────────────
// SECTION NAV — shared sidebar/pill nav for project pages; highlights the
// section currently in view as the user scrolls (scroll-spy)
// ────────────────────────────────────────────────────────────────────────────
function SectionNav() {
  const isMobile = useIsMobile();
  const [active, setActive] = React.useState("overview");
  const [progress, setProgress] = React.useState(0);
  const links = [["overview", "TLTR"], ["role", "My role"], ["process", "Design process"], ["outcome", "Outcome"]];

  // discrete active-section highlight
  React.useEffect(() => {
    const watchIds = ["overview", "role", "process", "outcome"];
    const sections = watchIds.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, {
      rootMargin: "-15% 0px -70% 0px",
      threshold: 0
    });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // continuous reading progress across the overview → outcome range — drives
  // the mobile horizontal progress bar (desktop's floating nav doesn't need it)
  React.useEffect(() => {
    const first = document.getElementById(links[0][0]);
    const last = document.getElementById(links[links.length - 1][0]);
    if (!first || !last) return;
    let raf = null;
    const update = () => {
      const firstTop = first.getBoundingClientRect().top + window.scrollY;
      const lastBottom = last.getBoundingClientRect().bottom + window.scrollY;
      const total = Math.max(1, lastBottom - firstTop);
      const anchor = window.scrollY + window.innerHeight * 0.3;
      setProgress(Math.min(1, Math.max(0, (anchor - firstTop) / total)));
      raf = null;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const linkStyle = isActive => ({
    color: isActive ? "var(--ink)" : "var(--muted)",
    textDecoration: "none",
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13,
    letterSpacing: "-0.005em",
    fontWeight: isActive ? 500 : 400,
    transition: "color .3s, font-weight .3s"
  });
  if (isMobile) {
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px 20px"
      }
    }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      href: "#" + id,
      style: linkStyle(active === id)
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 2,
        background: "var(--line-soft)",
        borderRadius: 2,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: progress * 100 + "%",
        background: "var(--ink)",
        transition: "width .15s linear"
      }
    })));
  }

  // desktop: a small, subtle floating glass pill bar centered at the top of
  // the viewport — the active section stays slightly larger/darker, the rest
  // recede, so it reads as a quiet jump-to-section control rather than a UI block
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 20,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 90,
      display: "flex",
      alignItems: "center",
      gap: 2,
      padding: 5,
      borderRadius: 999,
      background: "rgba(250,250,247,0.5)",
      backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
      border: "1px solid rgba(255,255,255,0.4)",
      boxShadow: "0 4px 16px rgba(14,14,12,0.06)"
    }
  }, links.map(([id, label]) => {
    const isActive = active === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: "#" + id,
      style: {
        textDecoration: "none",
        whiteSpace: "nowrap",
        fontFamily: "'Hanken Grotesk', sans-serif",
        letterSpacing: "-0.005em",
        borderRadius: 999,
        color: isActive ? "var(--ink)" : "var(--muted)",
        fontWeight: isActive ? 500 : 400,
        fontSize: isActive ? 12 : 11,
        padding: isActive ? "6px 13px" : "6px 11px",
        opacity: isActive ? 1 : 0.6,
        transition: "all .3s cubic-bezier(.2,.8,.2,1)"
      }
    }, label);
  }));
}

// ────────────────────────────────────────────────────────────────────────────
// PROCESS STEP — shared design-process step block for project pages; fades +
// rises into view as the user scrolls to it. Handles both single- and
// multi-paragraph bodies, and any of the items/photos/videos data shapes.
// ────────────────────────────────────────────────────────────────────────────
function ProcessStep({
  step
}) {
  const isMobile = useIsMobile();
  const [ref, visible] = useReveal(0.15);
  const items = step.items || step.photos || step.videos || null;
  const paragraphs = (step.body || "").split("\n\n");
  const pad2 = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    id: "process-" + step.num,
    className: "process-step",
    style: {
      display: isMobile ? "flex" : "grid",
      flexDirection: isMobile ? "column" : undefined,
      gridTemplateColumns: isMobile ? undefined : "minmax(240px, 30%) 1fr",
      gap: isMobile ? 24 : 48,
      alignItems: "start",
      ...revealStyle(visible)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Step ", pad2(step.num)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, step.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, paragraphs.map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      lineHeight: 1.65,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, para)))), /*#__PURE__*/React.createElement(MediaStack, {
    items: items,
    featured: step.featured
  }));
}

// ────────────────────────────────────────────────────────────────────────────
// CARBON LATTICE — graphene-lattice Three.js visual, ported from the Carbon
// product site's carbon-lattice.js. Bounded to its own container (rather than
// the viewport), waits for a "carbon-three-ready" event fired by a
// <script type="module"> THREE loader in the host HTML page. Shared between
// the Carbon project page hero and its homepage project card.
function CarbonLattice() {
  const mountRef = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    let cleanup = null;
    const getThree = () => new Promise(resolve => {
      if (window.THREE) return resolve(window.THREE);
      window.addEventListener("carbon-three-ready", () => resolve(window.THREE), {
        once: true
      });
    });
    getThree().then(THREE => {
      if (cancelled || !mountRef.current) return;
      const container = mountRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
      camera.position.set(0, 0, 22);
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      const a1 = new THREE.Vector3(Math.sqrt(3), 0, 0);
      const a2 = new THREE.Vector3(Math.sqrt(3) / 2, 1.5, 0);
      const BOND = 1.42;
      const basisA = new THREE.Vector3(0, 0, 0);
      const basisB = new THREE.Vector3(Math.sqrt(3) / 2, 0.5, 0);
      const RANGE = 4;
      const nodes = [];
      const bonds = [];
      const posMap = new Map();
      function key(v) {
        return `${Math.round(v.x * 100)},${Math.round(v.y * 100)},${Math.round(v.z * 100)}`;
      }
      for (let i = -RANGE; i <= RANGE; i++) {
        for (let j = -RANGE; j <= RANGE; j++) {
          const base = a1.clone().multiplyScalar(i).add(a2.clone().multiplyScalar(j));
          const posA = base.clone().add(basisA);
          const posB = base.clone().add(basisB);
          for (const p of [posA, posB]) {
            const k = key(p);
            if (!posMap.has(k)) posMap.set(k, p.clone());
          }
        }
      }
      const allPos = [...posMap.values()];
      const greenSet = new Set();
      allPos.forEach(p => {
        const hash = Math.abs(Math.sin(p.x * 127.1 + p.y * 311.7) * 43758.5453);
        if (hash % 1 < 0.13) greenSet.add(key(p));
      });
      allPos.forEach(p => {
        nodes.push({
          pos: p,
          isGreen: greenSet.has(key(p))
        });
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = nodes[i].pos.distanceTo(nodes[j].pos);
          if (d < BOND * 1.05) {
            bonds.push({
              a: nodes[i].pos,
              b: nodes[j].pos,
              isGreen: nodes[i].isGreen && nodes[j].isGreen
            });
          }
        }
      }
      const matNodeGrey = new THREE.MeshStandardMaterial({
        color: 0x555555,
        roughness: 0.3,
        metalness: 0.6,
        emissive: 0x111111
      });
      const matNodeGreen = new THREE.MeshStandardMaterial({
        color: 0x44dd66,
        roughness: 0.2,
        metalness: 0.1,
        emissive: 0x22aa44,
        emissiveIntensity: 0.5
      });
      const matBondGrey = new THREE.MeshStandardMaterial({
        color: 0x444444,
        roughness: 0.5,
        metalness: 0.4
      });
      const matBondGreen = new THREE.MeshStandardMaterial({
        color: 0x44dd66,
        roughness: 0.2,
        metalness: 0.1,
        emissive: 0x33cc55,
        emissiveIntensity: 0.7
      });
      const latticeGroup = new THREE.Group();
      scene.add(latticeGroup);
      const sphereGeo = new THREE.SphereGeometry(0.22, 16, 16);
      const smallSphereGeo = new THREE.SphereGeometry(0.13, 12, 12);
      nodes.forEach(({
        pos,
        isGreen
      }) => {
        const mesh = new THREE.Mesh(isGreen ? smallSphereGeo : sphereGeo, isGreen ? matNodeGreen : matNodeGrey);
        mesh.position.copy(pos);
        latticeGroup.add(mesh);
      });
      bonds.forEach(({
        a,
        b,
        isGreen
      }) => {
        const dir = b.clone().sub(a);
        const length = dir.length();
        const mid = a.clone().add(b).multiplyScalar(0.5);
        const radius = isGreen ? 0.055 : 0.045;
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, 8, 1), isGreen ? matBondGreen : matBondGrey);
        mesh.position.copy(mid);
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
        latticeGroup.add(mesh);
      });
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));
      const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
      keyLight.position.set(10, 15, 10);
      scene.add(keyLight);
      const fillLight = new THREE.DirectionalLight(0x88ffaa, 0.3);
      fillLight.position.set(-10, -5, 5);
      scene.add(fillLight);
      const rimLight = new THREE.PointLight(0x44ee77, 0.8, 60);
      rimLight.position.set(-8, 8, -10);
      scene.add(rimLight);
      const mouse = {
        x: 0,
        y: 0
      };
      function onPointerMove(e) {
        const rect = container.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }
      container.addEventListener("pointermove", onPointerMove);
      function resize() {
        const w = container.clientWidth,
          h = container.clientHeight;
        if (!w || !h) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      }
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(container);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const clock = new THREE.Clock();
      let raf;
      function animate() {
        raf = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        if (!reducedMotion) {
          latticeGroup.rotation.z = t * 0.08;
          latticeGroup.rotation.x += (mouse.y * 0.4 - latticeGroup.rotation.x) * 0.03;
          latticeGroup.rotation.y += (mouse.x * 0.4 - latticeGroup.rotation.y) * 0.03;
          const pulse = 0.4 + 0.3 * Math.sin(t * 1.8);
          matNodeGreen.emissiveIntensity = pulse;
          matBondGreen.emissiveIntensity = pulse * 1.2;
        }
        renderer.render(scene, camera);
      }
      animate();
      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        container.removeEventListener("pointermove", onPointerMove);
        renderer.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    });
    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: mountRef,
    style: {
      position: "absolute",
      inset: 0
    }
  });
}

// ────────────────────────────────────────────────────────────────────────────
// REVEAL — generic fade + rise wrapper for any block, using the same
// IntersectionObserver reveal as ProcessStep/StackItem. Use for section
// content that isn't already covered by ProcessStep or MediaStack.
// ────────────────────────────────────────────────────────────────────────────
function Reveal({
  children,
  threshold = 0.15
}) {
  const [ref, visible] = useReveal(threshold);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: revealStyle(visible)
  }, children);
}

// ────────────────────────────────────────────────────────────────────────────
// PROJECT META — shared duration + design-type tag row for project pages,
// placed directly under the title/subtitle with consistent spacing. Tags are
// single discipline values (not slash-joined strings) so each one can double
// as a filter chip once homepage filtering ships.
// ────────────────────────────────────────────────────────────────────────────
function ProjectMeta({
  duration,
  tags = [],
  featured
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 28 : 36,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: isMobile ? 10 : 12
    }
  }, duration && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      color: "var(--muted)",
      letterSpacing: "-0.005em"
    }
  }, duration), tags.map(t => /*#__PURE__*/React.createElement(Magnetic, {
    key: t,
    strength: 0.15
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "7px 16px",
      borderRadius: 999,
      border: "1px solid var(--ink)",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 12,
      color: "var(--ink)",
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap"
    }
  }, t))), featured && /*#__PURE__*/React.createElement("a", {
    href: featured.href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10.5,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--muted)",
      textDecoration: "none"
    }
  }, featured.label, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline",
      color: "var(--ink)"
    }
  }, "Read"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2192")));
}

// ────────────────────────────────────────────────────────────────────────────
// DOTTED LOGO — self-animating shape-morphing dot mark (see assets/brand/dotted-logo.js
// for createDottedLogo itself, loaded as a plain <script> in each page's <head>).
// ────────────────────────────────────────────────────────────────────────────
function DottedLogo({
  size = 18,
  color = "var(--ink)"
}) {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    if (typeof createDottedLogo !== "function" || !canvasRef.current) return;
    const resolvedColor = getComputedStyle(canvasRef.current).color;
    const logo = createDottedLogo(canvasRef.current, {
      size,
      color: resolvedColor,
      gap: 2
    });
    return logo.stop;
  }, [size, color]);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    "aria-hidden": "true",
    style: {
      display: "block",
      color
    }
  });
}
Object.assign(window, {
  Cursor,
  Magnetic,
  Typewriter,
  KEYFRAMES,
  ROTATOR_WORDS,
  SECTIONS,
  SKILLS,
  MediaStack,
  SectionNav,
  ProcessStep,
  CarbonLattice,
  useIsMobile,
  useReveal,
  revealStyle,
  Reveal,
  DottedLogo,
  ProjectMeta
});

// ── GLOBAL VIDEO OBSERVER ──────────────────────────────────────────────────
// Every <video> on every page: plays only when ≥25% visible, pauses otherwise.
// MutationObserver picks up videos React adds after initial render.
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.play().catch(function () {});
      } else {
        e.target.pause();
      }
    });
  }, {
    threshold: 0.25
  });
  function attach(v) {
    if (!v.dataset.ioAttached) {
      v.dataset.ioAttached = '1';
      io.observe(v);
    }
  }
  var mo = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (n) {
        if (n.nodeType !== 1) return;
        if (n.tagName === 'VIDEO') attach(n);
        if (n.querySelectorAll) n.querySelectorAll('video').forEach(attach);
      });
    });
  });
  function init() {
    document.querySelectorAll('video').forEach(attach);
    if (document.body) mo.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();