# GSD State — myGM Pal

## Project Reference

See: `.planning/PROJECT.md` (updated 2026-03-16)

**Core value:** The app tells you who to book against who and why — data-driven booking recommendations from a Second Brain that knows your roster.
**Current milestone:** v1.0 — All Claude deliverables complete
**Current focus:** Phase 2 complete ✅ — ready to begin Phase 3 (Wireframe: Screen 6)

---

## Current Phase

**Phase 2 — Match Rating Formula: COMPLETE**
- scripts/match-rating.js — formula calculator (zero dependencies)
- scripts/match-rating.test.js — 32 tests, all passing (TDD: RED→GREEN)
- docs/myGMPal_Match_Rating_Formula.md — full formula reference
- DONE (2026-03-16)

---

## Milestone Progress

| Phase | Name | Status |
|-------|------|--------|
| 1 | Roster Data | ✅ Complete |
| 2 | Match Rating Formula | ✅ Complete |
| 3 | Wireframe: Screen 6 | ⏳ Pending |
| 4 | Wireframes: Screens 7–10 | ⏳ Pending |
| 5 | Wireframes: Screens 11–13 | ⏳ Pending |
| 6 | Website: Support Page | ⏳ Pending |
| 7 | App Store Copy | ⏳ Pending |
| 8 | Launch Materials | ⏳ Pending |

---

## Key Context for Resuming

- Wireframes 1–5 are locked HTML files. Check `docs/myGMPal_Wireframes.md` for design decisions before touching any wireframe.
- Design system: `#0a0a0a` bg, `#d0021b` red accent, `#ffffff` text. All button styles HARDCODED INLINE. No CSS classes.
- `data/roster.json` exists — 101 superstars, 16 fields each, validated with zero issues.
- `data/` and `scripts/` directories exist. `wireframes/` directory still needs to be created (Phase 3).
- Website deploys automatically: push to main → GitHub Actions → live at mygmpal.com in ~60 seconds.
- Legal: never use "WWE", "2K", "myGM" as brand identifiers in app store copy.

---

## Decisions

- **Phase 1:** `draft_score_base` formula locked: `round((pop*0.35)+(ovr*0.25)+(promo*4*0.20), 1)` — role balance bonus is dynamic, NOT pre-calculated
- **Phase 1:** `Is_Legend` stored as boolean in JSON (not string "TRUE"/"FALSE")
- **Phase 1:** `Data_Source` column included in JSON — documents confirmed vs estimated values

---

## Performance Metrics

| Phase | Plan | Duration | Tasks | Files |
|-------|------|----------|-------|-------|
| 01-roster-data | 01 | ~15 min | 2/2 | 4 |
| 02-match-formula | 01 | ~20 min | TDD | 3 |

---
*State initialized: 2026-03-16*
*Last session: 2026-03-16 — Phase 2 complete: match-rating.js + 32-test suite (TDD) + formula reference doc*
