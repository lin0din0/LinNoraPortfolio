const {
  useEffect: useEffectPage,
  useState: useStatePage
} = React;
function StickyNav() {
  const [scrolled, setScrolled] = useStatePage(false);
  const [menuOpen, setMenuOpen] = useStatePage(false);
  const isMobile = useIsMobile();
  useEffectPage(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffectPage(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);
  const linkStyle = {
    color: "var(--ink)",
    textDecoration: "none",
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: "-0.005em"
  };
  const link = (href, label) => /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: () => setMenuOpen(false),
    style: linkStyle
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: scrolled || menuOpen ? 18 : 28,
      paddingBottom: scrolled || menuOpen ? 18 : 28,
      paddingLeft: "clamp(24px, 5vw, 48px)",
      paddingRight: "clamp(24px, 5vw, 48px)",
      background: scrolled || menuOpen ? "rgba(250,250,247,0.92)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(10px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled || menuOpen ? "blur(10px) saturate(140%)" : "none",
      borderBottom: scrolled || menuOpen ? "1px solid var(--line-soft)" : "1px solid transparent",
      transition: "padding .3s, background .3s, border-color .3s"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html#top",
    style: {
      color: "var(--ink)",
      textDecoration: "none",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: "-0.01em",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, "Lin Nora Tollefsen", /*#__PURE__*/React.createElement(DottedLogo, {
    size: 28
  })), isMobile ? /*#__PURE__*/React.createElement("button", {
    "aria-label": menuOpen ? "Close menu" : "Open menu",
    onClick: () => setMenuOpen(v => !v),
    style: {
      width: 36,
      height: 36,
      padding: 0,
      border: "1px solid var(--line-soft)",
      borderRadius: "50%",
      background: "var(--bg)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 14,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      width: "100%",
      height: 1,
      background: "var(--ink)",
      top: menuOpen ? 4.5 : 0,
      transform: menuOpen ? "rotate(45deg)" : "none",
      transition: "top .25s cubic-bezier(.2,.8,.2,1), transform .25s cubic-bezier(.2,.8,.2,1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      width: "100%",
      height: 1,
      background: "var(--ink)",
      top: menuOpen ? 4.5 : 9,
      transform: menuOpen ? "rotate(-45deg)" : "none",
      opacity: menuOpen ? 1 : 1,
      transition: "top .25s cubic-bezier(.2,.8,.2,1), transform .25s cubic-bezier(.2,.8,.2,1)"
    }
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, link("about.html", "About"), link("#work", "Projects"), link("#contact", "Connect"))), isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: menuOpen ? 220 : 0,
      overflow: "hidden",
      background: "rgba(250,250,247,0.97)",
      backdropFilter: "blur(10px) saturate(140%)",
      WebkitBackdropFilter: "blur(10px) saturate(140%)",
      borderBottom: menuOpen ? "1px solid var(--line-soft)" : "1px solid transparent",
      transition: "max-height .35s cubic-bezier(.2,.8,.2,1), border-color .35s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "8px clamp(24px, 5vw, 48px) 28px"
    }
  }, link("about.html", "About"), link("#work", "Projects"), link("#contact", "Connect"))));
}
function PageApp() {
  useEffectPage(() => {
    if (document.getElementById("__pf_kf")) return;
    const s = document.createElement("style");
    s.id = "__pf_kf";
    s.textContent = KEYFRAMES;
    document.head.appendChild(s);
  }, []);

  // Save scroll position continuously so a project page's back button can
  // return here at exactly the right spot. The browser's own scroll
  // restoration fires before this client-rendered content exists (the
  // page starts as an empty <div id="root">), so it has nothing to
  // scroll into and silently clamps to 0 — this restores manually once
  // the content (and any video/image layout) has settled instead.
  useEffectPage(() => {
    const KEY = "pf:scrollY:index";
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        sessionStorage.setItem(KEY, String(window.scrollY));
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    const saved = parseInt(sessionStorage.getItem(KEY) || "0", 10);
    if (saved > 0) {
      const restore = () => window.scrollTo({
        top: saved,
        behavior: "instant"
      });
      requestAnimationFrame(restore);
      setTimeout(restore, 60);
      setTimeout(restore, 250);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const noHover = () => {};
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-artboard",
    "data-bg": "warm"
  }, /*#__PURE__*/React.createElement(StickyNav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "calc(100vh - 86px)"
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    onHover: noHover
  })), /*#__PURE__*/React.createElement(Reveal, {
    threshold: 0.05
  }, /*#__PURE__*/React.createElement(Projects, {
    onHover: noHover
  })), /*#__PURE__*/React.createElement(Reveal, {
    threshold: 0.05
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "80vh"
    }
  }, /*#__PURE__*/React.createElement(Footer, {
    onHover: noHover
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(PageApp, null));