---
phase: 01-roster-data
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - data/roster.json
  - scripts/convert-roster.js
  - .planning/REQUIREMENTS.md
autonomous: true
requirements:
  - DATA-01
  - DATA-02
  - DATA-03

must_haves:
  truths:
    - "data/roster.json exists and contains exactly 101 superstar objects in a flat array"
    - "Every superstar has all 15 original CSV fields with names matching the source column headers exactly"
    - "Every superstar has a draft_score_base field calculated to 1 decimal place using the confirmed formula"
    - "All field values pass range and enum validation with zero issues"
    - "The file is valid JSON that can be parsed without error"
  artifacts:
    - path: "data/roster.json"
      provides: "101-superstar flat JSON array, Thunkable-importable"
      contains: "draft_score_base"
    - path: "scripts/convert-roster.js"
      provides: "Repeatable CSV-to-JSON conversion script"
      exports: ["writes data/roster.json"]
    - path: ".planning/REQUIREMENTS.md"
      provides: "Corrected DATA-01, DATA-03 requirement text"
      contains: "rounded to nearest integer"
  key_links:
    - from: "C:/Users/drada/Downloads/Mygmpal roster database v1 - ROSTER.csv"
      to: "data/roster.json"
      via: "scripts/convert-roster.js"
      pattern: "require.*csv|readFileSync.*ROSTER"
    - from: "data/roster.json"
      to: "scripts/validate-roster.js"
      via: "node scripts/validate-roster.js"
      pattern: "RESULT: PASS"
---

<objective>
Convert the pre-validated 101-superstar CSV into `data/roster.json` — a flat JSON array that Thunkable can import directly. Add the `draft_score_base` computed field to every superstar. Validate the output.

Purpose: Thunkable cannot consume CSV; it reads JSON. This file is the roster data source for every screen in the app that references superstar stats.
Output: `data/roster.json` (101 objects, 16 fields each), `scripts/convert-roster.js` (repeatable conversion), corrected REQUIREMENTS.md.
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/execute-plan.md
@~/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-roster-data/01-CONTEXT.md
@CLAUDE.md

<interfaces>
<!-- CSV column order (exact, case-sensitive) — from scripts/validate-roster.js line 33 -->
Name, OVR, Gender, Category, Brand, Class, Role, Ring_Level, Popularity, Promo_Skill, Draft_Cost, Is_Legend, Stamina, Morale

<!-- Valid enum values — from scripts/validate-roster.js lines 6-11 -->
Class:      Fighter | Cruiserweight | Bruiser | Giant | Specialist
Role:       Face | Heel
Gender:     Male | Female
Category:   WWE Superstar | NXT | Legend | AAA | Celebrity
Brand:      RAW | SmackDown | NXT | Free Agent
Ring_Level: Immortal | Legend | Icon | Renown | Established | Rookie

<!-- Ring_Level derivation — from scripts/validate-roster.js line 12 -->
OVR >= 95 → Immortal
OVR >= 90 → Legend
OVR >= 85 → Icon
OVR >= 80 → Renown
OVR >= 75 → Established
OVR <  75 → Rookie

<!-- Draft_Cost formula — from scripts/validate-roster.js line 57 -->
Math.round(OVR * 1.8 + (Is_Legend === 'TRUE' ? 10 : 0))

<!-- draft_score_base formula — locked in 01-CONTEXT.md -->
Math.round(((Popularity * 0.35) + (OVR * 0.25) + (Promo_Skill * 4 * 0.20)) * 10) / 10

<!-- Verification examples — from 01-CONTEXT.md §Specific Ideas -->
Cody Rhodes   (OVR 95, Pop 96, Promo 5): draft_score_base = 61.4
Candice LaRae (OVR 71, Pop 68, Promo 4): draft_score_base = 44.8
Super Cena    (OVR 100, Pop 100, Promo 5): draft_score_base = 64.0
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Write convert-roster.js and produce data/roster.json</name>
  <files>scripts/convert-roster.js, data/roster.json</files>

  <read_first>
    - C:/Users/drada/Downloads/Mygmpal roster database v1 - ROSTER.csv — source data (read first 5 rows to confirm column order)
    - scripts/validate-roster.js — confirms field parsing logic and CSV column order
    - .planning/phases/01-roster-data/01-CONTEXT.md — locked decisions for field names, formula, and Data_Source handling
  </read_first>

  <action>
