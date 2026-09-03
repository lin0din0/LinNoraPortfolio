// portfolio-project-eva.jsx, EVA project page

function ProjectDetailEva() {
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
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: "#0E0E0C", borderRadius: 4
        }}>
          <video src="assets/eva/title-video.mov" autoPlay loop muted playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", bottom: 22, right: 26,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10,
            zIndex: 2
          }}>
            <img src="assets/eva/huf-logo.svg" alt="Huf Group" style={{ height: 52, width: "auto" }} />
            <img src="assets/eva/tongji-logo.svg" alt="Tongji CDI" style={{ height: 28, width: "auto" }} />
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>EVA</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>The Emotional Vehicle Assistant: your journey begins before you enter the car.</p>
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
          }}>Intensive studio project</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>Interaction Design / AI Design</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Cars reset to zero every time you get in. EVA is an emotional vehicle assistant that reads your state and prepares the cabin before you even open the door.
              </p>
              <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                <video src="assets/eva/overview-video.mov" autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                EVA is the Emotional Vehicle Assistant. It reads data from your phone, wearable, and the car itself, interprets your emotional state through biometric and contextual signals, and prepares the cabin before you arrive. Scent, light, sound, and temperature are adjusted proactively, not by manual input, but by inference. The car key becomes a scent collector and emotional feedback device. The journey no longer starts when you open the door.
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
                Interaction Designer<br />team studio project
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["Research synthesis", "Concept development", "Interaction design", "Journey mapping", "System logic design", "Presentation & docs"].map((t, i) => (
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
                  ["XIAO Yucheng", "Designer"],
                  ["Lin Nora Tollefsen", "Designer"],
                  ["ONG Koklin", "Designer"],
                  ["WANG Pengxiang", "Designer"],
                  ["ZHAO Zehui", "Designer"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between",
                    fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4
                  }}>
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
            The project began from a simple observation: the car interior is one of the most intimate spaces in daily life, yet one of the least emotionally responsive. We asked what it would take to design an assistant that reads your state rather than waiting to be told.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover", photos: ["assets/eva/discover-1.svg", "assets/eva/discover-2.svg"],
                body: "In-car interaction is dominated by vision (83%), hearing (11%), and touch (3.5%). Smell gets just 1.5%, despite being the most direct path to instinctive behaviour and emotional memory. NIO, BMW, IM, and Zeekr have all explored cabin scent, but reactively: triggered by manual input or fatigue detection, never emotional state, and never before the driver arrives."
              },
              {
                num: "2", title: "Define", photos: ["assets/eva/define.svg"],
                body: "The problem wasn't a missing feature but a missing framing: car systems prioritise efficiency over experience. Through PERMA, the framework for human flourishing, we asked how a car could support positive emotion, engagement, relationships, meaning, and accomplishment, not just transport. The question became: how might the car sense your state and prepare for you before you arrive?"
              },
              {
                num: "3", title: "Develop", photos: ["assets/eva/develop.svg"],
                body: "EVA runs as input, processing, output. Input: phone (calendar, location, activity), wearable (heart rate, stress, sleep), and the car itself. Processing fuses emotional inference with context: time, weather, traffic. Output spans four dimensions before entry: scent (calm, focus, energise, or custom), lighting (warm welcome to cool meeting-mode tones), a pre-selected playlist, and cabin comfort via seat conditioning and air purification. The key itself became an emotional object, passively gathering scent and environmental data as you move."
              },
              {
                num: "4", title: "Deliver", photos: ["assets/eva/deliver-1.svg", "assets/eva/deliver-2.svg", "assets/eva/deliver-3.svg"],
                body: "Two user journeys trace how EVA touches all five flourishing factors across a real day. Wang Wei returns exhausted; EVA has already read her stress. A warm door-handle vibration, soft light, and welcome message greet her; café ambiance and cocoa scent fill the cabin inside. In the second, EVA preps a road trip, sets a destination mood, greets her by name on approach, and signs off: Wait for your next trip."
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
            EVA proposes a shift in how the car is understood as a designed space. Not a vehicle that responds to commands. A companion that reads context and prepares an environment around you. The most interesting design territory was the threshold before entry: the moment between effort and rest, the world and your space.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            The project raised questions worth continuing: how much data collection feels helpful versus intrusive, how the system communicates uncertainty without breaking the emotional tone, and what it means to design a relationship with an object that learns you over time.
          </p>
          <div style={{
            marginTop: 36, width: "80%", maxWidth: 720,
            marginLeft: "auto", marginRight: "auto",
            borderRadius: 18, overflow: "hidden"
          }}>
            <video src="assets/eva/outcome.mov" autoPlay loop muted playsInline
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

Object.assign(window, { ProjectDetailEva });
