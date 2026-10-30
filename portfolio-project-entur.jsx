// portfolio-project-entur.jsx, More Than a Trip (Entur) project page

function ProjectDetailEntur() {
  return (
    <CasePage
      c={CASES.entur}
      hero={
        <>
          <div style={{
            width: "100%", aspectRatio: "2514 / 1096",
            position: "relative", overflow: "hidden"
          }}>
            <Media src="assets/project/hero-video.mov" fill />
            <div style={{
              position: "absolute", bottom: 22, right: 26,
              display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8,
              zIndex: 2
            }}>
              <img src="assets/project/logo.png" alt="Entur" style={{ height: 32, width: "auto" }} />
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "-0.005em"
              }}>Collaboration with Entur</span>
            </div>
          </div>
        </>
      }
      summary={["assets/project/overview.svg"]}
      media={[
        ["assets/project/discover-1.svg", "assets/project/discover-2.svg"],
        ["assets/project/define-1.svg", "assets/project/define-2.svg"],
        ["assets/project/develop.svg", "assets/project/deliver-1.svg", "assets/project/deliver-2.svg", "assets/project/deliver-3.svg"]
      ]}
      outcome={["assets/project/outcome.svg"]}
    />
  );
}

Object.assign(window, { ProjectDetailEntur });
