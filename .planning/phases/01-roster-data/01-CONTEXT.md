# Phase 1: Roster Data - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Convert the validated 101-superstar Google Sheets export into `data/roster.json` — a clean JSON file Thunkable can import directly. Add a `draft_score_base` field calculated from the confirmed formula. The source CSV is at `C:/Users/drada/Downloads/Mygmpal roster database v1 - ROSTER.csv` and has been validated (zero issues).

This phase produces one file: `data/roster.json`. Nothing else.

</domain>

<decisions>
## Implementation Decisions

### Data Source
- Source is the exported CSV file: already validated, 101 rows, zero issues
- Adam will paste/upload CSV data when executing — data confirmed clean
- Do NOT rebuild from knowledge — use the sheet data exactly as-is

### Data Delivery
- Adam will provide the CSV (paste in chat or upload file) during Phase 1 execution
- Claude converts it to `data/roster.json`

### JSON Structure
- Flat array of objects — the standard format Thunkable's data connector expects
- No grouping by Category, no nesting
- Field names exactly match the Google Sheet column headers (case-sensitive)

### Field to Add: draft_score_base
- Must be added to every superstar object (not in source CSV)
- Formula: `round((Popularity * 0.35) + (OVR * 0.25) + (Promo_Skill * 4 * 0.20), 1)`
- Rounded to 1 decimal place
- The +40% role balance bonus is NOT pre-calculated — it's dynamic (applied in-app based on current draft state)
- Field name: `draft_score_base` (snake_case, consistent with other fields)

### Draft_Cost Formula (confirmed from data)
- Formula: `round(OVR * 1.8 + (Is_Legend ? 10 : 0))` — rounded to nearest integer
- NOTE: REQUIREMENTS.md says "rounded to nearest 100" — this is incorrect. The actual formula rounds to nearest integer. REQUIREMENTS.md should be corrected.

### Data_Source field
- Keep it in the JSON — it documents which values are confirmed vs estimated
- Useful for Thunkable and for future data updates

### Validation Script
- The validation script already exists at `scripts/validate-roster.js`
- Phase 1 should confirm it runs clean on the final JSON output too

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Source Data
- `C:/Users/drada/Downloads/Mygmpal roster database v1 - ROSTER.csv` — The validated source (101 rows, zero issues, use this exactly)

### Project Specs
- `docs/myGMPal_Wireframes.md` §Key Data Structures → Superstar Object — defines the field schema the wireframes expect
- `docs/myGMPal_Master_Plan.md` §9 Roster Database — column definitions and data notes
- `docs/myGMPal_Master_Plan.md` §4 Draft Board — Draft Score formula: `(Popularity × 0.35) + (OVR × 0.25) + (Mic × 4 × 0.2)` (+40% role balance bonus is dynamic, not pre-calculated)
- `.planning/REQUIREMENTS.md` — DATA-01, DATA-02, DATA-03 acceptance criteria

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/validate-roster.js` — validation script already exists, checks all field ranges, enum values, Ring_Level/OVR consistency, Is_Legend/Category consistency, Draft_Cost formula

### Established Patterns
- No existing JSON data files yet — `data/` directory needs to be created
- `scripts/` directory exists (created during validation)

### Integration Points
- `data/roster.json` will be imported into Thunkable via Google Sheets API connector or direct file import
- The wireframe screens (Screens 2b, 4, 5, 8, 9, 11) all reference the superstar data model

</code_context>

<specifics>
## Specific Ideas

- The source file is already validated and ready — execution is straightforward
- draft_score_base examples to verify:
  - Cody Rhodes (OVR 95, Pop 96, Promo 5): (96*0.35)+(95*0.25)+(5*4*0.20) = 33.6+23.75+4.0 = 61.4
  - Candice LaRae (OVR 71, Pop 68, Promo 4): (68*0.35)+(71*0.25)+(4*4*0.20) = 23.8+17.75+3.2 = 44.8
  - Super Cena (OVR 100, Pop 100, Promo 5): (100*0.35)+(100*0.25)+(5*4*0.20) = 35+25+4 = 64.0

</specifics>

<deferred>
## Deferred Ideas

- JSON structure grouped by Category — not needed, flat array is correct for Thunkable
- Generating DLC roster entries — deferred to after DLC releases (Ringside Pass seasons 1-6)
- API connection to Google Sheets live — deferred; static JSON is sufficient for v1

</deferred>

---

*Phase: 01-roster-data*
*Context gathered: 2026-03-16*
