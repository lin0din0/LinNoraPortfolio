// portfolio-project-volunteering.jsx, Volunteering My Way project page

function ProjectDetailVolunteering() {
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
      aspectRatio: "16 / 7",
      position: "relative",
      overflow: "hidden",
      background: "#F3F1EB",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/volunteering/title-video.svg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 22,
      right: 26,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/volunteering/red-cross-logo.svg",
    alt: "Red Cross",
    style: {
      height: 44,
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "Volunteering My Way"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "Designing a personal path into volunteering, from first curiosity to lasting engagement.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "12 week project",
    tags: ["Interaction and Service Design"]
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
  }, "Volunteers under 30 are declining at R\xF8de Kors. This 12-week project explores how to lower that threshold, and the result is a digital platform that makes it easier for young people to find their place, from first curiosity to lasting engagement. By making the volunteer journey personal and transparent, the platform meets young people where they are, since what they need is clarity, flexibility, and the experience of getting something back, and makes the path from curiosity to signed-up activity short, inspiring, and personal."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/volunteering/overview.svg",
    alt: "",
    style: {
      width: "100%",
      borderRadius: 4,
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
  }, "UX Designer in a team", /*#__PURE__*/React.createElement("br", null), "school project"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 220
    }
  }, ["User research & surveys", "Qualitative interviews", "Insight synthesis", "Concept development", "Service design (JTBD)", "Figma prototyping & testing"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
  }, [["Oda Yttredal", "Designer"]].map(([name, role], i) => /*#__PURE__*/React.createElement("div", {
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
  }, "The project started with research and insight work, with the goal of getting better acquainted with the organisation and what it means to be a volunteer, as well as mapping the current situation to understand the target group's needs."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, [{
    num: "1",
    title: "One entry point for very different people",
    body: "We surveyed 24 participants at Foss upper secondary school and Oslo Met on attitudes toward volunteering, then interviewed four young volunteers and Røde Kors staff about entry points, motivation, and friction. We also joined a volunteer breakfast at Frivilligsentralen, speaking with Norsk Studentorganisasjon and Frivillighet Norge's Secretary General.",
    photos: ["assets/volunteering/discover.svg"]
  }, {
    num: "2",
    title: "Meeting intrinsic motivation, not duty",
    body: "Three insights shaped the brief. People arrive with different values, free time, and goals, yet the entry point looked identical for everyone. Getting involved required too many steps and too much uncertainty about what you were signing up for. And reaching young people means meeting intrinsic motivation, not duty or guilt: the real question was whether this would help them grow, connect, or become more of who they want to be.",
    photos: ["assets/volunteering/define.svg"]
  }, {
    num: "3",
    title: "Curious, new, active, developing",
    body: "We mapped the platform around four journey stages (curious, new, active, developing), using Jobs To Be Done to anchor each feature in a real need. Inspiration came from Patagonia, Spotify, and Duolingo, via a service takeover workshop imagining Røde Kors in their language. Every prototype iteration went back in front of real users, and what we heard shaped what came next.",
    photos: ["assets/volunteering/develop-1.svg", "assets/volunteering/develop-2.svg", "assets/volunteering/develop-3.svg"]
  }, {
    num: "4",
    title: "Following Maria through all four stages",
    body: "The final concept follows Maria through all four stages: curious, she sees a Røde Kors Instagram ad and lands on an onboarding flow with personalised suggestions. New, she's welcomed into a chat and books her first activity. Active, a flexible calendar lets her mark unavailable days around exams. Developing, her personal page tracks hours and courses, with a downloadable certificate for her CV.",
    videos: ["assets/volunteering/deliver-1.mov", "assets/volunteering/deliver-2.mov", "assets/volunteering/deliver-3.mov", "assets/volunteering/develop-4.mov", "assets/volunteering/deliver-5.mov"]
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
  }, "The platform answers user needs across the entire volunteer journey, from the moment someone is curious to when they are an experienced volunteer. It makes the entry point clearer and simpler by meeting users where they are. It ensures that new volunteers are well received through hospitality that offers safety, belonging, and overview. It makes it easier to contribute by giving ownership of one's own time through a flexible calendar. And it motivates continued engagement by visualising effort, progress, and competence."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 16,
      maxWidth: 640
    }
  }, "If we were to continue the work, we would explore how to make the solution even simpler through more iterations and user tests with the target group. We would also look at how the solution functions backstage, to better understand which barriers and adjustments are needed to implement the concept. Even so, we believe the solution addresses a real need that is not met today: a platform that makes the volunteer journey more personal, transparent, and motivating."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "80%",
      maxWidth: 720,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/volunteering/outcome.svg",
    alt: "",
    style: {
      width: "100%",
      borderRadius: 18,
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
  ProjectDetailVolunteering
});