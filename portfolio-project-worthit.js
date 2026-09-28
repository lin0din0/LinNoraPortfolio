// portfolio-project-worthit.jsx, Worth It? project page

function ProjectDetailWorthIt() {
  const isMobile = useIsMobile();
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13,
    lineHeight: 1.5,
    letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };
  const KICKER = {
    margin: 0,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--muted)"
  };
  const DIVIDER = {
    marginTop: isMobile ? 64 : 100,
    paddingTop: isMobile ? 28 : 40,
    borderTop: "1px solid var(--line-soft)"
  };
  const steps = [{
    num: "1",
    title: "My own spreadsheet, as the starting point",
    body: "The insight came from my own frustration as a cosmetics buyer. I started sketching my own product usage (what I reached for, how long things lasted, what I actually paid per use) and the gap between price and value was striking once visualised. That data became an Excel dataset from my own collection, and that spreadsheet became the conceptual foundation of Worth It.",
    items: ["assets/worth-it/discover.svg", "assets/worth-it/discover-2.svg"]
  }, {
    num: "2",
    title: "Atoms before screens",
    body: "Grounded in that personal data, I built the design system on atomic design principles in Figma, from the smallest elements outward: WCAG-compliant colour styles, text styles from H1 to Label, and components built up from atoms to full patterns: button, icon button, radio, checkbox, toggle, tag, input field, container, each with variables and states. Every interface decision that followed had a rule behind it because the system came first.",
    items: ["assets/worth-it/build-1.svg", "assets/worth-it/build-2.svg", "assets/worth-it/build-3.svg"]
  }, {
    num: "3",
    title: "From spreadsheet to shelf",
    body: "The final interface is a light, easy flow: log products, rate them on frequency, effect, and price, and the app reflects whether they're actually worth what you pay. The layer underneath makes it more than personal: based on your ratings and how others logged similar products, Worth It surfaces alternatives that might fit you better. From hand-drawn visualisations to a spreadsheet to a design system to a product: using myself as the first user and following the thread all the way through.",
    items: ["assets/worth-it/deliver-video.mov"]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-artboard",
    "data-bg": "warm",
    style: {
      width: "100%",
      height: "100%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      color: "var(--ink)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(BackButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "96px 20px 64px" : "120px 64px 100px",
      maxWidth: 1400,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/worth-it/title.svg",
    alt: "Worth It? hero",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(40px, 10vw, 88px)",
      lineHeight: 1,
      letterSpacing: "-0.035em",
      color: "var(--ink)"
    }
  }, "Worth It?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "From dataset to design: making cosmetic ingredient data legible for everyday consumers.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "2 week project",
    tags: ["UI Design", "Design Systems"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(SectionNav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("section", {
    id: "overview"
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "TLTR"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 640
    }
  }, "Built a full Figma UI kit (components, autolayout, variables, WCAG-compliant states) then used it to design Worth It, a mobile app that answers a question most consumers never get: is this actually worth what it costs? It lets users compare cosmetics across four dimensions, price, ethics, lasting effect, and ingredients, translating a large ingredient dataset into a scannable interface so that someone standing in front of a shelf can make an informed choice in seconds, aimed at the everyday buyer who wants better information without becoming an expert to get it."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      borderRadius: 4,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/worth-it/overview.svg",
    alt: "Worth It overview",
    style: {
      width: "100%",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    id: "role",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "My role"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      maxWidth: 780,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1px 1fr",
      gap: isMobile ? 32 : 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 15,
      color: "var(--ink)",
      fontWeight: 500
    }
  }, "UI Designer", /*#__PURE__*/React.createElement("br", null), "individual school project"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 240
    }
  }, ["UI kit (Figma)", "Component design", "Autolayout", "Icon design", "WCAG compliance", "Mobile prototype"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, t)))), !isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--line-soft)"
    }
  }), !isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/lin-dotted.svg",
    alt: "",
    style: {
      height: 240,
      width: "auto",
      objectFit: "contain",
      opacity: 0.85
    }
  })))), /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Design process"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 640
    }
  }, "The project moved from personal observation to structured data to design system to finished interface. Each phase built directly on the last."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, steps.map(step => /*#__PURE__*/React.createElement(ProcessStep, {
    key: step.num,
    step: step
  })))), /*#__PURE__*/React.createElement("section", {
    id: "outcome",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Outcome & reflection"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 640
    }
  }, "Building the design system before touching the screens produced a noticeably different quality of output. Decisions were intentional rather than reactive and the interface held together because the rules had already been set."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 16,
      maxWidth: 640
    }
  }, "The next step would be stress testing the system against more content types and exploring how ingredient data could be visualised for someone scanning a shelf rather than reading at a desk."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      borderRadius: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: "assets/worth-it/outcome-video.mov",
    minHeight: 280
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 80,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 28px",
      borderRadius: 999,
      border: "1px solid var(--ink)",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, "\u2191\xA0\xA0Back to top"))));
}
Object.assign(window, {
  ProjectDetailWorthIt
});