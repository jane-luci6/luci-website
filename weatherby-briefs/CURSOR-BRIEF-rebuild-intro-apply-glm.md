CURSOR BRIEF
Repo: website
Branch: persona-hero-subhead-gold (do not change)
Model: GLM
Mode: execute (Weatherby may apply directly if faster — exact locked copy)

## Locked intro (exact — do not invent or paraphrase)
We rebuilt LUCI from the ground up around the capabilities, functionality, and performance you asked for—making monitoring, support, and future upgrades easier. You gain more control, with the LUCI team still right there when you need us.

## Apply
1) `src/data/upgradeGuide.ts` → `thesis`
   - Keep `thesis.heading` unchanged
   - Insert locked intro as NEW leading paragraph (one string, both sentences)
   - Keep existing capability paragraph after it
   - Drop the old day-to-day-control paragraph (obvious duplicate of locked sentence 2)
2) Deploy via `./deploy.sh` to .37
3) Commit on website

Companion (design repo): same locked copy as `.p1-intro` after `.p1-callout` in
`ui_kits/sales/new-luci-whats-new-onepager.html` (no Hub). Sync review + deploy portal if usual.

Definition of done: live .37 UG thesis shows locked lead; commit SHA; onepager has intro under callout.
