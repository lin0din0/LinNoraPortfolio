// portfolio-project-everyday-innovation.jsx, Everyday Innovation project page

function ProjectDetailEverydayInnovation() {
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
      body: "We ran semi-structured interviews with clinicians, nurses and department leads across the hospital, using Karl Tomm's questioning model to shift between understanding the system (circular questions) and prompting reflection (reflexive questions). Two team members conducted each interview, one facilitating and one note-taking, since recording wasn't possible in most clinical settings.",
      items: ["assets/everyday-innovation/discover-1.svg", "assets/everyday-innovation/discover-2.svg"]
    },
    {
      num: "2", title: "Define",
      body: "Interview data was mapped visually in Figma using tools like a problem tree and an iceberg model, kept deliberately low fidelity so they could be used as discussion prompts rather than finished artefacts. This stage reframed the challenge itself: from evaluating a single department to understanding innovation maturity across the whole organisation.",
      items: ["assets/everyday-innovation/define-1.svg", "assets/everyday-innovation/define-2.svg"]
    },
    {
      num: "3", title: "Develop",
      body: "An innovation workshop brought 11 participants from across departments together, using Mentimeter to gather anonymous input and reduce the effect of hierarchy on what people were willing to say out loud. Exercises included a word cloud on what innovation means, a frustration mapping exercise, and a rapid ideation format. The workshop doubled as both a research method and an intervention, since it created a kind of cross-department dialogue that otherwise didn't happen at the hospital.",
      items: ["assets/everyday-innovation/develop-1.png", "assets/everyday-innovation/develop-2.svg", "assets/everyday-innovation/develop-3.svg"],
      featured: true
    },
    {
      num: "4", title: "Deliver",
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
        <div style={{
          marginTop: isMobile ? 48 : 80,
          display: "flex", flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 16
        }}>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em"
          }}>3 month project</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>Process Consultancy / UX Strategy</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Following Denmark's Strategy for Life Science towards 2030, innovation became a core task at Rigshospitalet. The brief was a top-down campaign pushing innovation onto clinicians, but fieldwork found innovation already happening everywhere, informally, with nowhere to live. The project shifted from manufacturing innovation to designing visibility for what already existed.
              </p>
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
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                A strategic design concept built around surfacing existing innovation rather than manufacturing new innovation from the top down. This included innovation moments built into departmental meetings, an ambassador role for existing development nurses, cross-department workshops for knowledge sharing, and a lightweight visual campaign to give innovation a shared language across the hospital.
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
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500, maxWidth: 200 }}>
                UX & Strategic Designer<br />team of 5
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["Interviews & note-taking", "Workshop facilitation", "Visual data structures", "Grounding in clinician needs"].map((t, i) => (
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
                  ["Amanda Fuglestad", "Graphic Design"],
                  ["Frederik Gasque", "Graphic Design"],
                  ["Felicia Racu", "Marketing"],
                  ["Olivia Valentin", "Business Strategist"]
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
        <section id="outcome" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Outcome &amp; reflection</h2>
          <p style={{
            ...BODY, marginTop: 18,
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
          <div style={{ marginTop: 36, width: "100%", borderRadius: 18, overflow: "hidden" }}>
            <video src="assets/everyday-innovation/banner.mov" autoPlay loop muted playsInline
              style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
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
