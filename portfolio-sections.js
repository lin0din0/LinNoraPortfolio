// portfolio-sections.jsx  Hero, Projects, About, Skills, Footer
const {
  useState: useStateS,
  useEffect: useEffectS,
  useRef: useRefS
} = React;

// ────────────────────────────────────────────────────────────────────────────
// NAV  minimal: About · Projects · Connect, top right
// ────────────────────────────────────────────────────────────────────────────
function Nav({
  onHover
}) {
  const link = (href, label) => /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "var(--ink)",
      textDecoration: "none",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "-0.005em"
    }
  }, label);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "36px 64px",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48
    }
  }, link("about.html", "About"), link("index.html#work", "Projects"), link("index.html#contact", "Connect")));
}

// ────────────────────────────────────────────────────────────────────────────
// BACK BUTTON  circular ← used on every project page. When we got here via a
// same-tab click (document.referrer set, so there's a real history entry to
// return to) it goes back through browser history instead of link-navigating,
// which restores the exact scroll position on the homepage natively. Falls
// back to a plain link to index.html#work when opened directly (no referrer).
// ────────────────────────────────────────────────────────────────────────────
function BackButton() {
  const handleClick = e => {
    if (document.referrer && window.history.length > 1) {
      e.preventDefault();
      window.history.back();
    }
  };
  return /*#__PURE__*/React.createElement("a", {
    href: "index.html#work",
    "aria-label": "Back to projects",
    onClick: handleClick,
    style: {
      position: "absolute",
      top: 36,
      left: 64,
      zIndex: 60,
      width: 46,
      height: 46,
      borderRadius: "50%",
      border: "1px solid var(--line-soft)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink)",
      textDecoration: "none",
      fontSize: 16,
      lineHeight: 1,
      background: "var(--bg)"
    }
  }, "\u2190");
}

// ────────────────────────────────────────────────────────────────────────────
// HERO  small breathable text, portrait box top-right, Selected works pill below
// ────────────────────────────────────────────────────────────────────────────
function Hero({
  onHover
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      height: "100%",
      padding: isMobile ? "clamp(96px, 24vw, 120px) clamp(20px, 6vw, 64px) 48px" : "100px 64px 60px",
      position: "relative",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? 40 : 60,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, "Hi"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: "-0.005em",
      color: "var(--ink)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
      gap: 6
    }
  }, "I'm ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 400
    }
  }, "Lin Nora"), ", a", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-grid",
      alignItems: "baseline",
      borderBottom: "1px dotted var(--ink)",
      paddingBottom: 1
    }
  }, ROTATOR_WORDS.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    "aria-hidden": "true",
    style: {
      gridArea: "1 / 1",
      visibility: "hidden",
      whiteSpace: "nowrap"
    }
  }, w)), /*#__PURE__*/React.createElement("span", {
    style: {
      gridArea: "1 / 1"
    }
  }, /*#__PURE__*/React.createElement(Typewriter, {
    words: ROTATOR_WORDS
  }))), "designer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "60px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 300,
      fontSize: "clamp(32px, 6vw, 42px)",
      lineHeight: 1.15,
      letterSpacing: "-0.025em",
      color: "var(--ink)",
      maxWidth: 520
    }
  }, "Connecting the dots", /*#__PURE__*/React.createElement("br", null), "between users, systems & strategy")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: isMobile ? 320 : "none",
      margin: isMobile ? "0 auto" : 0,
      position: "relative",
      aspectRatio: "1 / 1"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "connect-dots-portrait.html?v=4",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: "none",
      display: "block",
      background: "transparent"
    },
    scrolling: "no"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 48 : 80,
      display: "flex",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#work",
    onMouseEnter: () => onHover && onHover("link"),
    onMouseLeave: () => onHover && onHover("default"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 24px",
      border: "1px dashed var(--ink)",
      borderRadius: 999,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "-0.005em",
      color: "var(--ink)",
      textDecoration: "none"
    }
  }, "Selected works ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 13
    }
  }, "\u2193")), /*#__PURE__*/React.createElement("a", {
    href: "about.html",
    onMouseEnter: () => onHover && onHover("link"),
    onMouseLeave: () => onHover && onHover("default"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 24px",
      border: "1px dashed var(--ink)",
      borderRadius: 999,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "-0.005em",
      color: "var(--ink)",
      textDecoration: "none"
    }
  }, "About me ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 13
    }
  }, "\u2192"))));
}

