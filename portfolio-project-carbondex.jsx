// portfolio-project-carbondex.jsx, Carbon DEX project page

function ProjectDetailCarbonDex() {
  const isMobile = useIsMobile();
  const STATS = [
    ["50%", "EU ETS-covered emissions, below 2005 levels"],
    ["15.5%", "Emissions reduction in 2023 alone"],
    ["€881B", "Annual trading volume"],
    ["€3B", "Daily spot trading volume"],
    ["~9 to 18 months", "Reporting lag to regulators"],
    ["€100", "Penalty per excess tonne of CO₂e"]
  ];
  const FIXES = [
    { before: "No real-time visibility", after: "Every transaction is recorded on-chain the instant it occurs, and the regulator has a live dashboard." },
    { before: "Double counting & fraud", after: "Credits are tokenized on-chain, making double counting mathematically impossible." },
    { before: "Auditability", after: "The entire transaction history of every credit is permanently and publicly auditable on-chain." },
    { before: "Retirement proof", after: "A smart contract permanently burns the token, then issues an immutable on-chain proof of offset." }
  ];

  return (
    <CasePage
      c={CASES.carbon}
      hero={
        <>
          <div style={{
            width: "100%", aspectRatio: "1259 / 550",
            position: "relative", overflow: "hidden",
          }}>
            <img src="assets/carbon-dex/hero.svg?v=2" alt="Carbon: EU ETS compliant carbon credits, decentralized exchange" style={{
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
        </>
      }
      summary={
        <>
          <MetricStrip metrics={STATS} columns={3} style={{ marginTop: 36 }} />
          <p style={{
            marginTop: 12, fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--muted)"
          }}>European Commission 2025 Carbon Market Report · ICAP · Homaio</p>
        </>
      }
      outcomeExtra={
        <>
          <h3 style={{
            margin: "24px 0 0", fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500,
            fontSize: 22, letterSpacing: "-0.02em", color: "var(--ink)"
          }}>How Carbon fixes it</h3>
        <div style={{
          marginTop: 16, display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: 1, background: "var(--line-soft)", border: "1px solid var(--line-soft)"
        }}>
          {FIXES.map((m, i) => (
            <div key={i} style={{ background: "var(--bg)", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{
                display: "inline-block", alignSelf: "flex-start",
                padding: "6px 12px", borderRadius: 999, border: "1px solid var(--line-soft)",
                fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, color: "var(--ink-2)"
              }}>{m.before}</span>
              <span aria-hidden style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--muted)" }}>↓</span>
              <p style={{
                margin: 0, fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13, lineHeight: 1.5, letterSpacing: "-0.005em", color: "var(--ink-2)"
              }}>{m.after}</p>
            </div>
          ))}
        </div>
        </>
      }
    />
  );
}

Object.assign(window, { ProjectDetailCarbonDex });
