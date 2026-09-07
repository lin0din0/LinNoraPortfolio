// portfolio-project-stackt.jsx, Stackt project page

function ProjectDetailStackt() {
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
      background: "#0E0E0C",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/stackt/title.svg",
    alt: "Stackt: Where judgement gets built before decisions get real.",
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
  }, "Work in Fintech (WIF) AI Summit 2026 \xB7 Hackathon"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(40px, 10vw, 88px)",
      lineHeight: 1,
      letterSpacing: "-0.035em",
      color: "var(--ink)"
    }
  }, "Stackt"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "-0.005em",
      color: "var(--ink-2)",
      maxWidth: 640
    }
  }, "A gamified financial literacy app that teaches 17\u201321 year olds how to ", /*#__PURE__*/React.createElement("em", null, "think"), " about money, not just what to know about it.")), /*#__PURE__*/React.createElement(ProjectMeta, {
    duration: "3-week hackathon sprint \xB7 Live pitch, NatWest Conference Centre, London (28 Aug 2026)",
    tags: ["Product Design", "UX Design", "FinTech"]
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
  }, "Stackt was built for the Work in Fintech AI Summit hackathon, ~1,000 applicants competing for 120 spots, three weeks to design, build, and pitch a financial literacy product to a panel of fintech founders and CEOs. The brief was blunt: a generation gets its financial education from TikTok, build something better. We started broad, a Duolingo-style app spanning banking, investing, and insurance for 15\u201318 year olds, but research kept surfacing the same gap: young people aren't disengaged from money, they're underserved by it, able to recite facts but freezing at the moment of an actual decision. That reframed the problem from teaching financial ", /*#__PURE__*/React.createElement("em", null, "facts"), " to teaching financial ", /*#__PURE__*/React.createElement("em", null, "judgement"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "We narrowed scope hard: from a full personal-finance suite to investing alone, and from 15\u201318 to 17\u201321, the group actually making financial decisions with no safety net. The result, Stackt, has users read three competing accounts of a real historic financial event, judge which is credible, and make a simulated hold/buy/sell/diversify call before seeing how it actually played out. An AI mentor guides without giving the answer, and the leaderboard ranks streaks and accuracy rather than portfolio value, so the game never rewards recklessness. Everything runs in simulation only, with FCA Consumer Duty compliance built into the architecture rather than bolted on as a disclaimer.")), /*#__PURE__*/React.createElement("section", {
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
  }, "Product & UX Designer, Team Lead", /*#__PURE__*/React.createElement("br", null), "in a 5-person hackathon team"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      maxWidth: 240
    }
  }, ["Target audience & problem framing", "Core game mechanic design", "Pitch deck & narrative (Figma)", "Design system (dark theme, onboarding, category icons)", "Team research synthesis"].map((t, i) => /*#__PURE__*/React.createElement("li", {
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
  }, [["Sheyi Shoyebi", "Research & Insight"], ["Ivan Hung", "Business, Market Analysis & Forecasting"], ["Tushar Goyal", "Team member"], ["Tolu Awosanya", "Team member"]].map(([name, role], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      maxWidth: 340,
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
      marginTop: 18,
      maxWidth: 720
    }
  }, "With only three weeks, the process was less about exhaustive research and more about converging fast and testing the framing hard. We grounded the brief in existing research rather than assumptions: the London Foundation for Banking & Finance's Young Persons' Money Index, YouGov and Aviva data on investing interest, academic gamification studies, and a scan of the competitive landscape (Fingo, GoHenry, SIFMA's Stock Market Game, InvestGame, HowTheMarketWorks), to find where a genuine gap existed rather than duplicating what was already out there."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "That research kept pointing to the same tension: high interest, low confidence, and almost no structured space to practise. It drove our biggest pivot: shifting the target audience from 15\u201318 (still in education) to 17\u201321, the point where real financial decisions arrive at once with the least support, and we dropped the \u201CDuolingo for finance\u201D framing itself, since it implied a tone at odds with a product about financial independence."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 14,
      maxWidth: 720
    }
  }, "Around that reframed problem, we built the mechanic: three competing accounts of a real historic financial event, judged for credibility, followed by a simulated investment decision, designed to train judgement over recall. An onboarding flow personalises the learning path; an AI mentor scaffolds reasoning without ever giving a direct answer; a leaderboard ranks streaks and accuracy rather than simulated portfolio value, so the game can't be gamed by reckless bets."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "What the research showed"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "Three findings shaped everything after: young people are getting their financial education from social media and acting on it, confidence badly outpaces competence, and active recall (not passive reading) is what actually sticks."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(MediaStack, {
    items: ["assets/stackt/figma/slide-confidence-gap.png", "assets/stackt/figma/slide-disperced-uncurated.png", "assets/stackt/figma/slide-active-recall-works.png"],
    featured: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Narrowing what to teach"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "The MVP scope was narrowed to four categories, sized by how much 17\u201321 year olds want to learn each one against how badly they're currently failing it: inflation and crypto topped both lists."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(MediaStack, {
    items: ["assets/stackt/figma/slide-curated-learning.png"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: MOMENT_H
  }, "Making the case"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 10,
      maxWidth: 640
    }
  }, "The final pitch deck, built and edited live in Figma, laid out where Stackt actually sits against existing finance apps, sized the market, and settled on a low-cost B2B2C model: parents, employers and banks under Consumer Duty obligations, as the more realistic paying customers than the 17\u201321 users themselves. It followed a \u201Cbring a person into the room\u201D principle throughout: leading with a specific user moment rather than a statistic, and closing on the same person."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(MediaStack, {
    items: ["assets/stackt/figma/slide-value-proposition.png", "assets/stackt/figma/tam-sam-som.png", "assets/stackt/figma/business-model.png"],
    featured: true
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
  }, "The sharpest lesson was how much positioning shapes perception of a product: the same mechanic reads completely differently as \u201CDuolingo for finance\u201D versus \u201Ca journey toward financial independence,\u201D and that framing decision ended up doing as much work as any single feature. Narrowing scope early (dropping banking and insurance to focus on investing; picking one age band instead of two) was what made a working, coherent demo possible in three weeks rather than a sprawling, half-built one."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: 16,
      maxWidth: 640
    }
  }, "If we had more time, the open question we didn't fully resolve, how a user's investment verdict should be scored against the historic outcome, is where I'd focus next, since it directly shapes how satisfying and honest the product's \u201CReveal\u201D moment feels."), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      width: "100%",
      borderRadius: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/stackt/outcome.jpg",
    alt: "Team 18 at the Work in Fintech AI Summit hackathon",
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
  ProjectDetailStackt
});