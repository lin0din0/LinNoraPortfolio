// portfolio-project-local.jsx, Local project page

function ProjectDetailLocal() {
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
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/local/title.svg",
    alt: "Local hero",
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
  }, "Local"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)"
    }
  }, "An AI powered campaign localisation platform that keeps humans in the loop at every decision point.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "4 week programme, MVP competition",
    tags: ["AI Product Design", "UX Design"]
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
  }, "VML MAP runs 120,000+ campaigns a year across 150 markets, and localising them at scale is slow, manual, and inconsistent. Local is an AI platform built to fix that: a marketer inputs a brief and target segment, the system generates culturally adapted visual variants, the marketer reviews and approves or refines, and approved assets feed back into the system's memory. Keeping a human in the loop isn't a feature here, it's the entire value proposition: AI proposes, humans decide. The MVP was built in four weeks using Lovable, n8n, Claude, and DALL-E 3, with Airtable as the data layer."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/local/overview.svg",
    alt: "Local overview",
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
  }, "UX and Communication Lead"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 220
    }
  }, ["UX & flow architecture", "Interface design", "Design system", "Figma prototyping", "Flow documentation (Mermaid)", "Pitch & presentation"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
  }, [["Paul Eichmann", "Business"], ["Benjamin Southern", "Marketing"], ["Ignacio José Dávila", "Business"], ["Adam Bączek", "Backend / n8n"], ["Lucas Bjerre", "Communication"]].map(([name, role]) => /*#__PURE__*/React.createElement("div", {
    key: name,
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
  }, "Four workshops at CBS AI Academy, moving from AI foundations through agentic AI to business value, before the final MVP competition on 6 May. The design process ran in parallel with the technical build, with UX informing what was buildable and technical constraints shaping where the design had to flex."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, [{
    num: "1",
    title: "The same asset, reformatted again",
    body: "A teammate inside a global marketing team walked us through the real pain: briefing agencies across markets, reformatting the same campaign assets, chasing approvals on variants that differ only by language and local context. Desktop research confirmed it wasn't a one-company problem: friction was highest around the cost of local adaptation at scale, brand consistency eroding when guardrails are interpreted rather than enforced, and the gap between what marketers know works and what AI tools let them control.",
    items: ["assets/local/discover-1.svg", "assets/local/discover-2.svg", "assets/local/discover-3.svg"]
  }, {
    num: "2",
    title: "Guardrails before generation",
    body: "Three principles shaped every decision: transparency, the AI always shows its reasoning so marketers can evaluate output, not just accept or reject it; guardrails before generation, brand constraints set upfront via a traffic-cone metaphor defining the AI's allowed space as enablement, not restriction; and memory, every approved asset feeding back so the platform learns what works per market. The human stays in control throughout: the tool augments judgment, it doesn't replace it.",
    items: ["assets/local/define-4.svg"]
  }, {
    num: "3",
    title: "AI proposes, humans decide",
    body: "We built a clean dashboard integrating AI only where it adds real value: the repetitive, automatable parts. Brief input and brand guardrails stay human; generation, formatting, and variants are where AI takes over, with the team keeping full visibility and approval throughout. The MVP ran on an n8n backend with AI image generation through our brand guardrails, live end to end at the final: brief, generation with visible AI reasoning, human review, and storage in the memory library. The AI reasoning cards were the strongest feature in the room: the clearest signal that this augments judgment rather than replacing it.",
    items: ["assets/local/deliver-1.mov", "assets/local/deliver-2.mov", "assets/local/deliver-3.mov"]
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
  }, "Local showed that the most important design question in AI product design is not what the AI can do, but where and how the human remains in control. The traffic cone metaphor for brand guardrails was the clearest single visual in the whole product, because it communicated constraint as creative enablement rather than restriction."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 16,
      maxWidth: 640
    }
  }, "The next steps would be deepening the feedback loop from approve and reject decisions back into the generation logic, and exploring how the memory library could surface pattern level insights across markets rather than just individual approved assets."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
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
  ProjectDetailLocal
});