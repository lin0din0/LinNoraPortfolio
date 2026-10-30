// portfolio-project-armenia.jsx, Mixed Signals (Information Integrity in Armenia) project page

function ProjectDetailArmenia() {
  return (
    <CasePage
      c={CASES.armenia}
      hero={
        <>
          <div style={{
            width: "100%", aspectRatio: "1259 / 550",
            position: "relative", overflow: "hidden"
          }}>
            <img src="assets/armenia/slides/title.svg" alt="Mixed Signals: how the lack of information integrity influences the Armenian people and their democratic process"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </>
      }
      summary={["assets/armenia/slides/process.svg"]}
      media={[
        ["assets/armenia/slides/problems.svg", "assets/armenia/slides/potentials.svg", "assets/armenia/slides/pestel-map.svg"],
        ["assets/armenia/slides/current-situation.svg", "assets/armenia/slides/love-triangle-history.svg", "assets/armenia/slides/love-triangle-map.svg"],
        ["assets/armenia/slides/future-scenarios.svg", "assets/armenia/slides/leverage-interventions-map.svg", "assets/armenia/slides/leverages.svg", "assets/armenia/slides/interventions.svg"]
      ]}
      outcomeExtra={
        <Reveal>
          <div style={{ marginTop: 36, width: "100%", aspectRatio: "16 / 10", overflow: "hidden" }}>
            <iframe
              src="assets/armenia/report/flipbook.html"
              title="Mixed Signals: full report"
              style={{ width: "100%", height: "100%", display: "block", border: 0 }}
              allowFullScreen
            />
          </div>
        </Reveal>
      }
      featured={{
          label: "Featured on Systems Oriented Design",
          href: "https://systemsorienteddesign.net/student-project-spotlight-%c2%b7-information-integrity/"
        }}
    />
  );
}

Object.assign(window, { ProjectDetailArmenia });
