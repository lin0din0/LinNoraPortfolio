// portfolio-project-atlas.jsx, Atlas project page

function ProjectDetailAtlas() {
  return (
    <CasePage
      c={CASES.atlas}
      hero={
        <>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <img src="assets/atlas/title.svg" alt="Atlas hero"
              style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </>
      }
      summary={["assets/atlas/tltr.svg"]}
      media={[
        ["assets/atlas/discover-1.mov", "assets/atlas/discover-2.svg"],
        ["assets/atlas/define.svg"]
      ]}
      outcome={["assets/atlas/deliver.svg", "assets/atlas/outcome-team.svg"]}
    />
  );
}

Object.assign(window, { ProjectDetailAtlas });
