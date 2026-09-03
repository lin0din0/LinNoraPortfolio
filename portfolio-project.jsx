// portfolio-project.jsx — Project detail page template
// Static markup throughout: click any text on the canvas in edit mode and retype it.
// Duplicate this artboard in the canvas to create a new project page.

function PhotoRoulette({ photos }) {
  const [idx, setIdx] = React.useState(0);
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";
  if (!photos || photos.length === 0) {
    return <div style={{ width: "100%", aspectRatio: "5 / 3", background: CHECKER, borderRadius: 14 }} />;
  }
  return (
    <div
      style={{ width: "100%", aspectRatio: "442 / 267", borderRadius: 14, overflow: "hidden", position: "relative", cursor: photos.length > 1 ? "pointer" : "default" }}
      onClick={() => photos.length > 1 && setIdx((idx + 1) % photos.length)}
    >
      <img src={photos[idx]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {photos.length > 1 && (
        <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
          {photos.map((_, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === idx ? "white" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDetail() {
  // ── shared typography helpers ──────────────────────────────────────────
  const H_SECTION = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 400, fontSize: 22, letterSpacing: "-0.01em",
    color: "var(--ink)"
  };
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13, lineHeight: 1.5, letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };

  return (
    <div className="pf-artboard" data-bg="warm" style={{
      width: "100%", height: "100%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      color: "var(--ink)",
      position: "relative"
    }}>
      <Nav />

      {/* Back button — top left circle */}
      <a href="index.html#work" aria-label="Back to projects" style={{
        position: "absolute", top: 36, left: 64, zIndex: 60,
        width: 46, height: 46, borderRadius: "50%",
        border: "1px solid var(--line-soft)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--ink)", textDecoration: "none",
        fontSize: 16, lineHeight: 1, background: "var(--bg)"
      }}>←</a>

      <div style={{ padding: "120px 64px 100px", maxWidth: 1180, margin: "0 auto" }}>

        {/* ─── HERO VIDEO ────────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: "#0E0E0C",
          borderRadius: 4
        }}>
          <video
            src="assets/project/hero-video.mov"
            autoPlay loop muted playsInline
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover"
            }}
          />
          {/* Collaboration label, bottom-right */}
          <div style={{
            position: "absolute", bottom: 22, right: 26,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6,
            zIndex: 2
          }}>
            <img src="assets/project/logo.png" alt="Entur" style={{ height: 28, width: "auto" }} />
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "-0.005em"
            }}>
              Collaboration with ENTUR AS
            </span>
          </div>
        </div>

        {/* ─── TITLE BLOCK ───────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>More Than a Trip</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Reframing sustainable travel as a personal gain, not a climate obligation.</p>
        </div>

        {/* ─── META ROW ──────────────────────────────────────────────────── */}
        <div style={{
          marginTop: 80,
          display: "grid", gridTemplateColumns: "200px 1fr auto",
          alignItems: "center", gap: 40
        }}>
          <span /> {/* spacer to align with left rail below */}
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em"
          }}>2 week project</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>UX design</span>
        </div>

        {/* ─── OVERVIEW + DELIVERY — left rail nav + right content ───────── */}
        <div style={{
          marginTop: 36,
          display: "grid", gridTemplateColumns: "200px 1fr",
          gap: 40, alignItems: "start"
        }}>
          {/* LEFT — section list */}
          <nav style={{
            position: "sticky", top: 32,
            display: "flex", flexDirection: "column", gap: 24,
            paddingTop: 4
          }}>
            {[
              ["#overview", "TLTR"],
              ["#delivery", "Delivery"],
              ["#role", "My role"],
              ["#process", "Design process"],
              ["#outcome", "Outcome"]
            ].map(([href, label]) => (
              <a key={label} href={href} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                color: "var(--ink)", textDecoration: "none",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13, letterSpacing: "-0.005em"
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "var(--ink)", flexShrink: 0
                }} />
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT — content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>Overview</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Entur asked us to turn abstract CO₂ data into something that actually moves people to act. Field research in Bergen with 10 people and a survey of 78 respondents gave us a clear answer: the barrier was not a lack of awareness. People were exhausted by climate guilt. What motivated behaviour was personal benefit, not obligation. Fresh air, movement, a less stressful commute.
              </p>

              <div style={{ marginTop: 36 }}>
                <img src="assets/project/overview.svg" alt="" style={{ width: "100%", borderRadius: 4, display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                A concept layer within the existing Entur app that shifts the framing entirely. Instead of showing users what they owe the climate, the service shows what they gain: movement, fresh air, a calmer commute. Users set activity preferences and walking pace, and the app surfaces active route suggestions that naturally fit into their day.
              </p>
            </section>
          </div>
        </div>

        {/* ─── MY ROLE — 3 cards ─────────────────────────────────────────── */}
        <section id="role" style={{ marginTop: 120 }}>
          <h2 style={{ ...H_SECTION, textAlign: "center" }}>My role in this project</h2>

          <div style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20
          }}>
            {/* card 1 — photo + caption */}
            <div style={{
              border: "1px solid var(--line-soft)",
              borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 14,
              minHeight: 220, position: "relative", overflow: "hidden"
            }}>
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13, color: "var(--ink)", maxWidth: 200
              }}>
                UX Designer in a team<br />
                school project
              </span>
              {/* faint silhouette placeholder */}
              <svg viewBox="0 0 120 140" style={{
                position: "absolute", right: 14, bottom: 6, width: 110, height: 130,
                opacity: 0.18
              }}>
                <ellipse cx="60" cy="45" rx="22" ry="26" fill="none" stroke="var(--ink)" strokeWidth="1" />
                <path d="M20 140 Q20 90 60 90 Q100 90 100 140" fill="none" stroke="var(--ink)" strokeWidth="1" />
                <path d="M44 38 Q40 30 48 28 M76 38 Q80 30 72 28" fill="none" stroke="var(--ink)" strokeWidth="1" />
              </svg>
            </div>

            {/* card 2 — responsibilities */}
            <div style={{
              border: "1px solid var(--line-soft)",
              borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 16,
              minHeight: 220
            }}>
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13, color: "var(--ink)", fontWeight: 500
              }}>Responsibilities included:</span>
              <p style={{ ...BODY, fontSize: 13 }}>
                Field research and survey design, insight synthesis, concept development, Figma prototyping and UI design, service design and scenario mapping
              </p>
            </div>

            {/* card 3 — team list */}
            <div style={{
              border: "1px solid var(--line-soft)",
              borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12,
              minHeight: 220
            }}>
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13, color: "var(--ink)", fontWeight: 500
              }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["Mina", "Designer"],
                  ["Oda", "Designer"],
                  ["Lin Nora", "Designer"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between",
                    fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4
                  }}>
                    <span>{name}</span>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DESIGN PROCESS ────────────────────────────────────────────── */}
        <section id="process" style={{ marginTop: 120 }}>
          <h2 style={{ ...H_SECTION, textAlign: "center" }}>Design process</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto", textAlign: "center"
          }}>
            The question driving the work was how to encourage greener transport choices without triggering the climate guilt that was already pushing people away. That required understanding what actually motivates everyday decisions.
          </p>

          {/* 4 step rows */}
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              { num: "1", title: "Discover", body: "We took a field trip to Bergen, conducting interviews with Entur staff and guerrilla street interviews with people commuting by car. We asked where they were heading and why the car was their preferred option. The response was telling: people became defensive, almost ashamed, as if being questioned about their transport choice felt like an accusation. The core finding was not indifference to the environment but something simpler. Life is busy enough. People need whatever gets them from A to B with the least friction.", photos: ["assets/project/discover-1.svg", "assets/project/discover-2.svg"] },
              { num: "2", title: "Define", body: "From those findings we built a hypothesis: people might change their transport habits if the incentive was genuinely beneficial to them rather than guilt-driven. We designed a quantitative survey and hung it around town, collecting 78 responses. The data confirmed the direction. 80% said they would walk if it were a realistic option. 90% said daily movement mattered to them. Climate was not the lever. Personal gain was. From there we moved into testing, running early prototypes of an active points system within the Entur app alongside campaign concepts, iterating on both to find what actually shifted intent.", photos: ["assets/project/define-1.svg", "assets/project/define-2.svg"] },
              { num: "3", title: "Develop", body: "We developed Mer enn EnTur as a feature within the existing Entur app. Users set preferences for physical activity, walking pace, and what they value on a route. The app surfaces suggestions that naturally integrate walking or cycling into the commute. A full scenario around Gunnar, a 44 year old father from Bekkestua who normally drives, tested how the feature fits into a real day.", photos: ["assets/project/develop.svg"] },
              { num: "4", title: "Deliver", body: "The final concept spans three touchpoints: outdoor advertising leading with personal benefit using lines like En aktiv tur and En sosial tur, an in-app route planner built around user preferences, and morning push notifications timed before habits kick in. The notifications were designed as invitations, not reminders, arriving before the decision moment to offer a different path. Route logic draws on data from Grønnstruktur and Statens vegvesen.", photos: ["assets/project/deliver-1.svg", "assets/project/deliver-2.svg", "assets/project/deliver-3.svg"] }
            ].map((step) => (
              <div key={step.num} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 60, alignItems: "start"
              }}>
                <div>
                  <h3 style={{
                    margin: 0,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em",
                    color: "var(--ink)"
                  }}>
                    {step.num}: {step.title}
                  </h3>
                  <p style={{ ...BODY, marginTop: 12, fontSize: 13 }}>
                    {step.body}
                  </p>
                </div>
                <PhotoRoulette photos={step.photos} />
              </div>
            ))}
          </div>
        </section>

        {/* ─── OUTCOME & REFLECTION ──────────────────────────────────────── */}
        <section id="outcome" style={{ marginTop: 120 }}>
          <h2 style={{ ...H_SECTION, textAlign: "center" }}>Outcome &amp; reflection</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            The project showed that sustainable behaviour change does not need better climate data. It needs better framing. By connecting what users already want to what Entur can offer, the design nudges toward greener choices without any finger pointing. The key design decision was removing climate language from the interface entirely and letting personal benefit carry the whole argument. The next step would be testing notification timing and tone with real commuters.
          </p>

          <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            <img src="assets/project/outcome.svg" alt="" style={{ width: "100%", borderRadius: 18, display: "block" }} />
          </div>
        </section>

      </div>
    </div>
  );
}

Object.assign(window, { ProjectDetail });
