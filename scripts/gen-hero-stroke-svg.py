#!/usr/bin/env python3
"""
Generate the hero "WHOLE PROPERTY" stroke-filled SVG from REAL Syncopate geometry.

Pipeline per letter:
  1. Decode the embedded Syncopate woff2 -> ttf (fontTools).
  2. Rasterize the glyph at high res (PIL ImageFont).
  3. Skeletonize the mask (scikit-image) -> stroke centerlines.
  4. Trace skeleton branches between endpoints/junctions -> polylines.
  5. Measure local stroke thickness (distance transform).
  6. Emit SVG: real glyph outline as clip + zone name on <textPath> along each
     chosen centerline, font-size = local thickness.

Output: src/data/heroStrokeSvg.ts exporting wholeSvg + propSvg strings.
"""
import base64
import io
import re
import sys
import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from skimage.morphology import skeletonize
from scipy.ndimage import distance_transform_edt, label as cc_label

ZONES = [
    'Lobby', 'Pool', 'Theater', 'Ballroom',
    'Sportsbook', 'Marquee', 'Restaurant', 'Bar & lounge',
    'Casino floor', 'Event Venue', 'Conference Room', 'Parking structure', 'Wayfinding sign',
]

# rasterization scale (font units -> pixels). Syncopate UPM=2048; SCALE=2 gives
# ~385px stroke thickness — plenty for clean skeletonization without being slow.
SCALE = 2
FONT_CSS = os.path.join(
    os.path.dirname(__file__), '..', '..',
    'luci-design/LUCI Systems Design System/assets/fonts/luci-brand-fonts.css'
)
OUT_TS = os.path.join(os.path.dirname(__file__), '..', 'src/data/heroStrokeSvg.ts')


def load_syncopate_ttf():
    with open(FONT_CSS, 'r', encoding='utf-8') as f:
        css = f.read()
    m = re.search(r"font-family:'Syncopate'[^}]*src:url\(data:font/woff2;base64,([A-Za-z0-9+/=]+)\)", css)
    if not m:
        raise SystemExit('Syncopate woff2 not found in brand fonts CSS')
    woff2 = base64.b64decode(m.group(1))
    font = TTFont(io.BytesIO(woff2))
    # also write a ttf for PIL
    ttf_path = '/tmp/luci-syncopate.ttf'
    font.flavor = None
    font.save(ttf_path)
    return font, ttf_path


def glyph_outline_path(font, ch, scale):
    """Return SVG path string for the glyph, in scaled font units."""
    cmap = font.getBestCmap()
    gid = cmap.get(ord(ch))
    if gid is None:
        return ''
    glyphset = font.getGlyphSet()
    pen = SVGPathPen(glyphset)
    glyphset[gid].draw(pen)
    d = pen.getCommands() if hasattr(pen, 'getCommands') else pen.d
    return d


def glyph_bbox(font, ch):
    """(xMin,yMin,xMax,yMax) in font units, y-up, from the glyf table."""
    gid = font.getBestCmap().get(ord(ch))
    g = font['glyf'][gid]
    return (g.xMin, g.yMin, g.xMax, g.yMax)


def mask_ink_bbox(mask):
    ys, xs = np.where(mask)
    if len(xs) == 0:
        return (0, 0, 0, 0)
    return (int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max()))


def rasterize_glyph(ttf_path, ch, scale=SCALE, upem=1000):
    """Render a single glyph to a binary mask. Returns dict with mask, ink bbox (px),
    pen-origin offset P (px) so font-unit outline * scale + P aligns to mask, advance (px)."""
    px = int(round(upem * scale))
    font = ImageFont.truetype(ttf_path, px)
    bbox = font.getbbox(ch)  # (l,t,r,b) ink offset from layout-box top-left
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    if w <= 0 or h <= 0:
        return None
    pad = int(px * 0.12)
    W = w + 2 * pad
    H = h + 2 * pad
    img = Image.new('L', (W, H), 0)
    draw = ImageDraw.Draw(img)
    draw.text((pad - bbox[0], pad - bbox[1]), ch, fill=255, font=font, anchor='lt')
    mask = np.array(img) > 0
    # pen origin (font 0,0 = top of ascent) lands at mask-local P:
    P = (pad - bbox[0], pad - bbox[1])
    return {'mask': mask, 'P': P, 'ink': bbox, 'ink_w': w, 'ink_h': h}


