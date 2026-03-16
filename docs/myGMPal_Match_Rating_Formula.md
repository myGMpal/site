# myGM Pal — Match Rating Formula Reference

**Version:** v1.0
**Status:** Locked for v1.0 launch. Refinement planned post-launch from user feedback.
**Implemented in:** `scripts/match-rating.js`
**Test suite:** `scripts/match-rating.test.js` (32 tests, all passing)

---

## Overview

The Match Rating Calculator estimates the star rating a match will receive in WWE 2K26 myGM mode. The result is a number between **0.5★ and 5.0★**.

This is an approximation of the game's hidden algorithm. It will be tuned post-launch based on community feedback comparing predicted vs actual in-game results.

---

## Inputs

| Input | Type | Source |
|-------|------|--------|
| Superstars | Array of 2–6 | User selects from their roster |
| — OVR | Integer 50–100 | Pulled from roster data |
| — Class | Enum | Pulled from roster data |
| — Role | Enum | Pulled from roster data |
| Match Type | Enum | User selects |
| Title on the line | Boolean | User toggles |
| Rivalry | Null or `{ level: 1–4 }` | User toggles + selects level |

---

## Formula

```
Base Score       = (Average OVR of all participants ÷ 100) × 5

Class Synergy    = any participant has a different class from another? +1.0 : +0.0
Role Matchup     = at least one Face AND one Heel present? +0.75 : +0.0
Match Type       = see table below
Title Bonus      = title on the line? +0.5 : +0.0
Rivalry Bonus    = see table below

Raw Score        = Base Score + Class Synergy + Role Matchup + Match Type + Title Bonus + Rivalry Bonus
Final Rating     = clamp(Raw Score, min=0.5, max=5.0)
```

---

## Modifier Tables

### Match Type

| Match Type | Modifier |
|------------|---------|
| Normal | +0.0★ |
| Ladder | +0.5★ |
| TLC | +0.75★ |
| Extreme Rules | +0.75★ |
| Hell in a Cell | +1.0★ |

### Rivalry Bonus

| Rivalry Level | Modifier |
|--------------|---------|
| None | +0.0★ |
| Level 1 | +0.25★ |
| Level 2 | +0.5★ |
| Level 3 | +0.75★ |
| Level 4 | +1.0★ |

---

## Clamping

- **Minimum:** 0.5★ — No match can rate below half a star.
- **Maximum:** 5.0★ — No match can rate above five stars, regardless of how many modifiers stack.

In practice with valid roster data (OVR ≥ 50), the floor of 0.5★ is never reached. The ceiling is commonly hit when combining OVR 80+ with class synergy, role matchup, and a specialty match type.

---

## Class Synergy Rule

The synergy bonus applies when **any two participants have different classes**. This is simplified from the game's full matrix for v1.0.

Valid classes: `Fighter`, `Cruiserweight`, `Bruiser`, `Giant`, `Specialist`

Examples:
- Cruiserweight vs Giant → +1.0★ (different classes)
- Fighter vs Specialist → +1.0★ (different classes)
- Both Bruiser → +0.0★ (same class)
- 3-way with two Fighters and one Giant → +1.0★ (mixed, bonus applies)

---

## Role Matchup Rule

The matchup bonus applies when **at least one Face and at least one Heel** are in the match. Same-role matches get no bonus.

Valid roles: `Face`, `Heel`

---

## Example Calculations

### Example 1 — Simple match, no modifiers
**Setup:** Cody Rhodes (OVR 95, Fighter, Face) vs Seth Rollins (OVR 91, Fighter, Face), Normal, no title, no rivalry

```
Base      = (95 + 91) / 2 / 100 × 5 = 4.65
Synergy   = same class (Fighter) → 0.0
Role      = both Face → 0.0
Match     = Normal → 0.0
Title     = no → 0.0
Rivalry   = none → 0.0
─────────────────────
Raw       = 4.65
Rating    = 4.65★
```

### Example 2 — Title match with rivalry
**Setup:** Cody Rhodes (OVR 95, Fighter, Face) vs Roman Reigns (OVR 97, Bruiser, Heel), Normal, title on the line, Level 3 rivalry

```
Base      = (95 + 97) / 2 / 100 × 5 = 4.80
Synergy   = different class (Fighter vs Bruiser) → +1.0
Role      = Face vs Heel → +0.75
Match     = Normal → 0.0
Title     = yes → +0.5
Rivalry   = Level 3 → +0.75
─────────────────────
Raw       = 4.80 + 1.0 + 0.75 + 0.5 + 0.75 = 7.80
Rating    = 5.0★ (clamped)
```

### Example 3 — Minimum realistic rating
**Setup:** Two OVR 50 superstars, same class, same role, Normal, no title, no rivalry

```
Base      = 50 / 100 × 5 = 2.5
All mods  = 0.0
─────────────────────
Rating    = 2.5★
```

---

## Output Object

`calculateMatchRating()` returns:

```javascript
{
  rating: 4.75,          // final clamped star rating
  breakdown: {
    base: 4.0,           // average OVR component
    classSynergy: 1.0,   // class diversity bonus
    roleMatchup: 0.75,   // face/heel matchup bonus
    matchType: 0.5,      // match type modifier
    titleBonus: 0.5,     // title on the line bonus
    rivalryBonus: 0.25,  // rivalry level bonus
  }
}
```

---

## Edge Cases

| Scenario | Behaviour |
|----------|-----------|
| All modifiers stacked on OVR 100 | Raw = 9.25★ → clamped to 5.0★ |
| OVR below 50 (invalid but handled) | Clamp ensures minimum 0.5★ |
| 6-person match, all same class/role | Only base score applies; modifiers still evaluate correctly |
| Rivalry `level` outside 1–4 | Returns +0.0 bonus (treated as no rivalry) |
| Unknown match type | Returns +0.0 bonus (treated as Normal) |

---

## Known Limitations (v1.0)

1. **Performance (RNG)** — The game's uncontrollable RNG component is not modelled. Actual ratings will vary ±0.5–1.0★ from predictions due to this.
2. **Tag chemistry** — Bonus triggered by inbox events is not modelled (requires in-game event tracking).
3. **Hometown bonus** — Event-specific bonus is not modelled.
4. **Match Specialty** — Per-superstar preferred match type bonus is not modelled (data not available at v1.0).
5. **Stale rivalry cap** — The game caps stale rivalries at 2★; this is surfaced as a warning in the Rivalry Planner but not applied in the calculator formula.

These limitations are documented for transparency with users. The formula will be refined in v1.1 based on post-launch community testing data.

---

*Formula locked: 2026-03-16*
*Source: `docs/myGMPal_Master_Plan.md` §10 Match Rating Formula*
