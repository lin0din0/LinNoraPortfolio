// portfolio-project-local.jsx, Local project page

function ProjectDetailLocal() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.local,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/local/title.svg",
      alt: "Local hero",
      style: {
        width: "100%",
        height: "auto",
        display: "block"
      }
    }))),
    summary: ["assets/local/overview.svg"],
    media: [["assets/local/discover-1.svg", "assets/local/discover-2.svg", "assets/local/discover-3.svg"], ["assets/local/define-4.svg"], ["assets/local/deliver-1.mov", "assets/local/deliver-2.mov", "assets/local/deliver-3.mov"]]
  });
}
Object.assign(window, {
  ProjectDetailLocal
});