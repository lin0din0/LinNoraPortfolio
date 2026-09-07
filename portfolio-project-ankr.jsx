// portfolio-project-ankr.jsx, Ankr project page

function ProjectDetailAnkr() {
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
      num: "1", title: "Categories, not a real student",
      body: "We researched Denmark's dropout and programme-mismatch statistics through Eurostat, OECD, Statistics Denmark, Eurydice, Dansk Industri, and the European Commission, and mapped the existing guidance landscape: starting with uddannelsesguiden.dk. We found that existing tools offer exploration, but work with generalised categories: they don't know an individual student in depth, and they don't follow them over time.",
      items: ["assets/ankr/discover-1.svg", "assets/ankr/discover-2.svg", "assets/ankr/discover-3.svg"]
    },
    {
      num: "2", title: "A roadmap a student actually owns",
      body: "From that research, we designed Ankr: an AI mentor that combines what we can measure about a student (grades, progress, deadlines) with what only they can tell us, and turns it into a roadmap they actually own. Every decision was anchored around one fictional student, Thomas, to keep the concept concrete. We delivered a full Figma design system (colour and typography tokens, spacing and elevation, a complete component library) built out across 40+ screen frames, an interactive prototype, and a pitch deck and manuscript backed by verified sources, presented at TechLabs Copenhagen's final showcase.",
      items: ["assets/ankr/deliver.svg"]
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
          <video src="assets/ankr/title-video.mov" loop muted playsInline preload="none"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <span style={{
            display: "block", marginBottom: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>TechLabs Copenhagen · Web Development Track</span>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Ankr</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)",
            maxWidth: 640
          }}>An AI mentor app that helps Danish gymnasium students figure out what to study, and stay on track once they do.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <ProjectMeta duration="12 weeks · Team project" tags={["UX/UI Design", "Product Design", "Ed-tech"]} />

        {/* ─── OVERVIEW ───────────────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <p style={KICKER}>TLTR</p>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                27.1% of Danish students drop out of higher education, and 42.6% say it's because the programme didn't match what they expected. Ankr is an AI mentor that gets to know a student over time, and turns that into a roadmap they actually own.
              </p>
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
                UX/UI Designer & Brand Lead<br />in a team of five
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7, maxWidth: 220 }}>
                {["UX/UI design", "Brand identity", "Figma design system", "Interactive prototype", "Pitch deck design"].map((t, i) => (
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
                {["Parth", "Marius", "Kritika", "Luis"].map((name, i) => (
                  <span key={i} style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>{name}</span>
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
            We started from a statistic, not a feature idea: 27.1% of Danish students drop out of higher education, and 42.6% of them say it's because the programme didn't match what they expected. The process moved from understanding why guidance fails students today, to designing a tool that actually knows them over time.
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
            We delivered a working prototype, a full design system, and a pitch grounded in real dropout data rather than assumptions. The most important design moment was realising the roadmap (not the chat) was the heart of the product: the arc timeline is what makes an abstract, ongoing mentorship feel visible and real.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            What I'd do differently: push earlier on cutting non-essential features, instead of designing and then trimming. What's next: moving Ankr from prototype to a shippable product, with real API integration, authentication, and persistent data; and eventually, expansion beyond Denmark.
          </p>
          <Reveal>
            <div style={{ marginTop: 36, width: "100%", borderRadius: 18, overflow: "hidden" }}>
              <img src="assets/ankr/outcome.svg" alt="Ankr outcome"
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

Object.assign(window, { ProjectDetailAnkr });
