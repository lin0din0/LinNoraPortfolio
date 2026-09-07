const {
  useEffect: useEffectAbout,
  useState: useStateAbout
} = React;
function StickyNav() {
  const [menuOpen, setMenuOpen] = useStateAbout(false);
  const isMobile = useIsMobile();
  useEffectAbout(() => {
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
      paddingTop: menuOpen ? 18 : 28,
      paddingBottom: menuOpen ? 18 : 28,
      paddingLeft: "clamp(24px, 5vw, 48px)",
      paddingRight: "clamp(24px, 5vw, 48px)",
      background: "rgba(250,250,247,0.82)",
      backdropFilter: "blur(10px) saturate(140%)",
      WebkitBackdropFilter: "blur(10px) saturate(140%)",
      borderBottom: "1px solid var(--line-soft)",
      transition: "padding .3s"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
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
      transition: "top .25s cubic-bezier(.2,.8,.2,1), transform .25s cubic-bezier(.2,.8,.2,1)"
    }
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, link("about.html", "About"), link("index.html#work", "Projects"), link("index.html#contact", "Connect"))), isMobile && /*#__PURE__*/React.createElement("div", {
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
  }, link("about.html", "About"), link("index.html#work", "Projects"), link("index.html#contact", "Connect"))));
}
function AboutApp() {
  useEffectAbout(() => {
    if (document.getElementById("__pf_kf")) return;
    const s = document.createElement("style");
    s.id = "__pf_kf";
    s.textContent = KEYFRAMES;
    document.head.appendChild(s);
  }, []);
  const noHover = () => {};
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-artboard",
    "data-bg": "warm"
  }, /*#__PURE__*/React.createElement(StickyNav, null), /*#__PURE__*/React.createElement(About, {
    onHover: noHover
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AboutApp, null));