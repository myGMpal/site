// FORM-03: Match Rating Formula Test Suite
// Run: node scripts/match-rating.test.js
// All tests MUST fail before match-rating.js is implemented (RED phase)

const { calculateMatchRating } = require('./match-rating');

let passed = 0;
let failed = 0;

function check(testName, actual, expected) {
  const rounded = Math.round(actual * 100) / 100;
  if (rounded === expected) {
    console.log('  PASS: ' + testName);
    passed++;
  } else {
    console.log('  FAIL: ' + testName);
    console.log('        Expected ' + expected + ', got ' + rounded);
    failed++;
  }
}

function checkBreakdown(testName, result, expectedBreakdown) {
  let ok = true;
  for (const [key, val] of Object.entries(expectedBreakdown)) {
    const actual = Math.round((result.breakdown[key] || 0) * 100) / 100;
    if (actual !== val) {
      console.log('  FAIL: ' + testName + ' [breakdown.' + key + ']');
      console.log('        Expected ' + val + ', got ' + actual);
      ok = false;
      failed++;
    }
  }
  if (ok) {
    console.log('  PASS: ' + testName);
    passed++;
  }
}

// ── Helpers for clean test superstar objects ──────────────────────────────────

function ss(ovr, cls, role) {
  return { ovr, class: cls, role };
}

// =============================================================================
// GROUP 1: Base Score
// =============================================================================
console.log('\n─── Base Score ───');

