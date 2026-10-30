// portfolio-project-entur.jsx, More Than a Trip (Entur) project page

function ProjectDetailEntur() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.entur,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "2514 / 1096",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Media, {
      src: "assets/project/hero-video.mov",
      fill: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 22,
        right: 26,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 8,
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/project/logo.png",
      alt: "Entur",
      style: {
        height: 32,
        width: "auto"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontSize: 11,
        color: "rgba(255,255,255,0.7)",
        letterSpacing: "-0.005em"
      }
    }, "Collaboration with Entur")))),
    summary: ["assets/project/overview.svg"],
    media: [["assets/project/discover-1.svg", "assets/project/discover-2.svg"], ["assets/project/define-1.svg", "assets/project/define-2.svg"], ["assets/project/develop.svg", "assets/project/deliver-1.svg", "assets/project/deliver-2.svg", "assets/project/deliver-3.svg"]],
    outcome: ["assets/project/outcome.svg"]
  });
}
Object.assign(window, {
  ProjectDetailEntur
});