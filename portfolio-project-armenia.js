// portfolio-project-armenia.jsx, Mixed Signals (Information Integrity in Armenia) project page

function ProjectDetailArmenia() {
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
    src: "assets/armenia/slides/title.svg",
    alt: "Mixed Signals: how the lack of information integrity influences the Armenian people and their democratic process",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
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
  }, "Introduction to Systems Oriented Design, AHO \xB7 In collaboration with UNDP Global Policy Centre for Governance"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(34px, 8vw, 72px)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "var(--ink)"
    }
  }, "Mixed Signals"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "How the lack of information integrity influences the Armenian people and their democratic process.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "7 week project",
    tags: ["Systems Oriented Design"],
    featured: {
      label: "Featured on Systems Oriented Design",
      href: "https://systemsorienteddesign.net/student-project-spotlight-%c2%b7-information-integrity/"
    }
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
  }, "To understand Armenia's current situation, picture it as a complicated love triangle. Armenia has had an on-and-off relationship with its toxic ex, Russia, ever since their breakup in 1991, leaving it financially dependent. Then came a new suitor: the EU, whose pull grew stronger after the election of a reformist prime minister in 2018. But like children in a custody battle, the population is split on which partner is the better choice."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "The information landscape is the battleground: privately owned media pushes political bias, digital channels amplify Western influence, and competing narratives erode trust in institutions. We followed Melina, a young Armenian woman navigating this every day, to make the system human, and delivered a full systems oriented design report mapping the information integrity landscape, from present situation through future scenarios to interventions across five areas: education, involvement, government, healing, and media regulation.")), /*#__PURE__*/React.createElement("section", {
    id: "role",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "My role"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1px 1fr 1px 1fr",
      gap: isMobile ? 32 : 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      position: "relative",
      minHeight: isMobile ? "auto" : 180
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 15,
      color: "var(--ink)",
      fontWeight: 500
    }
  }, "Designer in a team", /*#__PURE__*/React.createElement("br", null), "studio project"), !isMobile && /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/lin-dotted.svg",
    alt: "",
    style: {
      position: "absolute",
      right: 0,
      bottom: -16,
      height: 110,
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
      gap: 12
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
  }, "Responsibilities"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, ["System mapping", "ZIPP analysis", "Iceberg model", "PESTEL analysis", "Future scenarios", "Leverage point mapping", "Intervention development", "Gigamap design", "Report writing"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
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
  }, [["Rebekka Fuglestad", "Designer"], ["Georg Ferdinand Nilsen", "Designer"], ["Signe Stålegård", "Designer"], ["Gudrun Hoff Gardå", "Designer"], ["Maria Jørgensen", "Designer"]].map(([name, role], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
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
  }, "Systems Oriented Design asks you to understand before you intervene. We spent most of the project mapping, not solving. The gigamap was the primary design artefact, a single visual holding the entire system: history, actors, problems, potentials, futures, and leverage points all at once."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/process.svg",
    alt: "From complexity to clarity, a systemic design process: system mapping, ZIPP analysis, future signals, iceberg model, PESTEL model, futures table, future scenarios with lenses, leverage point map, impact & feasibility evaluation",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "A day in the life"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "We started with Melina. She sits at home after work and gets a call from her father, who has left Armenia like many diaspora members. She wants to vote in the upcoming election but cannot find reliable information. The national broadcaster supports the ruling government. Online she finds the opposite, equally biased. Word of mouth is her most trusted source. She knows she can vote. She just cannot figure out what is true."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640,
      fontStyle: "italic"
    }
  }, "Melina is not a persona. She is the system made visible."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/current-situation.svg",
    alt: "A day in the life: Melina navigating a day of conflicting information sources",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "The present situation"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "Armenia's information landscape has specific structural problems. Only 30% of Armenians trust government institutions, shaped by decades of post-Soviet media manipulation. Fake accounts amplifying Azerbaijani narratives make it increasingly hard to separate fact from propaganda. Social media algorithms prioritise sensational content. Independent media exists but is financially starved and limited in reach. Brain drain removes the very people most likely to push for change."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "The potentials are real too. The 2018 Velvet Revolution showed that civic engagement can lead to genuine democratic shift. The diaspora has access to diverse media and can counterbalance domestic bias. Shared hardship creates solidarity. These were not decorative optimism: they were leverage points."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/problems.svg",
    alt: "Problems: Russia vs. the West, cyber war, lack of accountability, misinformation, tainted past, brain drain, algorithms, low funding",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/potentials.svg",
    alt: "Potentials: diversification of alliances, diaspora as a counterbalance, initiatives, unity, big impact, democracy, hope",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Armenia's history"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "To design interventions you first have to understand why the system looks the way it does. Armenia is caught in a geopolitical tug-of-war between Russia, which offers military security but undermines sovereignty, and the West, which promotes democracy but has been inconsistent with financial support. The Nagorno-Karabakh conflict, the CSTO relationship, the USAID-funded civil society initiatives, and the lingering effects of Soviet media culture all shape what Armenians see, hear, and trust. We mapped this as a love triangle not to be flippant but because the metaphor made the dependency structure immediately legible."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/love-triangle-history.svg",
    alt: "Armenia's history: caught in a love triangle, Russia as a toxic ex, the U.S. and EU as a new suitor",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/love-triangle-map.svg",
    alt: "System map: Armenia's government, media and population, and their relationships to Russia, Azerbaijan, Turkey, the USA and EU",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Future scenarios"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "We built two futures for Melina ten years out. In the undesirable scenario her grandmother sits anxiously in front of national TV, her husband has been arrested for speaking out against the government, and Melina's own skepticism of the state is treated as dangerous. In the desirable scenario she is pregnant, her Azerbaijani husband and their daughter come home from work and school, her daughter has learned in school that day not to trust everything she reads, and a notification pops up warning her that content she is viewing may be false. She recognises it immediately and scrolls on."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "We were explicit about our Eurocentric bias throughout. What we called desirable reflects a Western liberal lens. Full transparency could expose Armenia to cyberattacks. The normative reflection was part of the work."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/pestel-map.svg",
    alt: "PESTEL map across Political, Economic, Social, Technological, Sustainability, Legal and Information Integrity, tracing desirable and undesirable future paths",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/future-scenarios.svg",
    alt: "Future scenarios: how can this impact Melina's future, undesirable and desirable future scenario, illustrated",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Leverage points and interventions"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "Five areas where the system could be shifted: education, building media literacy and critical thinking from an early age; involvement, creating tools for political participation including a Valgomat-style voter guidance tool; government, pushing for institutional transparency and open data; healing, addressing collective trauma through recognition and reconciliation; and media regulations, introducing algorithm transparency requirements and financial penalties for knowingly spreading misinformation."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "Education ranked highest for long-term impact and feasibility. Media regulations ranked highest for potential impact but lowest for near-term achievability. The order matters for where to start."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      width: "100%",
      maxWidth: 480,
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/leverage-interventions-map.svg",
    alt: "Leverage points scored by impact and feasibility: involvement, government, education, healing, media regulations",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/leverages.svg",
    alt: "Leverage Points: where can we intervene to make Melina's future one of truth and trust? Education, Involvement, Government, Healing, Media Regulations",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/armenia/slides/interventions.svg",
    alt: "Interventions across public engagement, press, social, engagement, government, education, media and regulations",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })))))), /*#__PURE__*/React.createElement("section", {
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
  }, "This was our first deep dive into Systems Oriented Design, and the complexity was genuinely overwhelming at times. Every step revealed another layer. The shift that mattered most was moving from reacting to misinformation to asking what structural conditions would make a healthy information environment possible in the first place. For Armenia, that means not better fact-checking tools but a generation educated in source criticism, institutions willing to be held accountable, and a diaspora that is included rather than pushed to the margins.")), /*#__PURE__*/React.createElement("section", {
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("p", {
    style: KICKER
  }, "Full report"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 640
    }
  }, "The complete Systems Oriented Design report, present situation, future scenarios, leverage points, and interventions in full, is embedded below."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      aspectRatio: "16 / 10",
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "assets/armenia/report/flipbook.html",
    title: "Mixed Signals: full report",
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      border: 0
    },
    allowFullScreen: true
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
  ProjectDetailArmenia
});