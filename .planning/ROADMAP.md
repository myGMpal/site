# Roadmap: myGM Pal — v1.0 Launch

**Milestone:** v1.0 — All Claude deliverables complete, app ready for Thunkable build
**Goal:** Produce every file, script, copy asset, and wireframe Adam needs to build, submit, and launch myGM Pal by May 2026.
**Created:** 2026-03-16

---

## Phase 1 — Roster Data

**Goal:** Produce a validated `data/roster.json` file that Thunkable can import directly.

**Deliverables:**
- `data/roster.json` — 101 superstars with all required fields, Draft Score pre-calculated
- Validation output confirming all values in range, no missing fields

**Requirements covered:** DATA-01, DATA-02, DATA-03

**Plans:** 1 plan

Plans:
- [ ] 01-roster-data-01-PLAN.md — Convert CSV to roster.json, add draft_score_base, validate output

**Success criteria:**
- All 101 superstars present with correct field names
- OVR 50–100, Popularity 1–100, Promo_Skill 1–5, Stamina 1–100, Morale 1–100
- Draft_Cost = OVR × 1.8 (+10 for legends), rounded to nearest integer
- draft_score_base pre-calculated per superstar
- Gender, Class, Role, Category, Brand all populated with valid enum values

---

## Phase 2 — Match Rating Formula

**Goal:** Fully document the match rating formula and produce a working JS validator with test cases.

**Deliverables:**
- `docs/myGMPal_Match_Rating_Formula.md` — complete formula reference with all modifiers, edge cases, examples
- `scripts/match-rating.js` — standalone Node.js calculator
- `scripts/match-rating.test.js` — test suite with 20+ test cases

**Requirements covered:** FORM-01, FORM-02, FORM-03

**Success criteria:**
- Formula runs correctly in Node.js with no dependencies
- All test cases pass: floor at 0.5★, ceiling at 5.0★
- Every modifier tested: class synergy, role matchup, all match types, title bonus, all 4 rivalry levels
- Output includes numeric rating + breakdown of contributing factors

---

## Phase 3 — Wireframe: Screen 6 (Initial Booking)

**Goal:** Interactive HTML prototype for the Initial Booking screen — the bridge between draft and first show.

**Deliverables:**
- `wireframes/screen-06-booking.html` — interactive prototype

**Requirements covered:** WIRE-06

**Success criteria:**
- Displays suggested Week 1 rivalries based on mock drafted roster data
- Shows predicted match ratings for each suggested matchup
- First show template with 3 slots: opener (second-best), mid-card, main event
- Accept / Review / Change rivalry controls functional in prototype
- Consistent with locked screens 1–5 design system (black bg, red accent, inline styles)

---

## Phase 4 — Wireframes: Screens 7–10 (Main App Core)

**Goal:** Four core main app screens — the weekly planning loop heart of the app.

**Deliverables:**
- `wireframes/screen-07-home.html` — Home Hub
- `wireframes/screen-08-roster.html` — Roster Page
- `wireframes/screen-09-calculator.html` — Match Calculator
- `wireframes/screen-10-rivalries.html` — Rivalry Planner

**Requirements covered:** WIRE-07, WIRE-08, WIRE-09, WIRE-10

**Success criteria:**
- Screen 7: Week counter, active alert cards (stamina/rivalry warnings), brand health quick stats
- Screen 8: Roster list with XP bar, stamina bar, morale indicator; perk alert badges at milestone levels
- Screen 9: Superstar pickers, match type selector, title/rivalry toggles, Calculate button produces star rating + breakdown
- Screen 10: Add Rivalry form, rivalry list with heat level indicator, stale warning logic shown, PLE escalation suggestion
- All screens consistent with design system, hamburger menu nav, persistent "Log This Week's Show" bottom button

---

## Phase 5 — Wireframes: Screens 11–13 (Support Screens)

**Goal:** Scouting, Post-Show Feedback, and Settings — completing the full wireframe set.

**Deliverables:**
- `wireframes/screen-11-scouting.html` — Scouting
- `wireframes/screen-12-feedback.html` — Post-Show Feedback
- `wireframes/screen-13-settings.html` — Settings

**Requirements covered:** WIRE-11, WIRE-12, WIRE-13

**Success criteria:**
- Screen 11: Gap analysis panel showing missing roles/classes, free agent search with filter criteria, roster gap recommendations
- Screen 12: Post-show match result input, per-superstar stat update fields (Stamina/Morale/Pop/XP), chemistry flag for 4★+ matches
- Screen 13: All required toggles and links; full legal disclaimer text; Pro IAP upgrade prompt; clear all data button with confirmation
- All 13 wireframe screens now complete and consistent

---

## Phase 6 — Website: Support Page

**Goal:** Add `/support.html` to the live website — required for app store submission and user support.

**Deliverables:**
- `website/support.html` — live at mygmpal.com/support.html after push

**Requirements covered:** WEB-01

**Success criteria:**
- FAQ covers: connecting Google Sheets, understanding star ratings, resetting data, Pro IAP, contact details
- Design consistent with `website/index.html` (same styles, header, footer)
- Deployed to GitHub Pages via push to main

---

## Phase 7 — App Store Copy

**Goal:** Submission-ready listing copy for both stores, legally compliant.

**Deliverables:**
- `docs/myGMPal_StoreListings.md` — all copy for both stores in one document

**Requirements covered:** STORE-01, STORE-02, STORE-03, STORE-04

**Success criteria:**
- Google Play: title ≤30 chars, short desc ≤80 chars, full desc ≤4000 chars — all IP rules followed
- App Store: name + subtitle ≤30 chars each, keywords ≤100 chars, desc ≤4000 chars — no competitor names in keywords
- Required WWE/2K disclaimer included in both descriptions (exact approved text from master plan)
- Screenshot brief included — which screens, what to highlight, Canva approach

---

## Phase 8 — Launch Materials

**Goal:** All community and creator outreach content ready before Thunkable build completes.

**Deliverables:**
- `docs/myGMPal_LaunchKit.md` — all launch materials in one document

**Requirements covered:** LAUNCH-01, LAUNCH-02, LAUNCH-03, LAUNCH-04

**Success criteria:**
- Ko-fi setup guide: step-by-step account creation, suggested page name, description copy, optional tiers
- r/WWEGames launch post: narrative format (built this because I needed it), screenshots guidance, link placement
- Beta recruitment post: for r/WWEGames + r/TestersCommunity + r/Betatests, no spam tone
- Creator outreach email: personalisable template for Assemble, Phoenix Nitro, Smacktalks, BDE — genuine value pitch, no ask

---

## Phase Summary

| Phase | Name | Requirements | Status |
|-------|------|-------------|--------|
| 1 | Roster Data | DATA-01/02/03 | Pending |
| 2 | Match Rating Formula | FORM-01/02/03 | Pending |
| 3 | Wireframe: Screen 6 | WIRE-06 | Pending |
| 4 | Wireframes: Screens 7–10 | WIRE-07/08/09/10 | Pending |
| 5 | Wireframes: Screens 11–13 | WIRE-11/12/13 | Pending |
| 6 | Website: Support Page | WEB-01 | Pending |
| 7 | App Store Copy | STORE-01/02/03/04 | Pending |
| 8 | Launch Materials | LAUNCH-01/02/03/04 | Pending |

---
*Roadmap created: 2026-03-16*
*Target milestone completion: May 2026 (aligned with Thunkable build completion)*