// ────────────────────────────────────────────────────────────────────────────
// PROJECTS  title + intro + centered pill tabs + 2-col clean placeholder grid
// ────────────────────────────────────────────────────────────────────────────
// key the active tab is persisted under so the back button lands on the same
// tab (not just the same scroll offset) when returning from a project page
const ACTIVE_TAB_KEY = "pf:activeTab";
function Projects({
  onHover,
  activeOverride
}) {
  const [active, setActive] = useStateS(() => {
    if (activeOverride) return activeOverride;
    try {
      return sessionStorage.getItem(ACTIVE_TAB_KEY) || "ux";
    } catch (e) {
      return "ux";
    }
  });
  const current = activeOverride || active;
  const selectTab = id => {
    setActive(id);
    try {
      sessionStorage.setItem(ACTIVE_TAB_KEY, id);
    } catch (e) {}
  };
  const section = SECTIONS.find(s => s.id === current);
  const isMobile = useIsMobile();
  const TAB_LABELS = {
    ux: "Projects",
    strategy: "Strategy & systems",
    hacks: "Hackatons"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: "clamp(80px, 14vw, 140px) clamp(20px, 6vw, 64px) clamp(64px, 12vw, 100px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(32px, 6vw, 44px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
      color: "var(--ink)"
    }
  }, "Projects", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      color: "var(--ink)",
      maxWidth: 640
    }
  }, "I work multidisciplinary, focusing on human interaction within the evolving world of technology. Let's dive in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: isMobile ? "48px 0 40px" : "80px 0 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 6,
      background: "rgba(14,14,12,0.05)",
      border: "1px solid var(--line-soft)",
      borderRadius: 999
    }
  }, SECTIONS.map(s => {
    const on = current === s.id;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => !activeOverride && selectTab(s.id),
      style: {
        appearance: "none",
        border: 0,
        cursor: "pointer",
        padding: "10px 28px",
        borderRadius: 999,
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontSize: 13.5,
        fontWeight: 400,
        letterSpacing: "-0.005em",
        background: on ? "var(--ink)" : "transparent",
        color: on ? "var(--bg)" : "var(--ink)",
        transition: "background .25s, color .25s"
      }
    }, TAB_LABELS[s.id]);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: isMobile ? 48 : 64,
      rowGap: isMobile ? 48 : 64,
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, section.projects.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.num,
    p: p,
    onHover: onHover,
    index: i
  }))));
}
function ProjectCard({
  p,
  onHover,
  index = 0
}) {
  const [hov, setHov] = useStateS(false);
  const [pos, setPos] = useStateS({
    x: 50,
    y: 50
  });
  const [ref, visible] = useReveal(0.15);
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left) / r.width * 100,
      y: (e.clientY - r.top) / r.height * 100
    });
  };
  const FIELD_ROW = {
    display: "grid",
    gridTemplateColumns: "56px 1fr",
    borderBottom: "1px solid var(--ink)"
  };
  const FIELD_LABEL = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 9.5,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--muted)",
    padding: "7px 8px",
    borderRight: "1px solid var(--ink)"
  };
  const FIELD_VALUE = {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "-0.005em",
    color: "var(--ink)",
    padding: "7px 10px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };

  // reveal's own transform (fade+rise on scroll into view) must not clobber
  // the hover lift once the card has settled — layer hover on top of it
  // instead of letting object-spread order silently overwrite one or the other
  const reveal = revealStyle(visible, index % 2 * 90);
  return /*#__PURE__*/React.createElement("a", {
    ref: ref,
    href: p.href || "#",
    onMouseEnter: () => {
      setHov(true);
      onHover && onHover("default");
    },
    onMouseLeave: () => {
      setHov(false);
      onHover && onHover("default");
    },
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      textDecoration: "none",
      color: "var(--ink)",
      ...reveal,
      transform: hov ? "translateY(-4px)" : reveal.transform,
      transition: reveal.transition + ", box-shadow .5s",
      boxShadow: hov ? "0 6px 16px rgba(14,14,12,0.22)" : "0 0 0 rgba(0,0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseMove: onMove,
    style: {
      position: "relative",
      overflow: "hidden",
      aspectRatio: "1 / 1",
      border: "1px solid var(--ink)",
      borderBottom: "none",
      background: p.cardLattice && !p.cardImg ? "#0E0E0C" : "var(--bg-soft)"
    }
  }, p.cardLattice && !p.cardImg && /*#__PURE__*/React.createElement(CarbonLattice, null), p.cardVideo && /*#__PURE__*/React.createElement(Media, {
    src: p.cardVideo,
    fill: true,
    style: {
      transform: "scale(1.04)"
    }
  }), p.cardImg && /*#__PURE__*/React.createElement(Media, {
    src: p.cardImg,
    fill: true,
    style: {
      transform: p.cardImgZoom ? `scale(${p.cardImgZoom})` : undefined,
      transformOrigin: "top center"
    }
  }), p.cardLattice && p.cardImg && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "3%",
      bottom: "4%",
      width: "44%",
      height: "26%",
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(CarbonLattice, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 90% at 80% 20%, rgba(255,255,255,0.5), transparent 60%), radial-gradient(120% 80% at 15% 90%, rgba(14,14,12,0.05), transparent 60%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(14,14,12,0.10)",
      opacity: hov ? 1 : 0,
      transition: "opacity .35s",
      pointerEvents: "none"
    }
  }), p.cardLogo && /*#__PURE__*/React.createElement("img", {
    src: p.cardLogo,
    alt: p.collab,
    style: {
      position: "absolute",
      bottom: 16,
      right: 16,
      height: 28,
      width: "auto",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: pos.x + "%",
      top: pos.y + "%",
      transform: "translate(-50%, -50%) scale(" + (hov ? 1 : 0.7) + ")",
      opacity: hov ? 1 : 0,
      transition: "opacity .25s, transform .4s cubic-bezier(.2,.8,.2,1)",
      background: "var(--ink)",
      color: "var(--bg)",
      padding: "12px 22px",
      borderRadius: 999,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: "-0.005em",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      willChange: "left, top, transform"
    }
  }, "See project ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 12
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--ink)",
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: FIELD_ROW
  }, /*#__PURE__*/React.createElement("div", {
    style: FIELD_LABEL
  }, "Year"), /*#__PURE__*/React.createElement("div", {
    style: FIELD_VALUE
  }, p.year)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      borderBottom: "1px solid var(--ink)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: 19,
      letterSpacing: "-0.012em",
      color: "var(--ink)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      color: "var(--muted)"
    }
  }, p.line)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      padding: "14px 18px"
    }
  }, p.tags && p.tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    style: {
      padding: "6px 14px",
      borderRadius: 999,
      border: "1px solid var(--line-soft)",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 12,
      color: "var(--ink-2)",
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap"
    }
  }, tag)))));
}

