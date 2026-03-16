# myGM Pal

## What This Is

A fan-made mobile companion app for WWE 2K26's myGM mode — built in Thunkable for Android + iOS simultaneously. It's a "Second Brain" suggestion engine: tracks the user's roster, rivalries, stamina, and morale, then gives data-driven booking recommendations. No competing app exists on either store.

**Developer:** Adam Morris (No Sell Studios), Perth WA. Non-coder using Thunkable drag-and-drop.
**Claude's role:** Produce everything Claude can deliver — data files, wireframe HTML prototypes, logic validation, website content, app store copy, and launch materials. Cannot touch Thunkable directly.

## Core Value

The app tells you who to book against who and why — saving the user from spreadsheets and guesswork every week of their 50-week myGM season.

## Requirements

### Validated

- ✓ Privacy policy — live at mygmpal.com/privacy-policy.html
- ✓ Roster database — 101 superstars in Google Sheets
- ✓ myGM Pal logo — red clipboard + star cluster PNG
- ✓ mygmpal.com homepage — live
- ✓ Wireframes Screens 1–5 — Load, Setup, Draft Pool, Brand, GM, Draft Board, Champion Selection

### Active

- [ ] Roster JSON file (`data/roster.json`) — exportable format for Thunkable import
- [ ] Match rating formula — full breakdown, JS validation script, test cases
- [ ] Wireframe Screen 6 — Initial Booking
- [ ] Wireframes Screens 7–10 — Home Hub, Roster Page, Match Calculator, Rivalry Planner
- [ ] Wireframes Screens 11–13 — Scouting, Post-Show Feedback, Settings
- [ ] Website support page (`/support.html`)
- [ ] App store listing copy — Google Play + App Store descriptions, keywords
- [ ] Launch materials — Ko-fi guide, community post templates, creator outreach emails

### Out of Scope

- Thunkable project files — cannot be edited by Claude; built by Adam
- nosellstudios.com website — separate product, deferred
- App icon/screenshots — created in Canva by Adam (Claude can spec/brief only)
- Backend/API infrastructure — Thunkable reads Google Sheets directly, no server needed
- v1.5 / v2.0 features (drama curve visualiser, season history log, DLC packs) — post-launch

## Context

- **Build tool:** Thunkable — cross-platform no-code builder. Claude produces data + logic; Adam builds screens in Thunkable using wireframes as reference.
- **Data flow:** Google Sheets (source of truth) → roster.json (Thunkable import) → app
- **Wireframes:** Built as interactive dark-theme HTML prototypes using inline styles only (CSS classes get stripped in iframe contexts). Design system: black bg, red accent (#d0021b), white text.
- **Existing screens:** Screens 1–5 are locked HTML files. Screen 6 onwards pending.
- **Timeline:** Target launch mid-to-late May 2026. App in Thunkable build Weeks 1–5. Store submission Weeks 6–9.
- **Legal constraint:** Never use "WWE", "2K", or "myGM" as brand identifiers in any app store copy. Required disclaimer must appear in Settings and store listings.
- **Monetisation:** Free + AdMob. $2.99 Pro IAP removes ads and unlocks Rivalry Planner.

## Constraints

- **Tech stack:** HTML wireframes must use hardcoded inline styles — no CSS classes (iframe strips them). Hover states via onmouseover/onmouseout.
- **Thunkable:** Claude cannot edit Thunkable projects. All deliverables must be files Adam can reference or import.
- **IP/Legal:** Superstar names allowed as nominative fair use. No WWE/2K logos, no official imagery. Required disclaimer text is fixed — do not paraphrase.
- **Data:** Roster ratings are official (from WWE/2K reveal). Class/Role/Popularity are estimated — must remain editable in-app, not locked.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Thunkable over React Native | Adam is non-coder; Thunkable does Android + iOS simultaneously | — Pending |
| Dark theme (black/red) | Matches brand identity, suits data-heavy UI | ✓ Good |
| Google Sheets as data source | Built-in Thunkable connector, no API setup | — Pending |
| Match formula simplified for v1 | Full in-game algorithm is hidden; approximation is validated at launch then refined | — Pending |
| Free + $2.99 Pro IAP | Maximises downloads in niche market; low price removes friction | — Pending |
| No WWE/2K in app name | Trademark avoidance — confirmed clean on both stores | ✓ Good |

---
*Last updated: 2026-03-16 — initial GSD project setup*
