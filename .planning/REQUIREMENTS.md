# Requirements: myGM Pal

**Defined:** 2026-03-16
**Core Value:** The app tells you who to book against who and why — data-driven booking recommendations from a Second Brain that knows your roster.

---

## v1 Requirements

These are the Claude-deliverable artifacts for the v1.0 launch milestone.

### Data

- [x] **DATA-01**: `data/roster.json` exports all 101 superstars with correct field names matching the Thunkable data model (Name, OVR, Gender, Category, Brand, Class, Role, Ring_Level, Popularity, Promo_Skill, Draft_Cost, Is_Legend, Stamina, Morale, draft_score_base)
- [x] **DATA-02**: Roster JSON is validated — no missing required fields, all values within expected ranges
- [x] **DATA-03**: Draft Score is pre-calculated for each superstar as `draft_score_base` using the confirmed formula: `round((Popularity × 0.35) + (OVR × 0.25) + (Promo_Skill × 4 × 0.20), 1)`. The +40% role balance bonus is dynamic and NOT pre-calculated — it is applied in-app based on current draft state.

### Formula

- [x] **FORM-01**: Match rating formula documented in full (all inputs, all modifiers, clamping logic, edge cases)
- [x] **FORM-02**: JavaScript validation script (`scripts/match-rating.js`) calculates formula correctly for all test cases
- [x] **FORM-03**: Test suite covers: minimum rating floor (0.5★), maximum ceiling (5★), all rivalry levels (1–4), all match types, title bonus, class synergy, role matchup combinations

### Wireframes

- [ ] **WIRE-06**: Screen 6 — Initial Booking: suggested Week 1 rivalries from drafted roster, predicted match ratings, first show template (opener/mid-card/main event), Accept/Review/Change controls
- [ ] **WIRE-07**: Screen 7 — Home Hub: week tracker, active alerts (stamina warnings, stale rivalry warnings), quick stat panels for brand health
- [ ] **WIRE-08**: Screen 8 — Roster Page: superstar list with XP progress bars, stamina bars, morale indicators, perk alerts at milestones (Levels 5/10/15/20/25)
- [ ] **WIRE-09**: Screen 9 — Match Calculator: 2–6 superstar pickers, match type selector, title toggle, rivalry toggle + level selector, Calculate button, star rating result with factor breakdown
- [ ] **WIRE-10**: Screen 10 — Rivalry Planner: Add Rivalry form (Superstar A, B, Level 1–4, Weeks Active, Notes), rivalry list with heat indicators, stale rivalry warnings, PLE escalation suggestions
- [ ] **WIRE-11**: Screen 11 — Scouting: gap analysis panel (missing roles/classes), free agent search with criteria (gender, class, budget), suggested search criteria based on current roster gaps
- [ ] **WIRE-12**: Screen 12 — Post-Show Feedback: match result input (actual star ratings), stat update fields (Stamina, Morale, Popularity, Ring XP per superstar), chemistry log (auto-flag 4★+ pairings)
- [ ] **WIRE-13**: Screen 13 — Settings: Power Cards mode toggle, Workrate vs Entertainment roster preference, app version, privacy policy link, legal disclaimer (full text), Ko-fi link, contact email, Clear all data button

### Website

- [ ] **WEB-01**: `/support.html` — FAQ covering common questions (how to connect Google Sheets, what do the ratings mean, how to reset data, contact email), consistent with homepage design

### Store

- [ ] **STORE-01**: Google Play listing — app title (within 30 chars), short description (80 chars), full description (4000 chars), keyword list, all compliant with IP rules (no WWE/2K in title)
- [ ] **STORE-02**: App Store listing — app name, subtitle (30 chars), promotional text (170 chars), description (4000 chars), keywords (100 chars), all Apple Review guidelines compliant
- [ ] **STORE-03**: Required disclaimer text finalised and included in both store descriptions
- [ ] **STORE-04**: Screenshot content brief — which screens to capture, what to highlight, recommended Canva template approach

### Launch

- [ ] **LAUNCH-01**: Ko-fi page setup guide — account creation steps, suggested page name, description copy, suggested tiers
- [ ] **LAUNCH-02**: r/WWEGames launch post copy (title + body using the narrative approach from master plan)
- [ ] **LAUNCH-03**: Beta recruitment post copy for r/WWEGames, r/TestersCommunity, r/Betatests
- [ ] **LAUNCH-04**: Creator outreach email template for Assemble, Phoenix Nitro, Smacktalks, BDE

---

## v2 Requirements

Post-launch. Not in current roadmap.

### App Features (Thunkable — Adam builds)

- **V2-01**: Weekly show card drag-and-drop builder
- **V2-02**: Drama curve visualiser (match rating arc across show)
- **V2-03**: Fan score tracker with weekly history
- **V2-04**: Season history log
- **V2-05**: DLC roster pack support (Ringside Pass seasons 1–6)
- **V2-06**: Export show card as shareable image

### Website

- **V2-07**: nosellstudios.com studio homepage
- **V2-08**: mygmpal.com app page with download badge links (once live on stores)

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Thunkable screen builds | Claude cannot edit Thunkable projects; Adam builds using wireframes as reference |
| App icon / screenshots | Created in Canva by Adam; Claude can spec only |
| Backend / server / API | Not needed; Thunkable reads Google Sheets directly |
| Figma wireframes | HTML prototypes are the deliverable; Figma is redundant overhead |
| nosellstudios.com website | Separate product, deferred post-launch |
| v1.5 features (drama curve, fan tracker) | Post-launch additions based on user feedback |
| Real-time multiplayer / server sync | Architecture not supported by Thunkable free tier |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DATA-01 | Phase 1 | Complete |
| DATA-02 | Phase 1 | Complete |
| DATA-03 | Phase 1 | Complete |
| FORM-01 | Phase 2 | Complete |
| FORM-02 | Phase 2 | Complete |
| FORM-03 | Phase 2 | Complete |
| WIRE-06 | Phase 3 | Pending |
| WIRE-07 | Phase 4 | Pending |
| WIRE-08 | Phase 4 | Pending |
| WIRE-09 | Phase 4 | Pending |
| WIRE-10 | Phase 4 | Pending |
| WIRE-11 | Phase 5 | Pending |
| WIRE-12 | Phase 5 | Pending |
| WIRE-13 | Phase 5 | Pending |
| WEB-01 | Phase 6 | Pending |
| STORE-01 | Phase 7 | Pending |
| STORE-02 | Phase 7 | Pending |
| STORE-03 | Phase 7 | Pending |
| STORE-04 | Phase 7 | Pending |
| LAUNCH-01 | Phase 8 | Pending |
| LAUNCH-02 | Phase 8 | Pending |
| LAUNCH-03 | Phase 8 | Pending |
| LAUNCH-04 | Phase 8 | Pending |

**Coverage:**
- v1 requirements: 24 total
- Mapped to phases: 24
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-16*
*Last updated: 2026-03-16 — Phase 2 complete: FORM-01/02/03 done, 32-test suite all passing, formula reference doc written*