// ────────────────────────────────────────────────────────────────────────────
// ROADMAP NODE  archive-record card: a solid-bordered field table (year, role)
// sitting directly on top of the photo, then a short description below the
// border. One self-contained card per grid cell, so nothing ever overflows.
// ────────────────────────────────────────────────────────────────────────────
function RoadmapNode({
  s,
  onHover
}) {
  const [hov, setHov] = useStateS(false);
  const [imgLoaded, setImgLoaded] = useStateS(false);
  const isMobile = useIsMobile();
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";
  const FIELD_ROW = {
    display: "grid",
    gridTemplateColumns: "46px 1fr",
    borderBottom: "1px solid var(--ink)"
  };
  const FIELD_LABEL = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 8.5,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--muted)",
    padding: "6px 6px",
    borderRight: "1px solid var(--ink)"
  };
  const FIELD_VALUE = {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "-0.005em",
    color: "var(--ink)",
    padding: "6px 8px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => {
      if (!isMobile) {
        setHov(true);
        onHover && onHover("link");
      }
    },
    onMouseLeave: () => {
      if (!isMobile) {
        setHov(false);
        onHover && onHover("default");
      }
    },
    style: {
      height: "100%",
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: FIELD_ROW
  }, /*#__PURE__*/React.createElement("div", {
    style: FIELD_LABEL
  }, "Year"), /*#__PURE__*/React.createElement("div", {
    style: FIELD_VALUE
  }, s.year)), /*#__PURE__*/React.createElement("div", {
    style: FIELD_ROW
  }, /*#__PURE__*/React.createElement("div", {
    style: FIELD_LABEL
  }, "Role"), /*#__PURE__*/React.createElement("div", {
    style: FIELD_VALUE
  }, s.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 4",
      position: "relative",
      overflow: "hidden"
    }
  }, s.img ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--bg-soft)",
      boxShadow: "inset 0 0 0 1px var(--line-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: imgLoaded ? 0 : 1,
      transition: "opacity .5s ease"
    }
  }, /*#__PURE__*/React.createElement(FillDottedLogo, null)), /*#__PURE__*/React.createElement("img", {
    src: s.img + "-base.png",
    alt: s.name,
    draggable: false,
    loading: "lazy",
    onLoad: () => setImgLoaded(true),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      userSelect: "none",
      opacity: imgLoaded ? 1 : 0,
      transition: "opacity .5s ease"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: s.img + "-accent.png",
    alt: "",
    draggable: false,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      userSelect: "none",
      opacity: hov ? 1 : 0,
      filter: hov ? s.glow : "none",
      transition: "opacity .45s ease, filter .45s ease"
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: CHECKER
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, s.detail && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 9.5,
      lineHeight: 1.3,
      color: "var(--muted)"
    }
  }, s.detail), s.detail2 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: s.detail ? "6px 0 0" : 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 10.5,
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, s.detail2), s.tags && s.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 5,
      marginTop: "auto",
      paddingTop: 9
    }
  }, s.tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    style: {
      padding: "3px 8px",
      borderRadius: 999,
      border: "1px solid var(--line-soft)",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 9,
      color: "var(--muted)",
      letterSpacing: "-0.005em",
      background: "var(--bg-soft)",
      whiteSpace: "nowrap"
    }
  }, tag)))));
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
  const items = [{
    src: "assets/about/roulette/animal-lover.jpg",
    caption: "hanging out with animals"
  }, {
    src: "assets/about/roulette/chinese-roots.jpg",
    caption: "connecting with my Chinese roots"
  }, {
    src: "assets/about/roulette/drawing.jpg",
    caption: "drawing"
  }, {
    src: "assets/about/roulette/art-and-design.jpg",
    caption: "engaging with art and design"
  }, {
    src: "assets/about/roulette/new-technology.jpg",
    caption: "exploring up and coming technology"
  }, {
    src: "assets/about/roulette/hackathon.jpg",
    caption: "at a hackathon"
  }, {
    src: "assets/about/roulette/need-for-speed.mov",
    caption: "cruising",
    video: true
  }, {
    src: "assets/about/roulette/tennis.jpg",
    caption: "playing tennis"
  }, {
    src: "assets/about/roulette/violin.jpg",
    caption: "playing violin"
  }];

  // deterministic per-card tilt — restrained, not chaotic
  const rotations = [-3, 2, -2.5, 3, -1.5, 2.5, -2, 1.5, -3];
  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % items.length), 3200);
  };
  useEffectS(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
  }, []);
  const advance = () => {
    setIdx(i => (i + 1) % items.length);
    restartTimer();
  };
  const current = items[idx];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: isMobile ? "flex-start" : "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: isMobile ? 220 : 440,
      marginRight: isMobile ? 0 : "8%"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, "Outside of designing, you'll find me...."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: advance,
    "aria-label": "Next photo",
    style: {
      appearance: "none",
      border: "none",
      padding: 0,
      margin: 0,
      marginTop: 24,
      background: "transparent",
      cursor: "pointer",
      display: "block",
      width: "100%",
      transform: `rotate(${rotations[idx % rotations.length]}deg)`,
      transition: "transform .5s cubic-bezier(.2,.8,.2,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card, #fff)",
      padding: "12px 12px 30px",
      boxShadow: "0 16px 36px -16px rgba(14,14,12,0.22)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "3 / 4",
      overflow: "hidden",
      position: "relative",
      background: "var(--bg-soft)"
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.src,
    style: {
      position: "absolute",
      inset: 0,
      opacity: i === idx ? 1 : 0,
      transition: "opacity .6s cubic-bezier(.2,.8,.2,1)"
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: item.src,
    video: item.video,
    alt: item.caption,
    fill: true
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      textAlign: "center",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-2)"
    }
  }, current.caption)))));
}

