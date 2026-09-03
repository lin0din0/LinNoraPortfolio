// portfolio-project-volunteering.jsx, Volunteering My Way project page

function ProjectDetailVolunteering() {
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
      color: "var(--ink)",
      position: "relative"
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
          background: "#F3F1EB", borderRadius: 4
        }}>
          <img src="assets/volunteering/title-video.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{
            position: "absolute", bottom: 22, right: 26, zIndex: 2
          }}>
            <img src="assets/volunteering/red-cross-logo.svg" alt="Red Cross" style={{ height: 44, width: "auto" }} />
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Volunteering My Way</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Designing a personal path into volunteering, from first curiosity to lasting engagement.</p>
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
          }}>12 week project</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>Interaction and Service Design</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Volunteers under 30 are declining at Røde Kors. This 12-week project explores how to lower the threshold for getting involved and turn first curiosity into lasting engagement.
              </p>
              <div style={{ marginTop: 36 }}>
                <img src="assets/volunteering/overview.svg" alt="" style={{ width: "100%", borderRadius: 4, display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                We developed a digital platform that makes it easier for young people to find their place in Røde Kors, from first curiosity to lasting engagement. By making the volunteer journey personal and transparent, we lower the threshold for joining and increase the likelihood of staying. Young people need clarity, flexibility, and the experience of getting something back. The platform meets users where they are and makes the path from curiosity to signed-up activity short, inspiring, and personal.
              </p>
            </section>

          {/* ─── MY ROLE ────────────────────────────────────────────────── */}
        <section id="role" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>My role in this project</h2>
          <div style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 20
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
                {["User research & surveys", "Qualitative interviews", "Insight synthesis", "Concept development", "Service design (JTBD)", "Figma prototyping & testing"].map((t, i) => (
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
                  ["Oda Yttredal", "Designer"],
                  ["Lin Nora Tollefsen", "Designer"]
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

        {/* ─── DESIGN PROCESS ─────────────────────────────────────────── */}
        <section id="process" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Design process</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 640
          }}>
            The project started with research and insight work, with the goal of getting better acquainted with the organisation and what it means to be a volunteer, as well as mapping the current situation to understand the target group's needs.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "We surveyed 24 participants at Foss upper secondary school and Oslo Met on attitudes toward volunteering, then interviewed four young volunteers and Røde Kors staff about entry points, motivation, and friction. We also joined a volunteer breakfast at Frivilligsentralen, speaking with Norsk Studentorganisasjon and Frivillighet Norge's Secretary General.",
                photos: ["assets/volunteering/discover.svg"]
              },
              {
                num: "2", title: "Define",
                body: "Three insights shaped the brief. People arrive with different values, free time, and goals, yet the entry point looked identical for everyone. Getting involved required too many steps and too much uncertainty about what you were signing up for. And reaching young people means meeting intrinsic motivation, not duty or guilt: the real question was whether this would help them grow, connect, or become more of who they want to be.",
                photos: ["assets/volunteering/define.svg"]
              },
              {
                num: "3", title: "Develop",
                body: "We mapped the platform around four journey stages (curious, new, active, developing), using Jobs To Be Done to anchor each feature in a real need. Inspiration came from Patagonia, Spotify, and Duolingo, via a service takeover workshop imagining Røde Kors in their language. Every prototype iteration went back in front of real users, and what we heard shaped what came next.",
                photos: ["assets/volunteering/develop-1.svg", "assets/volunteering/develop-2.svg", "assets/volunteering/develop-3.svg"]
              },
              {
                num: "4", title: "Deliver",
                body: "The final concept follows Maria through all four stages: curious, she sees a Røde Kors Instagram ad and lands on an onboarding flow with personalised suggestions. New, she's welcomed into a chat and books her first activity. Active, a flexible calendar lets her mark unavailable days around exams. Developing, her personal page tracks hours and courses, with a downloadable certificate for her CV.",
                videos: ["assets/volunteering/deliver-1.mov", "assets/volunteering/deliver-2.mov", "assets/volunteering/deliver-3.mov", "assets/volunteering/develop-4.mov", "assets/volunteering/deliver-5.mov"]
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
            The platform answers user needs across the entire volunteer journey, from the moment someone is curious to when they are an experienced volunteer. It makes the entry point clearer and simpler by meeting users where they are. It ensures that new volunteers are well received through hospitality that offers safety, belonging, and overview. It makes it easier to contribute by giving ownership of one's own time through a flexible calendar. And it motivates continued engagement by visualising effort, progress, and competence.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            If we were to continue the work, we would explore how to make the solution even simpler through more iterations and user tests with the target group. We would also look at how the solution functions backstage, to better understand which barriers and adjustments are needed to implement the concept. Even so, we believe the solution addresses a real need that is not met today: a platform that makes the volunteer journey more personal, transparent, and motivating.
          </p>

          <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            <img src="assets/volunteering/outcome.svg" alt="" style={{ width: "100%", borderRadius: 18, display: "block" }} />
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

Object.assign(window, { ProjectDetailVolunteering });