1. Create the `data/` directory if it does not exist.

2. Write `scripts/convert-roster.js` as a standalone Node.js script (no npm dependencies) that:
   a. Reads `C:/Users/drada/Downloads/Mygmpal roster database v1 - ROSTER.csv` using `fs.readFileSync`
   b. Parses CSV using the same `parseCSVLine` function already in `scripts/validate-roster.js` (copy it directly — do not rewrite it)
   c. For each row, destructures all 15 columns in this exact order:
      `Name, OVR, Gender, Category, Brand, Class, Role, Ring_Level, Popularity, Promo_Skill, Draft_Cost, Is_Legend, Stamina, Morale`
      If a 15th column `Data_Source` is present in the CSV, include it; if not, omit it.
   d. Builds a superstar object with these fields in this order:
      - `Name` (string, trimmed)
      - `OVR` (integer, parsed with `parseInt`)
      - `Gender` (string, trimmed)
      - `Category` (string, trimmed)
      - `Brand` (string, trimmed)
      - `Class` (string, trimmed)
      - `Role` (string, trimmed)
      - `Ring_Level` (string, trimmed)
      - `Popularity` (integer, parsed with `parseInt`)
      - `Promo_Skill` (integer, parsed with `parseInt`)
      - `Draft_Cost` (integer, parsed with `parseInt`)
      - `Is_Legend` (boolean: `Is_Legend === 'TRUE'`)
      - `Stamina` (integer, parsed with `parseInt`)
      - `Morale` (integer, parsed with `parseInt`)
      - `Data_Source` (string, trimmed — only if column exists in CSV)
      - `draft_score_base` (number, calculated as below)
   e. Calculates `draft_score_base` using the confirmed formula:
      `Math.round(((pop * 0.35) + (ovr * 0.25) + (promo * 4 * 0.20)) * 10) / 10`
      where `pop = parseInt(Popularity)`, `ovr = parseInt(OVR)`, `promo = parseInt(Promo_Skill)`
   f. Skips any blank/empty rows (check `Name.trim() === ''`)
   g. Writes the resulting array to `data/roster.json` using:
      `fs.writeFileSync('data/roster.json', JSON.stringify(superstars, null, 2))`
   h. Logs a summary: total count, and the draft_score_base for the three verification examples:
      - Find and log the entry where `Name === 'Cody Rhodes'` → expect 61.4
      - Find and log the entry where `Name === 'Candice LaRae'` → expect 44.8
      - Find and log the entry where `Name === 'Super Cena'` → expect 64.0

3. Run the script from the repo root: `node scripts/convert-roster.js`

4. Confirm the log shows 101 superstars and the three verification values match exactly.
  </action>

  <verify>
    <automated>node -e "const r=require('./data/roster.json'); console.log('count:', r.length); const c=r.find(x=>x.Name==='Cody Rhodes'); console.log('Cody draft_score_base:', c.draft_score_base); const cl=r.find(x=>x.Name==='Candice LaRae'); console.log('Candice draft_score_base:', cl.draft_score_base); const sc=r.find(x=>x.Name==='Super Cena'); console.log('Super Cena draft_score_base:', sc.draft_score_base);"</automated>
  </verify>

  <acceptance_criteria>
    - `data/roster.json` exists and `node -e "JSON.parse(require('fs').readFileSync('data/roster.json'))"` exits with code 0
    - `node -e "console.log(require('./data/roster.json').length)"` outputs `101`
    - `node -e "const r=require('./data/roster.json'); console.log(Object.keys(r[0]))"` includes `draft_score_base`
    - Cody Rhodes `draft_score_base` is `61.4` (not 61.35 or 61.40 — must be number 61.4)
    - Candice LaRae `draft_score_base` is `44.8`
    - Super Cena `draft_score_base` is `64`  (64.0 stored as number — acceptable as `64` or `64.0`)
    - `node -e "const r=require('./data/roster.json'); console.log(typeof r[0].Is_Legend)"` outputs `boolean`
    - `node -e "const r=require('./data/roster.json'); console.log(typeof r[0].OVR)"` outputs `number`
  </acceptance_criteria>

  <done>data/roster.json exists, parses as valid JSON, contains 101 objects, all numeric fields are numbers (not strings), Is_Legend is boolean, and draft_score_base matches the three reference values.</done>
</task>