def skeleton_branches(mask):
    """Skeletonize + trace branches. Returns list of dicts: {pts:[[x,y]...], thick:[..], len}."""
    skel = skeletonize(mask)
    H, W = skel.shape
    ys, xs = np.where(skel)
    if len(xs) == 0:
        return []
    edt = distance_transform_edt(mask)
    # vectorized degree: sum of 8 neighbors on the skeleton
    k = np.array([[1,1,1],[1,0,1],[1,1,1]], dtype=np.uint8)
    deg_all = __import__('scipy.ndimage', fromlist=['convolve']).convolve(skel.astype(np.uint8), k, mode='constant', cval=0)
    deg_map = deg_all  # neighbor count per pixel (only meaningful where skel)
    pts = set(zip(xs.tolist(), ys.tolist()))
    deg = {p: int(deg_map[p[1], p[0]]) for p in pts}
    def neighbors(x, y):
        out = []
        for dy in (-1, 0, 1):
            for dx in (-1, 0, 1):
                if dx == 0 and dy == 0:
                    continue
                nx, ny = x + dx, y + dy
                if 0 <= nx < W and 0 <= ny < H and skel[ny, nx]:
                    out.append((nx, ny))
        return out
    ends = [p for p in pts if deg[p] == 1]
    junc = [p for p in pts if deg[p] >= 3]
    nodes = set(ends) | set(junc)
    # trace paths between nodes
    branches = []
    visited_edges = set()
    for start in nodes:
        for nb in neighbors(*start):
            edge = frozenset([start, nb])
            if edge in visited_edges:
                continue
            # walk
            path = [start, nb]
            visited_edges.add(frozenset([start, nb]))
            prev, cur = start, nb
            while cur not in nodes and deg.get(cur, 0) == 2:
                nxts = [p for p in neighbors(*cur) if p != prev]
                if not nxts:
                    break
                prev, cur = cur, nxts[0]
                path.append(cur)
                edge = frozenset([path[-2], path[-1]])
                visited_edges.add(edge)
            if len(path) >= 2:
                branches.append(path)
    # also handle closed loops (no nodes): pick any pixel, trace around
    if not nodes and len(pts) > 0:
        # single ring: trace from any point
        start = next(iter(pts))
        prev = None
        cur = start
        path = [cur]
        while True:
            nxts = [p for p in neighbors(*cur) if p != prev]
            if not nxts:
                break
            prev, cur = cur, nxts[0]
            if cur == start:
                break
            path.append(cur)
        if len(path) >= 2:
            branches.append(path)
    # build result with thickness + length
    out = []
    for path in branches:
        pts_xy = [[float(x), float(y)] for (x, y) in path]
        thicks = [2.0 * edt[y, x] for (x, y) in path]
        L = 0.0
        for i in range(1, len(pts_xy)):
            L += math.hypot(pts_xy[i][0] - pts_xy[i-1][0], pts_xy[i][1] - pts_xy[i-1][1])
        out.append({'pts': pts_xy, 'thick': thicks, 'len': L})
    return out


def simplify_polyline(pts, tol=2.0):
    """Douglas-Peucker in pixel space; keep curves for textPath smoothness."""
    if len(pts) < 3:
        return pts
    def dp(start, end):
        if end - start < 2:
            return [pts[start]]
        ax, ay = pts[start]; bx, by = pts[end]
        dmax, idx = 0.0, -1
        for i in range(start + 1, end):
            x, y = pts[i]
            # perpendicular distance
            dx, dy = bx - ax, by - ay
            L = math.hypot(dx, dy) or 1.0
            dist = abs((x - ax) * dy - (y - ay) * dx) / L
            if dist > dmax:
                dmax, idx = dist, i
        if dmax > tol and idx != -1:
            left = dp(start, idx)
            right = dp(idx, end)
            return left + right
        return [pts[start]]
    res = dp(0, len(pts) - 1) + [pts[-1]]
    return res


