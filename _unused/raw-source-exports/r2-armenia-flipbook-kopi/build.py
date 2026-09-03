import base64, glob, os, re, json

SCRATCH = os.path.dirname(os.path.abspath(__file__))
PAGES_DIR = os.path.join(SCRATCH, "pages")
TEMPLATE = os.path.join(SCRATCH, "template.html")
OUT = os.path.join(SCRATCH, "flipbook.html")

files = sorted(glob.glob(os.path.join(PAGES_DIR, "p*.jpg")))
assert len(files) == 105, f"expected 105 pages, found {len(files)}"

with open(TEMPLATE, "r", encoding="utf-8") as f:
    template = f.read()

parts = []
parts.append("[")
for i, fn in enumerate(files):
    with open(fn, "rb") as imf:
        b64 = base64.b64encode(imf.read()).decode("ascii")
    if i:
        parts.append(",")
    parts.append('"data:image/jpeg;base64,' + b64 + '"')
parts.append("]")
pages_json = "".join(parts)

out = template.replace("__PAGES_JSON__", pages_json)

with open(OUT, "w", encoding="utf-8") as f:
    f.write(out)

print("wrote", OUT, os.path.getsize(OUT)/1024/1024, "MB")
