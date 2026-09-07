// portfolio-project-carbondex.jsx, Carbon DEX project page
// CarbonLattice (Three.js graphene-lattice visual) now lives in portfolio-core.jsx,
// shared with the homepage project card.

function ProjectDetailCarbonDex() {
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
      aspectRatio: "1259 / 550",
      position: "relative",
      overflow: "hidden",
      background: "#000000",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/carbon-dex/hero.svg?v=2",
    alt: "Carbon: EU ETS compliant carbon credits, decentralized exchange",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: isMobile ? "18%" : "14%",
      width: isMobile ? "48%" : "38%"
    }
  }, /*#__PURE__*/React.createElement(CarbonLattice, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "39%",
      width: isMobile ? "8%" : "10%"
    }
  }, /*#__PURE__*/React.createElement(CarbonLattice, null))), /*#__PURE__*/React.createElement("div", {
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
  }, "Carbon"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "A regulator-supervised on-chain exchange for EU compliance carbon credits.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "48 hour hackathon",
    tags: ["UX Design", "Web3"]
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
  }, "The \u20AC800B EU carbon market runs on trust with no verification: trades happen behind closed doors, and regulators only find out 9\u201318 months later, after the fact. Carbon is a regulator-supervised on-chain exchange for EU compliance carbon credits: every trade is visible, every credit traceable from mint to burn, and the regulator can freeze suspicious activity live on-chain but never front-run or extract value. The demo shipped three live viewports: a company view to trade and surrender credits, a regulator view with a live audit log and supervisory controls, and a public read-only view needing no wallet connection."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      aspectRatio: "16 / 9",
      borderRadius: 4,
      overflow: "hidden",
      border: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube.com/embed/-uXiNh0QJ5c",
    title: "Carbon product demo",
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      border: 0
    },
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerPolicy: "strict-origin-when-cross-origin",
    allowFullScreen: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
      gap: 1,
      background: "var(--line-soft)",
      border: "1px solid var(--line-soft)"
    }
  }, [["50%", "EU ETS-covered emissions, below 2005 levels"], ["15.5%", "Emissions reduction in 2023 alone"], ["€881B", "Annual trading volume"], ["€3B", "Daily spot trading volume"], ["~9–18 months", "Reporting lag to regulators"], ["€100", "Penalty per excess tonne of CO₂e"]].map(([val, label], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--bg)",
      padding: "20px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 500,
      fontSize: "clamp(20px, 2.2vw, 28px)",
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, val), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--muted)",
      lineHeight: 1.4
    }
  }, label)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "European Commission 2025 Carbon Market Report \xB7 ICAP \xB7 Homaio"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 32,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "How Carbon fixes it"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
      gap: 1,
      background: "var(--line-soft)",
      border: "1px solid var(--line-soft)"
    }
  }, [{
    before: "No real-time visibility",
    after: "Every transaction is recorded on-chain the instant it occurs, and the regulator has a live dashboard."
  }, {
    before: "Double counting & fraud",
    after: "Credits are tokenized on-chain, making double counting mathematically impossible."
  }, {
    before: "Auditability",
    after: "The entire transaction history of every credit is permanently and publicly auditable on-chain."
  }, {
    before: "Retirement proof",
    after: "A smart contract permanently burns the token, then issues an immutable on-chain proof of offset."
  }].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--bg)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      alignSelf: "flex-start",
      padding: "6px 12px",
      borderRadius: 999,
      border: "1px solid var(--line-soft)",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, m.before), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      color: "var(--muted)"
    }
  }, "\u2193"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      fontSize: 13
    }
  }, m.after))))), /*#__PURE__*/React.createElement("section", {
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
      gap: 18,
      position: "relative",
      minHeight: isMobile ? "auto" : 200
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 15,
      color: "var(--ink)",
      fontWeight: 500
    }
  }, "UX Designer", /*#__PURE__*/React.createElement("br", null), "in a hackathon team"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 240
    }
  }, ["Information architecture", "Design system", "Audit log design", "Certificate design", "Wallet & swap UI", "Regulator dashboard", "Public transparency view"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, t))), !isMobile && /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/lin-dotted.svg",
    alt: "",
    style: {
      position: "absolute",
      right: 0,
      bottom: -16,
      height: 130,
      width: "auto",
      objectFit: "contain",
      objectPosition: "bottom right",
      opacity: 0.85
    }
  })), !isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--line-soft)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, "Team members"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, [["Nahin Alif", "Business"], ["Fredrik Skaarup", "Frontend"], ["Parth Jain", "Backend"]].map(([name, role], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 320,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", null, name), /*#__PURE__*/React.createElement("span", null, role))))))), /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Design process"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "Unfamiliar territory, but that is what made it interesting. The core problem: the regulator was never designed in as a first-class actor, just an edge case receiving PDFs after the fact. So the interfaces followed the people, not the tech: a company needs its balance and a way to surrender credits, a regulator needs a live audit stream and the ability to act, and the public just needs to see the cap is holding, no wallet required. Design constraints were locked early too: no crypto aesthetics, no gradients, no neon, just institutional credibility legible within three seconds.")), /*#__PURE__*/React.createElement("section", {
    id: "outcome",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Outcome & reflection"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "Seeing all the creative ways people were using blockchain at ETH Prague was genuinely eye-opening. What stayed with me was how much of the work in a system like this is not technical, it is about designing trust. Who can see what. What actions are reversible. What the public record looks like. Left Prague with a completely new sense of what is being built out there, and a much clearer picture of where design sits in that space.")))), /*#__PURE__*/React.createElement("div", {
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
  ProjectDetailCarbonDex
});