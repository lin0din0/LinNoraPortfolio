// Pre-compiles JSX so browsers don't have to transpile it live via Babel
// Standalone on every page load. Run `npm run build` after editing any
// .jsx file or any inline <script type="text/babel"> block in an .html
// file, then commit both the source and the generated .js output.
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const ROOT = __dirname;

function transpile(code) {
  return babel.transform(code, {
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    filename: "inline.jsx",
    babelrc: false,
    configFile: false,
  }).code;
}

// 1. Compile every top-level .jsx file to a sibling .js file.
const jsxFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".jsx"));
for (const file of jsxFiles) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const out = transpile(src);
  const outFile = file.replace(/\.jsx$/, ".js");
  fs.writeFileSync(path.join(ROOT, outFile), out);
  console.log(`compiled ${file} -> ${outFile}`);
}

// 2. For every .html file, compile its inline <script type="text/babel">
//    block (if any) to an external .inline.js file, rewrite the tag to
//    load it as a plain script, rewrite .jsx script-src tags to their
//    compiled .js counterparts, and drop the Babel Standalone <script>.
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
const inlineBabelRe = /<script type="text\/babel">([\s\S]*?)<\/script>/;
const babelStandaloneRe = /\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone[^>]*><\/script>\n?/;

for (const file of htmlFiles) {
  let html = fs.readFileSync(path.join(ROOT, file), "utf8");
  let changed = false;

  const inlineMatch = html.match(inlineBabelRe);
  if (inlineMatch) {
    const compiled = transpile(inlineMatch[1]);
    const base = file.replace(/\.html$/, "");
    const inlineFile = `${base}.inline.js`;
    fs.writeFileSync(path.join(ROOT, inlineFile), compiled);
    html = html.replace(inlineBabelRe, `<script src="${inlineFile}"></script>`);
    console.log(`compiled inline script in ${file} -> ${inlineFile}`);
    changed = true;
  }

  const beforeSrcRewrite = html;
  html = html.replace(
    /<script type="text\/babel" src="([^"]+)\.jsx(\?[^"]*)?"><\/script>/g,
    (_, name, query) => `<script src="${name}.js${query || ""}"></script>`
  );
  if (html !== beforeSrcRewrite) changed = true;

  if (babelStandaloneRe.test(html)) {
    html = html.replace(babelStandaloneRe, "");
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(path.join(ROOT, file), html);
    console.log(`updated ${file}`);
  }
}

console.log("Build complete.");