// ────────────────────────────────────────────────────────────────────────────
// ABOUT
// ────────────────────────────────────────────────────────────────────────────
function About({
  onHover
}) {
  const isMobile = useIsMobile();
  const isSmallMobile = useIsMobile(480);
  const SECTION_H = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 400,
    fontSize: "clamp(24px, 4vw, 30px)",
    letterSpacing: "-0.02em",
    color: "var(--ink)"
  };
  const MAJOR_GAP = isMobile ? 100 : 200;

  // scroll-reveal for each below-the-fold block — subtle fade + rise, no stagger noise
  const [philosophyRef, philosophyVisible] = useReveal(0.15);
  const [roadmapRef, roadmapVisible] = useReveal(0.1);
  const [connectRef, connectVisible] = useReveal(0.15);
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: isMobile ? "clamp(64px, 16vw, 100px) clamp(20px, 6vw, 64px) 64px" : "100px 64px 100px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? 48 : 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(36px, 6.5vw, 56px)",
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, "Who is ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 400
    }
  }, "Lin Nora"), "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: isMobile ? "40px 0 0" : "48px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: "clamp(20px, 2.4vw, 26px)",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "-0.005em",
      color: "var(--ink)",
      maxWidth: 460,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "As a"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      minWidth: 220,
      borderBottom: "1px dotted var(--ink)",
      paddingBottom: 1
    }
  }, /*#__PURE__*/React.createElement(Typewriter, {
    words: ["designer", "teammate", "project leader", "dying optimist"]
  })))), /*#__PURE__*/React.createElement(BeyondWorkBoard, null)), /*#__PURE__*/React.createElement("div", {
    ref: philosophyRef,
    style: {
      marginTop: isMobile ? 80 : 100,
      ...revealStyle(philosophyVisible)
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...SECTION_H,
      textAlign: "center"
    }
  }, "My design philosophy", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, "....")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 40 : 56,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? 48 : 100,
      alignItems: "center",
      maxWidth: 1000,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/about/john-heskett.png",
    alt: "John Heskett",
    style: {
      width: isMobile ? 150 : "clamp(180px, 14vw, 260px)",
      height: isMobile ? 150 : "clamp(180px, 14vw, 260px)",
      objectFit: "contain",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      textAlign: "center",
      maxWidth: 380,
      fontFamily: "Georgia, serif",
      fontStyle: "italic",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--ink-2)"
    }
  }, "\"Design is the human capacity for shaping and making in ways that satisfy our utilitarian needs and create meaning.\"", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 8,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontStyle: "normal",
      fontSize: 12,
      color: "var(--muted)"
    }
  }, " John Heskett"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13.5,
      lineHeight: 1.6,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "I believe design is a powerful tool for positive change. My design philosophy centers on the belief that meaningful solutions emerge from deep empathy, collaborative processes, and strategic thinking. I'm passionate about creating experiences that not only solve problems but inspire positive behavior change.")))), /*#__PURE__*/React.createElement("div", {
    ref: roadmapRef,
    style: {
      marginTop: 200,
      ...revealStyle(roadmapVisible)
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: SECTION_H
  }, "My roadmap", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, ".")), (() => {
    const roadmapItems = [{
      name: "Telenor",
      year: "2026",
      detail: "Internship, AI for Software Engineering",
      detail2: "Designing agentic systems and LLM-powered internal tools, where systems thinking and UX design merged into one skill.",
      tags: ["Applied AI", "Decision Logic", "Project Management"],
      img: "assets/about/roadmap/telenor",
      glow: "drop-shadow(0 0 8px rgba(13,171,228,0.65)) drop-shadow(0 0 20px rgba(13,171,228,0.35))"
    }, {
      name: "CBS × KADK, Copenhagen",
      year: "2026",
      detail: "Strategic Design & Entrepreneurship",
      featured: true,
      detail2: "Paired with business students and learned to translate design decisions into value, risk, or opportunity for stakeholders who don't think in Figma.",
      tags: ["Strategic design", "Client relations", "Process consulting"],
      img: "assets/about/roadmap/copenhagen",
      glow: "drop-shadow(0 0 6px rgba(255,190,120,0.45)) drop-shadow(0 0 16px rgba(255,190,120,0.2))"
    }, {
      name: "Tongji, Shanghai",
      year: "2025",
      detail2: "A selection of courses focused on innovation, business & growth, and systemic product design, including an early dive into AI design.",
      tags: ["Smart service system design", "AI design", "System-oriented design"],
      img: "assets/about/roadmap/tongji",
      glow: "drop-shadow(0 0 8px rgba(160,90,220,0.6)) drop-shadow(0 0 20px rgba(160,90,220,0.3))"
    }, {
      name: "SAHO",
      year: "2022",
      detail2: "Rebuilt a student organization from the ground up as interim chair: a full rebrand, a new team, and proof that design thinking applies to organizations as much as products.",
      tags: ["Leadership", "Organizational development", "Team coordination"],
      img: "assets/about/roadmap/saho",
      glow: "drop-shadow(0 0 8px rgba(215,205,10,0.65)) drop-shadow(0 0 20px rgba(215,205,10,0.35))"
    }, {
      name: "AHO",
      year: "2020",
      detail2: "Learned design as a way of thinking, not just making: research, synthesis, iteration, and how to make invisible structures visible.",
      tags: ["Service design", "UX research", "Interaction design"],
      img: "assets/about/roadmap/aho",
      glow: "drop-shadow(0 0 10px rgba(255,106,0,0.65)) drop-shadow(0 0 22px rgba(255,106,0,0.35))"
    }, {
      name: "Edvard Munch VGS",
      year: "2017",
      detail2: "Grew up playing violin until design and architecture electives showed me another way to shape ideas. Same instinct, new outlet.",
      img: "assets/about/roadmap/violin",
      glow: "drop-shadow(0 0 8px rgba(206,84,22,0.7)) drop-shadow(0 0 20px rgba(206,84,22,0.4))"
    }];
    const KICKER = {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--muted)"
    };
    const pad2 = n => String(n).padStart(2, "0");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: isMobile ? 40 : 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: isMobile ? 18 : 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: KICKER
    }, "Timeline"), /*#__PURE__*/React.createElement("span", {
      style: KICKER
    }, pad2(1) + " / " + pad2(roadmapItems.length))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(6, minmax(0, 1fr))",
        gap: isMobile ? 40 : 16
      }
    }, roadmapItems.map((s, i) => /*#__PURE__*/React.createElement(RoadmapNode, {
      key: i,
      s: s,
      onHover: onHover
    }))));
  })()), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: MAJOR_GAP
    }
  }, /*#__PURE__*/React.createElement(SkillShape, {
    onHover: onHover
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: MAJOR_GAP
    }
  }, /*#__PURE__*/React.createElement(Toolbox, {
    onHover: onHover
  })), /*#__PURE__*/React.createElement("div", {
    ref: connectRef,
    style: {
      marginTop: MAJOR_GAP,
      ...revealStyle(connectVisible)
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: SECTION_H
  }, "Let's talk ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, "!")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 32 : 56,
      display: "grid",
      gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(2, 1fr)",
      gap: isMobile ? 16 : 24,
      maxWidth: 660
    }
  }, [{
    label: "Send me a letter",
    caption: "linnoratollefsen@gmail.com",
    href: "mailto:linnoratollefsen@gmail.com",
    icon: "mail"
  }, {
    label: "LinkedIn",
    caption: "/in/linnoratollefsen",
    href: "https://www.linkedin.com/in/linnoratollefsen",
    icon: "linkedin"
  }].map((c, i) => /*#__PURE__*/React.createElement(ConnectTile, {
    key: i,
    c: c,
    index: i,
    onHover: onHover
  })))));
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
function ConnectTile({
  c,
  index,
  onHover
}) {
  const [hov, setHov] = useStateS(false);
  const isMail = c.icon === "mail";
  const maskProps = {
    WebkitMaskImage: "url(assets/about/icons/linkedin/stipple-mask.png)",
    maskImage: "url(assets/about/icons/linkedin/stipple-mask.png)",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center"
  };
  const icon = /*#__PURE__*/React.createElement("div", {
    style: {
      width: "clamp(140px, 18vw, 220px)",
      aspectRatio: "1 / 1",
      position: "relative"
    }
  }, c.icon === "mail" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/about/icons/mail/closed.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      opacity: hov ? 0 : 1,
      transition: "opacity .5s ease"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/about/icons/mail/open.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      opacity: hov ? 1 : 0,
      transition: "opacity .5s ease"
    }
  })), c.icon === "linkedin" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--ink)",
      opacity: hov ? 0 : 1,
      transition: "opacity .5s ease",
      ...maskProps
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, #38bdf8, #22d3ee, #6366f1)",
      opacity: hov ? 1 : 0,
      transition: "opacity .5s ease",
      filter: hov ? "drop-shadow(0 0 2px #22d3ee) drop-shadow(0 0 8px #38bdf8) drop-shadow(0 0 16px #6366f1)" : "none",
      ...maskProps
    }
  })));
  const handleText = /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: "-0.01em",
      color: "var(--ink)"
    }
  }, c.caption);
  return /*#__PURE__*/React.createElement("a", {
    href: c.href,
    "aria-label": c.label,
    target: isMail ? undefined : "_blank",
    rel: isMail ? undefined : "noopener noreferrer",
    onMouseEnter: () => {
      setHov(true);
      onHover && onHover("link");
    },
    onMouseLeave: () => {
      setHov(false);
      onHover && onHover("default");
    },
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18,
      textDecoration: "none",
      color: "var(--ink)"
    }
  }, icon, handleText);
}

