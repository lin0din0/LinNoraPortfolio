// portfolio-about.jsx — About page: back button header, hero, a pinboard of
// "outside of designing" photos, then the shared About sections (philosophy,
// roadmap, shape, toolbox, connect) from portfolio-sections.jsx.
const {
  useState: useStateA,
  useEffect: useEffectA,
  useRef: useRefA
} = React;
const A_SANS = "'Hanken Grotesk', sans-serif";
const A_MONO = "'JetBrains Mono', monospace";
const A_HAND = "'Caveat', cursive";
const A_GUTTER = "clamp(20px, 4vw, 56px)";
const A_EASE = "cubic-bezier(.2,.8,.2,1)";
const aMono = {
  fontFamily: A_MONO,
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--muted)"
};

// ────────────────────────────────────────────────────────────────────────────
// HEADER — the same mono bar as the homepage
// ────────────────────────────────────────────────────────────────────────────
function AboutHeader() {
  const isMobile = useIsMobile();
  const link = (href, label) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    className: "pf-ulink",
    style: {
      ...aMono,
      color: "var(--ink)",
      textDecoration: "none"
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: `14px ${A_GUTTER}`,
      borderBottom: "1px solid var(--line-soft)",
      background: "rgba(255,255,255,0.86)",
      backdropFilter: "blur(14px) saturate(160%)",
      WebkitBackdropFilter: "blur(14px) saturate(160%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html#top",
    style: {
      ...aMono,
      color: "var(--ink)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DottedLogo, {
    size: 20
  }), !isMobile && "Lin Nora Tollefsen")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: isMobile ? 18 : 32
    }
  }, !isMobile && link("index.html#work", "Work"), !isMobile && link("index.html#archive", "Archive"), link("about.html", "About"), link("index.html#contact", "Connect")));
}

// ────────────────────────────────────────────────────────────────────────────
// BACK — sits just under the top bar. Goes through browser history when we
// arrived from this site (so the homepage restores its scroll spot),
// otherwise it links to the homepage.
// ────────────────────────────────────────────────────────────────────────────
function BackRow() {
  const goBack = e => {
    let sameSite = false;
    try {
      sameSite = document.referrer && new URL(document.referrer).origin === location.origin;
    } catch (err) {}
    if (sameSite && history.length > 1) {
      e.preventDefault();
      history.back();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `20px ${A_GUTTER} 0`
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    onClick: goBack,
    className: "pf-backrow",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-back",
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid var(--ink)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2190")), /*#__PURE__*/React.createElement("span", {
    style: {
      ...aMono,
      color: "var(--ink)"
    }
  }, "Back")));
}