<task type="auto">
  <name>Task 2: Validate roster.json and fix REQUIREMENTS.md</name>
  <files>scripts/validate-roster.js, .planning/REQUIREMENTS.md</files>

  <read_first>
    - scripts/validate-roster.js — understand what it validates and what it reads (CSV, not JSON — requires updating)
    - .planning/REQUIREMENTS.md — find the two incorrect statements to correct
    - data/roster.json — the file just produced, verify it exists before running
  </read_first>

  <action>
**Part A — Run validation against the JSON (not the CSV):**

The existing `scripts/validate-roster.js` reads the CSV directly. Rather than modifying it, write a one-shot validation command to confirm `data/roster.json` meets all DATA-02 acceptance criteria:

Run this Node.js command from the repo root (as a single `node -e` call):

```
node -e "
const r = require('./data/roster.json');
const issues = [];
const validClass = new Set(['Fighter','Cruiserweight','Bruiser','Giant','Specialist']);
const validRole = new Set(['Face','Heel']);
const validGender = new Set(['Male','Female']);
const validCategory = new Set(['WWE Superstar','NXT','Legend','AAA','Celebrity']);
const validBrand = new Set(['RAW','SmackDown','NXT','Free Agent']);
const validRingLevel = new Set(['Immortal','Legend','Icon','Renown','Established','Rookie']);
const ovr2ring = o => o>=95?'Immortal':o>=90?'Legend':o>=85?'Icon':o>=80?'Renown':o>=75?'Established':'Rookie';
r.forEach(s => {
  if (!s.Name) issues.push('missing Name');
  if (!validClass.has(s.Class)) issues.push(s.Name+': invalid Class='+s.Class);
  if (!validRole.has(s.Role)) issues.push(s.Name+': invalid Role='+s.Role);
  if (!validGender.has(s.Gender)) issues.push(s.Name+': invalid Gender='+s.Gender);
  if (!validCategory.has(s.Category)) issues.push(s.Name+': invalid Category='+s.Category);
  if (!validBrand.has(s.Brand)) issues.push(s.Name+': invalid Brand='+s.Brand);
  if (!validRingLevel.has(s.Ring_Level)) issues.push(s.Name+': invalid Ring_Level='+s.Ring_Level);
  if (s.OVR < 50 || s.OVR > 100) issues.push(s.Name+': OVR out of range='+s.OVR);
  if (s.Popularity < 1 || s.Popularity > 100) issues.push(s.Name+': Popularity out of range='+s.Popularity);
  if (s.Promo_Skill < 1 || s.Promo_Skill > 5) issues.push(s.Name+': Promo_Skill out of range='+s.Promo_Skill);
  if (s.Stamina < 1 || s.Stamina > 100) issues.push(s.Name+': Stamina out of range='+s.Stamina);
  if (s.Morale !== 100) issues.push(s.Name+': Morale not 100, got='+s.Morale);
  const expRing = ovr2ring(s.OVR);
  if (s.Ring_Level !== expRing) issues.push(s.Name+': Ring_Level='+s.Ring_Level+' expected='+expRing);
  const expCost = Math.round(s.OVR * 1.8 + (s.Is_Legend ? 10 : 0));
  if (s.Draft_Cost !== expCost) issues.push(s.Name+': Draft_Cost='+s.Draft_Cost+' expected='+expCost);
  if (typeof s.draft_score_base !== 'number') issues.push(s.Name+': draft_score_base is not a number');
  if (s.draft_score_base <= 0) issues.push(s.Name+': draft_score_base is zero or negative');
});
console.log('Total:', r.length);
if (issues.length === 0) { console.log('RESULT: PASS — No issues found'); }
else { console.log('RESULT: FAIL — '+issues.length+' issues:'); issues.forEach(i=>console.log('  '+i)); }
"
```

If the output is NOT `RESULT: PASS — No issues found`, diagnose and fix the issue in `data/roster.json` (by re-running `scripts/convert-roster.js` with corrections) before proceeding.

**Part B — Fix REQUIREMENTS.md (two corrections):**

Open `.planning/REQUIREMENTS.md` and make these two targeted changes:

1. **DATA-01** (line ~14): The field list currently ends with `Morale` and lists 14 fields. Add `draft_score_base` to the end of the field list so it reads:
   `...Draft_Cost, Is_Legend, Stamina, Morale, draft_score_base)`

