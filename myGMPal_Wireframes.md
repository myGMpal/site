# myGM Pal — Wireframes & Screen Architecture
**Document version:** 1.0 — 15 March 2026
**Status:** Onboarding flow complete (Screens 1–5). Main app screens pending.

---

## Architecture Decisions (Locked)

| Decision | Choice | Reason |
|----------|--------|--------|
| Navigation | Hamburger menu — no persistent bottom tabs | Cleaner for data-heavy app |
| Bottom bar | Single persistent "Log This Week's Show" button | Most frequent weekly action |
| Season management | Multiple seasons supported | Selected at Load Screen |
| Draft | Turn-based, full control mode (user picks for all GMs) | Max player agency |
| Draft order | User selects: Snake / Linear / Reverse in Setup | Matches game options |
| CPU GM turns | User manually selects for all GMs | Full control mode |
| Opposing rosters | Visible via third draft tab | Transparency during draft |
| Superstar tap | Opens detail modal | Clean — no screen navigation |
| Theme | Dark — black/red | Matches brand identity |
| Buttons | White with red hover — hardcoded inline styles | CSS class overrides in iframe |

---

## Screen Inventory

### ONBOARDING FLOW (Screens 1–6)

| # | Screen | Status | File | Notes |
|---|--------|--------|------|-------|
| 1 | Load Screen | ✅ Locked | screen-01-load.html | Logo, season list, New Season button |
| 2 | Setup — Session Settings | ✅ Locked | screen-02-setup.html | Budget stepper, toggles, Draft Order selector |
| 2b | Setup — Draft Pool | ✅ Locked | screen-02b-draftpool.html | Set All dropdown, per-superstar status selector |
| 3 | Choose Your Brand | ✅ Locked | screen-03-brand.html | 7 brands with power card info |
| 3b | Choose Your GM | ✅ Locked | screen-03b-gm.html | 21 GMs with power card info |
| 4 | Draft Board | ✅ Locked | screen-04-draft.html | Turn-based, 3 tabs, filter, modal, order dots |
| 5 | Champion Selection | ✅ Locked | screen-05-champions.html | Auto-suggest, picker modal, vacant option |
| 6 | Initial Booking | ⏳ Pending | — | Week 1 show template, rivalry suggestions |

### MAIN APP (Screens 7–13)

| # | Screen | Status | File | Notes |
|---|--------|--------|------|-------|
| 7 | Home Hub | ⏳ Pending | — | Week tracker, alerts, quick stats |
| 8 | Roster Page | ⏳ Pending | — | XP milestones, stamina, morale, perk alerts |
| 9 | Match Calculator | ⏳ Pending | — | Predict star ratings, breakdown |
| 10 | Rivalry Planner | ⏳ Pending | — | Heat level, stale warnings, escalation |
| 11 | Scouting | ⏳ Pending | — | Gap analysis, free agents, search criteria |
| 12 | Post-Show Feedback | ⏳ Pending | — | Star rating input, stat updates, chemistry log |
| 13 | Settings | ⏳ Pending | — | Toggles, preferences, legal |

---

## Screen-by-Screen Notes

### Screen 1 — Load Screen
- Large logo (96px, red, glow shadow)
- "Your Seasons" list — each card shows brand, week, fan count
- Tap season card to load it
- White "New Season" button → Screen 2
- Supports multiple active seasons

### Screen 2 — Setup
**Fields:**
- Season Name (text input)
- Opening Budget: stepper — $3m / $4m / $5m / $6m / $7m only
- Number of GMs: 2 / 3 / 4
- Win Condition: Fans / Hall of Fame Trophies
- Hall of Fame Target: 5 / 10 / 15 Trophies
- Match Unlocks: Default / Classic
- Draft Order: Snake (1→4→4→1) / Linear (1→2→3→4) / Reverse (4→3→2→1) — button selector

**Toggles:**
- Shake Ups (default ON)
- Power Card Store (default OFF)
- Draft Pool → taps to Screen 2b
- Booking Timer (default OFF)

### Screen 2b — Draft Pool
- "Set all to" dropdown (Contract / Active / Inactive / Local) + Apply button
- Search bar
- Each superstar row: name, OVR, class, role + individual dropdown (Contract / Active / Inactive / Local)
- Reset Default button (white, red hover)
- Save Pool button (white, red hover)

### Screen 3 — Choose Your Brand
**7 Brands available:**

| Brand | Colour | Power Card | Uses |
|-------|--------|-----------|------|
| RAW | Red #d0021b | This is War | ×2 |
| SmackDown | Blue #1a3a8e | Birth of Legends | ×2 |
| NXT | Gold #c09000 | Fighting Champion | ×2 |
| NXT 2.0 | Purple #5020a0 | Fresh Meat | ×2 |
| WCW | Green #0a6020 | Classically Trained | ×2 |
| ECW | Dark Red #8b0000 | Extreme Rules | ×2 |
| NXT Mutiny | Dark #282828 | Ruthless Terms | ×2 |

- Each card shows: badge (brand colour), display name, show night, power card name + uses + full description
- Tap to select — red border + checkmark
- NXT 2.0 badge: "NXT" stacked above "2.0"
- NXT Mutiny badge: "NXT" stacked above "MUTINY"

