// Match Rating Formula — myGM Pal
// FORM-02: Standalone Node.js calculator (no external dependencies)
// Usage: const { calculateMatchRating } = require('./match-rating');

const MATCH_TYPE_BONUS = {
  'Normal':         0.00,
  'Ladder':         0.50,
  'TLC':            0.75,
  'Extreme Rules':  0.75,
  'Hell in a Cell': 1.00,
};

const RIVALRY_BONUS = {
  1: 0.25,
  2: 0.50,
  3: 0.75,
  4: 1.00,
};

/**
 * Calculate an estimated match star rating.
 *
 * @param {object} options
 * @param {Array<{ovr: number, class: string, role: string}>} options.superstars - 2–6 participants
 * @param {string}  options.matchType  - 'Normal' | 'Ladder' | 'TLC' | 'Extreme Rules' | 'Hell in a Cell'
 * @param {boolean} options.titleMatch - Is a title on the line?
 * @param {object|null} options.rivalry - null or { level: 1–4 }
 *
 * @returns {{ rating: number, breakdown: object }}
 */
function calculateMatchRating({ superstars, matchType, titleMatch, rivalry }) {
  // Base score: average OVR / 100 × 5
  const avgOvr = superstars.reduce((sum, s) => sum + s.ovr, 0) / superstars.length;
  const base = avgOvr / 100 * 5;

  // Class synergy: any participant with a different class → +1.0
  const classes = superstars.map(s => s.class);
  const classSynergy = new Set(classes).size > 1 ? 1.0 : 0.0;

  // Role matchup: at least one Face and one Heel → +0.75
  const roles = new Set(superstars.map(s => s.role));
  const roleMatchup = roles.has('Face') && roles.has('Heel') ? 0.75 : 0.0;

  // Match type modifier
  const matchTypeBonus = MATCH_TYPE_BONUS[matchType] ?? 0.0;

  // Title bonus
  const titleBonus = titleMatch ? 0.5 : 0.0;

  // Rivalry bonus
  const rivalryBonus = rivalry ? (RIVALRY_BONUS[rivalry.level] ?? 0.0) : 0.0;

  // Sum and clamp
  const raw = base + classSynergy + roleMatchup + matchTypeBonus + titleBonus + rivalryBonus;
  const rating = Math.min(5.0, Math.max(0.5, Math.round(raw * 100) / 100));

  return {
    rating,
    breakdown: {
      base:         Math.round(base * 100) / 100,
      classSynergy,
      roleMatchup,
      matchType:    matchTypeBonus,
      titleBonus,
      rivalryBonus,
    },
  };
}

module.exports = { calculateMatchRating };