// ────────────────────────────────────────────────────────────────────────────
// LETTER MODAL — ARCHIVED, not currently rendered anywhere. It opened a
// letter-writing UI on top of the site, but "Send letter" still only builds
// a mailto: link (this static site has no backend to actually deliver mail
// on the visitor's behalf). Kept here in case a real send-it-for-them flow
// gets wired up later (a small backend/serverless function, or a service
// like Formspree/EmailJS) — see conversation for the tradeoffs discussed.
// ────────────────────────────────────────────────────────────────────────────
function LetterModal({
  to,
  onClose
}) {
  const [fromName, setFromName] = useStateS("");
  const [message, setMessage] = useStateS("");
  const [sent, setSent] = useStateS(false);
  const fromRef = useRefS(null);
  const cardRef = useRefS(null);
  const todayStamp = (() => {
    const d = new Date();
    const pad = n => String(n).padStart(2, "0");
    return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
  })();
  useEffectS(() => {
    const prevFocused = document.activeElement;
    const t = setTimeout(() => fromRef.current && fromRef.current.focus(), 50);
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      if (prevFocused && prevFocused.focus) prevFocused.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const sendLetter = () => {
    const name = fromName.trim();
    const subject = encodeURIComponent(name ? `A letter from ${name}` : "A letter from your site");
    const signOff = name ? `\n\nFrom, ${name}` : "";
    const body = encodeURIComponent(`${message.trim()}${signOff}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  const FIELD_LABEL = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    color: "var(--muted)"
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Write a letter to Lin Nora",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "rgba(14,14,12,0.5)",
      backdropFilter: "blur(3px)",
      WebkitBackdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    style: {
      position: "relative",
      width: "min(440px, 100%)",
      maxHeight: "88vh",
      overflowY: "auto",
      background: "var(--card, #fff)",
      border: "1px solid var(--line-soft)",
      borderRadius: 18,
      boxShadow: "0 30px 70px rgba(14,14,12,0.22), 0 4px 14px rgba(14,14,12,0.08)",
      padding: "34px 32px 28px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close letter",
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      width: 30,
      height: 30,
      borderRadius: "50%",
      border: "1.5px dotted var(--dashed)",
      background: "transparent",
      color: "var(--muted)",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 15,
      lineHeight: 1,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 22,
      left: 22,
      width: 60,
      height: 60,
      filter: "drop-shadow(-1px -1px 0 rgba(255,255,255,.75)) drop-shadow(1px 1px 0 rgba(14,14,12,.22))",
      opacity: 0.5,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(DottedLogo, {
    size: 60,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      width: "fit-content",
      border: "1.5px dashed var(--dashed)",
      borderRadius: 8,
      padding: "9px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...FIELD_LABEL,
      width: 34,
      flexShrink: 0
    }
  }, "To"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink)",
      letterSpacing: "-0.005em",
      fontWeight: 600
    }
  }, "Lin Nora")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...FIELD_LABEL,
      width: 34,
      flexShrink: 0
    }
  }, "Date"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink)",
      letterSpacing: "-0.005em"
    }
  }, todayStamp))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--line-soft)",
      margin: "22px 0 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "letterFrom",
    style: {
      ...FIELD_LABEL,
      paddingBottom: 7,
      flexShrink: 0
    }
  }, "From"), /*#__PURE__*/React.createElement("input", {
    ref: fromRef,
    id: "letterFrom",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
    value: fromName,
    onChange: e => setFromName(e.target.value),
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      color: "var(--ink)",
      background: "transparent",
      border: "none",
      borderBottom: "1.5px dashed var(--dashed)",
      padding: "0 2px 6px",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "letterMessage",
    style: {
      ...FIELD_LABEL,
      display: "block",
      marginBottom: 8
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "letterMessage",
    placeholder: "Say hello, ask a question, or just leave a note\u2026",
    value: message,
    onChange: e => setMessage(e.target.value),
    style: {
      width: "100%",
      minHeight: 168,
      resize: "vertical",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 15.5,
      lineHeight: "28px",
      color: "var(--ink)",
      background: "transparent",
      border: "none",
      outline: "none",
      backgroundImage: "repeating-linear-gradient(var(--card, #fff) 0 27px, var(--line-soft) 27px 28px)",
      paddingTop: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "'Caveat', cursive",
      fontSize: 26,
      color: fromName.trim() ? "var(--ink-2)" : "var(--muted)",
      opacity: fromName.trim() ? 1 : 0.7,
      borderTop: "1px solid var(--line-soft)",
      paddingTop: 6,
      minWidth: 0,
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, fromName.trim() ? `From, ${fromName.trim()}` : "From, your name"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: sendLetter,
    style: {
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--bg)",
      background: "var(--ink)",
      border: "none",
      borderRadius: 999,
      padding: "11px 20px",
      cursor: "pointer"
    }
  }, "Send letter", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "13 6 19 12 13 18"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10.5,
      color: "var(--muted)",
      textAlign: "right",
      margin: "8px 0 0",
      letterSpacing: "0.02em",
      height: 14,
      opacity: sent ? 1 : 0,
      transition: "opacity .3s ease"
    }
  }, "Opening your mail app\u2026")));
}

// ────────────────────────────────────────────────────────────────────────────
function SkillCircle({
  group,
  label,
  items,
  onHover
}) {
  const [hov, setHov] = useStateS(false);
  const isMobile = useIsMobile();
  const size = isMobile ? 168 : "clamp(180px, 20vw, 400px)";
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => {
      setHov(true);
      onHover && onHover("link");
    },
    onMouseLeave: () => {
      setHov(false);
      onHover && onHover("default");
    },
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets/toolkit/itpi/${group}-default.svg?v=2`,
    alt: label,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      opacity: hov ? 0 : 1,
      transition: "opacity .35s ease"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `assets/toolkit/itpi/${group}-hover.svg?v=2`,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      opacity: hov ? 1 : 0,
      transition: "opacity .35s ease"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 20 : "clamp(20px, 1.6vw, 30px)",
      display: "flex",
      flexWrap: "wrap",
      gap: isMobile ? 8 : "clamp(8px, 0.6vw, 12px)",
      justifyContent: "center",
      maxWidth: isMobile ? 280 : "clamp(240px, 21vw, 300px)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      padding: isMobile ? "6px 12px" : "clamp(6px, 0.5vw, 9px) clamp(12px, 1vw, 17px)",
      borderRadius: 999,
      border: "1px solid var(--line-soft)",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: isMobile ? 11.5 : "clamp(11.5px, 0.9vw, 14px)",
      color: "var(--ink-2)",
      letterSpacing: "-0.005em",
      background: "var(--bg)"
    }
  }, it))));
}