def path_from_polyline(pts):
    """SVG path d from a polyline (in raster px)."""
    if len(pts) < 2:
        return ''
    d = f'M {pts[0][0]:.1f} {pts[0][1]:.1f}'
    for x, y in pts[1:]:
        d += f' L {x:.1f} {y:.1f}'
    return d


def is_closed_ring(pts, length):
    if len(pts) < 8 or length < 400 * SCALE:
        return False
    (x0, y0), (x1, y1) = pts[0], pts[-1]
    return math.hypot(x1 - x0, y1 - y0) < 0.12 * length / max(len(pts), 1) + 30


def ring_top_arc(pts):
    """For a closed ring branch, return the upper arc from leftmost -> topmost -> rightmost
    so a label reads left-to-right along the top of the letter (no upside-down text)."""
    n = len(pts)
    if n < 4:
        return pts
    L = min(range(n), key=lambda i: pts[i][0])
    R = max(range(n), key=lambda i: pts[i][0])
    T = min(range(n), key=lambda i: pts[i][1])
    def arc(a, b):
        if a <= b:
            return list(range(a, b + 1))
        return list(range(a, n)) + list(range(0, b + 1))
    fwd = arc(L, R)
    if T in fwd:
        seq = fwd
    else:
        seq = list(reversed(arc(R, L)))
    return [pts[i] for i in seq]


def straightest_segment(pts, bend_deg=38):
    """Split a polyline at sharp bends; return the longest (straight) sub-segment.
    Keeps one word on a single straight stroke instead of bending around corners."""
    if len(pts) < 3:
        return pts
    segs = []
    cur = [pts[0]]
    for i in range(1, len(pts)):
        cur.append(pts[i])
        if i >= len(pts) - 1:
            continue
        ax, ay = pts[i-1]; bx, by = pts[i]; cx, cy = pts[i+1]
        d1 = math.atan2(by - ay, bx - ax)
        d2 = math.atan2(cy - by, cx - bx)
        turn = abs(((d2 - d1 + math.pi) % (2 * math.pi)) - math.pi) * 180 / math.pi
        if turn > bend_deg:
            segs.append(cur); cur = [pts[i]]
    segs.append(cur)
    best = max(segs, key=lambda s: sum(math.hypot(s[j][0]-s[j-1][0], s[j][1]-s[j-1][1]) for j in range(1, len(s))))
    return best