// ────────────────────────────────────────────────────────────────────────────
// OUTSIDE OF DESIGNING — a small carousel of polaroids: the current photo in
// front with its post-it caption, the previous and next peeking out either
// side. It moves on by itself (pausing while hovered); a click on the photo
// in front goes to the next one, a click on a side photo jumps to it, and
// swipe/drag or the arrow keys work too.
// ────────────────────────────────────────────────────────────────────────────
const BEYOND = [{
  src: "assets/about/roulette/hackathon.jpg",
  caption: "at a hackathon"
}, {
  src: "assets/about/roulette/chinese-roots.jpg",
  caption: "connecting with my Chinese roots"
}, {
  src: "assets/about/roulette/drawing.jpg",
  caption: "drawing"
}, {
  src: "assets/about/roulette/art-and-design.jpg",
  caption: "engaging with art & design"
}, {
  src: "assets/about/roulette/new-technology.jpg",
  caption: "exploring new technology"
}, {
  src: "assets/about/roulette/animal-lover.jpg",
  caption: "hanging out with animals"
}, {
  src: "assets/about/roulette/tennis.jpg",
  caption: "playing tennis"
}, {
  src: "assets/about/roulette/violin.jpg",
  caption: "playing violin"
}];
function BeyondCarousel() {
  const isMobile = useIsMobile();
  const n = BEYOND.length;
  const [idx, setIdx] = useStateA(0);
  const [paused, setPaused] = useStateA(false);
  const drag = useRefA(null);
  const go = d => setIdx(i => (i + d + n) % n);
  useEffectA(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 4500);
    return () => clearInterval(t);
  }, [paused, idx]);
  const onDown = e => {
    drag.current = {
      x: e.clientX,
      moved: false
    };
  };
  const swiped = useRefA(false);
  const onUp = e => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    const dx = e.clientX - d.x;
    // a swipe moves one photo; swallow the click that follows it
    swiped.current = Math.abs(dx) > 40;
    if (swiped.current) go(dx < 0 ? 1 : -1);
  };
  const cardW = isMobile ? 210 : 280;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onKeyDown: e => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    },
    tabIndex: 0,
    "aria-roledescription": "carousel",
    "aria-label": "Outside of designing",
    style: {
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...aMono,
      display: "block",
      textAlign: "center"
    }
  }, "Outside of designing, you'll find me\u2026"), /*#__PURE__*/React.createElement("div", {
    onPointerDown: onDown,
    onPointerUp: onUp,
    onPointerCancel: () => drag.current = null,
    style: {
      position: "relative",
      height: cardW * 1.25 + 90,
      marginTop: 28,
      touchAction: "pan-y",
      userSelect: "none"
    }
  }, BEYOND.map((item, i) => {
    // shortest way round the loop, so the last photo sits left of the first
    let d = i - idx;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    const side = Math.abs(d);
    const shown = side <= 1;
    // the ones further out wait just behind the neighbours (not off to
    // the sides, where they'd widen the page)
    const pos = Math.max(-1.2, Math.min(1.2, d));
    return /*#__PURE__*/React.createElement("div", {
      key: item.src,
      onClick: () => {
        if (swiped.current) {
          swiped.current = false;
          return;
        }
        go(d === 0 ? 1 : d);
      },
      "aria-hidden": d !== 0,
      style: {
        position: "absolute",
        left: "50%",
        top: 8,
        width: cardW,
        transform: `translateX(calc(-50% + ${pos * (isMobile ? 46 : 58)}%)) rotate(${pos * 7 + (d === 0 ? -1.5 : 0)}deg) scale(${d === 0 ? 1 : 0.76})`,
        transformOrigin: "50% 80%",
        zIndex: 10 - side,
        opacity: d === 0 ? 1 : shown ? 0.5 : 0,
        pointerEvents: shown ? "auto" : "none",
        cursor: "pointer",
        transition: "transform .7s cubic-bezier(.2,.8,.2,1), opacity .5s ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#FFFFFF",
        padding: "9px 9px 0",
        border: "1px solid var(--line-soft)",
        boxShadow: d === 0 ? "0 1px 2px rgba(14,14,12,0.08), 0 22px 40px -22px rgba(14,14,12,0.4)" : "0 1px 2px rgba(14,14,12,0.06), 0 10px 20px -14px rgba(14,14,12,0.3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "4 / 5",
        overflow: "hidden",
        background: "var(--bg-soft)"
      }
    }, /*#__PURE__*/React.createElement(Media, {
      src: item.src,
      video: item.video,
      alt: item.caption,
      fill: true,
      minHeight: 0,
      draggable: false
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        height: isMobile ? 44 : 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 6px",
        fontFamily: A_HAND,
        fontWeight: 600,
        fontSize: isMobile ? 18 : 21,
        lineHeight: 1,
        color: "var(--ink)"
      }
    }, item.caption)));
  })));
}

// ────────────────────────────────────────────────────────────────────────────
// HERO — the photo carousel beside "Who is Lin Nora?" on desktop; stacked
// (heading first) on phones
// ────────────────────────────────────────────────────────────────────────────
function AboutHero() {
  const isMobile = useIsMobile();
  const heading = /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: isMobile ? 0 : "clamp(16px, 4vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: A_SANS,
      fontWeight: 400,
      color: "var(--ink)",
      fontSize: isMobile ? 44 : "clamp(52px, 5.6vw, 88px)",
      lineHeight: 1,
      letterSpacing: "-0.035em"
    }
  }, "Who is", isMobile ? " " : /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 400,
      whiteSpace: "nowrap"
    }
  }, "Lin Nora"), "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${isMobile ? 24 : 32}px 0 0`,
      fontFamily: A_MONO,
      fontSize: isMobile ? 15 : 18,
      lineHeight: 1.6,
      color: "var(--ink)"
    }
  }, "As a", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px dotted var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Typewriter, {
    words: ["designer", "teammate", "project leader", "dying optimist"]
  }))));
  return (
    /*#__PURE__*/
    // the neighbouring photos may peek past the screen edge; clip, don't scroll
    React.createElement("section", {
      style: {
        padding: `${isMobile ? 48 : 72}px ${A_GUTTER} 0`,
        overflowX: "clip"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(0, 1fr)",
        columnGap: "clamp(40px, 6vw, 110px)",
        rowGap: 56,
        alignItems: "center",
        maxWidth: 1240,
        margin: "0 auto"
      }
    }, isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, heading, /*#__PURE__*/React.createElement(BeyondCarousel, null)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BeyondCarousel, null), heading)))
  );
}

