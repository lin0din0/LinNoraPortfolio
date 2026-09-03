// portfolio-project-toyen.jsx, Tøyen Takt project page

const BASE = "assets/toyen-takt/";

function ProjectDetailToyen() {
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
      body: "Street interviews on Tøyen surfaced two findings: almost nobody knew what was happening at Gamle Munch, which ran high-volume pop-ups with little continuity and no reason to return; and residents weren't asking for a specific activity, they were asking for a place. One woman put it plainly: \"I would actually like a gathering place. It doesn't really matter what happens there.\" We prototyped two concept directions early and carried the strongest elements of each into the main project.",
      items: [BASE + "discover-1.mov", BASE + "discover-2.svg"]
    },
    {
      num: "2", title: "Define",
      body: "From these findings, four values had to hold: a permanent programme, because predictability creates safety; a place to return to, building a real relationship with residents; a clear identity, so the space is recognisable; and something that brings different groups together. What content could do all four at once? Music: research ties musical reactivity to belonging, positive association, and response to social threat, cutting across age, background, and interest like few other things can.",
      items: [BASE + "define.svg"]
    },
    {
      num: "3", title: "Develop",
      body: "Our first concept was a full music house: rehearsal rooms, soundproofing, instruments. Then reality hit: expensive, noise conflicts, and it excluded other uses. The pivot: instead of building something new, improve existing music services on Tøyen through visibility and structure. Partners like Tøyen Orkester, KIGO, Musikkbryggeriet, and Øveriet already offered relevant activities: what was missing was a coherent identity, a permanent programme, and a digital surface.",
      items: [BASE + "develop-1.mov", BASE + "develop-2.svg"]
    },
    {
      num: "4", title: "Deliver",
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

      <a href="index.html#work" aria-label="Back to projects" style={{
        position: "absolute", top: 36, left: 64, zIndex: 60,
        width: 46, height: 46, borderRadius: "50%",
        border: "1px solid var(--line-soft)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--ink)", textDecoration: "none",
        fontSize: 16, lineHeight: 1, background: "var(--bg)"
      }}>←</a>

      <div style={{ padding: isMobile ? "96px 20px 64px" : "120px 64px 100px", maxWidth: 1400, margin: "0 auto" }}>

        {/* ─── HERO VIDEO ─────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          borderRadius: 4, background: CHECKER
        }}>
          <video src={BASE + "title-video.mov"}
            autoPlay loop muted playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
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
        <div style={{
          marginTop: isMobile ? 48 : 80,
          display: "flex", flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 16
        }}>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em"
          }}>1 week project</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>Service Design</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Gamle Munch runs constant pop-ups nobody hears about, and residents wanted a reason to keep coming back: not a specific event, just a place to belong to. Tøyen Takt is that identity layer.
              </p>
              <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                <video src={BASE + "overview.mov"} autoPlay loop muted playsInline
                  style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                TøyenTakt is an initiative that turns parts of the old Munch museum into a dynamic centre for music. Established as a collaborative project with local partners, TøyenTakt aims to create an arena where music functions as a social gathering point for people in the Gamle Oslo district. It is a low-threshold offer with a broad range of activities including beginner music courses for all ages, Takt-Talks, concerts, and the option to rent rehearsal spaces. Working closely with existing services on Tøyen, TøyenTakt develops a varied and inclusive programme that builds a permanent, predictable identity for the building.
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
                UX Designer in a team<br />school project
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["Field research", "Concept development", "Service design", "UX & UI design", "Visual identity"].map((t, i) => (
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
                  ["Carl Troye", "Designer"],
                  ["Andrea Cederkvist", "Designer"],
                  ["Lin Nora Tollefsen", "Designer"]
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
            We started by asking what kind of service could gather people across a diverse neighbourhood, and what Gamle Munch was actually missing. The answer turned out to be less about content and more about structure: predictability, identity, and a reason to return.
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
            TøyenTakt answers how a building with a fragmented identity can become a consistent social anchor for a neighbourhood, by leading with music as a universal gathering force and building a permanent, predictable structure on top of what already exists rather than replacing it. We envision the courses encouraging continuous learning so that Gamle Munch becomes a place you can grow with over time, changing in step with what the neighbourhood actually needs and wants.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            Looking back, we spent too much time on the digital surface and not enough on the physical service experience. We had an ambition for more cultural diversity that was not sufficiently reflected in the prototype. And we should have been more conscious of accessibility in our colour choices. If we were to continue, we would do more iterations with the target group and explore how the concept functions backstage.
          </p>
          <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto", borderRadius: 18, overflow: "hidden" }}>
            <img src={BASE + "outcome.svg"} alt="Outcome" style={{ width: "100%", display: "block" }} />
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

Object.assign(window, { ProjectDetailToyen });
