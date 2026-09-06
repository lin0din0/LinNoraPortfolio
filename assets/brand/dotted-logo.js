// ────────────────────────────────────────────────────────────────────────────
// DOTTED LOGO — self-animating, shape-morphing halftone mark.
//
// A grid of dots is masked by a polar "silhouette" function (circle, blob,
// diamond, star, ...); the mark continuously cross-fades between a handful
// of silhouettes, slowly rotates, and pulses the whole shape in and out
// (plus a small per-dot radial jitter) so it reads as alive even at very
// small sizes — no hover or interaction required.
//
// It can also be nudged into a fixed "pointer" silhouette (a cursor-arrow
// glyph, held upright regardless of the mark's own rotation) on demand via
// the returned setOverride() control — used to react to cursor hovers
// elsewhere on the page. Unlike the ambient shapes (which are pure polar
// functions — fine for an organic blob, but a real arrow silhouette isn't
// star-shaped from the center, so a polar radius function alone reads as a
// blob no matter how it's tuned), "pointer" is tested against an actual
// cursor-arrow polygon so the tip and edges stay crisp.
//
// Framework-free: pass it any <canvas> element.
//
//   <canvas id="logo"></canvas>
//   <script src="dotted-logo.js"></script>
//   <script>
//     createDottedLogo(document.getElementById("logo"), { size: 24 });
//   </script>
//
// React usage — call it from a useEffect with a canvas ref and return the
// cleanup function it gives you:
//
//   function DottedLogo({ size = 24, color = "#0E0E0C" }) {
//     const canvasRef = React.useRef(null);
//     React.useEffect(() => {
//       const logo = createDottedLogo(canvasRef.current, { size, color });
//       return logo.stop;
//     }, [size, color]);
//     return <canvas ref={canvasRef} aria-hidden="true" style={{ display: "block" }} />;
//   }
//
// createDottedLogo(canvas, options) -> { stop(), setOverride(name | null) }
//
//   options.size          px, both width and height (default 24)
//   options.color         dot fill color (default "#0E0E0C")
//   options.gap           target spacing between dot centers, px (default 2.6)
//                          — smaller = denser grid = more dots
//   options.dotScale      max dot radius as a fraction of grid step (default 0.5)
//   options.shapes        array of shape names to cycle through, in order
//                          (default ["circle","blob","diamond","star"])
//                          — see SHAPES below for all available names
//   options.morphSpeed    how fast it cross-fades from one shape to the next,
//                          in shapes/second (default 0.2 -> 5s per shape)
//   options.rotateSpeed   rad/s the whole silhouette spins (default 0.35)
//   options.breatheAmp    0..~0.4, how far the whole shape grows/shrinks (default 0.16)
//   options.breatheSpeed  rad/s of the breathing cycle (default 0.55)
//   options.jitterAmp     0..1, how much individual dots additionally drift
//                          in/out along their own angle (default 0.55)
//   options.seed          change this number to reshuffle per-dot phases
//
//   setOverride("pointer")  smoothly morphs the mark into the cursor-arrow
//                            glyph, pausing the auto-cycle/rotation
//   setOverride(null)        smoothly releases back to the normal auto-cycle,
//                            resuming from wherever it left off
// ────────────────────────────────────────────────────────────────────────────

// Polar silhouette functions: angle (radians) -> normalized radius (~0.2-1.4).
// 1 = the base grid radius (size/2). Add your own shape here if you want more.
const DOTTED_LOGO_SHAPES = {
  circle: () => 1,
  diamond: (a) => 1 / (Math.abs(Math.cos(a)) + Math.abs(Math.sin(a))),
  square: (a) => 0.86 / Math.max(Math.abs(Math.cos(a)), Math.abs(Math.sin(a))),
  star: (a) => 0.62 + 0.38 * Math.cos(6 * a),
  spike: (a) => 0.55 + 0.45 * Math.pow(Math.abs(Math.cos(4 * a)), 0.5),
  blob: (a) => 1 + 0.16 * Math.sin(3 * a + 1.3) + 0.10 * Math.sin(5 * a - 2.1) + 0.07 * Math.sin(7 * a + 0.4),
};

// Classic minimalist cursor-arrow outline, normalized coordinates (y-down),
// tip at the origin. Not a polar function — tested per-dot as a real polygon
// (see pointInPolygon/distToPolygon below) since an arrow silhouette isn't
// star-shaped from its centroid the way circle/blob/diamond/star are.
const POINTER_POLY_RAW = [
  [0.00, 0.00], [0.00, 0.95], [0.32, 0.62],
  [0.50, 1.00], [0.85, 0.55],
];

function pointInPolygon(px, py, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    const intersect = (yi > py) !== (yj > py) &&
      px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function distToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  let t = lenSq ? ((px - ax) * dx + (py - ay) * dy) / lenSq : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function distToPolygon(px, py, poly) {
  let minD = Infinity;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    minD = Math.min(minD, distToSegment(px, py, poly[i][0], poly[i][1], poly[j][0], poly[j][1]));
  }
  return minD;
}