// ────────────────────────────────────────────────────────────────────────────
// PHILOSOPHY — between the photos and the roadmap: John Heskett's card, his
// quote with three phrases selected (like text on screen) as you scroll past,
// and a short note on how Lin Nora applies it.
// ────────────────────────────────────────────────────────────────────────────
// the phrases that get selected as you scroll; each ends its own line on desktop
const QUOTE_MARKS = [{
  text: "shaping and making"
}, {
  text: "utilitarian needs"
}, {
  text: "create meaning"
}];
function MarkedQuote() {
  const isMobile = useIsMobile();
  const wrapRef = useRefA(null);
  const markRefs = useRefA([]);
  const [boxes, setBoxes] = useStateA([]);
  const [progress, setProgress] = useStateA(0);

  // where each marked phrase sits inside the quote block
  useEffectA(() => {
    const measure = () => {
      const w = wrapRef.current;
      if (!w) return;
      const o = w.getBoundingClientRect();
      setBoxes(markRefs.current.map(el => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left - o.left,
          y: r.top - o.top,
          w: r.width,
          h: r.height
        };
      }));
    };
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isMobile]);

  // how far the quote has been scrolled through: 0 as it enters, 1 by the
  // time it sits a little above the middle of the screen
  useEffectA(() => {
    let raf = null;
    const update = () => {
      raf = null;
      const w = wrapRef.current;
      if (!w) return;
      const r = w.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (vh * 0.5))));
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const local = k => Math.max(0, Math.min(1, progress * QUOTE_MARKS.length - k));
  const mark = k => /*#__PURE__*/React.createElement("span", {
    ref: el => markRefs.current[k] = el,
    style: {
      whiteSpace: "nowrap",
      WebkitTextStroke: `${(0.7 * local(k)).toFixed(2)}px var(--ink)`
    }
  }, QUOTE_MARKS[k].text);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      position: "relative",
      containerType: "inline-size"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      zIndex: 1,
      margin: 0,
      fontFamily: A_SANS,
      fontWeight: 300,
      // sized to its column so the three lines always fit
      fontSize: isMobile ? 26 : "3.9cqw",
      lineHeight: isMobile ? 1.6 : 1.75,
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u201CDesign is the human capacity for ", mark(0), " in ways that satisfy our ", mark(1), " and ", mark(2), ".\u201D") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u201CDesign is the human capacity for ", mark(0), /*#__PURE__*/React.createElement("br", null), "in ways that satisfy our ", mark(1), /*#__PURE__*/React.createElement("br", null), "and ", mark(2), ".\u201D")), boxes.map((b, k) => {
    const t = local(k);
    const x = b.x - 5,
      y = b.y + b.h * 0.1,
      h = b.h * 0.82,
      w = (b.w + 10) * t;
    const on = t > 0.001 ? 1 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      "aria-hidden": true,
      style: {
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        pointerEvents: "none",
        zIndex: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(14,14,12,0.075)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 1.5,
        background: "var(--ink)",
        opacity: on
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: -3,
        bottom: -6,
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--ink)",
        opacity: on
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        right: -1.5,
        top: 0,
        bottom: 0,
        width: 1.5,
        background: "var(--ink)",
        opacity: on
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        right: -4.5,
        top: -6,
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--ink)",
        opacity: on
      }
    }));
  })));
}
function PhilosophyLetter() {
  const isMobile = useIsMobile();
  const [ref, visible] = useReveal(0.1);
  const [lift, setLift] = useStateA(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${isMobile ? 96 : 180}px ${A_GUTTER}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      maxWidth: 1100,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
      columnGap: "clamp(48px, 7vw, 110px)",
      rowGap: 48,
      alignItems: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(30px)",
      transition: `opacity .8s ease, transform 1s ${A_EASE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: isMobile ? 170 : "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setLift(true),
    onMouseLeave: () => setLift(false),
    style: {
      position: "relative",
      transform: lift ? "rotate(-1deg) translateY(-6px)" : "rotate(-3deg)",
      transition: `transform .5s ${A_EASE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      padding: "9px 9px 34px",
      border: "1px solid var(--line-soft)",
      boxShadow: lift ? "0 1px 2px rgba(14,14,12,0.08), 0 24px 36px -18px rgba(14,14,12,0.38)" : "0 1px 2px rgba(14,14,12,0.08), 0 14px 26px -14px rgba(14,14,12,0.32)",
      transition: "box-shadow .5s ease"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/about/john-heskett.png",
    alt: "John Heskett",
    draggable: false,
    style: {
      display: "block",
      width: "100%",
      aspectRatio: "1 / 1",
      objectFit: "contain",
      background: "#FFFFFF"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 10,
      textAlign: "center",
      ...aMono,
      fontSize: 10,
      color: "var(--ink)"
    }
  }, "John Heskett"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MarkedQuote, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 32 : 44,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...aMono,
      fontSize: 10
    }
  }, "How I apply it"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontFamily: A_SANS,
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--ink-2)"
    }
  }, "Design is a tool for positive change. Meaningful solutions come from deep empathy, collaborative processes and strategic thinking: experiences that don't only solve problems, but inspire better behaviour.")))));
}

// ────────────────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────────────────
function AboutPage() {
  useEffectA(() => {
    if (document.getElementById("__pf_kf")) return;
    const s = document.createElement("style");
    s.id = "__pf_kf";
    s.textContent = KEYFRAMES;
    document.head.appendChild(s);
  }, []);
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-artboard"
  }, /*#__PURE__*/React.createElement(AboutHeader, null), /*#__PURE__*/React.createElement(BackRow, null), /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(PhilosophyLetter, null), /*#__PURE__*/React.createElement(About, {
    heroless: true,
    noPhilosophy: true
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AboutPage, null));