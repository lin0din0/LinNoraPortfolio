// portfolio-project-local.jsx, Local project page

function ProjectDetailLocal() {
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
          <img src="assets/local/title.svg" alt="Local hero"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Local</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>An AI powered campaign localisation platform that keeps humans in the loop at every decision point.</p>
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
          }}>4 week programme, MVP competition</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>AI Product Design / UX Design</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + SIDEBAR NAV ─────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                VML MAP runs 120,000+ campaigns a year across 150 markets, and localising them at scale is slow, manual, and inconsistent. Local is an AI platform that adapts campaigns while keeping a human in the loop.
              </p>
              <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                <img src="assets/local/overview.svg" alt="Local overview"
                  style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Local is an AI powered campaign localisation platform. A marketer inputs a brief and target segment, the system generates culturally adapted visual variants, the marketer reviews and approves or refines, and approved assets feed back into the system's memory. The core design principle was that keeping humans in the loop is not a feature. It is the entire value proposition. AI proposes. Humans decide. The MVP was built in four weeks using Lovable, n8n, Claude, and DALL-E 3, with Airtable as the data layer.
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
                UX and Communication Lead
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["UX & flow architecture", "Interface design", "Design system", "Figma prototyping", "Flow documentation (Mermaid)", "Pitch & presentation"].map((t, i) => (
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
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                {[
                  ["Lin Nora Tollefsen", "UX & Communication Lead"],
                  ["Paul Eichmann", "Business"],
                  ["Benjamin Southern", "Marketing"],
                  ["Ignacio José Dávila", "Business"],
                  ["Adam Bączek", "Backend / n8n"],
                  ["Lucas Bjerre", "Communication"],
                ].map(([name, role]) => (
                  <div key={name} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4 }}>
                    <span>{name}</span><span>{role}</span>
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
            Four workshops at CBS AI Academy, moving from AI foundations through agentic AI to business value, before the final MVP competition on 6 May. The design process ran in parallel with the technical build, with UX informing what was buildable and technical constraints shaping where the design had to flex.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "A teammate inside a global marketing team walked us through the real pain: briefing agencies across markets, reformatting the same campaign assets, chasing approvals on variants that differ only by language and local context. Desktop research confirmed it wasn't a one-company problem: friction was highest around the cost of local adaptation at scale, brand consistency eroding when guardrails are interpreted rather than enforced, and the gap between what marketers know works and what AI tools let them control.",
                items: ["assets/local/discover-1.svg", "assets/local/discover-2.svg", "assets/local/discover-3.svg"]
              },
              {
                num: "2", title: "Define",
                body: "Three principles shaped every decision: transparency, the AI always shows its reasoning so marketers can evaluate output, not just accept or reject it; guardrails before generation, brand constraints set upfront via a traffic-cone metaphor defining the AI's allowed space as enablement, not restriction; and memory, every approved asset feeding back so the platform learns what works per market. The human stays in control throughout: the tool augments judgment, it doesn't replace it.",
                items: ["assets/local/define-4.svg"]
              },
              {
                num: "3", title: "Deliver",
                body: "We built a clean dashboard integrating AI only where it adds real value: the repetitive, automatable parts. Brief input and brand guardrails stay human; generation, formatting, and variants are where AI takes over, with the team keeping full visibility and approval throughout. The MVP ran on an n8n backend with AI image generation through our brand guardrails, live end to end at the final: brief, generation with visible AI reasoning, human review, and storage in the memory library. The AI reasoning cards were the strongest feature in the room: the clearest signal that this augments judgment rather than replacing it.",
                items: ["assets/local/deliver-1.mov", "assets/local/deliver-2.mov", "assets/local/deliver-3.mov"]
              }
            ].map((step) => (
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
            Local showed that the most important design question in AI product design is not what the AI can do, but where and how the human remains in control. The traffic cone metaphor for brand guardrails was the clearest single visual in the whole product, because it communicated constraint as creative enablement rather than restriction.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            The next steps would be deepening the feedback loop from approve and reject decisions back into the generation logic, and exploring how the memory library could surface pattern level insights across markets rather than just individual approved assets.
          </p>
          <div style={{
            marginTop: 36, width: "100%", aspectRatio: "16 / 8",
            background: CHECKER, borderRadius: 18
          }} />
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

Object.assign(window, { ProjectDetailLocal });
