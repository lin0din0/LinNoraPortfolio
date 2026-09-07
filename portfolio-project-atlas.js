// portfolio-project-atlas.jsx, Atlas project page

function ProjectDetailAtlas() {
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
    title: "Repetitive tickets, costly misroutes",
    body: "Interviews with 2nd line operators working in Alfa TT were used to map where the automation potential actually lay, and two findings shaped the whole project. First, a large share of tickets were low hanging fruit: repetitive cases with identical patterns and outcomes, and operators were spending disproportionate time on these instead of the complex cases they were actually interested in solving. Second, inconsistent problem descriptions from customer service were sometimes causing full technician workorders to be sent for issues that a much cheaper equipment change could resolve, creating unnecessary cost. These two findings, repetitive volume and costly misrouting between workorders and equipment swaps, became the focus of the project.",
    items: ["assets/atlas/discover-1.mov", "assets/atlas/discover-2.svg"]
  }, {
    num: "2",
    title: "Depth over breadth",
    body: "There was clearly a lot of potential for automation, but with only seven weeks, the team had to define a realistic scope, one that was technically feasible to implement into Alfa TT and push into production rather than purely aspirational. That meant choosing depth over breadth: focusing on one area with high precision rather than spreading effort thin. The scope was defined as broadband related trouble tickets in the consumer market, since this segment had the highest concentration of repetitive, well patterned cases and was the easiest to target with confidence.",
    items: ["assets/atlas/define.svg"]
  }, {
    num: "3",
    title: "In production, four ways forward",
    body: "Delivery centered on Atlas's production performance inside Alfa TT: the cases it handles correctly, the cases where it still falls back to human review, and an estimated annual saving of around 2M NOK. Alongside the results, the team outlined four directions to keep raising the automation rate: breaking down the information silo between customer service and 2nd line so tickets arrive with better data, continuing to fine tune the prompt and rules, connecting Atlas directly to diagnostic test systems rather than relying on written descriptions alone, and introducing Hermes, a companion service to fill missing information via customer SMS before a case falls back to a human.",
    items: ["assets/atlas/deliver.svg"]
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
    src: "assets/atlas/title.svg",
    alt: "Atlas hero",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 14,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Telenor \xB7 Summer Internship"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(40px, 10vw, 88px)",
      lineHeight: 1,
      letterSpacing: "-0.035em",
      color: "var(--ink)"
    }
  }, "Atlas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)",
      maxWidth: 720
    }
  }, "AI Decision Support for Broadband Fault Resolution: building an AI agent into Alfa TT, Telenor's trouble ticket platform, to automate repetitive case handling for 2nd line broadband support.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "7-week internship \xB7 ongoing part-time role",
    tags: ["AI/LLM Evaluation", "Decision Logic Design", "Applied AI"]
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
      maxWidth: 720
    }
  }, "Alfa TT is the platform Telenor's 2nd line broadband support team uses to handle trouble tickets: fault reports that require deciding whether to dispatch a technician, send replacement equipment, bill the customer, or escalate. Operators were spending significant time on repetitive, near identical cases, and inconsistent problem descriptions were sometimes triggering full technician dispatches when a cheaper equipment swap would do. Atlas, an AI agent built on Claude Sonnet 5, was implemented directly into that workflow to read each ticket and recommend an action, or fall back to human review when certainty is low. Calibrated over seven weeks, it's now live in production, on track to save roughly 2M NOK annually, while holding a conservative fallback rate to keep trust high as it expands."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/atlas/tltr.svg",
    alt: "Atlas overview",
    style: {
      width: "100%",
      height: "auto",
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
  }, "Applied AI Intern", /*#__PURE__*/React.createElement("br", null), "Telenor \xB7 Alfa TT department"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 220
    }
  }, ["Prompt engineering", "Model output evaluation", "Operator interviews", "Certainty scoring system", "Evaluation pipeline (Excel/pandas)", "Handoff materials"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
  }, [["Axel", "Teammate, Atlas development"], ["Maria", "Teammate, Atlas development"]].map(([name, role], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      maxWidth: 320,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", null, name), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, role))))))), /*#__PURE__*/React.createElement("section", {
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
  }, "With seven weeks to work with, the process was about finding where automation could realistically be pushed into Alfa TT, the platform operators use every day: mapping the ticket landscape to find the highest potential area, scoping what was technically feasible, and then calibrating an agent tightly enough to be trusted with real decisions rather than just chasing the highest possible automation rate."), /*#__PURE__*/React.createElement("div", {
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
      maxWidth: 720
    }
  }, "Atlas runs on Claude Sonnet 5, reading each ticket's problem description directly within Alfa TT. The hardest part wasn't accuracy, it was consistency: near identical descriptions sometimes needed different outcomes because customer service had left out information, and balancing the prompt's logic against that inconsistency became the real engineering problem. We kept the fallback to human review deliberately strict rather than push automation higher at the cost of more frequent wrong calls."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "Atlas is live in production within Alfa TT, and the team is continuing to build on the four directions defined at handoff. The clearest lesson from the project was that automation quality isn't just an accuracy number. A system that's right most of the time but unpredictable when it's wrong is worse than one that's more conservative but consistent, because consistency is what lets a team actually trust and expand it. I'm continuing part time on the project, with the near term goal of steadily raising the automation rate through the four directions identified, without compromising that trust."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      borderRadius: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/atlas/outcome-team.svg",
    alt: "The Atlas team at Telenor",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
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
  ProjectDetailAtlas
});