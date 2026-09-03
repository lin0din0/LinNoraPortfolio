// portfolio-project-worthit.jsx, Worth It? project page

function ProjectDetailWorthIt() {
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
      body: "The insight came from my own frustration as a cosmetics buyer. I started sketching my own product usage (what I reached for, how long things lasted, what I actually paid per use) and the gap between price and value was striking once visualised. That data became an Excel dataset from my own collection, and that spreadsheet became the conceptual foundation of Worth It.",
      items: ["assets/worth-it/discover.svg", "assets/worth-it/discover-2.svg"]
    },
    {
      num: "2", title: "Define",
      body: "Grounded in that personal data, I built the design system on atomic design principles in Figma, from the smallest elements outward: WCAG-compliant colour styles, text styles from H1 to Label, and components built up from atoms to full patterns: button, icon button, radio, checkbox, toggle, tag, input field, container, each with variables and states. Every interface decision that followed had a rule behind it because the system came first.",
      items: ["assets/worth-it/build-1.svg", "assets/worth-it/build-2.svg", "assets/worth-it/build-3.svg"]
    },
    {
      num: "3", title: "Deliver",
      body: "The final interface is a light, easy flow: log products, rate them on frequency, effect, and price, and the app reflects whether they're actually worth what you pay. The layer underneath makes it more than personal: based on your ratings and how others logged similar products, Worth It surfaces alternatives that might fit you better. From hand-drawn visualisations to a spreadsheet to a design system to a product: using myself as the first user and following the thread all the way through.",
      items: ["assets/worth-it/deliver-video.mov"]
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

        {/* ─── HERO IMAGE ─────────────────────────────────────────────── */}
        <div style={{ width: "100%", borderRadius: 4, overflow: "hidden" }}>
          <img src="assets/worth-it/title.svg" alt="Worth It? hero"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: "clamp(40px, 10vw, 88px)", lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Worth It?</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>From dataset to design: making cosmetic ingredient data legible for everyday consumers.</p>
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
          }}>2 week project</span>
          <Magnetic strength={0.15}>
            <span style={{
              display: "inline-flex",
              padding: "8px 18px", borderRadius: 999,
              border: "1px solid var(--ink)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
              whiteSpace: "nowrap"
            }}>UI Design / Design Systems</span>
          </Magnetic>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{ marginTop: 36 }}>
          <SectionNav />

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            <section id="overview">
              <h2 style={H_SECTION}>TLTR</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                Built a full Figma UI kit (components, autolayout, variables, WCAG-compliant states) then used it to design Worth It, a cosmetics app that answers a question most consumers never get: is this actually worth what it costs?
              </p>
              <div style={{ marginTop: 36, width: "100%", borderRadius: 4, overflow: "hidden", position: "relative" }}>
                <img src="assets/worth-it/overview.svg" alt="Worth It overview"
                  style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Worth It is a mobile app that lets users compare cosmetics across four dimensions: price, ethics, lasting effect, and ingredients. It translates a large ingredient dataset into a scannable interface so that someone standing in front of a shelf can make an informed choice in seconds. The target user is the everyday cosmetics buyer who wants better information without becoming an expert to use it.
              </p>
            </section>

          {/* ─── MY ROLE ────────────────────────────────────────────────── */}
        <section id="role" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>My role in this project</h2>
          <div style={{ marginTop: 32, maxWidth: isMobile ? "100%" : 420 }}>
            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 16,
              minHeight: 220, position: "relative", overflow: "hidden"
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500, maxWidth: 200 }}>
                UI Designer<br />individual school project
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, maxWidth: 200 }}>
                {["UI kit (Figma)", "Component design", "Autolayout", "Icon design", "WCAG compliance", "Mobile prototype"].map((t, i) => (
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
          </div>
        </section>

        {/* ─── DESIGN PROCESS ─────────────────────────────────────────── */}
        <section id="process" style={{ marginTop: 120 }}>
          <h2 style={H_SECTION}>Design process</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 640
          }}>
            The project moved from personal observation to structured data to design system to finished interface. Each phase built directly on the last.
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
            Building the design system before touching the screens produced a noticeably different quality of output. Decisions were intentional rather than reactive and the interface held together because the rules had already been set.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640
          }}>
            The next step would be stress testing the system against more content types and exploring how ingredient data could be visualised for someone scanning a shelf rather than reading at a desk.
          </p>
          <div style={{ marginTop: 36, borderRadius: 18, overflow: "hidden" }}>
            <video src="assets/worth-it/outcome-video.mov"
              autoPlay loop muted playsInline
              style={{ width: "100%", display: "block" }} />
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

Object.assign(window, { ProjectDetailWorthIt });
