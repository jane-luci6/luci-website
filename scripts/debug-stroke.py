#!/usr/bin/env python3
"""Focused single-letter QA: draw the glyph mask + ALL skeleton branches (gold, thick)
+ chosen branches (white) at a viewable size. Usage: python3 scripts/debug-stroke.py W"""
import sys, os, math
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from PIL import Image, ImageDraw
import importlib.util
spec = importlib.util.spec_from_file_location("gen", os.path.join(os.path.dirname(__file__), "gen-hero-stroke-svg.py"))
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)

ch = sys.argv[1] if len(sys.argv) > 1 else 'W'
font, ttf_path = g.load_syncopate_ttf()
upem = font['head'].unitsPerEm
r = g.rasterize_glyph(ttf_path, ch, g.SCALE, upem)
mask = r['mask']
branches = g.skeleton_branches(mask)
mixmin, miymin, mixmax, miymax = g.mask_ink_bbox(mask)
w = mixmax - mixmin; h = miymax - miymin
# downsample to max 1400px wide for viewing
scale = min(1.0, 1400.0 / max(w, 1))
Wv = int(w * scale) + 40
Hv = int(h * scale) + 40
canvas = np.full((Hv, Wv, 3), (10, 22, 28), dtype=np.uint8)
ys, xs = np.where(mask)
if len(xs):
    cx = ((xs - mixmin) * scale).astype(int)
    cy = ((ys - miymin) * scale).astype(int)
    canvas[cy.clip(0, Hv-1), cx.clip(0, Wv-1)] = (104, 227, 190)
img = Image.fromarray(canvas, 'RGB')
draw = ImageDraw.Draw(img)
# sort branches by length desc, draw all in gold, top 2 in white
branches.sort(key=lambda b: -b['len'])
for i, br in enumerate(branches):
    color = (255, 255, 255) if i < 2 else (206, 176, 110)
    prev = None
    for px, py in br['pts']:
        X = (px - mixmin) * scale; Y = (py - miymin) * scale
        if prev:
            draw.line([prev, (X, Y)], fill=color, width=2)
        prev = (X, Y)
    mid = br['pts'][len(br['pts'])//2]
    draw.text((mid[0]*scale - mixmin*scale - 10, mid[1]*scale - miymin*scale - 8), f"#{i} L={int(br['len'])}", fill=color)
out = f'/tmp/luci-stroke-debug-{ch}.png'
img.save(out)
print(f'{ch}: {len(branches)} branches, saved {out}')
print('top 5 lengths:', [round(b['len'],0) for b in branches[:5]])
