// portfolio-project-stackt.jsx, Stackt project page

function ProjectDetailStackt() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.stackt,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "1259 / 550",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/stackt/title.svg",
      alt: "Stackt: Where judgement gets built before decisions get real.",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }))),
    media: [["assets/stackt/figma/slide-confidence-gap.png", "assets/stackt/figma/slide-disperced-uncurated.png", "assets/stackt/figma/slide-active-recall-works.png"], ["assets/stackt/figma/slide-curated-learning.png"], [], ["assets/stackt/figma/slide-value-proposition.png", "assets/stackt/figma/tam-sam-som.png", "assets/stackt/figma/business-model.png"]],
    featuredSteps: [0, 3],
    outcome: ["assets/stackt/outcome.jpg"]
  });
}
Object.assign(window, {
  ProjectDetailStackt
});