// portfolio-project-eva.jsx, EVA project page

function ProjectDetailEva() {
  return (
    <CasePage
      c={CASES.eva}
      hero={
        <>
          <div style={{
            width: "100%", aspectRatio: "1275 / 720",
            position: "relative", overflow: "hidden"
          }}>
            <Media src="assets/eva/title-video.mov" fill />
            <div style={{
              position: "absolute", bottom: 22, right: 26,
              display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10,
              zIndex: 2
            }}>
              <img src="assets/eva/huf-logo.svg" alt="Huf Group" style={{ height: 52, width: "auto" }} />
              <img src="assets/eva/tongji-logo.svg" alt="Tongji CDI" style={{ height: 28, width: "auto" }} />
            </div>
          </div>
        </>
      }
      summary={["assets/eva/overview-video.mov"]}
      media={[
        ["assets/eva/discover-1.svg", "assets/eva/discover-2.svg"],
        ["assets/eva/define.svg"],
        ["assets/eva/develop.svg", "assets/eva/deliver-1.svg", "assets/eva/deliver-2.svg", "assets/eva/deliver-3.svg"]
      ]}
      outcome={["assets/eva/outcome.mov"]}
    />
  );
}

Object.assign(window, { ProjectDetailEva });