def build_word_svg(font, ttf_path, word, assigns, letter_data):
    """assigns: list of (letterIndex, branchIndex, zoneIndex). letter_data precomputed.
    All geometry lives in one raster-px space: pen origin of letter i at x = xs[i], y = 0.
    Outline (font units, y-down, top=0) -> word px via translate(xs[i],0) scale(SCALE).
    Mask-local (mx,my) -> word px via (mx - P_x + xs[i], my - P_y)."""
    SCALE_USE = SCALE
    letters = list(word)
    cmap = font.getBestCmap()
    glyphset = font.getGlyphSet()
    # advances in px (normal letter spacing)
    advances = []
    for ch in letters:
        gid = cmap.get(ord(ch))
        adv = glyphset.get(gid).width if gid else 0
        advances.append(adv * SCALE_USE)
    xs = [0]
    for a in advances[:-1]:
        xs.append(xs[-1] + a)
    W = sum(advances)
    # per-letter outline bbox (font units, y-up) + mask ink bbox (px)
    obboxes = []
    mbboxes = []
    for i, ch in enumerate(letters):
        ld = letter_data[i]
        if not ld:
            obboxes.append(None); mbboxes.append(None); continue
        obboxes.append(glyph_bbox(font, ch))
        mbboxes.append(mask_ink_bbox(ld['mask']))
    H = max((mb[3] - mb[1]) for mb in mbboxes if mb) or 1
    svg = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" preserveAspectRatio="xMidYMid meet" class="hero-stroke-svg">']
    # clip paths (real glyph outlines, y-flipped + aligned to mask ink bbox)
    svg.append('<defs>')
    for i, ch in enumerate(letters):
        ld = letter_data[i]
        if not ld:
            continue
        oxmin, oymin, oxmax, oymax = obboxes[i]
        tx = xs[i] - oxmin * SCALE_USE
        ty = oymax * SCALE_USE
        svg.append(f'<clipPath id="c{i}"><path d="{ld["outline"]}" transform="translate({tx:.1f} {ty:.1f}) scale({SCALE_USE} -{SCALE_USE})"/></clipPath>')
    svg.append('</defs>')
    # solid mint letters
    svg.append('<g fill="#68E3BE">')
    for i, ch in enumerate(letters):
        ld = letter_data[i]
        if not ld:
            continue
        oxmin, oymin, oxmax, oymax = obboxes[i]
        tx = xs[i] - oxmin * SCALE_USE
        ty = oymax * SCALE_USE
        svg.append(f'<path d="{ld["outline"]}" transform="translate({tx:.1f} {ty:.1f}) scale({SCALE_USE} -{SCALE_USE})"/>')
    svg.append('</g>')
    # zone names knocked out along real stroke centerlines
    for (li, bi, zi) in assigns:
        ld = letter_data[li]
        if not ld or bi >= len(ld['branches']):
            continue
        br = ld['branches'][bi]
        mixmin, miymin = mbboxes[li][0], mbboxes[li][1]
        raw = [[p[0] - mixmin + xs[li], p[1] - miymin] for p in br['pts']]
        if is_closed_ring(raw, br['len']):
            raw = ring_top_arc(raw)
        else:
            raw = straightest_segment(raw)
        spts = simplify_polyline(raw, tol=3.0)
        thick = float(np.median(br['thick'])) if br['thick'] else 0.0
        thick = max(thick, 1.0)
        plen = 0.0
        for i in range(1, len(spts)):
            plen += math.hypot(spts[i][0] - spts[i-1][0], spts[i][1] - spts[i-1][1])
        pathd = path_from_polyline(spts)
        pid = f'p{li}_{bi}'
        svg.append(f'<path id="{pid}" d="{pathd}" fill="none" stroke="none"/>')
        zone = ZONES[zi]
        fs = thick * 0.82
        tl = max(plen * 0.96, 1.0)
        svg.append(f'<text font-family="Space Grotesk, sans-serif" font-weight="700" font-size="{fs:.1f}" fill="#0A161C" letter-spacing="-0.01em" clip-path="url(#c{li})">')
        svg.append(f'<textPath href="#{pid}" startOffset="50%" text-anchor="middle" textLength="{tl:.1f}" lengthAdjust="spacingAndGlyphs">{zone}</textPath>')
        svg.append('</text>')
    svg.append('</svg>')
    return '\n'.join(svg)


