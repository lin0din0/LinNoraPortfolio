// portfolio-project-carbondex.jsx, Carbon DEX project page
// CarbonLattice (Three.js graphene-lattice visual) now lives in portfolio-core.jsx,
// shared with the homepage project card.

function ProjectDetailCarbonDex() {
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
          width: "100%", aspectRatio: "1259 / 550",
          position: "relative", overflow: "hidden",
          background: "#000000", borderRadius: 4
        }}>
          <img src="assets/carbon-dex/hero.svg?v=2" alt="Carbon — EU ETS compliant carbon credits, decentralized exchange" style={{
            position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover"
          }} />
          <div style={{
            position: "absolute", top: 0, bottom: 0,
            right: isMobile ? "18%" : "14%", width: isMobile ? "48%" : "38%"
          }}>
            <CarbonLattice />
          </div>
          <div style={{
            position: "absolute", top: 0, bottom: 0,
            left: "39%", width: isMobile ? "8%" : "10%"
          }}>
            <CarbonLattice />
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Carbon</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>A regulator-supervised on-chain exchange for EU compliance carbon credits.</p>
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
          }}>48 hour hackathon</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>UX Design / Web3</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + SIDEBAR NAV ─────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                The €800B EU carbon market runs on trust with no verification: trades happen behind closed doors, and regulators only find out 9–18 months later, after the fact. Carbon designs the regulator into the system from day one, with every trade visible on-chain as it happens.
              </p>
              <div style={{
                marginTop: 36, width: "100%", aspectRatio: "16 / 9",
                borderRadius: 4, overflow: "hidden", border: "1px solid var(--line-soft)"
              }}>
                <iframe
                  src="https://www.youtube.com/embed/-uXiNh0QJ5c"
                  title="Carbon product demo"
                  style={{ width: "100%", height: "100%", display: "block", border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div style={{
                marginTop: 28, display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
                gap: 1, background: "var(--line-soft)", border: "1px solid var(--line-soft)"
              }}>
                {[
                  ["50%", "EU ETS-covered emissions, below 2005 levels"],
                  ["15.5%", "Emissions reduction in 2023 alone"],
                  ["€881B", "Annual trading volume"],
                  ["€3B", "Daily spot trading volume"],
                  ["~9–18 months", "Reporting lag to regulators"],
                  ["€100", "Penalty per excess tonne of CO₂e"]
                ].map(([val, label], i) => (
                  <div key={i} style={{ background: "var(--bg)", padding: "20px 18px" }}>
                    <div style={{
                      fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500,
                      fontSize: "clamp(20px, 2.2vw, 28px)", letterSpacing: "-0.02em", color: "var(--ink)"
                    }}>{val}</div>
                    <div style={{
                      marginTop: 6, fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", lineHeight: 1.4
                    }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{
                marginTop: 12, fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)"
              }}>European Commission 2025 Carbon Market Report · ICAP · Homaio</p>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Carbon is a regulator-supervised on-chain exchange for EU compliance carbon credits. Every trade is visible, every credit is traceable from mint to burn, every regulatory action is public, and the regulator can freeze suspicious activity live on-chain but cannot front-run or extract value. We delivered three live viewports for the demo: a company view for verified emitters to receive, trade, and surrender credits; a regulator view with a live audit log, compliance roster, and supervisory controls; and a fully public read-only view requiring no wallet connection, showing total supply, all trades, and all retirements in real time.
              </p>

              <span style={{
                display: "block", marginTop: 32,
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)"
              }}>How Carbon fixes it</span>
              <div style={{
                marginTop: 16, display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
                gap: 1, background: "var(--line-soft)", border: "1px solid var(--line-soft)"
              }}>
                {[
                  { before: "No real-time visibility", after: "Every transaction is recorded on-chain the instant it occurs, and the regulator has a live dashboard." },
                  { before: "Double counting & fraud", after: "Credits are tokenized on-chain, making double counting mathematically impossible." },
                  { before: "Auditability", after: "The entire transaction history of every credit is permanently and publicly auditable on-chain." },
                  { before: "Retirement proof", after: "A smart contract permanently burns the token, then issues an immutable on-chain proof of offset." }
                ].map((m, i) => (
                  <div key={i} style={{ background: "var(--bg)", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                    <span style={{
                      display: "inline-block", alignSelf: "flex-start",
                      padding: "6px 12px", borderRadius: 999, border: "1px solid var(--line-soft)",
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.06em",
                      textTransform: "uppercase", color: "var(--muted)"
                    }}>{m.before}</span>
                    <span aria-hidden style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--muted)" }}>↓</span>
                    <p style={{ ...BODY, fontSize: 13 }}>{m.after}</p>
                  </div>
                ))}
              </div>
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
                UX Designer<br />in a hackathon team
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["Information architecture", "Design system", "Audit log design", "Certificate design", "Wallet & swap UI", "Regulator dashboard", "Public transparency view"].map((t, i) => (
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
                  ["Nahin Alif", "Business"],
                  ["Fredrik Skaarup", "Frontend"],
                  ["Parth Jain", "Backend"],
                  ["Lin Nora Tollefsen", "UX Design"]
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
          <p style={{ ...BODY, marginTop: 18, maxWidth: 720 }}>
            Unfamiliar territory for most of us, but that is what made it interesting. The core problem: the regulator was never designed in as a first-class actor, just an edge case receiving PDFs after the fact. So the interfaces followed the people, not the tech: a company needs its balance and a way to surrender credits, a regulator needs a live audit stream and the ability to act, and the public just needs to see the cap is holding, no wallet required. Three mental models, three interfaces, one underlying system. Design constraints were locked early too: no crypto aesthetics, no gradients, no neon, just institutional credibility legible within three seconds.
          </p>
          <p id="outcome" style={{ ...BODY, marginTop: 18, maxWidth: 720 }}>
            Seeing all the creative ways people were using blockchain at ETH Prague was genuinely eye-opening. What stayed with me was how much of the work in a system like this is not technical, it is about designing trust. Who can see what. What actions are reversible. What the public record looks like. Left Prague with a completely new sense of what is being built out there, and a much clearer picture of where design sits in that space.
          </p>
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

Object.assign(window, { ProjectDetailCarbonDex });
