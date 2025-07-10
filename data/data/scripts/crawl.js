import fs from 'fs';

// 1. Load the Field Dates profile
const profile = JSON.parse(fs.readFileSync('./data/field_dates.json'));

// 2. Print the profile to confirm
console.log("✅ Loaded Business Profile:");
console.log(profile);

// 3. Loop through to show what it will scan
console.log("\n👀 Will run these portal bots:");
profile.portals.forEach(portal => {
    console.log(` - ${portal}`);
});

console.log("\n🔎 Looking for NAICS:");
profile.commodity_codes.naics.forEach(code => {
    console.log(` - ${code}`);
});

console.log("\n🔎 Looking for NIGP:");
profile.commodity_codes.nigp.forEach(code => {
    console.log(` - ${code}`);
});

console.log(`\n📍 Restricting to: ${profile.radius}`);
