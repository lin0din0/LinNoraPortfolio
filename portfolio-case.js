// portfolio-case.jsx: the one layout every project page shares. Copy comes
// from CASES (portfolio-case-data.js); each portfolio-project-*.jsx only adds
// its own hero and says which media belongs to which step.
//
//   hero     the page's hero block
//   summary  media under "In short": a list of files, or any node
//   media    one list per step, in step order; `featured` holds the step
//            indexes that use MediaStack's featured layout
//   outcome  media in the Outcome section: a list of files
//   outcomeExtra  anything else in the Outcome section (a report, say)
//   featured the ProjectMeta "featured on" link
const C_SANS = "'Hanken Grotesk', sans-serif";
const C_LABEL = {
  margin: 0,
  fontFamily: C_SANS,
  fontSize: 14,
  letterSpacing: "-0.005em",
  color: "var(--muted)"
};
const C_H2 = {
  margin: 0,
  fontFamily: C_SANS,
  fontWeight: 400,
  fontSize: "clamp(28px, 3vw, 40px)",
  lineHeight: 1.1,
  letterSpacing: "-0.025em",
  color: "var(--ink)"
};
const C_BODY = {
  margin: 0,
  fontFamily: C_SANS,
  fontSize: 16,
  lineHeight: 1.6,
  letterSpacing: "-0.005em",
  color: "var(--ink-2)"
};
function CaseFile({
  item
}) {
  const src = typeof item === "string" ? item : item.src;
  const alt = typeof item === "string" ? "" : item.alt;
  return /*#__PURE__*/React.createElement(Media, {
    src: src,
    alt: alt,
    minHeight: 280
  });
}
function CaseMediaList({
  items,
  marginTop = 36
}) {
  if (!items || !items.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i
  }, /*#__PURE__*/React.createElement(CaseFile, {
    item: item
  }))));
}

// the big-number strip, first used on the Carbon page
function MetricStrip({
  metrics,
  columns,
  style
}) {
  const isMobile = useIsMobile();
  const cols = columns || metrics.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : `repeat(${cols}, 1fr)`,
      gap: 1,
      background: "var(--line-soft)",
      border: "1px solid var(--line-soft)",
      ...style
    }
  }, metrics.map(([val, label], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--bg)",
      padding: "20px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: C_SANS,
      fontWeight: 500,
      fontSize: "clamp(20px, 2.2vw, 28px)",
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, val), /*#__PURE__*/React.createElement("div", {
    style: {
      ...C_LABEL,
      marginTop: 6,
      fontSize: 13,
      lineHeight: 1.4
    }
  }, label))));
}
function MethodChips({
  methods
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, methods.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      padding: "6px 13px",
      borderRadius: 999,
      border: "1px solid var(--line-soft)",
      fontFamily: C_SANS,
      fontSize: 12,
      color: "var(--ink-2)",
      letterSpacing: "-0.005em"
    }
  }, m)));
}

// the project's facts, read as one table rather than separate lines of text
function CaseFacts({
  facts
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "40px 0 0",
      paddingTop: 20,
      borderTop: "1px solid var(--line-soft)",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 2fr 1fr 2fr",
      gap: isMobile ? "20px 24px" : 32
    }
  }, facts.map(([label, value]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("dt", {
    style: C_LABEL
  }, label), /*#__PURE__*/React.createElement("dd", {
    style: {
      ...C_BODY,
      marginTop: 4,
      color: "var(--ink)"
    }
  }, value))));
}

