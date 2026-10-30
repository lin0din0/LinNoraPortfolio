// portfolio-project-worthit.jsx, Worth It? project page

function ProjectDetailWorthIt() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.worthit,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/worth-it/title.svg",
      alt: "Worth It? hero",
      style: {
        width: "100%",
        height: "auto",
        display: "block"
      }
    }))),
    summary: ["assets/worth-it/overview.svg"],
    media: [["assets/worth-it/discover.svg", "assets/worth-it/discover-2.svg"], ["assets/worth-it/build-1.svg", "assets/worth-it/build-2.svg", "assets/worth-it/build-3.svg"], ["assets/worth-it/deliver-video.mov"]],
    outcome: ["assets/worth-it/outcome-video.mov"]
  });
}
Object.assign(window, {
  ProjectDetailWorthIt
});