{
  // OVR 80, no modifiers → base = 80/100 × 5 = 4.0
  const r = calculateMatchRating({
    superstars: [ss(80, 'Fighter', 'Face'), ss(80, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('OVR 80 base = 4.0', r.rating, 4.0);
}

{
  // OVR 60, no modifiers → base = 3.0
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('OVR 60 base = 3.0', r.rating, 3.0);
}

{
  // Multi-person: OVR 60, 80, 100 → avg 80 → base 4.0
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(80, 'Fighter', 'Face'), ss(100, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('3-person: avg OVR 80 → base 4.0', r.rating, 4.0);
}

{
  // 4 superstars: OVR 70 each → avg 70 → base 3.5
  const r = calculateMatchRating({
    superstars: [ss(70, 'Bruiser', 'Face'), ss(70, 'Bruiser', 'Face'), ss(70, 'Bruiser', 'Face'), ss(70, 'Bruiser', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('4-person: OVR 70 each → base 3.5', r.rating, 3.5);
}

// =============================================================================
// GROUP 2: Class Synergy
// =============================================================================
console.log('\n─── Class Synergy ───');

{
  // Different classes (Cruiserweight vs Giant) → +1.0
  // OVR 70 base 3.5 + 1.0 = 4.5
  const r = calculateMatchRating({
    superstars: [ss(70, 'Cruiserweight', 'Face'), ss(70, 'Giant', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Different classes (Cruiserweight vs Giant) → +1.0', r.rating, 4.5);
}

{
  // Different classes (Fighter vs Specialist)  → +1.0
  const r = calculateMatchRating({
    superstars: [ss(70, 'Fighter', 'Face'), ss(70, 'Specialist', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Different classes (Fighter vs Specialist) → +1.0', r.rating, 4.5);
}

{
  // Same class (both Bruiser) → +0.0
  const r = calculateMatchRating({
    superstars: [ss(70, 'Bruiser', 'Face'), ss(70, 'Bruiser', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Same class (both Bruiser) → +0.0', r.rating, 3.5);
}

{
  // 3-person: mixed classes → +1.0 (at least one class difference)
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face'), ss(60, 'Giant', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('3-person mixed classes → +1.0', r.rating, 4.0);
}

// =============================================================================
// GROUP 3: Role Matchup
// =============================================================================
console.log('\n─── Role Matchup ───');

{
  // Face vs Heel → +0.75
  // OVR 80 base 4.0 + 0.75 = 4.75
  const r = calculateMatchRating({
    superstars: [ss(80, 'Fighter', 'Face'), ss(80, 'Fighter', 'Heel')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Face vs Heel → +0.75', r.rating, 4.75);
}

{
  // Both Face → +0.0
  const r = calculateMatchRating({
    superstars: [ss(80, 'Fighter', 'Face'), ss(80, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Both Face → +0.0', r.rating, 4.0);
}

{
  // Both Heel → +0.0
  const r = calculateMatchRating({
    superstars: [ss(80, 'Fighter', 'Heel'), ss(80, 'Fighter', 'Heel')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Both Heel → +0.0', r.rating, 4.0);
}

// =============================================================================
// GROUP 4: Match Types
// =============================================================================
console.log('\n─── Match Types ───');

// Base: OVR 60 → 3.0. Same class/role so no other modifiers.
{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Normal → +0.0 (3.0)', r.rating, 3.0);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Ladder',
    titleMatch: false,
    rivalry: null,
  });
  check('Ladder → +0.5 (3.5)', r.rating, 3.5);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'TLC',
    titleMatch: false,
    rivalry: null,
  });
  check('TLC → +0.75 (3.75)', r.rating, 3.75);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Extreme Rules',
    titleMatch: false,
    rivalry: null,
  });
  check('Extreme Rules → +0.75 (3.75)', r.rating, 3.75);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Hell in a Cell',
    titleMatch: false,
    rivalry: null,
  });
  check('Hell in a Cell → +1.0 (4.0)', r.rating, 4.0);
}

// =============================================================================
// GROUP 5: Title Match Bonus
// =============================================================================
console.log('\n─── Title Match Bonus ───');

{
  // Title on the line → +0.5
  // OVR 60 base 3.0 + 0.5 = 3.5
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: true,
    rivalry: null,
  });
  check('Title on the line → +0.5 (3.5)', r.rating, 3.5);
}

{
  // No title → +0.0
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('No title → +0.0 (3.0)', r.rating, 3.0);
}

// =============================================================================
// GROUP 6: Rivalry Bonus
// =============================================================================
console.log('\n─── Rivalry Bonus ───');

// Base: OVR 60 → 3.0
{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('No rivalry → +0.0 (3.0)', r.rating, 3.0);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: { level: 1 },
  });
  check('Rivalry level 1 → +0.25 (3.25)', r.rating, 3.25);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: { level: 2 },
  });
  check('Rivalry level 2 → +0.5 (3.5)', r.rating, 3.5);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: { level: 3 },
  });
  check('Rivalry level 3 → +0.75 (3.75)', r.rating, 3.75);
}

{
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: { level: 4 },
  });
  check('Rivalry level 4 → +1.0 (4.0)', r.rating, 4.0);
}

// =============================================================================
// GROUP 7: Rating Floor & Ceiling (Clamping)
// =============================================================================
console.log('\n─── Clamping ───');

{
  // Artificially low OVR to test floor: 5/100×5 = 0.25 → clamped to 0.5
  const r = calculateMatchRating({
    superstars: [ss(5, 'Fighter', 'Face'), ss(5, 'Fighter', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Floor clamp: OVR 5 → 0.5★ minimum', r.rating, 0.5);
}

{
  // Max stack: OVR 100 + all modifiers → 5.0 + 1.0 + 0.75 + 1.0 + 0.5 + 1.0 = 9.25 → clamped to 5.0
  const r = calculateMatchRating({
    superstars: [ss(100, 'Cruiserweight', 'Face'), ss(100, 'Giant', 'Heel')],
    matchType: 'Hell in a Cell',
    titleMatch: true,
    rivalry: { level: 4 },
  });
  check('Ceiling clamp: all max modifiers → 5.0★ maximum', r.rating, 5.0);
}

{
  // Exact ceiling: OVR 80 base 4.0 + class 1.0 = 5.0 (no clamp needed, exact)
  const r = calculateMatchRating({
    superstars: [ss(80, 'Cruiserweight', 'Face'), ss(80, 'Giant', 'Face')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  check('Exact ceiling: OVR 80 + class synergy = 5.0★', r.rating, 5.0);
}

// =============================================================================
// GROUP 8: Breakdown Object
// =============================================================================
console.log('\n─── Breakdown Object ───');

{
  // OVR 80 Cruiserweight Face vs Giant Heel, Ladder, title, Level 2 rivalry
  // base = 4.0, class = 1.0, role = 0.75, matchType = 0.5, title = 0.5, rivalry = 0.5
  // total = 7.25 → clamped to 5.0
  const r = calculateMatchRating({
    superstars: [ss(80, 'Cruiserweight', 'Face'), ss(80, 'Giant', 'Heel')],
    matchType: 'Ladder',
    titleMatch: true,
    rivalry: { level: 2 },
  });
  checkBreakdown('Breakdown has all modifier fields', r, {
    base: 4.0,
    classSynergy: 1.0,
    roleMatchup: 0.75,
    matchType: 0.5,
    titleBonus: 0.5,
    rivalryBonus: 0.5,
  });
  check('Full breakdown: clamped to 5.0', r.rating, 5.0);
}

{
  // Verify breakdown when no modifiers applied
  // OVR 70 same class same role Normal no title no rivalry
  const r = calculateMatchRating({
    superstars: [ss(70, 'Fighter', 'Heel'), ss(70, 'Fighter', 'Heel')],
    matchType: 'Normal',
    titleMatch: false,
    rivalry: null,
  });
  checkBreakdown('Breakdown zeros when no modifiers', r, {
    base: 3.5,
    classSynergy: 0,
    roleMatchup: 0,
    matchType: 0,
    titleBonus: 0,
    rivalryBonus: 0,
  });
}

// =============================================================================
// GROUP 9: Combined Modifiers (non-clamping)
// =============================================================================
console.log('\n─── Combined (non-clamping) ───');

{
  // OVR 50 → base 2.5, Face vs Heel (+0.75), title (+0.5), Level 1 rivalry (+0.25)
  // = 2.5 + 0.75 + 0.5 + 0.25 = 4.0
  const r = calculateMatchRating({
    superstars: [ss(50, 'Fighter', 'Face'), ss(50, 'Fighter', 'Heel')],
    matchType: 'Normal',
    titleMatch: true,
    rivalry: { level: 1 },
  });
  check('OVR 50 + role + title + lvl1 rivalry = 4.0', r.rating, 4.0);
}

{
  // OVR 60 → base 3.0, diff class (+1.0), Extreme Rules (+0.75)
  // = 3.0 + 1.0 + 0.75 = 4.75
  const r = calculateMatchRating({
    superstars: [ss(60, 'Fighter', 'Face'), ss(60, 'Specialist', 'Face')],
    matchType: 'Extreme Rules',
    titleMatch: false,
    rivalry: null,
  });
  check('OVR 60 + class + Extreme Rules = 4.75', r.rating, 4.75);
}

{
  // OVR 70 → base 3.5, same class (+0), Face/Heel (+0.75), TLC (+0.75), title (+0.5), lvl3 (+0.75)
  // = 3.5 + 0 + 0.75 + 0.75 + 0.5 + 0.75 = 6.25 → clamped to 5.0
  const r = calculateMatchRating({
    superstars: [ss(70, 'Bruiser', 'Face'), ss(70, 'Bruiser', 'Heel')],
    matchType: 'TLC',
    titleMatch: true,
    rivalry: { level: 3 },
  });
  check('OVR 70 + role + TLC + title + lvl3 = 5.0 (clamped)', r.rating, 5.0);
}

// =============================================================================
// SUMMARY
// =============================================================================
console.log('\n══════════════════════════════════════════');
console.log('MATCH RATING FORMULA — TEST RESULTS');
console.log('  PASS: ' + passed);
console.log('  FAIL: ' + failed);
console.log('  TOTAL: ' + (passed + failed));
console.log('  RESULT: ' + (failed === 0 ? 'ALL PASS ✓' : failed + ' FAILURES ✗'));
console.log('══════════════════════════════════════════');

if (failed > 0) process.exit(1);
