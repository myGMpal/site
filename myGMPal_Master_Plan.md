# myGM Pal — Complete Project Master Plan
### WWE 2K26 myGM Companion App
**Document version:** 2.0 — 15 March 2026  
**Developer:** Adam Morris — Perth, Western Australia  
**Studio:** No Sell Studios  
**Status:** Infrastructure complete. Logos finalised. Homepage live. App design expanded to full suggestion engine system. Build phase starting Week 1.

> **v2.0 changelog:** Merged Gemini voice session — expanded app from static reference tool to dynamic suggestion engine. Added Draft Suite, Suggestion Engine philosophy, Chemistry Matrix, Stamina Decay, Weighted Score Formula, Perk milestone logic, Scouting page, Power Cards screen. Added developer persona context.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [The Opportunity](#2-the-opportunity)
3. [Infrastructure — Completed](#3-infrastructure--completed)
4. [Total Cost Breakdown](#4-total-cost-breakdown)
5. [App Features — v1.0 MVP](#5-app-features--v10-mvp)
6. [App Features — Future Versions](#6-app-features--future-versions)
7. [Build Tool — Thunkable](#7-build-tool--thunkable)
8. [myGM Mode — Game Mechanics Reference](#8-mygm-mode--game-mechanics-reference)
9. [Roster Database](#9-roster-database)
10. [Match Rating Formula](#10-match-rating-formula)
11. [Legal & IP Rules](#11-legal--ip-rules)
12. [Monetisation Strategy](#12-monetisation-strategy)
13. [Week-by-Week Build Roadmap](#13-week-by-week-build-roadmap)
14. [Publishing — Google Play](#14-publishing--google-play)
15. [Publishing — Apple App Store](#15-publishing--apple-app-store)
16. [Publishing — Additional Stores](#16-publishing--additional-stores)
17. [Community & Marketing Strategy](#17-community--marketing-strategy)
18. [Remaining Deliverables from Claude](#18-remaining-deliverables-from-claude)
19. [Branding & Visual Identity](#19-branding--visual-identity)
20. [Website — nosellstudios.com & mygmpal.com](#20-website--nosellstudioscom--mygmpalcom)
21. [Backend Logic & Formulas](#21-backend-logic--formulas)
22. [The Suggestion Engine Philosophy](#22-the-suggestion-engine-philosophy)
23. [Developer Context & Persona](#23-developer-context--persona)

---

## 1. Project Overview

**App name:** myGM Pal  
**Developer name:** Adam  
**Location:** Perth, Western Australia, Australia  
**Platform:** Android + iOS (cross-platform, built simultaneously)  
**Purpose:** A fan-made companion app for WWE 2K26 myGM mode. Players use it alongside the game to plan rosters, calculate match ratings, manage rivalries, and optimise their weekly show cards for maximum fan score.  
**Competition:** None. No dedicated myGM companion app exists on either the Google Play Store or the Apple App Store as of March 2026.  
**Developer profile:** Complete beginner — no coding experience. App built using Thunkable, a no-code/low-code drag-and-drop visual builder.  
**App name clearance:** Confirmed clean — no conflicting apps or trademarks found on Google Play or the App Store under "myGM Pal."  
**GitHub account:** [github.com/myGMpal](https://github.com/myGMpal)

---

## 2. The Opportunity

WWE 2K26 launched on **13 March 2026** (PS5, Xbox Series X|S, Nintendo Switch 2, PC). The myGM mode received its biggest overhaul in franchise history, introducing:

- 50-week seasons
- Up to 4 rival GMs competing simultaneously
- 7 selectable brands (RAW, SmackDown, NXT, plus others)
- 16 Premium Live Events (PLEs) per season
- 400+ playable superstars — the largest roster in franchise history
- A 10-category match quality system with complex interdependencies
- AAA crossover superstars (first time in series history)
- New win conditions: most Fans OR most Hall of Fame Trophies

This complexity means players genuinely need planning tools. Community frustration with stamina management, drama curve optimisation, class synergy matching, and rivalry tracking is extensively documented across r/WWEGames, Operation Sports, and The SmackDown Hotel forums.

**wwe2ktools.com** has a Universe Tracker and Draft Simulator but **no myGM-specific tool.**  
**thesmackdownhotel.com** publishes the most comprehensive myGM written guides but has **no companion app.**  
The gap is real, confirmed, and currently unfilled.

---

## 3. Infrastructure — Completed

All foundational infrastructure has been purchased, set up, and is live.

### 3.1 Domain Name

| Detail | Value |
|--------|-------|
| **Domain** | `mygmpal.com` |
| **Registrar** | VentraIP Australia |
| **Registrar URL** | [ventraip.com.au](https://ventraip.com.au) |
| **Cost** | ~$15–18 AUD/year |
| **Status** | ✅ Active and live |
| **Note** | `.com` chosen deliberately — not `.com.au`. This is a worldwide app, not an Australian-only product. |

### 3.2 Email Address

| Detail | Value |
|--------|-------|
| **Email address** | `hello@mygmpal.com` |
| **Email provider** | Zoho Mail |
| **Plan** | Zoho Mail Lite |
| **Cost** | $1 USD/month, billed annually = $12 USD/year (~$18 AUD) |
| **Zoho URL** | [zoho.com/mail](https://www.zoho.com/mail/) |
| **Status** | ✅ Set up and verified |
| **Why `hello@`** | Warm, approachable, used by indie developers worldwide. Appears in the privacy policy, both store listings, and all community communications. Creates the impression of a real person who cares — critical for a community-driven app. |

**Setup process completed:**
1. Signed up for Zoho Mail Lite at zoho.com/mail
2. Added existing domain `mygmpal.com` to Zoho
3. Added TXT verification record in VentraIP DNS panel
4. Added MX records in VentraIP DNS panel
5. Created `hello@mygmpal.com` mailbox
6. Verified sending and receiving

**Zoho Mail DNS records in place (VentraIP):**

| Type | Value | Purpose |
|------|-------|---------|
| MX | `mx.zoho.com.au` | Primary mail routing |
| MX | `mx2.zoho.com.au` | Secondary mail routing |
| MX | `mx3.zoho.com.au` | Tertiary mail routing |
| TXT | Zoho SPF record | Prevents email spoofing |
| TXT | Zoho DKIM record | Authenticates outgoing email |

SPF and DKIM records in place means emails from `hello@mygmpal.com` will not land in recipients' spam folders.

### 3.3 Website & Privacy Policy Hosting

| Detail | Value |
|--------|-------|
| **Website host** | GitHub Pages (free, permanently free) |
| **GitHub account** | [github.com/myGMpal](https://github.com/myGMpal) |
| **GitHub repository** | [github.com/myGMpal/site](https://github.com/myGMpal/site) — `main` branch, root folder |
| **Custom domain** | `mygmpal.com` configured in GitHub Pages settings |
| **Status** | ✅ Live. DNS propagated. HTTPS enforced. |
| **HTTPS note** | Once DNS fully propagated, go to GitHub Pages settings → tick "Enforce HTTPS". This activates automatically — no further action needed. |

**DNS records added in VentraIP for GitHub Pages:**

| Type | Value |
|------|-------|
| A record | `185.199.108.153` |
| A record | `185.199.109.153` |
| A record | `185.199.110.153` |
| A record | `185.199.111.153` |
| CNAME (`www`) | `185.199.108.153` |

### 3.4 Privacy Policy

| Detail | Value |
|--------|-------|
| **File** | `privacy-policy.html` |
| **Live URL** | `https://mygmpal.com/privacy-policy.html` |
| **Status** | ✅ Live |
| **Coverage** | Australian Privacy Act 1988, GDPR (European users), COPPA (US under-13s), AdMob pre-disclosure |
| **Contact in policy** | `hello@mygmpal.com` |

The privacy policy is required before submitting to either store. The AdMob pre-disclosure is included now so the policy does not need to be updated and re-reviewed when advertising is added later.

### 3.5 Roster Database

| Detail | Value |
|--------|-------|
| **Format** | Google Sheets |
| **Google Sheet URL** | [https://docs.google.com/spreadsheets/d/1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0](https://docs.google.com/spreadsheets/d/1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0) |
| **Sheet ID** | `1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0` |
| **Owner account** | `hello@mygmpal.com` |
| **Superstars loaded** | 101 (WWE main roster, NXT, Legends, AAA, Celebrity) |
| **Status** | ✅ Uploaded and live in Google Sheets |
| **Next step** | Set sharing to "Anyone with the link — Viewer" so the app can read it via API |

**Columns in the ROSTER sheet:**
`Name | OVR | Gender | Category | Brand | Class | Role | Ring_Level | Popularity | Promo_Skill | Draft_Cost | Is_Legend | Stamina | Morale | Data_Source`

**OVR ratings are confirmed official** (source: WWE/2K ratings reveal, February 2026). Class, Role, Popularity, Promo_Skill, and Stamina are estimated based on in-game knowledge and current WWE storyline alignment. The `Data_Source` column on every row makes this distinction clear.

### 3.6 Studio Identity

| Detail | Value |
|--------|-------|
| **Studio name** | No Sell Studios |
| **ABN** | 51 094 614 156 |
| **ABN status** | ✅ Active from 13 March 2026 |
| **Registered to** | Adam Morris |
| **D-U-N-S request** | ⏳ Pending — D&B Case Number 10127032, submitted 12 March 2026 |
| **ASIC business name** | NO SELL STUDIOS |
| **ASIC application date** | 13 March 2026 |
| **ASIC status** | ⏳ Pending payment — invoice due within 24hrs, must pay within 10 days |
| **ASIC action required** | Pay invoice when received or application lapses and name becomes available to others |
| **Studio domain** | `nosellstudios.com` |
| **Registrar** | VentraIP Australia |
| **Domain status** | ✅ Purchased and active |
| **Second product** | Apex Elements — separate No Sell Studios project, not referenced in this plan |
| **Name origin** | Wrestling insider term — a heel ignoring (not selling) an opponent's moves. Fits both wrestling and gaming contexts. No conflicts found on Steam, Google Play, App Store, ASIC/ABN register, or social media. |

**⚠️ ASIC payment reminder:** ASIC will email an invoice within 24 hours of 13 March 2026. You have 10 days to pay from that date. If unpaid, the application lapses and "No Sell Studios" may become available for someone else to register. Check your email (including spam) within 24 hours and pay immediately.

`nosellstudios.com` will serve as the studio's home page — listing both products, press contact information, and links to each app's store listing. No website is required before launch; the domain is registered and held ready.

---

## 4. Total Cost Breakdown

| Item | Cost (USD) | Cost (AUD approx.) | Frequency | Status |
|------|-----------|-------------------|-----------|--------|
| `mygmpal.com` domain — VentraIP | — | ~$15–18 AUD | Per year | ✅ Paid |
| `nosellstudios.com` domain — VentraIP | — | ~$15–18 AUD | Per year | ✅ Paid |
| Zoho Mail Lite — `hello@mygmpal.com` | $12 USD | ~$18 AUD | Per year | ✅ Paid |
| Apple Developer Program | $99 USD | ~$155 AUD | Per year | ⏳ Enrol at [developer.apple.com/programs](https://developer.apple.com/programs) |
| Google Play Developer account | $25 USD | ~$39 AUD | One-time only | ⏳ Pending — original Google account suspended, resolve before registering |
| Thunkable Start plan | $59–$118 USD | ~$92–$185 AUD | 1–2 months to publish | ⏳ Pending |
| **Total estimated** | **~$205–$265 USD** | **~$320–$415 AUD** | | |

**Key cost notes:**
- Thunkable is **free to build and test during Weeks 1–4** — the free plan is sufficient for learning and development. Only subscribe ($59/month) when you are ready to export and publish. Pay for 1 month only. Cancel immediately after exporting both the AAB (Android) and IPA (iOS) files.
- The $25 Google Play fee is a one-time lifetime payment — it never renews.
- The $99 Apple Developer fee renews annually. If you do not renew, your iOS app is removed from the App Store.
- GitHub Pages hosting is permanently free. No cost ever.
- Zoho Mail Lite is the cheapest professional email tier at $1 USD/month. It supports 1 user (you) and 5GB storage — more than enough.

---

## 5. App Features — v1.0 MVP (Stage 1: Core Launch)

These are the features to build for the first release. Scope discipline is critical — the goal is a polished, complete Stage 1 that ships, not an incomplete Stage 2 that doesn't.

> **Design philosophy (from Gemini session):** The app is not just a calculator. It is a "Second Brain" — a repository of the user's specific playstyle and season history that grows smarter over time. Every suggestion should feel data-driven and personalised to the user's current roster state.

---

### 1. The Draft Suite

**Draft Board**
- Displays the full available pool of superstars before the season draft
- Filterable by Class, Role, Gender, OVR, Cost
- Shows which superstars have already been drafted

**Draft Logic Assistant** *(the key differentiator)*
- Real-time suggestion engine that calculates who to pick next based on the current roster's needs
- Uses the Weighted Score Formula (see Section 21) to rank available superstars
- Example: if you pick a Bruiser, it surfaces Fighters next to maximise Class Matchup bonus
- Displays a "Roster Needs" panel showing current balance gaps (see Dynamic Roster Balance, Section 21)

**Champion Selection**
- Post-draft screen to assign initial titles to drafted superstars
- Suggests title holders based on OVR, Popularity, and Role (Heel champion vs Face chaser = classic dynamic)

**Initial Booking Suggestions**
- Suggests first rivalries to start based on drafted roster composition
- Identifies who should be the "chaser" for each title
- Provides a template for the First Week Show

---

### 2. The Home Screen Hub

**Power Cards Page** *(conditionally visible)*
- Only appears if "Power Cards Mode" is set to TRUE in Settings
- User inputs available Power Cards
- App recommends which card to play or buy based on budget and roster health
- Conditional visibility: use a `powerCardsEnabled` variable in Thunkable — show/hide screen based on its value

**Roster Page**
- Tracks all active superstars on the user's brand
- Crucially tracks **Ring XP** and **Morale** and **Stamina** — user updates these after each show
- Alerts when a superstar hits XP milestones: Levels 5, 10, 15, 20, 25
- At each milestone, suggests which **Perks** to select to maximise that superstar's utility
- Visual health indicators: Stamina bar, Morale indicator, XP progress bar

**Scouting Page**
- Dedicated search tool — knows who is signed to other brands
- Suggests the best search criteria to find specific roster gaps
- Example: "You're missing a female Specialist — use Legendary Search targeting Specialists"
- Surfaces undervalued free agents the user may have overlooked

---

### 3. Post-Show Feedback Loop

**Match Rating Input**
- After each show, user inputs the actual star ratings received in-game
- App records what worked (high chemistry, class matchups) and what didn't

**Stat Update Screen**
- User inputs post-show updates:
  - **Stamina** — updated per superstar based on match type (see Stamina Decay, Section 21)
  - **Morale** — updated based on win/loss and promo outcomes
  - **Popularity** — updated based on match rating yield (see XP/Popularity Gain Table, Section 21)
  - **Ring XP** — updated based on match participation and rating

**Chemistry Tracking**
- App maintains a Chemistry Matrix (see Section 21)
- Logs great chemistry pairings (4★+ matches) and boosts their recommendation score for future bookings

---

### 4. Match Rating Calculator (standalone tool)

- Select 2–6 superstars from roster
- Select match type (Normal, Ladder, TLC, Hell in a Cell, etc.)
- Input: Title on the line? (yes/no)
- Input: Active rivalry? (yes/no) — input current rivalry level (1–4)
- App calculates estimated star rating (0–5★)
- Shows full breakdown of contributing factors

---

### 5. Rivalry Planner

- Add, view, edit, and delete active rivalries
- Each rivalry: Superstar A, Superstar B, Rivalry Level (1–4), Weeks Active, Notes
- Visual indicator of rivalry heat level
- Warning when rivalry goes stale (risk of capping at 2★)
- Suggests escalation timing for PLEs

---

### 6. Settings / About

- Power Cards Mode toggle (TRUE/FALSE — controls visibility of Power Cards screen)
- User preference: "Workrate Roster" vs "Entertainment Roster" (affects suggestion weighting)
- App version number
- Link to privacy policy (`https://mygmpal.com/privacy-policy.html`)
- Legal disclaimer (see Section 11)
- Link to Ko-fi support
- Contact: `hello@mygmpal.com`
- "Clear all data" button

---

## 6. App Features — Future Versions

Do not build these for v1.0. Add in later updates based on user feedback.

**v1.5:**
- Weekly show card planner (drag-and-drop match card builder)
- Drama curve visualiser (shows match rating arc across a show card)
- Fan score tracker (running total with weekly history)
- Export show card as an image to share on social media

**v2.0:**
- Season history log
- Optimal booking suggestions (which superstars to pair based on class synergy)
- DLC roster packs as in-app purchases
- Dark mode
- iPad / tablet-optimised layout

---

## 7. Build Tool — Thunkable

**Chosen platform:** Thunkable ([thunkable.com](https://thunkable.com))  
**Why Thunkable over Kodular/MIT App Inventor:**
- Builds for both **Android AND iOS simultaneously** from one project — critical for reaching both stores
- Modern, polished UI components that look professional out of the box
- Built-in Google Sheets data connector (no manual API setup required)
- Active documentation and large community
- Free to build and test via the Thunkable app on your phone
- Only costs money at export/publish time ($59/month — pay 1 month only)

**Why not Kodular or MIT App Inventor:**
- Both are Android-only. Building iOS would require an entirely separate project in a different tool.
- Since we're targeting both stores, Thunkable is the clear choice despite the one-month cost.

**Thunkable Start plan ($59/month):**
- Publish to both Google Play and App Store
- Remove Thunkable branding
- Unlimited projects
- **Use the free plan during Weeks 1–4 for learning and building.** Subscribe only when ready to export final files. Pay for 1 month only, then cancel.

### Developer Account Status

| Account | Cost | URL | Status |
|---------|------|-----|--------|
| Apple Developer Program | $99 USD/year | [developer.apple.com/programs](https://developer.apple.com/programs) | ⏳ Enrol now — takes 24–48 hrs to activate |
| Google Play Console | $25 USD one-time | [play.google.com/console](https://play.google.com/console) | ⏳ Enrol now — identity verification takes up to 48 hrs |

**Both should be started immediately** — they have waiting periods that run in the background while you are learning in Week 1. Getting them done on Day 1 means no delays when you reach the publishing stage.

**Learning resources for Thunkable:**
- Official docs: [docs.thunkable.com](https://docs.thunkable.com)
- Thunkable YouTube channel: tutorials for beginners
- Week 1 of the roadmap covers learning before you start building

### iOS Mac Requirement

To publish to the Apple App Store, a Mac running Xcode is required to generate the iOS Distribution Certificate. You only need access to a Mac for approximately **1 hour total**.

**Options if you don't own a Mac:**
1. **Friend's Mac** — preferred, free, only ~1 hour needed
2. **Codemagic free tier** — cloud Mac service, handles the certificate generation and build process online. Free tier available at [codemagic.io](https://codemagic.io)
3. **MacStadium hourly rental** — rent a cloud Mac by the hour at [macstadium.com](https://macstadium.com), costs approximately $1–3 USD for 1 hour
4. **GitHub Actions macOS runners** — free for public repositories, can run Xcode in the cloud

---

## 8. myGM Mode — Game Mechanics Reference

This section documents the WWE 2K26 myGM mechanics that the app's calculator and planner are built around.

### Season Structure
- **Length:** 50 weeks
- **Rivals:** Up to 4 GMs competing simultaneously
- **Brands available:** 7 total (RAW, SmackDown, NXT, and others)
- **Premium Live Events:** 16 per season (these are the equivalent of PPVs — biggest revenue events)
- **Win condition:** Most Fans at season end OR most Hall of Fame Trophies across seasons

### Match Quality — The 10 Categories

Every match in myGM is rated across 10 categories, each contributing to the final star rating:

| # | Category | Max Stars | Key Notes |
|---|----------|-----------|-----------|
| 1 | **Rivalry Level** | 5★ | Level 4 rivalry at a PLE = automatic 5★. Stale rivalry = 2★ cap. |
| 2 | **Popularity** | 5★ | Average of all participating superstars' popularity scores |
| 3 | **Class Synergy** | 5★ | Contrasting classes score highest. Cruiserweight vs Giant = 5★ |
| 4 | **Role Matchup** | 5★ | Face vs Heel = 5★. Same role matchups score lower. |
| 5 | **Match Type** | 5★ | Normal = 0★. Hell in a Cell = 5★. Higher stakes = higher ceiling. |
| 6 | **Title Match** | 5★ | Title on the line = 5★ bonus. Non-title = 0. |
| 7 | **Performance** | 5★ | RNG — uncontrollable. Cannot be planned. |
| 8 | **Tag Chemistry** | Variable | Triggered via inbox events. Some tag teams have chemistry bonuses. |
| 9 | **Match Specialty** | Variable | Superstar's preferred match type. Bonus when matched correctly. |
| 10 | **Hometown** | Rare bonus | Triggered by email notification when event is in a superstar's hometown. |

### The Drama Curve
The order of matches on a show card matters as much as the matches themselves. The optimal structure:

1. **Opener** — Second-best match on the card (hooks the audience)
2. **Early matches** — Weakest matches (builds anticipation)
3. **Mid-card** — Escalating quality
4. **Main event** — Highest-rated match on the card (peaks last)

This is the single most important myGM concept the app needs to help users visualise.

### Superstar Data Model
The full data structure used in the Google Sheet and the app:

```
Name          — Display name
OVR           — Overall rating (50–100)
Gender        — Male / Female
Category      — WWE Superstar / NXT / Legend / AAA / Celebrity
Brand         — RAW / SmackDown / NXT / Free Agent
Class         — Giant / Cruiserweight / Bruiser / Fighter / Specialist
Role          — Face / Heel
Ring_Level    — Immortal (95+) / Legend (90–94) / Icon (85–89) / Renown (80–84) / Established (75–79) / Rookie (<75)
Popularity    — 1–100 (estimated fan popularity)
Promo_Skill   — 1–5 (promo ability — affects rivalry heat build rate)
Draft_Cost    — Estimated draft point cost (OVR × 1.8, +10 for Legends)
Is_Legend     — TRUE / FALSE
Stamina       — 1–100 (affects scheduling — high-OVR superstars can main event weekly)
Morale        — 1–100 (starts at 100, drops with overuse or poor booking)
```

### Top OVR Ratings (Confirmed Official)

| Rating | Superstars |
|--------|-----------|
| 100 | Super Cena |
| 97 | Stone Cold Steve Austin, John Cena, Roman Reigns RR '22 / WM 40 |
| 96 | John Cena '12, The Rock '01, The Undertaker, Rhea Ripley |
| 95 | Cody Rhodes, Roman Reigns, Brock Lesnar '13, CM Punk '13 EC, The Rock, The Rock '24 |
| 94 | Becky Lynch, Bianca Belair, Brock Lesnar, CM Punk, Seth Rollins |
| 93 | Charlotte Flair, Drew McIntyre, Gunther, IYO SKY |
| 92 | AJ Lee '15, Liv Morgan, Naomi, Randy Orton, Stephanie Vaquer |
| 91 | Asuka, Alundra Blayze '94, Jey Uso, Tiffany Stratton |
| 90 | Bron Breakker, Bull Nakano, Logan Paul |

### DLC — Ringside Pass
6 seasons of DLC content, each priced at $9.99 (or $49.99 for the full bundle):

| Season | Content |
|--------|---------|
| S1 | AAA crossover superstars |
| S2 | Demolition |
| S3 | Legends & Debuts |
| S4 | Celebrity appearances & Hardy Boyz |
| S5 | Very Nice Very Evil |
| S6 | Natural Disasters |

The roster database should be updated as each DLC season releases.

---

## 9. Roster Database

**File:** `myGMPal_Roster_Database_v1.xlsx` (built by Claude)  
**Google Sheet:** [https://docs.google.com/spreadsheets/d/1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0](https://docs.google.com/spreadsheets/d/1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0)

**Contents:** 101 superstars across 5 categories:
- WWE Main Roster (RAW + SmackDown) — colour coded white/grey
- NXT — colour coded purple
- Legends — colour coded gold
- AAA — colour coded teal
- Celebrity (Jelly Roll) — colour coded pink

**To connect to Thunkable:**
1. In Google Sheets: File → Share → Anyone with the link → Viewer
2. Use this URL format in Thunkable's Web API component:
   ```
   https://sheets.googleapis.com/v4/spreadsheets/1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0/values/ROSTER?key=[YOUR_API_KEY]
   ```
3. The API key is generated free in Google Cloud Console

**Updating the sheet:**
- Add DLC superstars as new rows as each Ringside Pass season releases
- Update Brand assignments to match in-game draft results
- Update Role (Face/Heel) to match current WWE storyline alignment
- The app reads the sheet live — changes appear in the app immediately after saving

---

## 10. Match Rating Formula

The app's Match Rating Calculator uses this formula to generate estimated star ratings (0–5★):

### Inputs (user-selected)
- Superstar A (+ their OVR, Class, Role, Popularity from the sheet)
- Superstar B (+ their stats)
- Optional: Superstar C, D (for multi-person or tag matches)
- Match type selected
- Is a title on the line? (yes/no)
- Are these superstars in an active rivalry? (yes/no)
- If yes — what is the rivalry level? (1–4)

### Calculation (simplified for v1.0)

```
Base Score = Average OVR of participants ÷ 100 × 5

Modifiers (each adds to or caps the score):

+ Class Synergy bonus:
  - Opposite classes (e.g. Cruiserweight vs Giant) → +1.0★
  - Same class → +0.0★

+ Role Matchup bonus:
  - Face vs Heel → +0.75★
  - Same role → +0.0★

+ Match Type modifier:
  - Normal:          +0.0★
  - Ladder:          +0.5★
  - TLC:             +0.75★
  - Extreme Rules:   +0.75★
  - Hell in a Cell:  +1.0★

+ Title Match bonus:
  - Title on the line → +0.5★
  - No title → +0.0★

+ Rivalry bonus:
  - Level 1 rivalry → +0.25★
  - Level 2 rivalry → +0.5★
  - Level 3 rivalry → +0.75★
  - Level 4 rivalry → +1.0★

Final Rating = Base Score + All Modifiers
Clamped to maximum of 5.0★, minimum of 0.5★
```

This formula is an approximation of the game's hidden algorithm. It will be refined based on user feedback after launch.

---

## 11. Legal & IP Rules

These rules are non-negotiable and must be followed at every stage.

### App Name & Store Listings
- ✅ "myGM Pal" — APPROVED (no WWE/2K trademark, generic terminology)
- ❌ Never use "WWE" in the app name, subtitle, or store listing title
- ❌ Never use "2K" in the app name, subtitle, or store listing title
- ❌ Never use "myGM" as a standalone brand identifier (this is 2K's terminology)
- ❌ Never use "RAW", "SmackDown", or "NXT" in the app name
- ❌ Never use superstar names in the app name

### Visual Assets
- ❌ No WWE logos anywhere in the app or store listing
- ❌ No championship belt imagery
- ❌ No superstar portraits or official photography
- ❌ No 2K or Visual Concepts branding
- ✅ Custom-designed app icon and UI only

### App Content
- ✅ User-entered data only — players type in their own information
- ✅ Superstar names may appear in the roster database as nominative fair use
- ❌ Do not hardcode official game ratings as permanent read-only data (present them as editable estimates)
- ❌ Do not reproduce copyrighted game text, menus, or in-game imagery

### Required Disclaimer
The following disclaimer must appear on the Settings screen inside the app AND in both store listings:

> *"myGM Pal is an independent fan-made tool and is not affiliated with, endorsed by, authorised by, or in any way connected to World Wrestling Entertainment, Inc. (WWE), Take-Two Interactive Software, Inc., 2K Games, or Visual Concepts. All WWE trademarks, service marks, trade names, and logos are the property of their respective owners. This app is provided solely as a planning utility for personal use by fans of WWE 2K video games."*

### Privacy Policy
- ✅ Live at: `https://mygmpal.com/privacy-policy.html`
- Covers: Australian Privacy Act, GDPR, COPPA, AdMob pre-disclosure
- Contact: `hello@mygmpal.com`
- Must be linked in both store listings before submission

---

## 12. Monetisation Strategy

### Model: Freemium with Ads + One-Time Pro IAP

**Free tier (supported by ads):**
- Full roster tracker
- Basic filters (Brand, Class, Role)
- Match rating calculator
- AdMob banner ad (persistent strip)
- Rewarded video ad (optional — watch to unlock a feature)

**Pro tier — one-time $2.99 IAP:**
- Removes all ads permanently
- Unlocks Rivalry Planner
- Unlocks Drama Curve Visualiser (v1.5)
- Unlocks Fan Score Tracker (v1.5)
- Early access to future premium features

**Why this model:**
- Maximises downloads — free core removes the barrier for a niche audience
- Monetises engaged users without alienating casual ones
- $2.99 is the sweet spot for "worth it" vs "too expensive" in gaming utilities
- Google takes 15% commission on IAP under $1M/year annual revenue

### AdMob Revenue Estimates (US/UK-heavy gaming audience)

| Ad Format | Est. eCPM | Best Placement |
|-----------|-----------|----------------|
| Banner | $0.50–$1.50 | Bottom of roster screen (always visible) |
| Interstitial | $5–$8 | After saving a show card or rivalry |
| Rewarded Video | $15–$30 | "Watch to unlock this week's drama curve tip" |

**Minimum AdMob payout threshold:** $100 USD  
**Realistic timeline to first payout:**
- 500 downloads → $5–$45/month → 3–20 months to first payout
- 2,500 downloads → $70–$255/month → 1–6 weeks to first payout

### Community Support — Ko-fi

- Set up a Ko-fi page at [ko-fi.com](https://ko-fi.com) (free, 0% platform fee on tips)
- Link in Settings screen and app store description
- Suggested Ko-fi name: "myGM Pal" or the developer's preferred handle
- Expected: $0–$50/month from voluntary community support
- Community-building value exceeds the revenue value

### Realistic Income Expectations

| Downloads | Monthly Revenue (estimate) |
|-----------|---------------------------|
| 500 | $5–$45 |
| 1,000 | $20–$100 |
| 2,500 | $70–$255 |
| 5,000 | $140–$500 |

Revenue is highly seasonal. Peaks around:
- WWE 2K launch window (March each year)
- WrestleMania season (March–April)
- SummerSlam (July–August)
- Survivor Series (November)

Time feature updates and community posts to align with these periods for maximum impact.

---

## 13. Week-by-Week Build Roadmap

**Total estimated time:** 10 weeks  
**Effort per week:** 8–12 hours (evenings + weekends)  
**Target launch:** Mid-to-late May 2026

### Week 1 — Learn & Plan
**Goal:** Understand Thunkable, wireframe the app, set up accounts.

Tasks:
- Complete Thunkable's official beginner tutorials (free, no account needed to view)
- Build 2 practice apps in Thunkable: a simple calculator, and a list that reads from a Google Sheet
- Draw every app screen on paper — sketch layout, buttons, navigation arrows
- Digitise wireframes in Figma (free tier at [figma.com](https://figma.com)) or draw.io ([diagrams.net](https://diagrams.net))
- Enrol in Apple Developer Program at [developer.apple.com/programs](https://developer.apple.com/programs) — $99 USD, takes up to 2 days to verify
- Register Google Play Developer account at [play.google.com/console](https://play.google.com/console) — $25 USD, activates same day

**Do not build the real app yet. Practice only.**

### Week 2 — Google Sheets Connection
**Goal:** Get the roster data flowing from Google Sheet into a Thunkable test project.

Tasks:
- Enable Google Sheets API in Google Cloud Console (free)
- Generate an API key in Google Cloud Console
- Test reading the roster sheet via Thunkable's Web API component
- Confirm you can display superstar names and OVR ratings in a list on screen
- If connection fails: try the Google Apps Script method (write a doGet() function, deploy as web app, call that URL instead)
- Once data displays correctly: you're ready to build

### Week 3 — Build Screen 1: Roster Tracker
**Goal:** A working, filterable roster list connected to live Google Sheets data.

This is the most technically complex screen. If you can build this, the rest will be easier.

Tasks:
- Create the Roster screen in Thunkable
- Display superstars as cards (Name, OVR, Brand, Class, Role)
- Add search bar — filters list in real time
- Add Brand filter dropdown
- Add Class filter dropdown
- Add Role filter dropdown
- Add Sort by OVR (highest to lowest)
- Tap a card → opens detail view with all superstar stats
- Test on your Android phone using Thunkable Companion app

**Subscribe to Thunkable Start ($59/month) at the start of this week.** You need it to export the final app files. Cancel after Week 5 once you've exported.

### Week 4 — Build Screens 2 & 3: Calculator + Rivalry Planner
**Goal:** Working match rating calculator and local rivalry storage.

Screen 2 — Match Rating Calculator:
- Two superstar pickers (pull from the roster sheet)
- Match type selector
- Title match toggle (yes/no)
- Rivalry toggle + level selector (1–4)
- "Calculate" button runs the formula
- Displays result as 0.0–5.0★ with a visual star display
- Shows which factors contributed to the score

Screen 3 — Rivalry Planner:
- "Add Rivalry" button opens a form
- Form fields: Superstar A, Superstar B, Level (1–4), Weeks Active, Notes
- Rivalries stored locally on device using Thunkable's Local Storage
- List view of all active rivalries
- Tap a rivalry to edit or delete

### Week 5 — Polish, Settings, Icon & Export
**Goal:** App looks and feels complete. Ready to export.

Tasks:
- Build Settings/About screen (privacy policy link, disclaimer, Ko-fi link, contact email)
- Build Home Dashboard screen
- Set up consistent colours, fonts, and spacing across all screens
- Design app icon — 1024×1024px PNG (create in Canva, free at [canva.com](https://canva.com))
- Fix all bugs found during Week 3–4 testing
- Have a friend test the app on their phone
- Export AAB file (Android App Bundle) from Thunkable — for Google Play
- Export IPA file (iOS App Archive) from Thunkable — for App Store (requires Mac/Codemagic)
- **Cancel Thunkable subscription immediately after exporting both files**

### Week 6 — Store Setup & Upload
**Goal:** Apps uploaded to both stores. Testing tracks live.

Google Play tasks:
- Log into Google Play Console ([play.google.com/console](https://play.google.com/console))
- Create new app listing
- Upload AAB file to "Internal testing" track first — test yourself
- Create store listing: short description, full description, screenshots
- Complete IARC content rating questionnaire (free, ~10 minutes)
- Add privacy policy URL: `https://mygmpal.com/privacy-policy.html`
- Complete Data Safety section (declare what data the app collects — in v1.0: none)
- Move to "Closed testing" track — this starts the mandatory 14-day period

Apple App Store tasks:
- Log into App Store Connect ([appstoreconnect.apple.com](https://appstoreconnect.apple.com))
- Create new app entry
- Upload IPA file
- Complete App Privacy details
- Fill in app metadata, screenshots, description
- Submit for review

**Screenshots needed for both stores:**
- Minimum 2 phone screenshots (portrait orientation)
- Create using your real device or Thunkable's preview mode
- Canva has free App Store screenshot templates

**Feature graphic for Google Play:** 1024×500px banner image (create in Canva)

### Weeks 7–8 — Closed Testing (Mandatory)
**Goal:** Satisfy Google Play's 12-tester / 14-day requirement. Fix bugs.

Google Play requires a minimum of **12 opted-in testers** to participate in closed testing for **14 consecutive days** before Google grants production access. This is non-negotiable and cannot be skipped.

**Where to recruit testers:**
- r/WWEGames (post: "Looking for beta testers for a free myGM companion app")
- r/TestersCommunity (mutual testing community — testers help each other)
- r/Betatests
- Official WWE 2K Discord — discord.gg/wwe2k (74,900 members)
- r/AndroidApps ("Beta testers needed — free WWE 2K26 myGM app")

**Aim for 20–30 testers** to account for people who opt in but don't participate. Google only counts testers who actually open the app.

**During testing:**
- Collect feedback via a simple Google Form
- Fix any crash reports or bugs
- Respond to testers quickly — they are potential launch-day reviewers

Apple App Store review typically completes within **1–7 days** of submission — no mandatory testing period required.

### Week 9 — Production Submission & Additional Stores
**Goal:** Request production access on Google Play. Submit to additional stores.

Tasks:
- After 14 days of closed testing with 12+ active testers: request production access in Play Console
- Production access review typically takes **2–5 business days** for new accounts
- While waiting: upload the APK file to Samsung Galaxy Store (free registration at [seller.samsungapps.com](https://seller.samsungapps.com))
- Upload to Amazon Appstore (free registration at [developer.amazon.com](https://developer.amazon.com))
- Prepare all launch posts and community content in advance
- Set up Ko-fi page if not already done

### Week 10 — Launch Week
**Goal:** App goes live. Community launch campaign.

Day 1 tasks:
- Publish Google Play listing (click "Release to production")
- Confirm App Store app is live (Apple approval should have come through in Week 8–9)
- Post to r/WWEGames: frame it as a story — "I kept losing at myGM because I couldn't track stamina and drama curves, so I spent the last 10 weeks building a free planning tool. Here it is."
- Post to r/AndroidApps and r/iOSGaming
- Post in Official WWE 2K Discord
- Reply to every single comment on launch day

Week 10 ongoing:
- Monitor crash reports in Play Console and App Store Connect
- Fix any launch-week bugs with a hotfix update
- Respond to every user review (positive and negative) for the first 30 days
- Begin reaching out to mid-tier YouTube creators (Assemble, Phoenix Nitro) offering free early access

---

## 14. Publishing — Google Play

| Detail | Value |
|--------|-------|
| **Developer Console** | [play.google.com/console](https://play.google.com/console) |
| **Registration fee** | $25 USD — one-time, never renews |
| **Account requires** | Google account, government ID, credit/debit card, 2-step verification |
| **File format** | AAB (Android App Bundle) — not APK for new app submissions |
| **Closed testing requirement** | 12+ opted-in testers, 14 consecutive days — mandatory before production |
| **Review time** | A few hours to 7 days typically |
| **Revenue share** | Google takes 15% on first $1M annual IAP revenue |
| **AdMob integration** | Native — register at admob.google.com (free) |
| **Android version target** | API level 35 (Android 15) — required as of August 2025 |

**Most common rejection reasons:**
1. Missing or broken privacy policy URL
2. Trademark/IP infringement in name or icon
3. Crashes on first launch
4. Inaccurate Data Safety section
5. Unnecessary permissions declared in the app

---

## 15. Publishing — Apple App Store

| Detail | Value |
|--------|-------|
| **Developer Program** | [developer.apple.com/programs](https://developer.apple.com/programs) |
| **Annual fee** | $99 USD — renews every year |
| **App Store Connect** | [appstoreconnect.apple.com](https://appstoreconnect.apple.com) |
| **File format** | IPA (iOS App Archive) |
| **Mac requirement** | ~1 hour on a Mac running Xcode to generate Distribution Certificate |
| **No mandatory tester period** | Unlike Google Play, Apple has no minimum tester count |
| **Review time** | Usually 1–7 days |
| **Revenue share** | Apple takes 30% (15% for developers under $1M annual revenue) |

**iOS Distribution Certificate — what it is:**
A cryptographic certificate that proves you are an authorised Apple developer. Generated once using Xcode on a Mac. Stored in Thunkable and used every time you submit a build. Only needs to be regenerated when it expires (1 year).

**If no Mac access:** Use Codemagic ([codemagic.io](https://codemagic.io)) — free tier available, handles the build and signing process entirely in the cloud.

---

## 16. Publishing — Additional Stores

Both are free to register and use. Submit simultaneously with Google Play and App Store during Week 9.

### Samsung Galaxy Store

| Detail | Value |
|--------|-------|
| **Registration** | [seller.samsungapps.com](https://seller.samsungapps.com) — free, no annual fee |
| **Revenue share** | 80/20 for paid apps (you keep 80%), 85/15 for subscriptions |
| **File format** | APK or AAB |
| **Review time** | 3–7 days |
| **Why it matters** | Samsung has the largest Android market share globally. Significant additional reach with zero extra cost. |

### Amazon Appstore

| Detail | Value |
|--------|-------|
| **Registration** | [developer.amazon.com](https://developer.amazon.com) — free, no annual fee |
| **Revenue share** | 70/30 (80/20 for developers earning under $1M/year via Small Business Accelerator) |
| **File format** | APK |
| **Review time** | 1–3 days |
| **Why it matters** | Reaches Amazon Fire tablets (popular WWE gaming demographic) and some Android devices |

---

## 17. Community & Marketing Strategy

### Primary Platforms

| Platform | Audience Size | Role |
|----------|--------------|------|
| **r/WWEGames** | 200,000+ members | Primary launch platform |
| **Official WWE 2K Discord** | 74,900 members — discord.gg/wwe2k | Secondary launch platform |
| **r/AndroidApps** | Large general Android community | Reach non-WWE users |
| **r/iOSGaming** | Large iOS community | Reach iOS users |
| **TikTok / YouTube Shorts** | Millions | Long-term growth channel |

### Key YouTube Creators to Contact

| Creator | Subscribers | Why |
|---------|-------------|-----|
| **BDE** | 1.5M | Largest WWE gaming channel — high reach |
| **Smacktalks** | 441K | Known for deep-dive guides — perfect audience fit |
| **Assemble** | 135K | How-to focused — ideal for a companion app |
| **Phoenix Nitro** | 113K | myGM content — most relevant audience |

Approach: offer free early access (before public launch). No payment required — a genuine tool that helps their audience is valuable to them.

### Key Sites to Contact

| Site | Why |
|------|-----|
| **thesmackdownhotel.com** | Most-read myGM guide site. No companion app. Could link to yours as a resource. |
| **wwe2ktools.com** | Has Universe Tracker, no myGM tool. Could cross-promote. |
| **operationsports.com** | Active myGM strategy community. Receptive to useful tools. |

### Pre-Launch Community Strategy

**Start now — before the app is finished.**

1. Join r/WWEGames. Read the posts. Understand the pain points.
2. Post 9 genuinely helpful things (myGM tips, guides, strategies) for every 1 thing about your app.
3. Become a recognised, helpful member of the community first.
4. When the beta is ready (Week 7): post naturally — "I've been working on something to help with myGM planning. Looking for beta testers."

**The wrong way:** "I made an app, download it here." (Gets ignored or downvoted.)  
**The right way:** Be someone the community knows and trusts first, then show them what you built.

### Launch Post Template (r/WWEGames)

> **Title:** "I kept losing at myGM because I couldn't track stamina and drama curves — so I built a free planning app. Here it is."
>
> *[Screenshots of roster tracker, match calculator, rivalry planner]*
>
> "After 10 weeks of learning to code (from scratch!), myGM Pal is live on the Play Store and App Store. It's completely free. I built it because I needed it myself and couldn't find anything like it anywhere. Would love your feedback — link in comments."

### Post-Launch Ongoing Strategy

- Respond to every review and app store comment for the first 60 days
- Post feature update announcements with each new version
- Run a community challenge: "Post your highest-rated show card using the app — best one wins a shoutout"
- Time all major updates to WWE premium live events (WrestleMania, SummerSlam, Survivor Series) for maximum visibility
- Build a small Discord server for app users once you have 100+ downloads

---

## 18. Remaining Deliverables from Claude

The following items are still to be produced:

| # | Item | Status |
|---|------|--------|
| 1 | ~~Privacy policy~~ | ✅ Done — live at mygmpal.com/privacy-policy.html |
| 2 | ~~Roster database~~ | ✅ Done — Google Sheet with 101 superstars |
| 3 | ~~No Sell Studios logo~~ | ✅ Done — working PNG saved locally |
| 4 | ~~myGM Pal logo~~ | ✅ Done — red clipboard + star cluster, working PNG saved locally |
| 5 | ~~mygmpal.com homepage~~ | ✅ Done — live at mygmpal.com |
| 6 | **Match rating formula — full breakdown** | ⏳ Next |
| 7 | App screen wireframes — onboarding flow | ✅ Done — Screens 1–5 locked (see myGMPal_Wireframes.md) |
| 8 | App screen wireframes — main app screens 6–13 | ⏳ Pending — pick up next session at Screen 6 |
| 9 | App Store listing copy — descriptions for both Google Play and App Store | ⏳ Pending |
| 10 | Ko-fi page setup guide + suggested content | ⏳ Pending |

---

## Quick Reference — All URLs & Credentials

| Item | Detail |
|------|--------|
| **Developer name** | Adam |
| **Developer location** | Perth, Western Australia |
| Domain | `mygmpal.com` — purchased at ventraip.com.au |
| Email | `hello@mygmpal.com` — hosted on Zoho Mail Lite |
| Zoho login | zoho.com/mail |
| VentraIP login | vip.ventraip.com.au |
| Website / privacy policy | https://mygmpal.com/privacy-policy.html |
| Website / homepage | https://mygmpal.com |
| Wireframes document | myGMPal_Wireframes.md — screens 1–5 locked, 6–13 pending |
| GitHub account | github.com/myGMpal |
| GitHub repository | github.com/myGMpal/site — main branch |
| GitHub PAT | **Revoke after each use** — generate fresh token at github.com → Settings → Developer Settings → Personal Access Tokens when needed for deploys |
| Google Sheet (roster) | https://docs.google.com/spreadsheets/d/1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0 |
| Google Sheet ID | `1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0` |
| Google Play Console | play.google.com/console |
| Apple Developer Program | developer.apple.com/programs |
| App Store Connect | appstoreconnect.apple.com |
| Thunkable | thunkable.com |
| Canva (icon/screenshots) | canva.com |
| Figma (wireframes) | figma.com |
| Ko-fi (community support) | ko-fi.com |
| WWE 2K Discord | discord.gg/wwe2k |
| The SmackDown Hotel | thesmackdownhotel.com |

---

## 19. Branding & Visual Identity

### 19.1 Studio Brand — No Sell Studios

| Element | Detail | Status |
|---------|--------|--------|
| Studio name | No Sell Studios | ✅ Confirmed |
| Tagline | TBD | ⏳ Pending |
| Logo | TBD | ⏳ Pending |
| Colour palette | TBD | ⏳ Pending |
| Typography | TBD | ⏳ Pending |
| Brand tone | TBD | ⏳ Pending |

### 19.2 App Brand — myGM Pal

| Element | Detail | Status |
|---------|--------|--------|
| App name | myGM Pal | ✅ Confirmed |
| App icon | TBD | ⏳ Pending |
| Colour palette | TBD | ⏳ Pending |
| Typography | TBD | ⏳ Pending |
| Screenshot style | TBD | ⏳ Pending |
| Feature graphic (Play Store) | TBD | ⏳ Pending |

### 19.3 Design Tools

| Tool | Purpose | Cost |
|------|---------|------|
| Canva | App icon, screenshots, feature graphic, social posts | Free tier sufficient |
| Figma | Screen wireframes, UI mockups | Free tier sufficient |

### 19.4 Design Notes & Decisions

*(Record all branding decisions here as they are made — colours, fonts, icon concepts, style references.)*

---

## 20. Website — nosellstudios.com & mygmpal.com

### 20.1 mygmpal.com — App Website

| Page | Purpose | Status |
|------|---------|--------|
| `/privacy-policy.html` | Required for both app stores | ✅ Live |
| `/index.html` — Home page | App description, store download links, screenshots | ✅ Done — live at mygmpal.com |
| `/support.html` — Support page | FAQ, contact form or email link | ⏳ Pending |

**Required before app store submission:** Privacy policy only — already live.  
**Recommended before launch:** Home page with store badges and at least one screenshot.

### 20.2 nosellstudios.com — Studio Website

| Page | Purpose | Status |
|------|---------|--------|
| `/index.html` — Home page | Studio identity, list of products, contact | ⏳ Pending |
| `/mygmpal` | myGM Pal product page | ⏳ Pending |

**Priority:** Low — not required for app launch. Build after both apps are live.

### 20.3 Hosting

Both domains are hosted on **GitHub Pages** (free, permanently free). Content is managed via the GitHub repositories.

| Domain | GitHub Repo | Status |
|--------|-------------|--------|
| `mygmpal.com` | github.com/myGMpal/site | ✅ Live (privacy policy only) |
| `nosellstudios.com` | TBD — create repo when ready to build | ⏳ Pending |

### 20.4 Website Design Notes & Decisions

*(Record all website content and design decisions here as they are made.)*

---

## 21. Backend Logic & Formulas

*These are the "engine" rules the app uses to generate suggestions. Each formula should be implemented as a set of Thunkable variables and conditional logic blocks.*

---

### 21.1 The Weighted Score Formula (Draft Score)

Every superstar in the draft pool receives a calculated "Draft Score" used to rank suggestions. Weights are applied in three tiers:

| Tier | Attributes | Weight |
|------|-----------|--------|
| **Primary** | Popularity, Ring XP, Mic Skills | Highest |
| **Secondary** | Role (Face/Heel), Class, Draft Cost | Medium |
| **Tertiary** | Stamina, Morale | Lowest |

**Modifier — Roster Needs Score:**
The Draft Score is further adjusted by the current Roster Needs Score (see 21.2).

Example: A high-popularity Face has their Draft Score increased by +40% if the roster currently has 3 Heels and 1 Face.

---

### 21.2 Dynamic Roster Balance ("Needs Score")

The app tracks roster health across four categories and adjusts suggestion weights accordingly:

**Class Balance**
- Tracks ratio of Fighters vs Bruisers and Giants vs Cruiserweights
- Goal: enough class diversity to always achieve 100% Class Matchup bonus in future bookings
- Logic: if a class is underrepresented, superstars of that class get a suggestion boost

**Gender Balance**
- Tracks Male vs Female ratio
- Goal: enough female superstars to fill a full card without "thin roster" penalties

**Role Balance**
- Tracks Face vs Heel ratio
- Example logic: 3 Heels + 1 Face → Face recommendation score increases by +40%

**Cost Balance**
- Tracks total draft spend vs remaining budget
- Prevents the user from spending all budget on early picks and having nothing left

---

### 21.3 XP / Popularity Gain Table

Applied after user inputs post-show match ratings:

| Star Rating | XP Gain | Popularity Change | Morale Change |
|------------|---------|-------------------|---------------|
| ★★★★★ (5★) | Maximum | +5 to +8 | Significant boost |
| ★★★★ (4★) | High | +3 to +4 | Positive |
| ★★★ (3★) | Moderate | +1 to +2 | Neutral |
| ★★ (2★) | Low | 0 to -1 | Slight drop |
| ★ (1★) | Minimal | -1 to -3 | Morale drop |

---

### 21.4 Chemistry Matrix

The app maintains a record of superstar pairings and their outcomes:

- **Trigger:** If a match rating is **4★ or higher**, the two superstars are logged as "Great Chemistry"
- **Booking boost:** In future weeks, the app gives a **+20% recommendation boost** to booking these two together
- **PLE weighting:** Chemistry boost is doubled for PLE/PPV matches — these are the highest-stakes bookings
- **Storage:** Chemistry data is stored locally per user season. Resets on new season start (optional)

---

### 21.5 Stamina Decay

Each match type has a pre-set Stamina Cost applied after user confirms the show:

| Match Type | Stamina Cost |
|-----------|-------------|
| Standard | Low |
| Promo Only | None |
| Ladder / TLC | High |
| Hell in a Cell | Very High |
| Battle Royal | Medium |

**Warning trigger:** When a superstar's Stamina drops below **40**, the app flags them and suggests a "Rest Week" (Promo Only) to avoid injury risk.

---

### 21.6 Perk Suggestion Logic

When a superstar hits a Ring XP milestone (Levels 5, 10, 15, 20, 25), the app:

1. Detects the milestone based on user's XP input
2. Identifies the superstar's Class, Role, and current stats
3. Surfaces the 2–3 best Perk options for that superstar's role
4. Explains why each Perk is recommended ("Increases Class Synergy bonus by X")

*Specific Perk names and effects to be documented once WWE 2K26 releases.*

---

## 22. The Suggestion Engine Philosophy

*This section documents the core design intent behind the app — not just what it does, but why.*

The app is not a static reference tool. It is a growing intelligence layer on top of the user's season.

**Memory:** The app stores the history of every booking decision, match rating, stat change, and chemistry pairing. This data accumulates over a season to make suggestions increasingly personalised.

**Contextual Awareness:** The app remembers user preferences:
- **Workrate preference:** User prefers high Ring XP / technical wrestlers → app weights Mic Skills lower in suggestions
- **Entertainment preference:** User prefers promos and character work → app weights Mic Skills and Popularity higher

**Modular Architecture:** Where possible, avoid hardcoding myGM-specific logic. Generic, reusable logic is easier to maintain and extend within future versions of myGM Pal itself.

---

## 23. Developer Context & Persona

*Stored here so future Claude sessions have full context without re-briefing.*

**Developer:** Adam Morris  
**Location:** Perth (Wellard), Western Australia  
**Background:** Professional Planner with local government experience  
**Design preference:** Organised data, clear hierarchies, actionable reports — not vague suggestions  
**Family:** Perth-based, two children

**Studio:** No Sell Studios (ABN: 51 094 614 156)  
**Products:**
1. **myGM Pal** — WWE 2K26 companion app (this project — Stage 1 in build)
2. **Apex Elements** — Original game in development by No Sell Studios (separate project — no crossover with myGM Pal)

**Build approach:** Thunkable for rapid cross-platform deployment. Non-coder but conceptually strong — needs implementation detail, not dumbed-down explanations.

**AI workflow:** Uses Claude for architecture, planning, and implementation detail. Uses Gemini voice mode for real-time brainstorming and design sessions. Gemini session outputs should be merged into this master plan document to maintain a single source of truth for myGM Pal only.

---

*Document maintained by the myGM Pal project. Update version number and date at top when revised.*  
*v1.0 — Initial build*  
*v1.1 — 12 March 2026 — Added developer name, GitHub, Zoho DNS, AUD costs, Thunkable free plan period, HTTPS note, developer account timelines*  
*v1.5 — 13 March 2026 — Added roster database, match formula, branding decisions, website sections, ABN/DUNS reference numbers*  
*v2.1 — 15 March 2026 — Wireframe session complete. Screens 1–5 locked (Load, Setup, Draft Pool, Brand, GM, Draft Board, Champion Selection). Wireframes document created: myGMPal_Wireframes.md. Architecture decisions locked. Screens 6–13 pending next session.*
