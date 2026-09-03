// portfolio-project-homecoming.jsx, Homecoming e-waste initiative project page

function ProjectDetailHomecoming() {
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
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: CHECKER, borderRadius: 4
        }}>
          <div style={{
            position: "absolute", bottom: 22, right: 26,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4
          }}>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13, fontWeight: 500, letterSpacing: "0.01em",
              color: "var(--ink)"
            }}>PSSD Studio 1</span>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, color: "var(--ink-2)", letterSpacing: "-0.005em"
            }}>Prof. Avril Accolla</span>
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Homecoming</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>A school workshop toolkit designed to build e-waste recycling habits across generations in China.</p>
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
            }}>Product Service System Design</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                60% of China's e-waste flows through informal, unsafe channels because they're just more convenient. The real design question wasn't a better collection app: it was shifting the cultural norm around disposal.
              </p>
              <div style={{
                marginTop: 36, width: "100%", aspectRatio: "16 / 8",
                background: CHECKER, borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink-2)" }}>Images</span>
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                The Homecoming Initiative is a school based workshop toolkit that connects primary schools, private recycling companies, and government in a new collaborative structure. Students bring a piece of e-waste as their entry ticket, participate in hands-on disassembly and upcycling using components from real devices, and leave with first-hand knowledge of where responsible recycling leads. The goal is not immediate behaviour change but generational mindset shift: children who experience formal recycling as familiar and meaningful become adults who choose it.
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
                Designer in a team<br />studio project
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["Ecosystem mapping", "ANAs framework", "Workshop facilitation", "Service blueprint", "Future vision scenarios", "Presentation & docs"].map((t, i) => (
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
                  ["Yuqi Zhao", "Designer"],
                  ["Vitaliy Khan", "Designer"],
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
            The project moved from understanding a fragmented system, to identifying where design could create new connections within it, to specifying a product service system that introduces new actors and new flows without dismantling what already works.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "We framed the problem through Xiao Li, a 29-year-old in Chengdu disposing of an old phone: formal channels are trustworthy but slower and pay less, while an informal collector pays 30% more, no forms, and dismantles it with unsafe tools he never sees. Formal recycling captures only ~20% of China's WEEE, isn't profitable without subsidy, and even strong players like ATRenew have limited market reach."
              },
              {
                num: "2", title: "Define",
                body: "Using an ANAs framework, we mapped aspirations, necessities, and abilities across three stakeholders. Users want trust and convenience but lack awareness. Government has legislative power and budget but struggles with compliance monitoring. Companies have logistics and brand power but need consumer trust. The challenge wasn't replacing any actor: it was redesigning the relationships between them."
              },
              {
                num: "3", title: "Develop",
                body: "A workshop surfaced four patterns: formal recycling stores aren't a common memory, informal repair shops feel familiar, doorstep collection wins on cashback, and waste piles up uncategorised. Case studies from Patagonia, the WEEE Forum, the E-Waste Race, and Beijing MaaS pointed the direction: storytelling builds loyalty, schools scale participation, and government has real coordinating power when it uses it."
              },
              {
                num: "4", title: "Deliver",
                body: "The Homecoming Initiative connects schools, toolkit manufacturers, and formal recyclers through a workshop programme: students bring e-waste as their entry ticket, then build simple circuits from real disassembled components (around 20 phone-component types can be upcycled), earning credit in a recycling account. The service blueprint runs three phases: awareness and registration, the workshop, and continued participation."
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
            The Homecoming Initiative creates shared value across the system. Formal platforms gain cultural visibility. Schools gain an engaging sustainability curriculum. Government gains a behaviour change lever that does not require enforcement. The future arc runs from a child at a workshop, to a teenager who remembers that experience when their phone breaks, to an adult who brings their own child back.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            The most powerful design intervention in a fragmented system is not a better interface. It is a new relationship between actors who have not previously collaborated. What formal recycling lacks in China is not infrastructure but familiarity. Embedding that trust at the level of childhood experience is a longer loop, but it is the one that actually changes the system.
          </p>
          <div style={{
            marginTop: 36, width: "100%", aspectRatio: "16 / 8",
            background: CHECKER, borderRadius: 18
          }} />
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

Object.assign(window, { ProjectDetailHomecoming });
