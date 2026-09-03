// portfolio-project-teddy.jsx, Teddy project page

function ProjectDetailTeddy() {
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

  const MOMENT_H = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 500, fontSize: 22, letterSpacing: "-0.02em",
    color: "var(--ink)"
  };

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

        {/* ─── HERO ───────────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: "#FEFEFA", borderRadius: 4
        }}>
          <img src="assets/teddy/title.svg" alt="Teddy: traveling with Teddy becomes less unpredictable, overwhelming and stressful"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", bottom: 22, right: 26,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4
          }}>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13, fontWeight: 500, letterSpacing: "0.01em",
              color: "var(--ink)"
            }}>School project</span>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, color: "var(--ink-2)", letterSpacing: "-0.005em"
            }}>AHO</span>
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Teddy</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>A guided navigation and planning companion for neurodivergent travellers at the airport.</p>
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
          }}>Short studio project</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>UX Design / Inclusive Design</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 680 }}>
                Airports are overwhelming by design: confusing signage, unpredictable noise, no discreet way to ask for help. Teddy is a gamified planning and navigation app built for people with ADHD, ADD, and autism.
              </p>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Teddy is a mobile app that supports neurodivergent users through every stage of airport travel, from planning at home to navigating the terminal in real time. It reduces cognitive load by showing only the next step at any given moment, uses gamified and playful interaction to make the experience feel manageable rather than overwhelming, and works in noisy and crowded environments without drawing attention to the user. The goal was to design something that feels normal and discreet rather than clinical or institutional, because as our research showed, solutions that look like assistive tools often go unused due to social stigma.
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
                UX Designer<br />in a school project
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["User research", "Insight synthesis", "Concept development", "UX design", "Interaction & journey design"].map((t, i) => (
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
                {["Akash Neil Das", "Maria Foschi", "Nafsika Theou", "Julien Chaloub"].map((name, i) => (
                  <div key={i} style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4 }}>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DESIGN PROCESS ─────────────────────────────────────────── */}
        <section id="process" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Design process</h2>
          <p style={{ ...BODY, marginTop: 18, maxWidth: 720 }}>
            The project was grounded in a clear requirement: design for an airport environment with a neurodivergent user group, where the solution had to work in noisy and crowded conditions, be portable, attract as little attention as possible, and address multiple aspects of invisible disabilities at once. A qualitative interview with Emma, 19 (who has arthritis, a sister with ADHD and autism, and a mother with ADHD) surfaced three insights that shaped everything after: planning reduces anxiety, since uncertainty before arrival is already stressful; cognitive overload is the core issue, so the interface needed to show only the next step, not the full picture; and social stigma shapes what tools people will actually use: Emma's sister avoided noise-cancelling headphones for fear of standing out, so designing for autism needed to feel normal enough to benefit everyone.
          </p>
          <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
            Mapping the neurodivergent passenger journey showed exactly where the system breaks: pre-arrival procedures are unclear, the environment is unpredictable, and there's no accessible sensory information on noise, crowd density or lighting. No existing app combined pre-trip planning with real-time in-airport navigation for low cognitive load: users were juggling five different apps for one journey, exactly the fragmentation that exhausts them most.
          </p>
          <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
            Three principles shaped what came next: show only one step at a time, never the full picture; feel playful and familiar rather than clinical, using gamification to make progress rewarding; and work without headphones, in loud environments, through visual and haptic cues instead of sound. We named the product Teddy, built around a companion character guiding each step: packing, check-in, security, boarding.
          </p>

          {/* ─── MOMENT: WHERE THE ANXIETY STARTS ───────────────────── */}
          <div style={{ marginTop: 56 }}>
            <h3 style={MOMENT_H}>Where the anxiety starts</h3>
            <p style={{ ...BODY, marginTop: 10, maxWidth: 640 }}>
              Planning and navigating are where it concentrates: 40% of people report travel anxiety before they even leave, and juggling several apps for one journey compounds it. The same tension came straight from a family interview: "I need structure, the problem is having to go to 5 different apps."
            </p>
            <div style={{
              marginTop: 24, display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16
            }}>
              {["assets/teddy/figma/slide-persona-laura.svg", "assets/teddy/figma/slide-planning.svg", "assets/teddy/figma/slide-navigation.svg"].map((src) => (
                <img key={src} src={src} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
              ))}
            </div>
          </div>

          {/* ─── MOMENT: MEET TEDDY ─────────────────────────────────── */}
          <div style={{ marginTop: 56 }}>
            <h3 style={MOMENT_H}>Meet Teddy</h3>
            <p style={{ ...BODY, marginTop: 10, maxWidth: 640 }}>
              The companion character carries the tone through onboarding, warm and playful rather than clinical, turning "unpredictable, overwhelming, stressful" into something a user builds and makes their own.
            </p>
            <div style={{
              marginTop: 24, display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16
            }}>
              {["assets/teddy/videos/introducing-teddy.mov", "assets/teddy/videos/customize-character.mov"].map((src) => (
                <video key={src} src={src} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
              ))}
            </div>
          </div>

          {/* ─── MOMENT: GUIDED, NOT MANAGED ─────────────────────────── */}
          <div style={{ marginTop: 56 }}>
            <h3 style={MOMENT_H}>Guided, not managed</h3>
            <p style={{ ...BODY, marginTop: 10, maxWidth: 640 }}>
              Once a trip starts, Teddy holds the plan in the background: one structured timeline, real-time updates when things change, and a quiet nudge exactly when it's needed, like a passport reminder before landing.
            </p>
            <div style={{
              marginTop: 24, display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16
            }}>
              <img src="assets/teddy/figma/slide-timeline.png" alt="" style={{ width: "100%", height: "auto", display: "block" }} />
              {["assets/teddy/videos/schedule.mov", "assets/teddy/videos/clock-support.mov"].map((src) => (
                <video key={src} src={src} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── OUTCOME & REFLECTION ───────────────────────────────────── */}
        <section id="outcome" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Outcome &amp; reflection</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 640
          }}>
            Teddy started from the insight that designing for people at the edges of cognitive and sensory capacity produces tools that are better for everyone. The airport is one of the most hostile environments for neurodivergent users, but the principles that make Teddy work, showing one step at a time, reducing noise in the interface, building in predictability, and making the tool feel normal rather than assistive, apply far beyond airports. The most important design decision was the tone: warm, companion-like, and non-clinical. If the app feels like it belongs to the user rather than to a medical system, people will actually use it.
          </p>
          <div style={{
            marginTop: 36, width: "100%", aspectRatio: "16 / 7",
            position: "relative", overflow: "hidden",
            background: "#FEFEFA", borderRadius: 4
          }}>
            <img src="assets/teddy/figma/outcome-reflection.svg" alt="Team Teddy · Disability Tech Denmark"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
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

Object.assign(window, { ProjectDetailTeddy });
