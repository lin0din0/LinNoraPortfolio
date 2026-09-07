const {
  useEffect: useEffectProj
} = React;
function ProjectApp() {
  useEffectProj(() => {
    if (document.getElementById("__pf_kf")) return;
    const s = document.createElement("style");
    s.id = "__pf_kf";
    s.textContent = KEYFRAMES;
    document.head.appendChild(s);
  }, []);
  return /*#__PURE__*/React.createElement(ProjectDetailArmenia, null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ProjectApp, null));