2. **DATA-03** (line ~16): Replace the entire requirement text with:
   `Draft Score is pre-calculated for each superstar as \`draft_score_base\` using the confirmed formula: \`round((Popularity × 0.35) + (OVR × 0.25) + (Promo_Skill × 4 × 0.20), 1)\`. The +40% role balance bonus is dynamic and NOT pre-calculated — it is applied in-app based on current draft state.`

3. **Draft_Cost in DATA-01 and Phase 1 success criteria** (ROADMAP.md line ~22): Find the text `rounded to nearest 100` and replace with `rounded to nearest integer`. This appears in ROADMAP.md's Phase 1 success criteria — update it there too.
   - In `.planning/REQUIREMENTS.md`: there is no explicit "rounded to nearest 100" text in the requirement body itself, but confirm and fix if present.
   - In `.planning/ROADMAP.md`: line ~22 reads `Draft_Cost = OVR × 1.8 (+10 for legends), rounded to nearest 100` — change `nearest 100` to `nearest integer`.
  </action>

  <verify>
    <automated>node -e "const r=require('./data/roster.json'); let f=0; r.forEach(s=>{const e=Math.round(s.OVR*1.8+(s.Is_Legend?10:0)); if(s.Draft_Cost!==e)f++;}); console.log('Draft_Cost mismatches:', f); console.log('Total:', r.length);"</automated>
  </verify>

  <acceptance_criteria>
    - Validation command (from Part A) outputs `RESULT: PASS — No issues found`
    - Validation command outputs `Total: 101`
    - `grep -c "draft_score_base" .planning/REQUIREMENTS.md` returns `1` or more (field now referenced in DATA-01 or DATA-03)
    - `grep "nearest integer" .planning/ROADMAP.md` returns a match
    - `grep "nearest 100" .planning/ROADMAP.md` returns no matches
    - `grep "rounded to nearest 100" .planning/REQUIREMENTS.md` returns no matches
    - `grep "role balance bonus" .planning/REQUIREMENTS.md` contains the word "dynamic" or "NOT pre-calculated"
  </acceptance_criteria>

  <done>data/roster.json passes all range/enum/formula validation with zero issues. REQUIREMENTS.md and ROADMAP.md reflect the correct Draft_Cost rounding and the correct DATA-03 formula description. Phase 1 deliverable is complete.</done>
</task>

</tasks>

<verification>
Final state check — run these from repo root after both tasks complete:

```bash
# 1. File exists and is valid JSON
node -e "JSON.parse(require('fs').readFileSync('data/roster.json', 'utf8')); console.log('valid JSON')"

# 2. Count is 101
node -e "console.log(require('./data/roster.json').length)"

# 3. All field names present on first entry
node -e "console.log(Object.keys(require('./data/roster.json')[0]))"

# 4. draft_score_base spot checks
node -e "const r=require('./data/roster.json'); ['Cody Rhodes','Candice LaRae','Super Cena'].forEach(n=>{const s=r.find(x=>x.Name===n); console.log(n, s ? s.draft_score_base : 'NOT FOUND')})"
# Expected: Cody Rhodes 61.4 / Candice LaRae 44.8 / Super Cena 64

# 5. No "nearest 100" remaining in planning docs
grep -r "nearest 100" .planning/ && echo "FAIL: stale text found" || echo "PASS: no stale text"
```
</verification>

<success_criteria>
- `data/roster.json` exists, is valid JSON, contains exactly 101 objects
- All 15 original CSV fields present with original column names (case-sensitive)
- `draft_score_base` present on every object as a number (1 decimal place precision)
- Validation command outputs `RESULT: PASS — No issues found`
- `Is_Legend` stored as boolean (not string "TRUE"/"FALSE")
- All numeric fields (OVR, Popularity, Promo_Skill, Draft_Cost, Stamina, Morale) stored as numbers (not strings)
- REQUIREMENTS.md DATA-03 describes the actual formula with `Promo_Skill` (not `Mic`) and correctly states the role balance bonus is dynamic
- ROADMAP.md Phase 1 success criteria says "rounded to nearest integer" (not "nearest 100")
</success_criteria>

<output>
After completion, create `.planning/phases/01-roster-data/01-roster-data-01-SUMMARY.md` with:
- What was built (files created/modified)
- Validation result (paste the RESULT: PASS line)
- draft_score_base spot-check results for the three reference superstars
- Any deviations from this plan and why
</output>
