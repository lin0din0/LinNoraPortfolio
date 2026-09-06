// portfolio-project-everyday-innovation.jsx, Everyday Innovation project page

function ProjectDetailEverydayInnovation() {
  const isMobile = useIsMobile();
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13, lineHeight: 1.5, letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };
  const KICKER = {
    margin: 0, fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "var(--muted)"
  };
  const DIVIDER = { marginTop: isMobile ? 64 : 100, paddingTop: isMobile ? 28 : 40, borderTop: "1px solid var(--line-soft)" };

  const steps = [
    {
      num: "1", title: "Circular questions, reflexive answers",
      body: "We ran semi-structured interviews with clinicians, nurses and department leads across the hospital, using Karl Tomm's questioning model to shift between understanding the system (circular questions) and prompting reflection (reflexive questions). Two team members conducted each interview, one facilitating and one note-taking, since recording wasn't possible in most clinical settings.",
      items: ["assets/everyday-innovation/discover-1.svg", "assets/everyday-innovation/discover-2.svg"]
    },
    {
      num: "2", title: "From one department to the whole hospital",
      body: "Interview data was mapped visually in Figma using tools like a problem tree and an iceberg model, kept deliberately low fidelity so they could be used as discussion prompts rather than finished artefacts. This stage reframed the challenge itself: from evaluating a single department to understanding innovation maturity across the whole organisation.",
      items: ["assets/everyday-innovation/define-1.svg", "assets/everyday-innovation/define-2.svg"]
    },
    {
      num: "3", title: "Removing hierarchy from the room",
      body: "An innovation workshop brought 11 participants from across departments together, using Mentimeter to gather anonymous input and reduce the effect of hierarchy on what people were willing to say out loud. Exercises included a word cloud on what innovation means, a frustration mapping exercise, and a rapid ideation format. The workshop doubled as both a research method and an intervention, since it created a kind of cross-department dialogue that otherwise didn't happen at the hospital.",
      items: ["assets/everyday-innovation/develop-1.png", "assets/everyday-innovation/develop-2.svg", "assets/everyday-innovation/develop-3.svg"],
      featured: true
    },
    {
      num: "4", title: "Visibility, not new infrastructure",
      body: "Findings were synthesised into a strategic concept centered on visibility and culture rather than new infrastructure: making the innovation that already existed easier to see, share and build on.",
      items: ["assets/everyday-innovation/deliver.svg"]
    }
  ];

  return (
    <div className="pf-artboard" data-bg="warm" style={{
      width: "100%", height: "100%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      color: "var(--ink)", position: "relative"
    }}>
      <Nav />

      <BackButton />

      <div style={{ padding: isMobile ? "96px 20px 64px" : "120px 64px 100px", maxWidth: 1400, margin: "0 auto" }}>

        {/* ─── HERO IMAGE ─────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: "#0E0E0C", borderRadius: 4
        }}>
          <video src="assets/everyday-innovation/banner.mov" autoPlay loop muted playsInline
            style={{ position: "absolute", top: -4, left: 0, width: "100%", height: "calc(100% + 4px)", objectFit: "cover" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <span style={{
            display: "block", marginBottom: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>Strategic Design & Consulting</span>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Everyday Innovation</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Helping a public hospital find the innovation that was already happening, and the language to see it.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <ProjectMeta duration="3 month project" tags={["Process Consultancy", "UX Strategy"]} />

        {/* ─── OVERVIEW ───────────────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <p style={KICKER}>TLTR</p>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Following Denmark's Strategy for Life Science towards 2030, innovation became a core task at Rigshospitalet. The brief was a top-down campaign pushing innovation onto clinicians, but fieldwork found innovation already happening everywhere, informally, with nowhere to live. The result was a strategic design concept built around surfacing that existing innovation: innovation moments built into departmental meetings, an ambassador role for existing development nurses, cross-department workshops for knowledge sharing, and a lightweight visual campaign giving innovation a shared language across the hospital.
              </p>
              <Reveal>
                <div style={{
                  marginTop: 36, display: "flex", flexWrap: "wrap",
                  justifyContent: isMobile ? "flex-start" : "space-between",
                  gap: isMobile ? 16 : 20
                }}>
                  {["1", "2", "3", "4", "5"].map((n) => (
                    <img key={n} src={`assets/everyday-innovation/tltr-circle-${n}.svg`} alt=""
                      style={{ width: isMobile ? "28%" : "18%", aspectRatio: "1 / 1", borderRadius: "50%", display: "block" }} />
                  ))}
                </div>
              </Reveal>
            </section>

          {/* ─── MY ROLE ────────────────────────────────────────────────── */}
        <section id="role" style={DIVIDER}>
          <p style={KICKER}>My role</p>
          <div style={{
            marginTop: 26, maxWidth: 780,
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1px 1fr",
            gap: isMobile ? 32 : 40
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "relative", minHeight: isMobile ? "auto" : 200 }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: "var(--ink)", fontWeight: 500 }}>
                UX & Strategic Designer<br />team of 5
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7, maxWidth: 220 }}>
                {["Interviews & note-taking", "Workshop facilitation", "Visual data structures", "Grounding in clinician needs"].map((t, i) => (
                  <li key={i} style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
                    {t}
                  </li>
                ))}
              </ul>
              {!isMobile && (
                <img src="assets/brand/lin-dotted.svg" alt="" style={{
                  position: "absolute", right: 0, bottom: -16, height: 130, width: "auto",
                  objectFit: "contain", objectPosition: "bottom right", opacity: 0.85
                }} />
              )}
            </div>

            {!isMobile && <div style={{ background: "var(--line-soft)" }} />}

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {[
                  ["Amanda Fuglestad", "Graphic Design"],
                  ["Frederik Gasque", "Graphic Design"],
                  ["Felicia Racu", "Marketing"],
                  ["Olivia Valentin", "Business Strategist"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", gap: 12, maxWidth: 320,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5
                  }}>
                    <span>{name}</span><span style={{ textAlign: "right" }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DESIGN PROCESS ─────────────────────────────────────────── */}
        <section id="process" style={DIVIDER}>
          <p style={KICKER}>Design process</p>
          <p style={{
            ...BODY, marginTop: 14,
            maxWidth: 640
          }}>
            The brief started as a campaign to push innovation top-down. Fieldwork turned it into a question of visibility instead: surfacing the innovation already happening in everyday clinical work.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {steps.map((step) => (
              <ProcessStep key={step.num} step={step} />
            ))}
          </div>
        </section>

        {/* ─── OUTCOME & REFLECTION ───────────────────────────────────── */}
        <section id="outcome" style={DIVIDER}>
          <p style={KICKER}>Outcome &amp; reflection</p>
          <p style={{
            ...BODY, marginTop: 14,
            maxWidth: 640
          }}>
            The project moved from a top-down campaign brief to a bottom-up culture concept, grounded in the idea that innovation didn't need to be invented at Rigshospitalet, it needed to be seen. Small, structural changes to communication and knowledge sharing had more potential impact than any single new initiative.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            Working this way changed how I think about strategic design. The problem you're given at the start is rarely the problem you end up solving, and getting to the real one takes iteration, not a single research phase. I also came away with a much stronger sense of how to hold structure and ambiguity at the same time: giving a process just enough shape to move forward, while staying open to reframing the whole challenge when the data asks for it.
          </p>
          <Reveal>
            <div style={{ marginTop: 36, width: "100%", borderRadius: 4, overflow: "hidden" }}>
              <img src="assets/everyday-innovation/outcome-board.jpg" alt="Rigshospitalet innovation project presentation board: internal structure, Schein's 10 principles, findings, and team"
                style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </Reveal>
          <Reveal>
            <div style={{ marginTop: 16, width: "100%", borderRadius: 18, overflow: "hidden" }}>
              <video src="assets/everyday-innovation/banner.mov" autoPlay loop muted playsInline
                style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </Reveal>
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

Object.assign(window, { ProjectDetailEverydayInnovation });