def dump_debug(word, letter_data, assigns, outpath):
    """Render mask + skeleton + chosen branches to a PNG for visual QA."""
    from PIL import Image, ImageDraw
    tiles = []
    xoff = []
    cur = 0
    for ld in letter_data:
        if not ld:
            xoff.append(cur); continue
        m = ld['mask']
        mixmin, miymin, mixmax, miymax = mask_ink_bbox(m)
        w = max(mixmax - mixmin, 1); h = max(miymax - miymin, 1)
        tiles.append((m, mixmin, miymin, w, h))
        xoff.append(cur)
        cur += w + 20
    if not tiles:
        print('no tiles for', word); return
    H = max(t[4] for t in tiles)
    W = cur
    if W <= 0 or H <= 0:
        print('bad size', W, H, 'for', word); return
    canvas = np.full((H + 40, W, 3), (10, 22, 28), dtype=np.uint8)
    for i, (m, mixmin, miymin, w, h) in enumerate(tiles):
        ys, xs = np.where(m)
        if len(xs):
            cx = (xs - mixmin + xoff[i]).clip(0, W - 1)
            cy = (ys - miymin).clip(0, H + 39)
            canvas[cy, cx] = (104, 227, 190)
    img = Image.fromarray(canvas, 'RGB')
    draw = ImageDraw.Draw(img)
    for (li, bi, zi) in assigns:
        ld = letter_data[li]
        if not ld or bi >= len(ld['branches']):
            continue
        br = ld['branches'][bi]
        mixmin, miymin = mask_ink_bbox(ld['mask'])[:2]
        prev = None
        for px, py in br['pts']:
            X = int(px - mixmin + xoff[li]); Y = int(py - miymin)
            if 0 <= X < W and 0 <= Y < H + 40 and prev:
                draw.line([prev, (X, Y)], fill=(206, 176, 110), width=3)
            prev = (X, Y)
        mid = br['pts'][len(br['pts']) // 2]
        draw.text((int(mid[0] - mixmin + xoff[li]) - 20, int(mid[1] - miymin) - 10), ZONES[zi], fill=(255, 255, 255))
    img.save(outpath)
    print('debug png ->', outpath)


def pick_assigns(word, letter_data, n):
    """One zone per letter, in left-to-right reading order. For each letter pick its
    single longest branch (skipping tiny nubs). Returns [(li, bi, zi)] with zi = letter index."""
    assigns = []
    for li, ld in enumerate(letter_data):
        if not ld or not ld['branches']:
            continue
        best_bi, best_len = -1, -1.0
        for bi, br in enumerate(ld['branches']):
            if br['len'] < 200 * SCALE:
                continue
            if br['len'] > best_len:
                best_len, best_bi = br['len'], bi
        if best_bi < 0:  # fallback: any branch
            best_bi = max(range(len(ld['branches'])), key=lambda i: ld['branches'][i]['len'])
        assigns.append((li, best_bi, li))
    return assigns


def main():
    font, ttf_path = load_syncopate_ttf()
    upem = font['head'].unitsPerEm
    whole = 'WHOLE'
    prop = 'PROPERTY'
    # build geometry once per word
    def ld_for(word):
        out = []
        for ch in word:
            r = rasterize_glyph(ttf_path, ch, SCALE, upem)
            if r is None:
                out.append(None); continue
            out.append({'mask': r['mask'], 'P': r['P'], 'branches': skeleton_branches(r['mask']), 'outline': glyph_outline_path(font, ch, SCALE)})
        return out
    whole_ld = ld_for(whole)
    prop_ld = ld_for(prop)
    whole_assigns = pick_assigns(whole, whole_ld, 5)
    prop_assigns = pick_assigns(prop, prop_ld, 8)
    whole_svg = build_word_svg(font, ttf_path, whole, whole_assigns, whole_ld)
    prop_svg = build_word_svg(font, ttf_path, prop, prop_assigns, prop_ld)
    if '--debug' in sys.argv:
        dump_debug(whole, whole_ld, whole_assigns, '/tmp/luci-stroke-debug-whole.png')
        dump_debug(prop, prop_ld, prop_assigns, '/tmp/luci-stroke-debug-prop.png')
    # write TS
    def esc(s): return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    ts = f"""// AUTO-GENERATED by scripts/gen-hero-stroke-svg.py — real Syncopate glyph geometry.
export const heroStrokeWholeSvg = `{esc(whole_svg)}`;
export const heroStrokePropSvg = `{esc(prop_svg)}`;
export const heroStrokeZones = {ZONES!r};
"""
    with open(OUT_TS, 'w', encoding='utf-8') as f:
        f.write(ts)
    print('wrote', OUT_TS)
    print('whole assigns:', whole_assigns)
    print('prop assigns:', prop_assigns)


if __name__ == '__main__':
    main()

