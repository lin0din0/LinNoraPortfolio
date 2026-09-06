// portfolio-project-stackt.jsx, Stackt project page

function ProjectDetailStackt() {
  const isMobile = useIsMobile();
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

        {/* ─── HERO ───────────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: "#0E0E0C", borderRadius: 4
        }}>
          <img src="assets/stackt/title.svg" alt="Stackt: Where judgement gets built before decisions get real."
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <span style={{
            display: "block", marginBottom: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>Work in Fintech (WIF) AI Summit 2026 · Hackathon</span>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Stackt</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)",
            maxWidth: 640
          }}>A gamified financial literacy app that teaches 17–21 year olds how to <em>think</em> about money, not just what to know about it.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <ProjectMeta duration="3-week hackathon sprint · Live pitch, NatWest Conference Centre, London (28 Aug 2026)" tags={["Product Design", "UX Design", "FinTech"]} />

        {/* ─── OVERVIEW ───────────────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <p style={KICKER}>TLTR</p>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Stackt was built for the Work in Fintech AI Summit hackathon, ~1,000 applicants competing for 120 spots, three weeks to design, build, and pitch a financial literacy product to a panel of fintech founders and CEOs. The brief was blunt: a generation gets its financial education from TikTok, build something better. We started broad, a Duolingo-style app spanning banking, investing, and insurance for 15–18 year olds, but research kept surfacing the same gap: young people aren't disengaged from money, they're underserved by it, able to recite facts but freezing at the moment of an actual decision. That reframed the problem from teaching financial <em>facts</em> to teaching financial <em>judgement</em>.
              </p>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                We narrowed scope hard: from a full personal-finance suite to investing alone, and from 15–18 to 17–21, the group actually making financial decisions with no safety net. The result, Stackt, has users read three competing accounts of a real historic financial event, judge which is credible, and make a simulated hold/buy/sell/diversify call before seeing how it actually played out. An AI mentor guides without giving the answer, and the leaderboard ranks streaks and accuracy rather than portfolio value, so the game never rewards recklessness. Everything runs in simulation only, with FCA Consumer Duty compliance built into the architecture rather than bolted on as a disclaimer.
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
                Product &amp; UX Designer, Team Lead<br />in a 5-person hackathon team
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7, maxWidth: 240 }}>
                {["Target audience & problem framing", "Core game mechanic design", "Pitch deck & narrative (Figma)", "Design system (dark theme, onboarding, category icons)", "Team research synthesis"].map((t, i) => (
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
                  ["Sheyi Shoyebi", "Research & Insight"],
                  ["Ivan Hung", "Business, Market Analysis & Forecasting"],
                  ["Tushar Goyal", "Team member"],
                  ["Tolu Awosanya", "Team member"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", gap: 12, maxWidth: 340,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5
                  }}>
                    <span>{name}</span><span style={{ textAlign: "right" }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DESIGN PROCESS ─────────────────────────────────────────── */}
        <section id="process" style={DIVIDER}>
          <p style={KICKER}>Design process</p>
          <p style={{ ...BODY, marginTop: 18, maxWidth: 720 }}>
            With only three weeks, the process was less about exhaustive research and more about converging fast and testing the framing hard. We grounded the brief in existing research rather than assumptions: the London Foundation for Banking &amp; Finance's Young Persons' Money Index, YouGov and Aviva data on investing interest, academic gamification studies, and a scan of the competitive landscape (Fingo, GoHenry, SIFMA's Stock Market Game, InvestGame, HowTheMarketWorks), to find where a genuine gap existed rather than duplicating what was already out there.
          </p>
          <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
            That research kept pointing to the same tension: high interest, low confidence, and almost no structured space to practise. It drove our biggest pivot: shifting the target audience from 15–18 (still in education) to 17–21, the point where real financial decisions arrive at once with the least support, and we dropped the “Duolingo for finance” framing itself, since it implied a tone at odds with a product about financial independence.
          </p>
          <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
            Around that reframed problem, we built the mechanic: three competing accounts of a real historic financial event, judged for credibility, followed by a simulated investment decision, designed to train judgement over recall. An onboarding flow personalises the learning path; an AI mentor scaffolds reasoning without ever giving a direct answer; a leaderboard ranks streaks and accuracy rather than simulated portfolio value, so the game can't be gamed by reckless bets.
          </p>

          {/* ─── MOMENT: THE RESEARCH ────────────────────────────────── */}
          <div style={{ marginTop: 56 }}>
            <h3 style={MOMENT_H}>What the research showed</h3>
            <p style={{ ...BODY, marginTop: 10, maxWidth: 640 }}>
              Three findings shaped everything after: young people are getting their financial education from social media and acting on it, confidence badly outpaces competence, and active recall (not passive reading) is what actually sticks.
            </p>
            <div style={{ marginTop: 24 }}>
              <MediaStack
                items={["assets/stackt/figma/slide-confidence-gap.png", "assets/stackt/figma/slide-disperced-uncurated.png", "assets/stackt/figma/slide-active-recall-works.png"]}
                featured
              />
            </div>
          </div>

          {/* ─── MOMENT: THE SCOPE ──────────────────────────────────── */}
          <div style={{ marginTop: 56 }}>
            <h3 style={MOMENT_H}>Narrowing what to teach</h3>
            <p style={{ ...BODY, marginTop: 10, maxWidth: 640 }}>
              The MVP scope was narrowed to four categories, sized by how much 17–21 year olds want to learn each one against how badly they're currently failing it: inflation and crypto topped both lists.
            </p>
            <div style={{ marginTop: 24 }}>
              <MediaStack items={["assets/stackt/figma/slide-curated-learning.png"]} />
            </div>
          </div>

          {/* ─── MOMENT: THE PITCH ──────────────────────────────────── */}
          <div style={{ marginTop: 56 }}>
            <h3 style={MOMENT_H}>Making the case</h3>
            <p style={{ ...BODY, marginTop: 10, maxWidth: 640 }}>
              The final pitch deck, built and edited live in Figma, laid out where Stackt actually sits against existing finance apps, sized the market, and settled on a low-cost B2B2C model: parents, employers and banks under Consumer Duty obligations, as the more realistic paying customers than the 17–21 users themselves. It followed a “bring a person into the room” principle throughout: leading with a specific user moment rather than a statistic, and closing on the same person.
            </p>
            <div style={{ marginTop: 24 }}>
              <MediaStack
                items={["assets/stackt/figma/slide-value-proposition.png", "assets/stackt/figma/tam-sam-som.png", "assets/stackt/figma/business-model.png"]}
                featured
              />
            </div>
          </div>
        </section>

        {/* ─── OUTCOME & REFLECTION ───────────────────────────────────── */}
        <section id="outcome" style={DIVIDER}>
          <p style={KICKER}>Outcome &amp; reflection</p>
          <p style={{
            ...BODY, marginTop: 14,
            maxWidth: 640
          }}>
            The sharpest lesson was how much positioning shapes perception of a product: the same mechanic reads completely differently as “Duolingo for finance” versus “a journey toward financial independence,” and that framing decision ended up doing as much work as any single feature. Narrowing scope early (dropping banking and insurance to focus on investing; picking one age band instead of two) was what made a working, coherent demo possible in three weeks rather than a sprawling, half-built one.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            If we had more time, the open question we didn't fully resolve, how a user's investment verdict should be scored against the historic outcome, is where I'd focus next, since it directly shapes how satisfying and honest the product's “Reveal” moment feels.
          </p>
          <Reveal>
            <div style={{ marginTop: 36, width: "100%", borderRadius: 18, overflow: "hidden" }}>
              <img src="assets/stackt/outcome.jpg" alt="Team 18 at the Work in Fintech AI Summit hackathon"
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

Object.assign(window, { ProjectDetailStackt });
