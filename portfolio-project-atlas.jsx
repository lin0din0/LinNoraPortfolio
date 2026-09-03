// portfolio-project-atlas.jsx, Atlas project page

function ProjectDetailAtlas() {
  const isMobile = useIsMobile();
  const H_SECTION = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 500, fontSize: 32, letterSpacing: "-0.02em",
    color: "var(--ink)"
  };
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13, lineHeight: 1.5, letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";

  const steps = [
    {
      num: "1", title: "Discover",
      body: "Interviews with 2nd line operators working in Alfa TT were used to map where the automation potential actually lay, and two findings shaped the whole project. First, a large share of tickets were low hanging fruit: repetitive cases with identical patterns and outcomes, and operators were spending disproportionate time on these instead of the complex cases they were actually interested in solving. Second, inconsistent problem descriptions from customer service were sometimes causing full technician workorders to be sent for issues that a much cheaper equipment change could resolve, creating unnecessary cost. These two findings, repetitive volume and costly misrouting between workorders and equipment swaps, became the focus of the project.",
      items: ["assets/atlas/discover-1.mov", "assets/atlas/discover-2.svg"]
    },
    {
      num: "2", title: "Define",
      body: "There was clearly a lot of potential for automation, but with only seven weeks, the team had to define a realistic scope, one that was technically feasible to implement into Alfa TT and push into production rather than purely aspirational. That meant choosing depth over breadth: focusing on one area with high precision rather than spreading effort thin. The scope was defined as broadband related trouble tickets in the consumer market, since this segment had the highest concentration of repetitive, well patterned cases and was the easiest to target with confidence.",
      items: ["assets/atlas/define.svg"]
    },
    {
      num: "3", title: "Develop",
      body: "Atlas is built on Claude Sonnet 5, and reads the trouble ticket's problem description as written by customer service directly within Alfa TT. Development started from a small prompt encoding the basic reasoning 2nd line operators already used, then grew through continuous testing against real operator resolved cases, surfacing patterns, adjusting rules and conditions, and refining thresholds. A core challenge was that ticket descriptions were inconsistent: the same underlying rule sometimes had to produce different outcomes for what looked like the same description, because customer service had simply left out information. Balancing the prompt's logic against this inconsistency, across many iterations, became the central engineering problem. Ultimately, the team chose to keep the fallback to human rate deliberately strict, prioritizing a solid, trustworthy foundation to build further on, rather than pushing automation higher at the cost of more frequent wrong decisions."
    },
    {
      num: "4", title: "Deliver",
      body: "Delivery centered on Atlas's production performance inside Alfa TT: the cases it handles correctly, the cases where it still falls back to human review, and an estimated annual saving of around 2M NOK. Alongside the results, the team outlined four directions to keep raising the automation rate: breaking down the information silo between customer service and 2nd line so tickets arrive with better data, continuing to fine tune the prompt and rules, connecting Atlas directly to diagnostic test systems rather than relying on written descriptions alone, and introducing Hermes, a companion service to fill missing information via customer SMS before a case falls back to a human.",
      items: ["assets/atlas/deliver.svg"]
    }
  ];

  return (
    <div className="pf-artboard" data-bg="warm" style={{
      width: "100%", height: "100%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      color: "var(--ink)", position: "relative"
    }}>
      <Nav />

      <a href="index.html#work" aria-label="Back to projects" style={{
        position: "absolute", top: 36, left: 64, zIndex: 60,
        width: 46, height: 46, borderRadius: "50%",
        border: "1px solid var(--line-soft)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--ink)", textDecoration: "none",
        fontSize: 16, lineHeight: 1, background: "var(--bg)"
      }}>←</a>

      <div style={{ padding: isMobile ? "96px 20px 64px" : "120px 64px 100px", maxWidth: 1400, margin: "0 auto" }}>

        {/* ─── HERO IMAGE ─────────────────────────────────────────────── */}
        <div style={{ width: "100%", borderRadius: 4, overflow: "hidden" }}>
          <img src="assets/atlas/title.svg" alt="Atlas hero"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <span style={{
            display: "block", marginBottom: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>Telenor · Summer Internship</span>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Atlas</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)",
            maxWidth: 720
          }}>AI Decision Support for Broadband Fault Resolution: building an AI agent into Alfa TT, Telenor's trouble ticket platform, to automate repetitive case handling for 2nd line broadband support.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <div style={{
          marginTop: isMobile ? 48 : 80,
          display: "flex", flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 16
        }}>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em"
          }}>7-week internship · ongoing part-time role</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>AI/LLM Evaluation / Decision Logic Design / Applied AI</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Alfa TT is the platform Telenor's 2nd line broadband support team uses to handle trouble tickets (TTs), customer fault reports that require reading diagnostic data and deciding whether to dispatch a technician, send replacement equipment, bill the customer, or escalate. This work involved implementing an AI agent directly into that workflow to automate the repetitive share of these cases. Two problems stood out: operators were spending significant time on repetitive, near identical cases instead of the complex ones that actually needed their expertise, and inconsistent problem descriptions from customer service were sometimes leading to full technician dispatches when a much cheaper equipment swap would have resolved the case, a costly and avoidable mismatch.
              </p>
              <div style={{ marginTop: 36, width: "100%", borderRadius: 4, overflow: "hidden" }}>
                <img src="assets/atlas/tltr.svg" alt="Atlas overview"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Atlas is an AI agent, built on Claude Sonnet 5, that was implemented into Alfa TT to read a trouble ticket's customer service problem description and recommend one of four actions: dispatch a technician (WORKORDER), a billable visit for customer caused damage (BETALT WORKORDER), replacement equipment (UTSTYRSBYTTE), or routing to human review (MANUELL) when certainty falls below threshold. Calibrated against real historical cases over seven weeks, Atlas is now live in production and, by the team's estimate, is on track to save approximately 2M NOK annually, while intentionally holding a conservative fallback rate to keep trust high as the system continues to expand.
              </p>
            </section>

          {/* ─── MY ROLE ────────────────────────────────────────────────── */}
        <section id="role" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>My role in this project</h2>
          <div style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 20
          }}>
            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 16,
              minHeight: 220, position: "relative", overflow: "hidden"
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500, maxWidth: 220 }}>
                Applied AI Intern<br />Telenor · Alfa TT department
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 220 }}>
                {["Prompt engineering", "Model output evaluation", "Operator interviews", "Certainty scoring system", "Evaluation pipeline (Excel/pandas)", "Handoff materials"].map((t, i) => (
                  <li key={i} style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4, display: "flex", gap: 6, alignItems: "flex-start" }}>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--ink-2)", marginTop: 6, flexShrink: 0 }} />
                    {t}
                  </li>
                ))}
              </ul>
              <img src="assets/brand/lin-dotted.svg" alt="" style={{
                position: "absolute", right: 0, bottom: 0, height: "80%", width: "auto",
                objectFit: "contain", objectPosition: "bottom right"
              }} />
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["Axel", "Teammate, Atlas development"],
                  ["Maria", "Teammate, Atlas development"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", gap: 12,
                    fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4
                  }}>
                    <span>{name}</span><span style={{ textAlign: "right" }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DESIGN PROCESS ─────────────────────────────────────────── */}
        <section id="process" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Design process</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 720
          }}>
            With seven weeks to work with, the process was about finding where automation could realistically be pushed into Alfa TT, the platform operators use every day: mapping the ticket landscape to find the highest potential area, scoping what was technically feasible, and then calibrating an agent tightly enough to be trusted with real decisions rather than just chasing the highest possible automation rate.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {steps.map((step) => (
              <ProcessStep key={step.num} step={step} />
            ))}
          </div>
        </section>

        {/* ─── OUTCOME & REFLECTION ───────────────────────────────────── */}
        <section id="outcome" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Outcome &amp; reflection</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 720
          }}>
            Atlas is live in production within Alfa TT, and the team is continuing to build on the four directions defined at handoff. The clearest lesson from the project was that automation quality isn't just an accuracy number. A system that's right most of the time but unpredictable when it's wrong is worse than one that's more conservative but consistent, because consistency is what lets a team actually trust and expand it. I'm continuing part time on the project, with the near term goal of steadily raising the automation rate through the four directions identified, without compromising that trust.
          </p>
          <div style={{ marginTop: 36, width: "100%", aspectRatio: "16 / 8", background: CHECKER, borderRadius: 18 }} />
        </section>
          </div>
        </div>

        {/* ─── BACK TO TOP ─────────────────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 80, paddingBottom: 20 }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 28px", borderRadius: 999,
              border: "1px solid var(--ink)",
              background: "transparent", cursor: "pointer",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13, letterSpacing: "-0.005em", color: "var(--ink)"
            }}
          >↑&nbsp;&nbsp;Back to top</button>
        </div>

      </div>
    </div>
  );
}

Object.assign(window, { ProjectDetailAtlas });