// ────────────────────────────────────────────────────────────────────────────
// TOOLKIT HOVER BOX  interactive toolkit illustration — hover to open the box
// ────────────────────────────────────────────────────────────────────────────
function ToolkitHoverBox() {
  const [hov, setHov] = useStateS(false);
  const icons = [{
    src: "assets/toolkit/icons/figma.png",
    alt: "Figma",
    tx: -31,
    ty: -43,
    rot: -11,
    w: 15,
    delay: 0
  }, {
    src: "assets/toolkit/icons/miro.svg",
    alt: "Miro",
    tx: 17,
    ty: -49,
    rot: 9,
    w: 15,
    delay: 0.05
  }, {
    src: "assets/toolkit/icons/notion.png",
    alt: "Notion",
    tx: -3,
    ty: -53,
    rot: -5,
    w: 15,
    delay: 0.1
  }, {
    src: "assets/toolkit/icons/claude.png",
    alt: "Claude",
    tx: 14,
    ty: -25,
    rot: 6,
    w: 13,
    delay: 0.03
  }, {
    src: "assets/toolkit/icons/illustrator.png",
    alt: "Illustrator",
    tx: 39,
    ty: -19,
    rot: -13,
    w: 11,
    delay: 0.08
  }, {
    src: "assets/toolkit/icons/cursor.png",
    alt: "Cursor",
    tx: -26,
    ty: -24,
    rot: -19,
    w: 10,
    delay: 0.13
  }, {
    src: "assets/toolkit/icons/excel.svg",
    alt: "Excel",
    tx: 33,
    ty: -35,
    rot: 12,
    w: 10,
    delay: 0.16
  }, {
    src: "assets/toolkit/icons/github.svg",
    alt: "GitHub",
    tx: -42,
    ty: -18,
    rot: 15,
    w: 10,
    delay: 0.2
  }, {
    src: "assets/toolkit/icons/lovable.png",
    alt: "Lovable",
    tx: -9,
    ty: -30,
    rot: -17,
    w: 10,
    delay: 0.23
  }];
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    onFocus: () => setHov(true),
    onBlur: () => setHov(false),
    tabIndex: 0,
    "aria-label": "Lin Nora's toolkit, hover to open",
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "clamp(360px, 34vw, 760px)",
      margin: "0 auto",
      aspectRatio: "928 / 640",
      containerType: "inline-size",
      cursor: "pointer",
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/toolkit/box-closed.png",
    alt: "Closed toolbox",
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: "100%",
      height: "auto",
      transform: hov ? "translateX(-50%) translateY(-6px) scale(0.97)" : "translateX(-50%) translateY(0) scale(1)",
      opacity: hov ? 0 : 1,
      transition: hov ? "opacity .35s ease, transform .35s ease" : "opacity .35s ease .05s, transform .35s ease .05s",
      userSelect: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/toolkit/box-open.png",
    alt: "Open toolbox",
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: "100%",
      height: "auto",
      transform: hov ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(8px) scale(0.97)",
      opacity: hov ? 1 : 0,
      transition: hov ? "opacity .35s ease .05s, transform .35s ease .05s" : "opacity .35s ease, transform .35s ease",
      userSelect: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "75.4%",
      top: hov ? "76.4%" : "74.6%",
      width: hov ? "14%" : "13.4%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 500,
      color: "#2d2d2d",
      textAlign: "center",
      whiteSpace: "nowrap",
      fontSize: hov ? "1.85cqw" : "1.65cqw",
      transition: "top .35s ease, font-size .35s ease"
    }
  }, "Lin Nora's toolkit"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "77.65%",
      top: hov ? "80.6%" : "78.9%",
      width: hov ? "9.5%" : "9%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 500,
      color: "#2d2d2d",
      textAlign: "center",
      whiteSpace: "nowrap",
      fontSize: hov ? "1.85cqw" : "1.65cqw",
      transition: "top .35s ease, font-size .35s ease"
    }
  }, "Oslo, Norway")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, icons.map(ic => /*#__PURE__*/React.createElement("img", {
    key: ic.alt,
    src: ic.src,
    alt: ic.alt,
    style: {
      position: "absolute",
      left: "50%",
      top: "32%",
      width: ic.w + "cqw",
      height: "auto",
      transform: hov ? `translate(-50%, -50%) translate(${ic.tx}cqw, ${ic.ty}cqw) rotate(${ic.rot}deg) scale(1)` : "translate(-50%, -50%) scale(0.15) rotate(0deg)",
      opacity: hov ? 1 : 0,
      filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.15))",
      transition: hov ? `transform .65s cubic-bezier(.34,1.56,.64,1) ${ic.delay}s, opacity .4s ease ${ic.delay}s` : "transform .35s ease, opacity .3s ease",
      userSelect: "none"
    }
  }))));
}

