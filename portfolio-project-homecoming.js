// portfolio-project-homecoming.jsx, Homecoming e-waste initiative project page

function ProjectDetailHomecoming() {
  const isMobile = useIsMobile();
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13,
    lineHeight: 1.5,
    letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";
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
      aspectRatio: "16 / 7",
      position: "relative",
      overflow: "hidden",
      background: CHECKER,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 22,
      right: 26,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "0.01em",
      color: "var(--ink)"
    }
  }, "PSSD Studio 1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 11,
      color: "var(--ink-2)",
      letterSpacing: "-0.005em"
    }
  }, "Prof. Avril Accolla"))), /*#__PURE__*/React.createElement("div", {
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
  }, "Homecoming"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "A school workshop toolkit designed to build e-waste recycling habits across generations in China.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "12 week project",
    tags: ["Product Service System Design"]
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
  }, "60% of China's e-waste flows through informal, unsafe channels because they're more convenient, so the real design question wasn't a better collection app: it was shifting the cultural norm around disposal. The answer is the Homecoming Initiative, a school based workshop toolkit connecting primary schools, private recycling companies, and government. Students bring a piece of e-waste as their entry ticket, disassemble and upcycle real devices hands-on, and leave with first-hand knowledge of where responsible recycling leads, aiming not for immediate behaviour change but a generational mindset shift."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      aspectRatio: "16 / 8",
      background: CHECKER,
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, "Images")))), /*#__PURE__*/React.createElement("section", {
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
  }, "Designer in a team", /*#__PURE__*/React.createElement("br", null), "studio project"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 220
    }
  }, ["Ecosystem mapping", "ANAs framework", "Workshop facilitation", "Service blueprint", "Future vision scenarios", "Presentation & docs"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
  }, [["Yuqi Zhao", "Designer"], ["Vitaliy Khan", "Designer"]].map(([name, role], i) => /*#__PURE__*/React.createElement("div", {
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
      maxWidth: 640
    }
  }, "The project moved from understanding a fragmented system, to identifying where design could create new connections within it, to specifying a product service system that introduces new actors and new flows without dismantling what already works."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, [{
    num: "1",
    title: "Trust is slower, and pays less",
    body: "We framed the problem through Xiao Li, a 29-year-old in Chengdu disposing of an old phone: formal channels are trustworthy but slower and pay less, while an informal collector pays 30% more, no forms, and dismantles it with unsafe tools he never sees. Formal recycling captures only ~20% of China's WEEE, isn't profitable without subsidy, and even strong players like ATRenew have limited market reach."
  }, {
    num: "2",
    title: "Redesigning the relationships, not the actors",
    body: "Using an ANAs framework, we mapped aspirations, necessities, and abilities across three stakeholders. Users want trust and convenience but lack awareness. Government has legislative power and budget but struggles with compliance monitoring. Companies have logistics and brand power but need consumer trust. The challenge wasn't replacing any actor: it was redesigning the relationships between them."
  }, {
    num: "3",
    title: "What people already trust",
    body: "A workshop surfaced four patterns: formal recycling stores aren't a common memory, informal repair shops feel familiar, doorstep collection wins on cashback, and waste piles up uncategorised. Case studies from Patagonia, the WEEE Forum, the E-Waste Race, and Beijing MaaS pointed the direction: storytelling builds loyalty, schools scale participation, and government has real coordinating power when it uses it."
  }, {
    num: "4",
    title: "One piece of e-waste as the entry ticket",
    body: "The Homecoming Initiative connects schools, toolkit manufacturers, and formal recyclers through a workshop programme: students bring e-waste as their entry ticket, then build simple circuits from real disassembled components (around 20 phone-component types can be upcycled), earning credit in a recycling account. The service blueprint runs three phases: awareness and registration, the workshop, and continued participation."
  }].map(step => /*#__PURE__*/React.createElement(ProcessStep, {
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
  }, "The Homecoming Initiative creates shared value across the system. Formal platforms gain cultural visibility. Schools gain an engaging sustainability curriculum. Government gains a behaviour change lever that does not require enforcement. The future arc runs from a child at a workshop, to a teenager who remembers that experience when their phone breaks, to an adult who brings their own child back."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 16,
      maxWidth: 640
    }
  }, "The most powerful design intervention in a fragmented system is not a better interface. It is a new relationship between actors who have not previously collaborated. What formal recycling lacks in China is not infrastructure but familiarity. Embedding that trust at the level of childhood experience is a longer loop, but it is the one that actually changes the system."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      aspectRatio: "16 / 8",
      background: CHECKER,
      borderRadius: 18
    }
  }))))), /*#__PURE__*/React.createElement("div", {
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
  ProjectDetailHomecoming
});