// portfolio-project-everyday-innovation.jsx, Everyday Innovation project page

function ProjectDetailEverydayInnovation() {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.everyday,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "2512 / 1096",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Media, {
      src: "assets/everyday-innovation/banner.mov",
      fill: true,
      style: {
        top: -4,
        height: "calc(100% + 4px)"
      }
    }))),
    summary: /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 36,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: isMobile ? "flex-start" : "space-between",
        gap: isMobile ? 16 : 20
      }
    }, ["1", "2", "3", "4", "5"].map(n => /*#__PURE__*/React.createElement("img", {
      key: n,
      src: `assets/everyday-innovation/tltr-circle-${n}.svg`,
      alt: "",
      style: {
        width: isMobile ? "28%" : "18%",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        display: "block"
      }
    })))),
    media: [["assets/everyday-innovation/discover-1.svg", "assets/everyday-innovation/discover-2.svg"], ["assets/everyday-innovation/define-1.svg", "assets/everyday-innovation/define-2.svg"], ["assets/everyday-innovation/develop-1.png", "assets/everyday-innovation/develop-2.svg", "assets/everyday-innovation/develop-3.svg"]],
    featuredSteps: [2],
    outcome: ["assets/everyday-innovation/deliver.svg", "assets/everyday-innovation/outcome-board.jpg", "assets/everyday-innovation/banner.mov"]
  });
}
Object.assign(window, {
  ProjectDetailEverydayInnovation
});