### Screen 3b — Choose Your GM
**21 GMs available** (full list in master plan Section 23):
Adam Pearce, Nick Aldis, Shawn Michaels, Ava, Stephanie McMahon, Paul Heyman, William Regal, Mick Foley, Theodore Long, Eric Bischoff, Stacy Kiebler, Sensational Sherri, Miss Elizabeth, Mr. Fuji, Bobby Heenan, CM Punk, Xavier Woods, Tyler Breeze, Anonymous GM, Custom Superstar

- Selected brand shown as badge at top with "Change" link
- Each GM card: initials avatar, name, uses per season, power card name + full description
- Tap to select — red border + checkmark
- No GM name input, no persona selection (removed)

### Screen 4 — Draft Board
**Turn-based full control mode:**
- "Now Drafting" banner: current GM name, brand, GM power, pick number, budget for current GM
- Turn order dots: coloured circles showing brand colour + initials for next 10 picks, current pick larger with white border, opacity fades for further picks
- Roster needs bars: Role balance, Class mix, Gender — update per GM on their turn
- Suggestion bar: green for user turns, brand colour for opposing GM turns
- Draft Order: Snake by default (set in Setup)

**Three tabs:**
1. Available — sorted highest Draft Score first, rank number shown, greyed if unaffordable, filter + search working
2. My Roster — user's picks only
3. Opposing — grouped by brand, shows each opponent's picks as they accumulate

**Superstar modal:**
- OVR, Pop, Draft Score cards
- Mic Skills stars, Class, Role, Cost
- "Draft" button in current GM's brand colour
- "Draft for [Brand]" label when drafting for opposing GM
- Insufficient budget state shown

**Draft Score formula:**
- Base: (Popularity × 0.35) + (OVR × 0.25) + (Mic × 4 × 0.2)
- +40% if role fills current roster imbalance

### Screen 5 — Champion Selection
**Titles for RAW:**
- World Heavyweight Title (male, suggest highest OVR Heel)
- Women's Title (female, suggest highest OVR female)
- Tag Team Titles (pair, suggest top 2 males)
- Intercontinental Title (male, suggest highest Pop + Mic)

- Auto-suggested on load from drafted roster
- Each card shows: icon, title name, description, current holder with stats, suggestion reason
- "Change" button opens bottom sheet picker
- Picker shows eligible roster sorted by OVR, current holder highlighted
- Tag Team: slot 1 holder greyed out in slot 2 picker
- "Leave vacant" option on all titles

---

## Key Data Structures

### GM Object
```json
{
  "name": "You",
  "brand": "RAW",
  "gm": "Adam Pearce",
  "color": "#d0021b",
  "initials": "RAW",
  "isUser": true
}
```

### Superstar Object (Draft Pool)
```json
{
  "name": "string",
  "role": "Face | Heel",
  "cls": "Giant | Cruiserweight | Bruiser | Fighter | Specialist",
  "ovr": 50-100,
  "pop": 0-100,
  "mic": 1-5,
  "cost": 0-9999999,
  "gender": "M | F",
  "legend": true | false
}
```

### Draft State
```json
{
  "pickSequence": [0,1,2,3,3,2,1,0,...],
  "pickNumber": 0,
  "budgets": [7000000, 7000000, 7000000, 7000000],
  "rosters": [[],[],[],[]],
  "pickedSet": []
}
```

---

## Design System

### Colours
| Token | Value | Usage |
|-------|-------|-------|
| Red | #d0021b | Primary accent, selected states, alerts |
| Black deep | #0a0a0a | App background |
| Black mid | #111111 | Header/footer bars |
| Black surface | #1a1a1a | List rows |
| Black card | #1e1e1e | Cards, inputs, selects |
| White | #ffffff | Primary text, buttons |
| White dim | rgba(255,255,255,0.5) | Secondary text |
| White faint | rgba(255,255,255,0.08) | Borders |
| Green | #4dff88 | Face role, positive alerts, user turn |
| Red alert | #ff4d4d | Heel role, danger states |
| Amber | #ffcc44 | Warning states, mic stars |

### Buttons
- Primary: `background:#fff; color:#111; border:2px solid #fff` → hover red
- All button styles MUST be hardcoded inline — no CSS classes (iframe strips them)
- onmouseover/onmouseout for hover states

### Typography
- Display: Bebas Neue (not available in widgets — use system bold)
- Body: Barlow Condensed (not available in widgets — use system sans-serif)
- Widget sizes: 9px labels, 10px meta, 11px body, 12px secondary, 13px primary, 14px card title

---

## Remaining Screens To Build (Session 2)

**Next session pick up at Screen 6 — Initial Booking:**
- Suggested Week 1 rivalries based on drafted roster
- Predicted match ratings
- First show template (opening / mid-card / main event)
- Accept / Review / Change rivalry suggestions

**Then continue through Screens 7–13 in order.**

---

*Wireframes document — maintained alongside myGMPal_Master_Plan.md*
*v1.0 — 15 March 2026 — Screens 1–5 locked*
