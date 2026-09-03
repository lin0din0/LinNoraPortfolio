// portfolio-project-stackt.jsx, Stackt project page

function ProjectDetailStackt() {
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
        <div style={{
          marginTop: isMobile ? 48 : 80,
          display: "flex", flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 16
        }}>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em"
          }}>3-week hackathon sprint · Live pitch, NatWest Conference Centre, London (28 Aug 2026)</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>Product Design / UX Design / FinTech</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW ───────────────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Stackt was built for the Work in Fintech AI Summit hackathon, where ~1,000 applicants competed for 120 spots and every team had three weeks to design, build and pitch a financial literacy product to a panel of fintech founders and CEOs. The brief was blunt: a generation gets its financial education from TikTok. Build something better. Our team started broad, a Duolingo-style app spanning banking, investing and insurance for 15–18 year olds, but early research kept surfacing the same gap: young people aren't disengaged from money, they're underserved by it. They can recite facts but freeze at the moment of an actual decision. That reframed the whole problem: the product didn't need to teach financial <em>facts</em>, it needed to teach financial <em>judgement</em>.
              </p>
            </section>

            {/* ─── DELIVERY ────────────────────────────────────────────── */}
            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                We narrowed scope hard, from a full personal-finance suite down to investing, and from a 15–18 audience down to 17–21, the group actually making financial decisions with no safety net. The result is Stackt: users read three competing accounts of a real historic financial event, decide which is credible, and make a simulated hold/buy/sell/diversify call, then see how it actually played out. An AI mentor guides without ever giving the answer, and a leaderboard ranks streaks and accuracy rather than simulated portfolio value, so the game never rewards recklessness. Everything runs in simulation only (no real money, no personalised advice) with FCA Consumer Duty compliance built into the product architecture rather than bolted on as a disclaimer.
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
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500, maxWidth: 220 }}>
                Product &amp; UX Designer, Team Lead<br />in a 5-person hackathon team
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 220 }}>
                {["Target audience & problem framing", "Core game mechanic design", "Pitch deck & narrative (Figma)", "Design system (dark theme, onboarding, category icons)", "Team research synthesis"].map((t, i) => (
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
                  ["Sheyi Shoyebi", "Research & Insight"],
                  ["Ivan Hung", "Business, Market Analysis & Forecasting"],
                  ["Tushar Goyal", "Team member"],
                  ["Tolu Awosanya", "Team member"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", gap: 12,
                    fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4
                  }}>
                    <span>{name}</span><span style={{ textAlign: "right" }}>{role}</span>
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
                items={["assets/stackt/figma/slide-disperced-uncurated.png", "assets/stackt/figma/slide-confidence-gap.png", "assets/stackt/figma/slide-active-recall-works.png"]}
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
        <section id="outcome" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Outcome &amp; reflection</h2>
          <p style={{
            ...BODY, marginTop: 18,
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
          <div style={{ marginTop: 36, width: "100%", borderRadius: 18, overflow: "hidden" }}>
            <img src="assets/stackt/outcome.jpg" alt="Team 18 at the Work in Fintech AI Summit hackathon"
              style={{ width: "100%", height: "auto", display: "block" }} />
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

Object.assign(window, { ProjectDetailStackt });
