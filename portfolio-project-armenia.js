// portfolio-project-armenia.jsx, Mixed Signals (Information Integrity in Armenia) project page

function ProjectDetailArmenia() {
  return /*#__PURE__*/React.createElement(CasePage, {
    c: CASES.armenia,
    hero: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "1259 / 550",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/armenia/slides/title.svg",
      alt: "Mixed Signals: how the lack of information integrity influences the Armenian people and their democratic process",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }))),
    summary: ["assets/armenia/slides/process.svg"],
    media: [["assets/armenia/slides/problems.svg", "assets/armenia/slides/potentials.svg", "assets/armenia/slides/pestel-map.svg"], ["assets/armenia/slides/current-situation.svg", "assets/armenia/slides/love-triangle-history.svg", "assets/armenia/slides/love-triangle-map.svg"], ["assets/armenia/slides/future-scenarios.svg", "assets/armenia/slides/leverage-interventions-map.svg", "assets/armenia/slides/leverages.svg", "assets/armenia/slides/interventions.svg"]],
    outcomeExtra: /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 36,
        width: "100%",
        aspectRatio: "16 / 10",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("iframe", {
      src: "assets/armenia/report/flipbook.html",
      title: "Mixed Signals: full report",
      style: {
        width: "100%",
        height: "100%",
        display: "block",
        border: 0
      },
      allowFullScreen: true
    }))),
    featured: {
      label: "Featured on Systems Oriented Design",
      href: "https://systemsorienteddesign.net/student-project-spotlight-%c2%b7-information-integrity/"
    }
  });
}
Object.assign(window, {
  ProjectDetailArmenia
});