// ────────────────────────────────────────────────────────────────────────────
// ITP INTRO CARD  archive-record card introducing the I/T/Pi model, always
// visible as its own column in the same row as the three shape circles
// (rather than a hover-triggered "?" popup) — sized to match a SkillCircle
// column so it reads as a fourth grid item, not an afterthought.
// ────────────────────────────────────────────────────────────────────────────
function ITPIntroCard({
  isMobile
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: isMobile ? "100%" : "clamp(240px, 22vw, 400px)",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--ink)",
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, [["Theory", "I / T / Pi shaped skills"], ["Source", "Dorothy Leonard-Barton"], ["Also", "Tim Brown, IDEO"]].map(([label, value]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "grid",
      gridTemplateColumns: "70px 1fr",
      borderBottom: "1px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10.5,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--muted)",
      padding: "9px 10px",
      borderRight: "1px solid var(--ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13.5,
      fontWeight: 500,
      letterSpacing: "-0.005em",
      color: "var(--ink)",
      padding: "9px 12px"
    }
  }, value))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 40,
      padding: "32px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/toolkit/people/dorothy.png",
    alt: "Dorothy Leonard-Barton",
    style: {
      width: 110,
      height: 110,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/toolkit/people/tim.png",
    alt: "Tim Brown",
    style: {
      width: 110,
      height: 110,
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      lineHeight: 1.55,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "It's a theory about how deep versus how wide your skills go. I-shaped means depth in one thing. T-shaped adds breadth. Pi-shaped adds a second deep specialism, connected by broad collaborative range."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      lineHeight: 1.55,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "Popularized in design by Tim Brown at IDEO. Here's how I've applied it to myself.")))));
}

