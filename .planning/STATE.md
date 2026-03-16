# GSD State — myGM Pal

## Project Reference

See: `.planning/PROJECT.md` (updated 2026-03-16)

**Core value:** The app tells you who to book against who and why — data-driven booking recommendations from a Second Brain that knows your roster.
**Current milestone:** v1.0 — All Claude deliverables complete
**Current focus:** Ready to begin Phase 1

---

## Current Phase

**None started.** Run `/gsd:plan-phase 1` to begin.

---

## Milestone Progress

| Phase | Name | Status |
|-------|------|--------|
| 1 | Roster Data | ⏳ Pending |
| 2 | Match Rating Formula | ⏳ Pending |
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
- Roster data lives in Google Sheets (101 superstars). `data/roster.json` needs to be created from that data.
- The `wireframes/` and `data/` and `scripts/` directories don't exist yet — create them in Phase 1/2.
- Website deploys automatically: push to main → GitHub Actions → live at mygmpal.com in ~60 seconds.
- Legal: never use "WWE", "2K", "myGM" as brand identifiers in app store copy.

---
*State initialized: 2026-03-16*
