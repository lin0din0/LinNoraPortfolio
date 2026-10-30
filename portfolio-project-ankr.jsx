// portfolio-project-ankr.jsx, Ankr project page

function ProjectDetailAnkr() {
  return (
    <CasePage
      c={CASES.ankr}
      hero={
        <>
          <div style={{
            width: "100%", aspectRatio: "2492 / 1102",
            position: "relative", overflow: "hidden"
          }}>
            <Media src="assets/ankr/title-video.mov" fill />
          </div>
        </>
      }
      media={[
        ["assets/ankr/discover-1.svg", "assets/ankr/discover-2.svg", "assets/ankr/discover-3.svg"],
        ["assets/ankr/deliver.svg"]
      ]}
      outcome={["assets/ankr/outcome.svg"]}
    />
  );
}

Object.assign(window, { ProjectDetailAnkr });
