// portfolio-project-teddy.jsx, Teddy project page

function ProjectDetailTeddy() {
  return (
    <CasePage
      c={CASES.teddy}
      hero={
        <>
          <div style={{
            width: "100%", aspectRatio: "1259 / 550",
            position: "relative", overflow: "hidden"
          }}>
            <img src="assets/teddy/title.svg" alt="Teddy: traveling with Teddy becomes less unpredictable, overwhelming and stressful"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </>
      }
      media={[
        ["assets/teddy/figma/slide-persona-laura.svg"],
        ["assets/teddy/figma/slide-planning.svg", "assets/teddy/figma/slide-navigation.svg"],
        ["assets/teddy/videos/introducing-teddy.mov", "assets/teddy/videos/customize-character.mov", "assets/teddy/figma/slide-timeline.png", "assets/teddy/videos/schedule.mov", "assets/teddy/videos/clock-support.mov"]
      ]}
      outcome={["assets/teddy/figma/outcome-reflection.svg"]}
    />
  );
}

Object.assign(window, { ProjectDetailTeddy });
