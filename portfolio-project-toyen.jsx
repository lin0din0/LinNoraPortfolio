// portfolio-project-toyen.jsx, Tøyen Takt project page

const BASE = "assets/toyen-takt/";

function ProjectDetailToyen() {
  const isMobile = useIsMobile();
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13, lineHeight: 1.5, letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";
  const KICKER = {
    margin: 0, fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, fontWeight: 500, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "var(--muted)"
  };
  const DIVIDER = { marginTop: isMobile ? 64 : 100, paddingTop: isMobile ? 28 : 40, borderTop: "1px solid var(--line-soft)" };

  const steps = [
    {
      num: "1", title: "A place to belong to, not an event",
      body: "Street interviews on Tøyen surfaced two findings: almost nobody knew what was happening at Gamle Munch, which ran high-volume pop-ups with little continuity and no reason to return; and residents weren't asking for a specific activity, they were asking for a place. One woman put it plainly: \"I would actually like a gathering place. It doesn't really matter what happens there.\" We prototyped two concept directions early and carried the strongest elements of each into the main project.",
      items: [BASE + "discover-1.mov", BASE + "discover-2.svg"]
    },
    {
      num: "2", title: "Music cuts across everything else",
      body: "From these findings, four values had to hold: a permanent programme, because predictability creates safety; a place to return to, building a real relationship with residents; a clear identity, so the space is recognisable; and something that brings different groups together. What content could do all four at once? Music: research ties musical reactivity to belonging, positive association, and response to social threat, cutting across age, background, and interest like few other things can.",
      items: [BASE + "define.svg"]
    },
    {
      num: "3", title: "The pivot: identity, not infrastructure",
      body: "Our first concept was a full music house: rehearsal rooms, soundproofing, instruments. Then reality hit: expensive, noise conflicts, and it excluded other uses. The pivot: instead of building something new, improve existing music services on Tøyen through visibility and structure. Partners like Tøyen Orkester, KIGO, Musikkbryggeriet, and Øveriet already offered relevant activities: what was missing was a coherent identity, a permanent programme, and a digital surface.",
      items: [BASE + "develop-1.mov", BASE + "develop-2.svg"]
    },
    {
      num: "4", title: "Loud, recognisable, five clicks away",
      body: "TøyenTakt became that identity layer, deliberately colourful and loud, built to be instantly recognisable across outdoor advertising, the Gamle Munch website, and partner platforms. It reaches users through two touchpoints: a redesigned Gamle Munch website featuring it alongside other tenants, and contextual prompts inside existing music discovery apps, e.g. when a student browses for rehearsal space. The UX targets two tasks in 5 clicks each: signing up for a course, and booking a rehearsal room, with a prominent primary CTA and a deliberately quieter secondary one steering users toward engagement.",
      items: [BASE + "deliver-1.mov", BASE + "deliver-2.mov", BASE + "deliver-3.svg"]
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

        {/* ─── HERO VIDEO ─────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          borderRadius: 4, background: CHECKER
        }}>
          <Media src={BASE + "title-video.mov"} fill />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Tøyen Takt</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Turning a building without an identity into a neighbourhood's reason to come back.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <ProjectMeta duration="1 week project" tags={["Service Design", "UX Design"]} />

        {/* ─── OVERVIEW ───────────────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <p style={KICKER}>TLTR</p>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Gamle Munch runs constant pop-ups nobody hears about, and residents wanted a reason to keep coming back: not a specific event, just a place to belong to. Tøyen Takt is that identity layer, turning parts of the old Munch museum into a dynamic centre for music and a social gathering point for Gamle Oslo. It's a low-threshold offer, from beginner music courses for all ages to Takt-Talks, concerts, and rentable rehearsal spaces, built closely with existing services on Tøyen into a programme that gives the building a permanent, predictable identity.
              </p>
              <Reveal>
                <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                  <Media src={BASE + "overview.mov"} minHeight={280} />
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
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7, maxWidth: 220 }}>
                {["Field research", "Concept development", "Service design", "UX & UI design", "Visual identity"].map((t, i) => (
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
                  ["Carl Troye", "Designer"],
                  ["Andrea Cederkvist", "Designer"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", maxWidth: 320,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5
                  }}>
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
            We started by asking what kind of service could gather people across a diverse neighbourhood, and what Gamle Munch was actually missing. The answer turned out to be less about content and more about structure: predictability, identity, and a reason to return.
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
            TøyenTakt answers how a building with a fragmented identity can become a consistent social anchor for a neighbourhood, by leading with music as a universal gathering force and building a permanent, predictable structure on top of what already exists rather than replacing it. We envision the courses encouraging continuous learning so that Gamle Munch becomes a place you can grow with over time, changing in step with what the neighbourhood actually needs and wants.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            Looking back, we spent too much time on the digital surface and not enough on the physical service experience. We had an ambition for more cultural diversity that was not sufficiently reflected in the prototype. And we should have been more conscious of accessibility in our colour choices. If we were to continue, we would do more iterations with the target group and explore how the concept functions backstage.
          </p>
          <Reveal>
            <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto", borderRadius: 18, overflow: "hidden" }}>
              <img src={BASE + "outcome.svg"} alt="Outcome" style={{ width: "100%", display: "block" }} />
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

Object.assign(window, { ProjectDetailToyen });
