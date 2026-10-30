// portfolio-project-volunteering.jsx, Volunteering My Way project page

function ProjectDetailVolunteering() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.volunteering,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "1259 / 550",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/volunteering/title-video.svg",
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 22,
        right: 26,
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/volunteering/red-cross-logo.svg",
      alt: "Red Cross",
      style: {
        height: 44,
        width: "auto"
      }
    })))),
    summary: ["assets/volunteering/overview.svg"],
    media: [["assets/volunteering/discover.svg"], ["assets/volunteering/define.svg"], ["assets/volunteering/develop-1.svg", "assets/volunteering/develop-2.svg", "assets/volunteering/develop-3.svg"]],
    outcome: ["assets/volunteering/deliver-1.mov", "assets/volunteering/deliver-2.mov", "assets/volunteering/deliver-3.mov", "assets/volunteering/develop-4.mov", "assets/volunteering/deliver-5.mov", "assets/volunteering/outcome.svg"]
  });
}
Object.assign(window, {
  ProjectDetailVolunteering
});