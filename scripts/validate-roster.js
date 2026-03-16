const fs = require('fs');
const csv = fs.readFileSync('C:/Users/drada/Downloads/Mygmpal roster database v1 - ROSTER.csv', 'utf8');
const lines = csv.trim().split('\n');
const rows = lines.slice(1);

const validClass = new Set(['Fighter','Cruiserweight','Bruiser','Giant','Specialist']);
const validRole = new Set(['Face','Heel']);
const validGender = new Set(['Male','Female']);
const validCategory = new Set(['WWE Superstar','NXT','Legend','AAA','Celebrity']);
const validBrand = new Set(['RAW','SmackDown','NXT','Free Agent']);
const validRingLevel = new Set(['Immortal','Legend','Icon','Renown','Established','Rookie']);
const ovr2ring = o => o>=95?'Immortal':o>=90?'Legend':o>=85?'Icon':o>=80?'Renown':o>=75?'Established':'Rookie';

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

let issues = [], count = 0;
const byCat = {}, byBrand = {}, byClass = {}, byRole = {}, byGender = {};

rows.forEach(line => {
  const r = parseCSVLine(line);
  count++;
  const [Name, OVR, Gender, Category, Brand, Class, Role, Ring_Level, Popularity, Promo_Skill, Draft_Cost, Is_Legend, Stamina, Morale] = r;
  const ovr = +OVR, pop = +Popularity, promo = +Promo_Skill, cost = +Draft_Cost, sta = +Stamina, mor = +Morale;
  const isLeg = Is_Legend === 'TRUE';

  byCat[Category] = (byCat[Category] || 0) + 1;
  byBrand[Brand] = (byBrand[Brand] || 0) + 1;
  byClass[Class] = (byClass[Class] || 0) + 1;
  byRole[Role] = (byRole[Role] || 0) + 1;
  byGender[Gender] = (byGender[Gender] || 0) + 1;

  if (!validClass.has(Class)) issues.push(Name + ': invalid Class=' + Class);
  if (!validRole.has(Role)) issues.push(Name + ': invalid Role=' + Role);
  if (!validGender.has(Gender)) issues.push(Name + ': invalid Gender=' + Gender);
  if (!validCategory.has(Category)) issues.push(Name + ': invalid Category=' + Category);
  if (!validBrand.has(Brand)) issues.push(Name + ': invalid Brand=' + Brand);
  if (!validRingLevel.has(Ring_Level)) issues.push(Name + ': invalid Ring_Level=' + Ring_Level);
  if (ovr < 50 || ovr > 100) issues.push(Name + ': OVR out of range=' + ovr);
  if (pop < 1 || pop > 100) issues.push(Name + ': Popularity out of range=' + pop);
  if (promo < 1 || promo > 5) issues.push(Name + ': Promo_Skill out of range=' + promo);
  if (sta < 1 || sta > 100) issues.push(Name + ': Stamina out of range=' + sta);
  if (mor !== 100) issues.push(Name + ': Morale not 100, got=' + mor);
  const expRing = ovr2ring(ovr);
  if (Ring_Level !== expRing) issues.push(Name + ': Ring_Level=' + Ring_Level + ' expected=' + expRing + ' (OVR ' + ovr + ')');
  if ((Category === 'Legend') !== isLeg) issues.push(Name + ': Is_Legend/Category mismatch');
  const expCost = Math.round(ovr * 1.8 + (isLeg ? 10 : 0));
  if (cost !== expCost) issues.push(Name + ': Draft_Cost=' + cost + ' expected=' + expCost);
});

console.log('=== ROSTER VALIDATION REPORT ===');
console.log('Total superstars: ' + count);
console.log('By Category: ' + JSON.stringify(byCat));
console.log('By Brand:    ' + JSON.stringify(byBrand));
console.log('By Class:    ' + JSON.stringify(byClass));
console.log('By Role:     ' + JSON.stringify(byRole));
console.log('By Gender:   ' + JSON.stringify(byGender));
console.log('');
if (issues.length === 0) {
  console.log('RESULT: PASS - No issues found');
} else {
  console.log('RESULT: ' + issues.length + ' issues found:');
  issues.forEach(i => console.log('  WARN: ' + i));
}
