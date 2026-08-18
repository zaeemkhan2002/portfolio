"""Draws the 16x16 project sprites and emits src/data/sprites.ts.

Authoring the pixels through a tiny drawing API (rather than typing ASCII rows)
means row lengths and bounds are checked for us.
"""
import io, os

W = H = 16

# palette keys
OUT = '5'   # dark outline
MET = '7'   # metal, shadow side
LIT = '8'   # metal, lit side
CYD = '1'   # cyan, dark
CYA = '2'   # cyan
CYL = '3'   # cyan, highlight
VIO = '4'   # violet
AMB = '6'   # amber
RED = '9'   # red


class S:
    def __init__(self):
        self.g = [['.'] * W for _ in range(H)]

    def px(self, x, y, c):
        if 0 <= x < W and 0 <= y < H:
            self.g[y][x] = c

    def rect(self, x0, y0, x1, y1, c):
        for y in range(y0, y1 + 1):
            for x in range(x0, x1 + 1):
                self.px(x, y, c)

    def box(self, x0, y0, x1, y1, c):
        """outline only"""
        for x in range(x0, x1 + 1):
            self.px(x, y0, c)
            self.px(x, y1, c)
        for y in range(y0, y1 + 1):
            self.px(x0, y, c)
            self.px(x1, y, c)

    def rows(self):
        return [''.join(r) for r in self.g]


def shield(s, top, bot, color, edge):
    """Symmetric shield silhouette between rows `top` and `bot`."""
    n = bot - top
    for i in range(n + 1):
        t = i / n
        # full width at the top, tapering to a point at the bottom
        half = round(6 * (1 - t ** 2.1))
        if half < 1:
            half = 1
        y = top + i
        s.rect(8 - half, y, 7 + half, y, color)
        s.px(8 - half, y, edge)
        s.px(7 + half, y, edge)
    s.rect(2, top, 13, top, edge)


sprites = {}

# ---------------------------------------------------------------- robot
s = S()
s.px(7, 0, CYL); s.px(8, 0, CYL)
s.px(7, 1, MET); s.px(8, 1, MET)
s.box(4, 2, 11, 7, OUT); s.rect(5, 3, 10, 6, LIT)
s.rect(5, 4, 6, 4, CYA); s.rect(9, 4, 10, 4, CYA)   # eyes
s.rect(6, 6, 9, 6, CYD)                              # mouth
s.rect(7, 8, 8, 8, MET)                              # neck
s.box(3, 9, 12, 13, OUT); s.rect(4, 10, 11, 12, LIT)
s.rect(6, 11, 9, 12, CYA)                            # chest panel
s.rect(1, 10, 2, 12, MET); s.rect(13, 10, 14, 12, MET)   # arms
s.rect(5, 14, 6, 15, MET); s.rect(9, 14, 10, 15, MET)    # legs
sprites['mastani-fetch'] = s

# ------------------------------------------------------- hand, gesturing
# Two fingers raised from a fist: a silhouette that still reads as a hand
# at 16px, where a flat four-finger hand just looks like a control panel.
s = S()
for x0 in (4, 9):                                     # two raised fingers
    s.rect(x0, 2, x0 + 2, 7, LIT)
    s.box(x0, 2, x0 + 2, 7, OUT)
    s.px(x0 + 1, 4, CYA)                              # knuckle joint
s.box(2, 7, 13, 13, OUT); s.rect(3, 8, 12, 12, LIT)   # fist
s.rect(0, 9, 2, 11, LIT); s.box(0, 9, 2, 11, OUT)     # thumb
s.rect(5, 10, 10, 10, CYA)                            # sensor band
s.box(5, 14, 10, 15, OUT); s.rect(6, 15, 9, 15, MET)  # wrist
sprites['mobile-robotics-research'] = s

# ------------------------------------------------------------------ boat
s = S()
s.rect(8, 2, 8, 8, MET)                               # mast
s.rect(9, 2, 11, 3, CYA)                              # pennant
s.box(3, 5, 7, 8, OUT); s.rect(4, 6, 6, 7, CYL)       # cabin
s.rect(1, 9, 14, 10, LIT)                             # hull, upper strake
s.rect(2, 11, 13, 11, MET)                            # hull, lower strake
s.rect(3, 12, 12, 12, OUT)                            # keel
for y, x0, x1 in ((9, 1, 14), (10, 1, 14), (11, 2, 13)):
    s.px(x0, y, OUT); s.px(x1, y, OUT)                # hull edges
s.rect(0, 13, 15, 13, CYD)                            # waterline
for x in range(1, 16, 3):
    s.px(x, 14, CYD)                                  # wave dither
s.px(0, 12, AMB); s.px(15, 11, VIO)                   # floating debris
sprites['autonomous-trash-skimming-boat'] = s

