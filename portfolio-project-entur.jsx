// portfolio-project-entur.jsx, More Than a Trip (Entur) project page

function ProjectDetailEntur() {
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

  return (
    <div className="pf-artboard" data-bg="warm" style={{
      width: "100%", height: "100%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      color: "var(--ink)", position: "relative"
    }}>
      <Nav />

      <BackButton />

      <div style={{ padding: isMobile ? "96px 20px 64px" : "120px 64px 100px", maxWidth: 1400, margin: "0 auto" }}>

        {/* ─── HERO VIDEO ─────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: "#0E0E0C", borderRadius: 4
        }}>
          <Media src="assets/project/hero-video.mov" fill />
          <div style={{
            position: "absolute", bottom: 22, right: 26,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8,
            zIndex: 2
          }}>
            <img src="assets/project/logo.png" alt="Entur" style={{ height: 32, width: "auto" }} />
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "-0.005em"
            }}>Collaboration with Entur</span>
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>More Than a Trip</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Reframing sustainable travel as a personal gain, not a climate obligation.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <ProjectMeta duration="2 week project" tags={["UX Design", "Service Design"]} />

        {/* ─── OVERVIEW ───────────────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <p style={KICKER}>TLTR</p>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Entur asked us to turn abstract CO₂ data into something that actually moves people to act. Field research in Bergen with 10 people and a survey of 78 respondents gave a clear answer: the barrier wasn't a lack of awareness, it was climate guilt fatigue. What motivated behaviour was personal benefit, not obligation. The result is a concept layer within the existing Entur app that shifts the framing entirely: instead of showing users what they owe the climate, it shows what they gain, movement, fresh air, a calmer commute. Users set activity preferences and walking pace, and the app surfaces active route suggestions that naturally fit into their day.
              </p>
              <Reveal>
                <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                  <img src="assets/project/overview.svg" alt="More Than a Trip overview"
                    style={{ width: "100%", display: "block" }} />
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
                UX Designer in a team<br />school project
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7, maxWidth: 240 }}>
                {["Field research & survey design", "Insight synthesis", "Concept development", "Figma prototyping & UI design", "Service design & scenario mapping"].map((t, i) => (
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
                  ["Mina", "Designer"],
                  ["Oda", "Designer"],
                  ["Lin Nora", "Designer"],
                ].map(([name, role], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", maxWidth: 320, fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
                    <span>{name}</span><span>{role}</span>
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
            The question driving the work was how to encourage greener transport choices without triggering the climate guilt that was already pushing people away. That required understanding what actually motivates everyday decisions.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Guilt doesn't move people, friction does",
                body: "We took a field trip to Bergen, interviewing Entur staff and commuters about why the car was their preferred option. People got defensive, almost ashamed, as if being asked about their transport choice felt like an accusation. The real finding wasn't indifference to the environment: life is busy enough, and people need whatever gets them from A to B with the least friction.",
                items: ["assets/project/discover-1.svg", "assets/project/discover-2.svg"]
              },
              {
                num: "2", title: "Personal gain beats climate guilt",
                body: "We hypothesised that people might change their transport habits if the incentive was genuinely beneficial to them rather than guilt driven, and tested it with a street survey of 78 responses. 80% said they'd walk if it were a realistic option, and 90% said daily movement mattered to them. Climate wasn't the lever, personal gain was, so we moved into testing early prototypes of an active points system inside the Entur app alongside campaign concepts.",
                items: ["assets/project/define-1.svg", "assets/project/define-2.svg"]
              },
              {
                num: "3", title: "A feature, not a new app",
                body: "We developed Mer enn EnTur (More Than a Trip) as a feature within the existing Entur app. Users set preferences for physical activity, walking pace, and what they value on a route, and the app surfaces suggestions that naturally integrate walking or cycling into the commute. A full scenario around Gunnar, a 44 year old father from Bekkestua who normally drives, tested how the feature fits into a real day.",
                items: ["assets/project/develop.svg"]
              },
              {
                num: "4", title: "Arriving before the decision, not after",
                body: "The final concept spans three touchpoints: outdoor advertising leading with personal benefit (En aktiv tur, En sosial tur), an in-app route planner built around user preferences, and morning push notifications timed before habits kick in. The notifications were designed as invitations, not reminders, arriving before the decision moment to offer a different path. Route logic draws on data from Grønnstruktur and Statens vegvesen.",
                items: ["assets/project/deliver-1.svg", "assets/project/deliver-2.svg", "assets/project/deliver-3.svg"]
              }
            ].map((step) => (
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
            The project showed that sustainable behaviour change doesn't need better climate data, it needs better framing. By connecting what users already want to what Entur can offer, the design nudges toward greener choices without any finger pointing. The key decision was removing climate language from the interface entirely and letting personal benefit carry the whole argument. The next step would be testing notification timing and tone with real commuters.
          </p>
          <Reveal>
            <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto", borderRadius: 18, overflow: "hidden" }}>
              <img src="assets/project/outcome.svg" alt="More Than a Trip outcome"
                style={{ width: "100%", display: "block" }} />
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

Object.assign(window, { ProjectDetailEntur });
