// portfolio-project-toyen.jsx, Tøyen Takt project page

const BASE = "assets/toyen-takt/";

function ProjectDetailToyen() {
  return (
    <CasePage
      c={CASES.toyen}
      hero={
        <>
          <div style={{
            width: "100%", aspectRatio: "2518 / 1100",
            position: "relative", overflow: "hidden"
          }}>
            <Media src={BASE + "title-video.mov"} fill />
          </div>
        </>
      }
      summary={["assets/toyen-takt/overview.mov"]}
      media={[
        ["assets/toyen-takt/discover-1.mov", "assets/toyen-takt/discover-2.svg"],
        ["assets/toyen-takt/define.svg", "assets/toyen-takt/develop-1.mov", "assets/toyen-takt/develop-2.svg"],
        ["assets/toyen-takt/deliver-1.mov", "assets/toyen-takt/deliver-2.mov", "assets/toyen-takt/deliver-3.svg"]
      ]}
      outcome={["assets/toyen-takt/outcome.svg"]}
    />
  );
}

Object.assign(window, { ProjectDetailToyen });
