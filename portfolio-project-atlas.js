// portfolio-project-atlas.jsx, Atlas project page

function ProjectDetailAtlas() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.atlas,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/atlas/title.svg",
      alt: "Atlas hero",
      style: {
        width: "100%",
        height: "auto",
        display: "block"
      }
    }))),
    summary: ["assets/atlas/tltr.svg"],
    media: [["assets/atlas/discover-1.mov", "assets/atlas/discover-2.svg"], ["assets/atlas/define.svg"]],
    outcome: ["assets/atlas/deliver.svg", "assets/atlas/outcome-team.svg"]
  });
}
Object.assign(window, {
  ProjectDetailAtlas
});