// portfolio-project-togather.jsx, Togather project page

function ProjectDetailTogather() {
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
          <img src="assets/togather/title.svg" alt="Togather hero"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Togather</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Spend your time intentionally. Less planning. More presence.</p>
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
          }}>24 hour hackathon</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>UX Design / Product Design</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Relationships don't drift from conflict; they drift from coordination friction. 1 in 6 people worldwide are affected by loneliness. Togather is an app that takes that friction away entirely.
              </p>
              <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                <img src="assets/togather/overview.svg" alt="Togather overview"
                  style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Togather is a relationship first AI calendar. Users connect existing contacts, set their weekly social rhythm, and describe what they enjoy in natural language. The AI assistant Venn finds common availability, suggests activities based on mutual preferences, and turns intent into a confirmed calendar event. It fills the gap between scheduling tools that manage your time alone and social platforms that simulate connection without creating it.
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
                UX Designer<br />24 hour hackathon
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["Problem framing", "Concept development", "UX & UI design", "Pitch design"].map((t, i) => (
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
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Hackathon team</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["Lin Nora Tollefsen", "Design"],
                  ["Nahin Alif", "Business"],
                  ["Kritika Singh", "Frontend"],
                  ["Md Ibtihaj Amin", "Backend"],
                ].map(([name, role], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4 }}>
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
            With 24 hours on the clock, the process had to stay focused. We started from a clear behavioural insight and worked toward the simplest product that solved the right problem.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "The core insight was a reframe: we don't lose relationships because we don't care; we lose them because maintaining them is structurally hard. Scheduling is fragmented across tools never built to coordinate two people; free time is unstructured, making social intentions hard to act on; and social platforms simulate connection without creating it.",
                items: ["assets/togather/discover-1.svg", "assets/togather/discover-2.svg"]
              },
              {
                num: "2", title: "Define",
                body: "The question became: what if AI handled all the coordination, leaving people only the part that matters: showing up? Reclaim and Calendly handle personal scheduling; Bumble BFF helps discover people. Nothing bridges the two: finding a shared window, suggesting an activity, turning it into a confirmed plan. That gap is where Togather lives.",
                items: ["assets/togather/define.svg"]
              },
              {
                num: "3", title: "Develop",
                body: "The product runs on three verbs: connect, discover, commit. Users add relationships and tag them by type; Venn, an AI assistant, reads natural-language preferences and matches activity suggestions, or prompts proactively when a shared window opens. Users set weekly goals per connection (quality time once a month, say) so the app works toward targets instead of waiting to be opened.",
                items: ["assets/togather/develop-1.svg", "assets/togather/develop-2.svg", "assets/togather/develop-3.svg"]
              },
              {
                num: "4", title: "Deliver",
                body: "We shipped a functioning MVP in 24 hours. Claude generated and iterated the design system directly, so we spent time refining decisions, not building components from scratch. The frontend was built in Lovable; the backend on n8n wires together calendar logic, AI suggestions, and notification triggers with no custom infrastructure. The flow works end to end: two users connect, find a shared window, get an activity suggestion, lock in a plan. The point was removing the quiet friction that stops people from following through. Not a concept: a thing you could actually use.",
                items: ["assets/togather/deliver.svg"]
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
            Togather came from recognising that the loneliness crisis is not a motivation problem. People want to see each other. The barrier is coordination overhead that accumulates quietly until the relationship fades. The most interesting design decision was treating the AI not as a productivity tool but as a social infrastructure layer: something that holds the intention of a relationship and acts on it when conditions align.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            The biggest open question is how to make Venn feel genuinely helpful rather than intrusive, and how to build trust when the app is working on something as personal as who you spend your time with.
          </p>
          <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto", borderRadius: 18, overflow: "hidden" }}>
            <img src="assets/togather/outcome.svg" alt="Togather outcome"
              style={{ width: "100%", display: "block" }} />
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

Object.assign(window, { ProjectDetailTogather });
