// portfolio-project-eva.jsx, EVA project page
// Reveal (fade+rise on scroll) is shared from portfolio-core.jsx

function ProjectDetailEva() {
  const isMobile = useIsMobile();
  const KICKER = {
    margin: 0,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--muted)"
  };
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: isMobile ? 14 : 15,
    lineHeight: 1.65,
    letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };
  const PULLQUOTE = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: "clamp(20px, 2.1vw, 26px)",
    lineHeight: 1.3,
    letterSpacing: "-0.02em",
    color: "var(--ink)"
  };
  const STEP_TITLE = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: "clamp(26px, 3.2vw, 40px)",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    color: "var(--ink)"
  };
  const STEP_NUM = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? 28 : 36,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color: "var(--muted)"
  };
  const DIVIDER = {
    marginTop: isMobile ? 64 : 100,
    paddingTop: isMobile ? 28 : 40,
    borderTop: "1px solid var(--line-soft)"
  };
  const CONTENT_W = 1040;
  const TEXT_W = 620;
  const steps = [{
    num: "01",
    title: "Smell is the blind spot",
    photos: ["assets/eva/discover-1.svg", "assets/eva/discover-2.svg"],
    body: "In-car interaction is dominated by vision (83%), hearing (11%), and touch (3.5%). Smell gets just 1.5%, despite being the most direct path to instinctive behaviour and emotional memory. NIO, BMW, IM, and Zeekr have all explored cabin scent, but reactively: triggered by manual input or fatigue detection, never emotional state, and never before the driver arrives."
  }, {
    num: "02",
    title: "Designing for flourishing, not features",
    photos: ["assets/eva/define.svg"],
    body: "The problem wasn't a missing feature but a missing framing: car systems prioritise efficiency over experience. Through PERMA, the framework for human flourishing, we asked how a car could support positive emotion, engagement, relationships, meaning, and accomplishment, not just transport. The question became: how might the car sense your state and prepare for you before you arrive?"
  }, {
    num: "03",
    title: "Input, inference, output",
    photos: ["assets/eva/develop.svg"],
    body: "EVA runs as input, processing, output. Input: phone (calendar, location, activity), wearable (heart rate, stress, sleep), and the car itself. Processing fuses emotional inference with context: time, weather, traffic. Output spans four dimensions before entry: scent, lighting, a pre-selected playlist, and cabin comfort. The key itself became an emotional object, passively gathering scent and environmental data as you move."
  }, {
    num: "04",
    title: "Two days, five flourishing factors",
    photos: ["assets/eva/deliver-1.svg", "assets/eva/deliver-2.svg", "assets/eva/deliver-3.svg"],
    featured: true,
    body: "Two user journeys trace how EVA touches all five flourishing factors across a real day. Wang Wei returns exhausted; EVA has already read her stress. A warm door-handle vibration, soft light, and welcome message greet her; café ambiance and cocoa scent fill the cabin inside. In the second, EVA preps a road trip, sets a destination mood, and greets her by name on approach.",
    quote: "“Wait for your next trip.”"
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
      aspectRatio: "16 / 7",
      position: "relative",
      overflow: "hidden",
      background: "#0E0E0C",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "assets/eva/title-video.mov",
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
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
      gap: 10,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/eva/huf-logo.svg",
    alt: "Huf Group",
    style: {
      height: 52,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/eva/tongji-logo.svg",
    alt: "Tongji CDI",
    style: {
      height: 28,
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 40 : 56
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "EVA \xB7 Emotional Vehicle Assistant"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "14px 0 0",
      maxWidth: 900,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: "clamp(34px, 6vw, 76px)",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Your journey"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "begins before you enter the car."))), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "Intensive studio project",
    tags: ["Interaction Design", "AI Design"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 48 : 72
    }
  }, /*#__PURE__*/React.createElement(SectionNav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: CONTENT_W,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement("section", {
    id: "overview"
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "TLTR"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      fontSize: isMobile ? 15 : 17,
      color: "var(--ink)",
      maxWidth: TEXT_W
    }
  }, "Cars reset to zero every time you get in. EVA is an emotional vehicle assistant that reads data from your phone, wearable, and the car itself to interpret your emotional state, then prepares the cabin before you even open the door: scent, light, sound, and temperature adjusted proactively, by inference rather than manual input. The car key itself becomes a scent collector and emotional feedback device."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "assets/eva/overview-video.mov",
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
    style: {
      width: "100%",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...PULLQUOTE,
      marginTop: 22
    }
  }, "The journey no longer starts when you open the door."))), /*#__PURE__*/React.createElement("section", {
    id: "role",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "My role"), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
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
  }, "Interaction Designer", /*#__PURE__*/React.createElement("br", null), "team studio project"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 220
    }
  }, ["Research synthesis", "Concept development", "Interaction design", "Journey mapping", "System logic design", "Presentation & docs"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
      bottom: 0,
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
  }, [["XIAO Yucheng", "Designer"], ["ONG Koklin", "Designer"], ["WANG Pengxiang", "Designer"], ["ZHAO Zehui", "Designer"]].map(([name, role], i) => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", null, name), /*#__PURE__*/React.createElement("span", null, role)))))))), /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Design process"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      maxWidth: TEXT_W,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: isMobile ? 15 : 17,
      fontWeight: 400,
      letterSpacing: "-0.01em",
      color: "var(--ink)",
      lineHeight: 1.4
    }
  }, "The car interior is one of the most intimate spaces in daily life, and one of the least emotionally responsive."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 48 : 72,
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? 56 : 88
    }
  }, steps.map(step => /*#__PURE__*/React.createElement(Reveal, {
    key: step.num
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: isMobile ? 12 : 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: STEP_NUM
  }, step.num), /*#__PURE__*/React.createElement("h3", {
    style: STEP_TITLE
  }, step.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 20 : 28
    }
  }, /*#__PURE__*/React.createElement(MediaStack, {
    items: step.photos,
    featured: step.featured
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: isMobile ? 16 : 20,
      maxWidth: 560
    }
  }, step.body), step.quote && /*#__PURE__*/React.createElement("p", {
    style: {
      ...PULLQUOTE,
      marginTop: 16
    }
  }, step.quote))))), /*#__PURE__*/React.createElement("section", {
    id: "outcome",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Outcome & reflection"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...PULLQUOTE,
      marginTop: 16,
      maxWidth: TEXT_W
    }
  }, "Not a vehicle that responds to commands. A companion that reads context and prepares an environment around you."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 18,
      maxWidth: TEXT_W
    }
  }, "The most interesting design territory was the threshold before entry: the moment between effort and rest, the world and your space. The project raised questions worth continuing: how much data collection feels helpful versus intrusive, and what it means to design a relationship with an object that learns you over time."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      borderRadius: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "assets/eva/outcome.mov",
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
    style: {
      width: "100%",
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
  ProjectDetailEva
});