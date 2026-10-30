// portfolio-project-ankr.jsx, Ankr project page

function ProjectDetailAnkr() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.ankr,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "2492 / 1102",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Media, {
      src: "assets/ankr/title-video.mov",
      fill: true
    }))),
    media: [["assets/ankr/discover-1.svg", "assets/ankr/discover-2.svg", "assets/ankr/discover-3.svg"], ["assets/ankr/deliver.svg"]],
    outcome: ["assets/ankr/outcome.svg"]
  });
}
Object.assign(window, {
  ProjectDetailAnkr
});