# ------------------------------------------------------------ cctv camera
s = S()
s.rect(7, 0, 8, 2, MET)                               # ceiling mount
s.rect(4, 1, 11, 1, MET)
s.box(4, 4, 13, 9, OUT); s.rect(5, 5, 12, 8, LIT)     # housing
s.box(1, 4, 4, 9, OUT); s.rect(2, 5, 3, 8, MET)       # lens barrel
s.rect(2, 6, 3, 7, CYA)                               # glass
s.px(11, 6, RED)                                      # record light
s.rect(6, 10, 7, 13, MET); s.rect(4, 14, 9, 15, MET)  # stalk and base
sprites['ai-security-cam'] = s

# ------------------------------------------------------- campus skyline
s = S()
towers = ((1, 6, 4), (5, 2, 9), (10, 7, 14))          # x0, top, x1
for x0, top, x1 in towers:
    s.rect(x0, top, x1, 12, MET)
    s.box(x0, top, x1, 12, OUT)
    for wy in range(top + 2, 12, 2):                  # lit windows
        for wx in range(x0 + 1, x1, 2):
            s.px(wx, wy, CYA)
s.px(7, 0, CYL); s.px(7, 1, MET)                      # mast on the tall block
s.rect(0, 13, 15, 13, OUT); s.rect(0, 14, 15, 14, CYD)   # ground
sprites['lumscape'] = s

# -------------------------------------------------------------- gyroscope
s = S()
s.box(2, 2, 13, 13, CYD)                              # outer gimbal
s.box(4, 4, 11, 11, CYA)                              # middle gimbal
s.box(6, 6, 9, 9, VIO)                                # inner gimbal
s.rect(7, 7, 8, 8, CYL)                               # core
for x, y in ((7, 0), (8, 0), (7, 15), (8, 15), (0, 7), (0, 8), (15, 7), (15, 8)):
    s.px(x, y, MET)                                   # axis ticks
sprites['platform-stabilization-imu'] = s

# ------------------------------------------------------ flagged thumbnail
s = S()
s.box(1, 4, 14, 12, LIT); s.rect(2, 5, 13, 11, OUT)   # frame and screen
for i, wide in enumerate((0, 1, 2, 3, 2, 1, 0)):      # play triangle
    s.rect(6, 5 + i, 6 + wide, 5 + i, CYA)
s.rect(6, 5, 6, 11, CYL)                              # lit leading edge
s.rect(11, 5, 12, 6, AMB)                             # flagged marker
s.px(11, 5, OUT)
sprites['misleading-thumbnails'] = s

# ---------------------------------------------------------- shield + tick
s = S()
shield(s, 2, 14, CYD, CYA)
for i in range(3):                                    # check mark, 2px thick
    s.px(4 + i, 7 + i, OUT); s.px(4 + i, 8 + i, OUT)
for i in range(5):
    s.px(7 + i, 9 - i, OUT); s.px(7 + i, 10 - i, OUT)
sprites['youtube-kids-ad-detection'] = s

# -------------------------------------------------------- shield + crack
s = S()
shield(s, 2, 14, VIO, RED)
for x, y in ((8, 3), (8, 4), (7, 5), (7, 6), (8, 7), (8, 8), (7, 9), (7, 10), (8, 11)):
    s.px(x, y, OUT)
sprites['llm-guardrail-red-teaming'] = s

# ------------------------------------------------------------------ emit
for slug, sp in sprites.items():
    rows = sp.rows()
    assert len(rows) == H, (slug, len(rows))
    for r in rows:
        assert len(r) == W, (slug, r, len(r))

out = io.StringIO()
out.write("// AUTO-GENERATED pixel art — see scripts/gen_sprites.py\n")
out.write("// Each sprite is a 16x16 grid; every character is a palette key.\n\n")
out.write("export const PIXEL_PALETTE: Record<string, string> = {\n")
for k, v, name in (
    ('5', '#08131f', 'outline'),
    ('7', '#4b5b70', 'metal, shadow side'),
    ('8', '#c3d3e6', 'metal, lit side'),
    ('1', '#0e7490', 'cyan, dark'),
    ('2', '#22d3ee', 'cyan'),
    ('3', '#a5f3fc', 'cyan, highlight'),
    ('4', '#a78bfa', 'violet'),
    ('6', '#f59e0b', 'amber'),
    ('9', '#f2555a', 'red'),
):
    out.write('  "%s": "%s", // %s\n' % (k, v, name))
out.write("};\n\nexport const SPRITES: Record<string, string[]> = {\n")
for slug, sp in sprites.items():
    out.write('  "%s": [\n' % slug)
    for r in sp.rows():
        out.write('    "%s",\n' % r)
    out.write('  ],\n')
out.write("};\n")

dest = os.path.join('src', 'data', 'sprites.ts')
io.open(dest, 'w', encoding='utf-8').write(out.getvalue())
print('wrote', dest, '-', len(sprites), 'sprites')

# quick console preview
for slug, sp in sprites.items():
    print('\n==', slug)
    for r in sp.rows():
        print('  ' + r.replace('.', ' '))