// ────────────────────────────────────────────────────────────────────────────
// TOOLKIT  "My toolbox" — intro, interactive illustration, programs list
// ────────────────────────────────────────────────────────────────────────────
function Toolbox({
  onHover
}) {
  const isMobile = useIsMobile();
  const tools = SKILLS.find(g => g.group === "tools");
  const [ref, visible] = useReveal(0.15);
  return /*#__PURE__*/React.createElement("section", {
    id: "toolbox",
    ref: ref,
    style: revealStyle(visible)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(24px, 4vw, 30px)",
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, "My toolbox", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: "clamp(13px, 1.1vw, 16px)",
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, "My role is identifying what needs to be created, these are the tools I use to build it")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: isMobile ? "56px auto 0" : "100px auto 0",
      maxWidth: 1400,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(ToolkitHoverBox, null)), tools && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 48 : 72,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "100px 1fr",
      gap: isMobile ? 10 : "clamp(24px, 2vw, 36px)",
      alignItems: "start",
      maxWidth: isMobile ? 1000 : "clamp(700px, 50vw, 1200px)",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: isMobile ? 13 : "clamp(13px, 1vw, 16px)",
      fontWeight: 400,
      letterSpacing: "-0.005em",
      color: "var(--muted)",
      display: "block",
      lineHeight: 1
    }
  }, tools.group), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: isMobile ? 11 : "clamp(11px, 0.85vw, 13px)",
      color: "var(--muted)",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      display: "block",
      marginTop: 4
    }
  }, tools.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: isMobile ? 8 : "clamp(8px, 0.7vw, 12px)"
    }
  }, tools.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      padding: isMobile ? "7px 14px" : "clamp(7px, 0.6vw, 10px) clamp(14px, 1.1vw, 19px)",
      borderRadius: 999,
      border: "1px solid var(--line-soft)",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: isMobile ? 12 : "clamp(12px, 0.95vw, 15px)",
      color: "var(--ink-2)",
      letterSpacing: "-0.005em",
      background: "var(--bg)"
    }
  }, it)))));
}

// ────────────────────────────────────────────────────────────────────────────
// SKILL SHAPE  "My shape" — I/T/Pi depth-vs-range model, its own section
// ────────────────────────────────────────────────────────────────────────────
function SkillShape({
  onHover
}) {
  const isMobile = useIsMobile();
  const shapes = SKILLS.filter(g => g.group !== "tools");
  const [ref, visible] = useReveal(0.15);
  return /*#__PURE__*/React.createElement("section", {
    id: "shape",
    ref: ref,
    style: revealStyle(visible)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(24px, 4vw, 30px)",
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, "My shape", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: "clamp(13px, 1.1vw, 16px)",
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, "A quick look at how I balance depth and range across my skills")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 56 : 96,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: isMobile ? "center" : "stretch",
      gap: isMobile ? 48 : "clamp(28px, 3.2vw, 56px)",
      maxWidth: 1850,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement(ITPIntroCard, {
    isMobile: isMobile
  }), shapes.map(g => /*#__PURE__*/React.createElement(SkillCircle, {
    key: g.group,
    group: g.group,
    label: g.label,
    items: g.items,
    onHover: onHover
  }))));
}

// ────────────────────────────────────────────────────────────────────────────
// FOOTER / CONNECT
// ────────────────────────────────────────────────────────────────────────────
function Footer({
  onHover
}) {
  const [ref, visible] = useReveal(0.15);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    ref: ref,
    style: {
      padding: "140px 64px 60px",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      ...revealStyle(visible)
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(32px, 6vw, 44px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em"
    }
  }, "Let's talk ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, "!")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 24,
      maxWidth: 660
    }
  }, [{
    label: "Send me a letter",
    caption: "linnoratollefsen@gmail.com",
    href: "mailto:linnoratollefsen@gmail.com",
    icon: "mail"
  }, {
    label: "LinkedIn",
    caption: "/in/linnoratollefsen",
    href: "https://www.linkedin.com/in/linnoratollefsen",
    icon: "linkedin"
  }].map((c, i) => /*#__PURE__*/React.createElement(ConnectTile, {
    key: i,
    c: c,
    index: i,
    onHover: onHover
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "\xA9 2026 Lin Nora \xB7 Oslo")));
}
Object.assign(window, {
  Nav,
  BackButton,
  Hero,
  Projects,
  About,
  Toolbox,
  Footer
});