function createDottedLogo(canvas, options = {}) {
  const {
    size = 24,
    color = "#0E0E0C",
    gap = 2.6,
    dotScale = 0.5,
    shapes = ["circle", "blob", "diamond", "star"],
    morphSpeed = 0.2,
    rotateSpeed = 0.35,
    breatheAmp = 0.16,
    breatheSpeed = 0.55,
    jitterAmp = 0.55,
    seed = 0,
  } = options;

  const shapeFns = shapes.map((name) => DOTTED_LOGO_SHAPES[name] || DOTTED_LOGO_SHAPES.circle);
  const shapeCount = Math.max(1, shapeFns.length);

  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cx = size / 2, cy = size / 2, baseRadius = size / 2;
  // grid spans the full square (not just the inscribed circle) so shapes
  // like "square" and star points have dots to reveal near the corners
  const cols = Math.max(5, Math.round(size / gap));
  const step = size / cols;
  const maxDotR = step * dotScale;

  // pointer polygon, scaled + centered on the canvas once up front
  const pointerScale = size * 0.85;
  const pointerPoly = POINTER_POLY_RAW.map(([x, y]) => [
    cx + (x - 0.4) * pointerScale,
    cy + (y - 0.5) * pointerScale,
  ]);
  const pointerEdgeSoft = Math.max(step * 1.6, 1.5);

  const dots = [];
  for (let iy = 0; iy < cols; iy++) {
    for (let ix = 0; ix < cols; ix++) {
      const x = step * (ix + 0.5), y = step * (iy + 0.5);
      const dx = x - cx, dy = y - cy;
      const dist0 = Math.sqrt(dx * dx + dy * dy);
      const nd = dist0 / baseRadius;
      const gx = x, gy = y;
      const nearPointer = distToPolygon(gx, gy, pointerPoly) <= pointerEdgeSoft || pointInPolygon(gx, gy, pointerPoly);
      if (nd > 1.48 && !nearPointer) continue; // outside every shape's reach, auto or pointer
      const hashInput = (ix + seed * 37) * 12.9898 + (iy + seed * 17) * 78.233;
      const dotSeed = Math.abs(Math.sin(hashInput) * 43758.5453) % 1;
      dots.push({
        baseAngle: Math.atan2(dy, dx),
        dist0,
        ux: dx / (dist0 || 1), // unit vector pointing outward from center
        uy: dy / (dist0 || 1),
        gx, gy, // fixed absolute grid position, for the pointer polygon test
        seed: dotSeed,
      });
    }
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let overrideTarget = 0; // 0 = normal auto-cycle, 1 = fully the pointer glyph
  let overrideBlend = 0;  // eased toward overrideTarget each frame

  const start = performance.now();
  let lastNow = start;
  let raf;

  function frame(now) {
    raf = requestAnimationFrame(frame);
    // the rAF timestamp for the very first frame can predate the
    // synchronous performance.now() call above that set `start` (a known
    // cross-browser quirk), making this go slightly negative for one frame
    const t = reducedMotion ? 0 : Math.max(0, (now - start) / 1000);
    const dt = Math.min(0.05, (now - lastNow) / 1000);
    lastNow = now;

    // ease the override blend toward its target — smooth in both directions
    overrideBlend += (overrideTarget - overrideBlend) * Math.min(1, dt * 7);
    if (overrideBlend < 0.001) overrideBlend = 0;
    if (overrideBlend > 0.999) overrideBlend = 1;

    // freeze rotation/breathing as the mark commits to the pointer glyph, so
    // a held pointer sits still and reads clearly instead of spinning
    const rot = t * rotateSpeed * (1 - overrideBlend);
    const breathe = 1 + breatheAmp * (1 - overrideBlend) * Math.sin(t * breatheSpeed);

    // normalized modulo (JS `%` can return negative for a negative
    // dividend) so idxA/idxB always land inside shapeFns regardless of sign
    const cyclePos = (((t * morphSpeed) % shapeCount) + shapeCount) % shapeCount;
    const idxA = Math.floor(cyclePos);
    const idxB = (idxA + 1) % shapeCount;
    const blendRaw = cyclePos - idxA;
    const blend = blendRaw * blendRaw * (3 - 2 * blendRaw); // smoothstep
    const shapeA = shapeFns[idxA], shapeB = shapeFns[idxB];

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = color;

    for (const d of dots) {
      let autoFalloff = 0;
      if (overrideBlend < 1) {
        const a = d.baseAngle - rot; // sample the silhouette in un-rotated space
        const envelope = (shapeA(a) * (1 - blend) + shapeB(a) * blend) * breathe;
        const targetR = envelope * baseRadius;
        const jitter =
          (Math.sin(t * 1.3 + d.seed * 6.28) * 0.6 +
            Math.sin(t * 0.7 - d.seed * 9.1) * 0.4) *
          jitterAmp * step * 1.4;
        const nd = (d.dist0 + jitter) / Math.max(targetR, 0.0001);
        autoFalloff = Math.max(0, 1 - nd);
      }

      let pointerFalloff = 0;
      if (overrideBlend > 0) {
        pointerFalloff = pointInPolygon(d.gx, d.gy, pointerPoly)
          ? 1
          : Math.max(0, 1 - distToPolygon(d.gx, d.gy, pointerPoly) / pointerEdgeSoft);
      }

      const falloff = autoFalloff * (1 - overrideBlend) + pointerFalloff * overrideBlend;
      if (falloff <= 0.02) continue;

      const px = cx + d.ux * d.dist0;
      const py = cy + d.uy * d.dist0;

      const pulse = 0.6 + 0.4 * (1 - overrideBlend) * Math.sin(t * 1.6 + d.seed * 6.28 + d.dist0 * 0.15) + overrideBlend * 0.4;
      const r = maxDotR * falloff * pulse;
      if (r < 0.15) continue;

      ctx.globalAlpha = Math.min(1, falloff * 1.2) * (0.6 + 0.4 * pulse);
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  raf = requestAnimationFrame(frame);

  return {
    stop() {
      cancelAnimationFrame(raf);
    },
    setOverride(name) {
      overrideTarget = name ? 1 : 0;
    },
  };
}
