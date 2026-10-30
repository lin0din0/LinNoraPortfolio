// portfolio-project-togather.jsx, Togather project page

function ProjectDetailTogather() {
  return (
    <CasePage
      c={CASES.togather}
      hero={
        <>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <img src="assets/togather/title.svg" alt="Togather hero"
              style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </>
      }
      summary={["assets/togather/overview.svg"]}
      media={[
        ["assets/togather/discover-1.svg", "assets/togather/discover-2.svg", "assets/togather/define.svg"],
        ["assets/togather/develop-1.svg", "assets/togather/develop-2.svg", "assets/togather/develop-3.svg"],
        ["assets/togather/deliver.svg"]
      ]}
      outcome={["assets/togather/outcome.svg"]}
    />
  );
}

Object.assign(window, { ProjectDetailTogather });
