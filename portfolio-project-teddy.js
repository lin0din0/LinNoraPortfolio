// portfolio-project-teddy.jsx, Teddy project page

function ProjectDetailTeddy() {
  const isMobile = useIsMobile();
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13,
    lineHeight: 1.5,
    letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };
  const MOMENT_H = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: 22,
    letterSpacing: "-0.02em",
    color: "var(--ink)"
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
      aspectRatio: "16 / 7",
      position: "relative",
      overflow: "hidden",
      background: "#FEFEFA",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/teddy/title.svg",
    alt: "Teddy: traveling with Teddy becomes less unpredictable, overwhelming and stressful",
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
  }, "School project"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 11,
      color: "var(--ink-2)",
      letterSpacing: "-0.005em"
    }
  }, "AHO"))), /*#__PURE__*/React.createElement("div", {
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
  }, "Teddy"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "A guided navigation and planning companion for neurodivergent travellers at the airport.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "Short studio project",
    tags: ["UX Design", "Inclusive Design"]
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
      maxWidth: 680
    }
  }, "Airports are overwhelming by design: confusing signage, unpredictable noise, no discreet way to ask for help. Teddy is a gamified planning and navigation app for people with ADHD, ADD, and autism that supports them through every stage of airport travel, from planning at home to navigating the terminal in real time. It reduces cognitive load by showing only the next step at any given moment, and works in noisy, crowded environments without drawing attention to the user. The goal was to feel normal and discreet rather than clinical, since research showed that solutions which look like assistive tools often go unused due to social stigma.")), /*#__PURE__*/React.createElement("section", {
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
  }, "UX Designer", /*#__PURE__*/React.createElement("br", null), "in a school project"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 220
    }
  }, ["User research", "Insight synthesis", "Concept development", "UX design", "Interaction & journey design"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
  }, ["Akash Neil Das", "Maria Foschi", "Nafsika Theou", "Julien Chaloub"].map((name, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 13,
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, name)))))), /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Design process"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 18,
      maxWidth: 720
    }
  }, "The brief: design for an airport environment with a neurodivergent user group, where the solution had to work in noisy, crowded conditions, be portable, attract minimal attention, and address multiple invisible disabilities at once. An interview with Emma, 19 (arthritis, a sister with ADHD and autism, a mother with ADHD) surfaced three insights that shaped everything after: planning reduces anxiety, since uncertainty before arrival is already stressful; cognitive overload is the core issue, so the interface needed to show only the next step; and social stigma shapes what tools people actually use, since Emma's sister avoided noise-cancelling headphones for fear of standing out."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "Mapping the neurodivergent passenger journey showed exactly where the system breaks: pre-arrival procedures are unclear, the environment is unpredictable, and there's no accessible sensory information on noise, crowd density or lighting. No existing app combined pre-trip planning with real-time in-airport navigation for low cognitive load: users were juggling five different apps for one journey, exactly the fragmentation that exhausts them most."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "Three principles shaped what came next: show only one step at a time, never the full picture; feel playful and familiar rather than clinical, using gamification to make progress rewarding; and work without headphones, in loud environments, through visual and haptic cues instead of sound. We named the product Teddy, built around a companion character guiding each step: packing, check-in, security, boarding."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Where the anxiety starts"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "Planning and navigating are where it concentrates: 40% of people report travel anxiety before they even leave, and juggling several apps for one journey compounds it. The same tension came straight from a family interview: \"I need structure, the problem is having to go to 5 different apps.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: 16
    }
  }, ["assets/teddy/figma/slide-persona-laura.svg", "assets/teddy/figma/slide-planning.svg", "assets/teddy/figma/slide-navigation.svg"].map(src => /*#__PURE__*/React.createElement("img", {
    key: src,
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Meet Teddy"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "The companion character carries the tone through onboarding, warm and playful rather than clinical, turning \"unpredictable, overwhelming, stressful\" into something a user builds and makes their own."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: 16
    }
  }, ["assets/teddy/videos/introducing-teddy.mov", "assets/teddy/videos/customize-character.mov"].map(src => /*#__PURE__*/React.createElement("video", {
    key: src,
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
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Guided, not managed"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "Once a trip starts, Teddy holds the plan in the background: one structured timeline, real-time updates when things change, and a quiet nudge exactly when it's needed, like a passport reminder before landing."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/teddy/figma/slide-timeline.png",
    alt: "",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }), ["assets/teddy/videos/schedule.mov", "assets/teddy/videos/clock-support.mov"].map(src => /*#__PURE__*/React.createElement("video", {
    key: src,
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
  }))))), /*#__PURE__*/React.createElement("section", {
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
  }, "Teddy started from the insight that designing for people at the edges of cognitive and sensory capacity produces tools that are better for everyone. The airport is one of the most hostile environments for neurodivergent users, but the principles that make Teddy work, showing one step at a time, reducing noise in the interface, building in predictability, and making the tool feel normal rather than assistive, apply far beyond airports. The most important design decision was the tone: warm, companion-like, and non-clinical. If the app feels like it belongs to the user rather than to a medical system, people will actually use it."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      aspectRatio: "16 / 7",
      position: "relative",
      overflow: "hidden",
      background: "#FEFEFA",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/teddy/figma/outcome-reflection.svg",
    alt: "Team Teddy \xB7 Disability Tech Denmark",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
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
  ProjectDetailTeddy
});