// one step: phase, heading, text and chips, with its media beside it
function CaseStep({
  step,
  media,
  featured
}) {
  const isMobile = useIsMobile();
  const [ref, visible] = useReveal(0.15);
  const hasMedia = media && media.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "process-step",
    style: {
      display: isMobile || !hasMedia ? "flex" : "grid",
      flexDirection: "column",
      gridTemplateColumns: hasMedia && !isMobile ? "minmax(240px, 30%) 1fr" : undefined,
      gap: isMobile ? 24 : 48,
      alignItems: "start",
      ...revealStyle(visible)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: hasMedia ? undefined : 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: C_LABEL
  }, step.phase[0] + step.phase.slice(1).toLowerCase()), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: C_SANS,
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, step.title), /*#__PURE__*/React.createElement("p", {
    style: C_BODY
  }, step.body), /*#__PURE__*/React.createElement(MethodChips, {
    methods: step.methods
  })), hasMedia && /*#__PURE__*/React.createElement(MediaStack, {
    items: media,
    featured: featured
  }));
}
function CasePage({
  c,
  hero,
  summary,
  media = [],
  featuredSteps = [],
  outcome,
  outcomeExtra,
  featured
}) {
  const isMobile = useIsMobile();
  const DIVIDER = {
    marginTop: isMobile ? 64 : 100,
    paddingTop: isMobile ? 28 : 40,
    borderTop: "1px solid var(--line-soft)"
  };
  const hasOutcome = c.outcome || c.metrics.length || outcome && outcome.length || outcomeExtra;
  const links = [["overview", "In short"], ["process", "How I worked"], ["decision", "Key decision"]];
  if (hasOutcome) links.push(["outcome", "Outcome"]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-artboard",
    style: {
      width: "100%",
      height: "100%",
      fontFamily: C_SANS,
      color: "var(--ink)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(BackButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "96px 20px 64px" : "120px 64px 100px",
      maxWidth: 1400,
      margin: "0 auto"
    }
  }, hero, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: C_SANS,
      fontWeight: 400,
      fontSize: "clamp(40px, 10vw, 88px)",
      lineHeight: 1,
      letterSpacing: "-0.035em",
      color: "var(--ink)"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontFamily: C_SANS,
      fontSize: "clamp(18px, 1.6vw, 22px)",
      fontWeight: 400,
      lineHeight: 1.35,
      letterSpacing: "-0.012em",
      color: "var(--ink-2)",
      maxWidth: 720
    }
  }, c.line)), /*#__PURE__*/React.createElement(CaseFacts, {
    facts: c.facts
  }), featured && /*#__PURE__*/React.createElement(ProjectMeta, {
    featured: featured
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(SectionNav, {
    links: links
  }), /*#__PURE__*/React.createElement("section", {
    id: "overview",
    style: {
      marginTop: isMobile ? 40 : 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: C_H2
  }, "In short"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      maxWidth: 860
    }
  }, [["Problem", c.short.problem], ["My part", c.short.part], ["Result", c.short.result]].map(([label, text]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "120px 1fr",
      gap: isMobile ? 6 : 24,
      padding: "16px 0",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...C_LABEL,
      fontSize: 16,
      lineHeight: 1.6
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      ...C_BODY,
      color: "var(--ink)"
    }
  }, text)))), Array.isArray(summary) ? /*#__PURE__*/React.createElement(CaseMediaList, {
    items: summary
  }) : summary), /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("h2", {
    style: C_H2
  }, "How I worked"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, c.steps.map((step, i) => /*#__PURE__*/React.createElement(CaseStep, {
    key: step.num,
    step: step,
    media: media[i],
    featured: featuredSteps.includes(i)
  })))), /*#__PURE__*/React.createElement("section", {
    id: "decision",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      background: c.decision.bg,
      borderLeft: `3px solid ${c.decision.accent}`,
      padding: isMobile ? "24px 22px" : "32px 36px",
      color: c.decision.dark ? "#FFFFFF" : "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...C_LABEL,
      color: "inherit",
      opacity: 0.7
    }
  }, "Key decision"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "12px 0 0",
      fontFamily: C_SANS,
      fontWeight: 500,
      color: "inherit",
      fontSize: "clamp(24px, 3vw, 32px)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em"
    }
  }, c.decision.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...C_BODY,
      marginTop: 12,
      color: "inherit"
    }
  }, c.decision.body)))), hasOutcome && /*#__PURE__*/React.createElement("section", {
    id: "outcome",
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("h2", {
    style: C_H2
  }, "Outcome"), c.metrics.length > 0 && /*#__PURE__*/React.createElement(MetricStrip, {
    metrics: c.metrics,
    style: {
      marginTop: 20,
      maxWidth: 860
    }
  }), c.outcome && /*#__PURE__*/React.createElement("p", {
    style: {
      ...C_BODY,
      marginTop: 20,
      maxWidth: 720
    }
  }, c.outcome), /*#__PURE__*/React.createElement(CaseMediaList, {
    items: outcome
  }), outcomeExtra), /*#__PURE__*/React.createElement("section", {
    style: DIVIDER
  }, /*#__PURE__*/React.createElement("h2", {
    style: C_H2
  }, "What I'm taking with me"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...C_BODY,
      marginTop: 20,
      maxWidth: 720,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--ink)"
    }
  }, c.takeaway)), (c.team.length > 0 || !isMobile) && /*#__PURE__*/React.createElement("section", {
    style: {
      ...DIVIDER,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, c.team.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: C_LABEL
  }, "Team"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...C_BODY,
      marginTop: 12,
      fontSize: 14,
      maxWidth: 720
    }
  }, c.team.join(", "))), !isMobile && /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/lin-dotted.svg",
    alt: "",
    style: {
      marginLeft: "auto",
      height: 96,
      width: "auto",
      opacity: 0.85
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: C_SANS,
      fontSize: 13,
      letterSpacing: "-0.005em",
      color: "var(--ink)"
    }
  }, "\u2191\xA0\xA0Back to top"))));
}
Object.assign(window, {
  CasePage,
  MetricStrip
});