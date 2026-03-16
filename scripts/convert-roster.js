const fs = require('fs');
const path = require('path');

const CSV_PATH = 'C:/Users/drada/Downloads/Mygmpal roster database v1 - ROSTER.csv';
const OUT_PATH = path.join(__dirname, '..', 'data', 'roster.json');

// Copied directly from scripts/validate-roster.js
function parseCSVLine(line) {
  const r = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { inQ = !inQ; }
    else if (c === ',' && !inQ) { r.push(cur); cur = ''; }
    else { cur += c; }
  }
  r.push(cur);
  return r;
}

const csv = fs.readFileSync(CSV_PATH, 'utf8');
const lines = csv.trim().split('\n');

// Check if Data_Source column exists by inspecting header
const headerCols = parseCSVLine(lines[0]);
const hasDataSource = headerCols.length >= 15 && headerCols[14].trim() === 'Data_Source';

const rows = lines.slice(1);
const superstars = [];

rows.forEach(line => {
  const r = parseCSVLine(line);
  const [Name, OVR, Gender, Category, Brand, Class, Role, Ring_Level, Popularity, Promo_Skill, Draft_Cost, Is_Legend, Stamina, Morale, Data_Source] = r;

  // Skip blank rows
  if (!Name || Name.trim() === '') return;

  const ovr = parseInt(OVR);
  const pop = parseInt(Popularity);
  const promo = parseInt(Promo_Skill);

  // draft_score_base formula: round((pop * 0.35) + (ovr * 0.25) + (promo * 4 * 0.20), 1)
  const draft_score_base = Math.round(((pop * 0.35) + (ovr * 0.25) + (promo * 4 * 0.20)) * 10) / 10;

  const superstar = {
    Name: Name.trim(),
    OVR: ovr,
    Gender: Gender.trim(),
    Category: Category.trim(),
    Brand: Brand.trim(),
    Class: Class.trim(),
    Role: Role.trim(),
    Ring_Level: Ring_Level.trim(),
    Popularity: pop,
    Promo_Skill: promo,
    Draft_Cost: parseInt(Draft_Cost),
    Is_Legend: Is_Legend.trim() === 'TRUE',
    Stamina: parseInt(Stamina),
    Morale: parseInt(Morale),
  };

  if (hasDataSource && Data_Source !== undefined) {
    superstar.Data_Source = Data_Source.trim();
  }

  superstar.draft_score_base = draft_score_base;

  superstars.push(superstar);
});

fs.writeFileSync(OUT_PATH, JSON.stringify(superstars, null, 2));

console.log('Total superstars written:', superstars.length);

const cody = superstars.find(s => s.Name === 'Cody Rhodes');
console.log('Cody Rhodes draft_score_base:', cody ? cody.draft_score_base : 'NOT FOUND', '(expected 61.4)');

const candice = superstars.find(s => s.Name === 'Candice LaRae');
console.log('Candice LaRae draft_score_base:', candice ? candice.draft_score_base : 'NOT FOUND', '(expected 44.8)');

const cena = superstars.find(s => s.Name === 'Super Cena');
console.log('Super Cena draft_score_base:', cena ? cena.draft_score_base : 'NOT FOUND', '(expected 64)');

console.log('Output written to:', OUT_PATH);
