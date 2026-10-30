// portfolio-project-togather.jsx, Togather project page

function ProjectDetailTogather() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.togather,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/togather/title.svg",
      alt: "Togather hero",
      style: {
        width: "100%",
        height: "auto",
        display: "block"
      }
    }))),
    summary: ["assets/togather/overview.svg"],
    media: [["assets/togather/discover-1.svg", "assets/togather/discover-2.svg", "assets/togather/define.svg"], ["assets/togather/develop-1.svg", "assets/togather/develop-2.svg", "assets/togather/develop-3.svg"], ["assets/togather/deliver.svg"]],
    outcome: ["assets/togather/outcome.svg"]
  });
}
Object.assign(window, {
  ProjectDetailTogather
});