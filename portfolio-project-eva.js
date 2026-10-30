// portfolio-project-eva.jsx, EVA project page

function ProjectDetailEva() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.eva,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "1275 / 720",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Media, {
      src: "assets/eva/title-video.mov",
      fill: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 22,
        right: 26,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 10,
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/eva/huf-logo.svg",
      alt: "Huf Group",
      style: {
        height: 52,
        width: "auto"
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "assets/eva/tongji-logo.svg",
      alt: "Tongji CDI",
      style: {
        height: 28,
        width: "auto"
      }
    })))),
    summary: ["assets/eva/overview-video.mov"],
    media: [["assets/eva/discover-1.svg", "assets/eva/discover-2.svg"], ["assets/eva/define.svg"], ["assets/eva/develop.svg", "assets/eva/deliver-1.svg", "assets/eva/deliver-2.svg", "assets/eva/deliver-3.svg"]],
    outcome: ["assets/eva/outcome.mov"]
  });
}
Object.assign(window, {
  ProjectDetailEva
});