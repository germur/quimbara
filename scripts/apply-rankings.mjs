import fs from 'fs';
import path from 'path';

const fightersPath = path.join(process.cwd(), 'src/data/fighters.json');
const rankingsPath = path.join(process.cwd(), 'src/data/rankings.json');
const championsPath = path.join(process.cwd(), 'src/data/champions-generated.json');

const fighters = JSON.parse(fs.readFileSync(fightersPath, 'utf-8'));
const rankings = JSON.parse(fs.readFileSync(rankingsPath, 'utf-8'));
let champions = {};

if (fs.existsSync(championsPath)) {
    const championsData = JSON.parse(fs.readFileSync(championsPath, 'utf-8'));
    champions = championsData.champions || {};
}

console.log('📊 Applying rankings to fighters.json...');

let updatedCount = 0;

// Helper to normalize names for comparison
function normalize(name) {
    return name.toLowerCase().trim()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
}

// Create a map of fighters by normalized name for quick lookup
const fighterMap = new Map();
fighters.forEach(f => {
    fighterMap.set(normalize(f.name), f);
});

// 1. Apply Champions
for (const [division, data] of Object.entries(champions)) {
    const fighter = fighterMap.get(normalize(data.name));
    if (fighter) {
        fighter.division = division; // Force correct division
        fighter.rank = 'C';
        updatedCount++;
        console.log(`🏆 ${fighter.name} set as Champion (${division})`);
    } else {
        console.warn(`⚠️ Champion ${data.name} not found in fighters database`);
    }
}

// 2. Apply Rankings
for (const [division, names] of Object.entries(rankings)) {
    names.forEach((name, index) => {
        const fighter = fighterMap.get(normalize(name));
        if (fighter) {
            // Only update if not already marked as Champion (Champions might be in the list too)
            if (fighter.rank !== 'C') {
                fighter.division = division; // Force correct division
                fighter.rank = (index + 1).toString();
                updatedCount++;
                // console.log(`✅ ${fighter.name} set as #${fighter.rank} (${division})`);
            }
        } else {
            // Optional: Create a placeholder fighter if missing? 
            // For now, just log warning.
            // console.warn(`⚠️ Ranked fighter ${name} not found in fighters database`);
        }
    });
}

fs.writeFileSync(fightersPath, JSON.stringify(fighters, null, 2));

console.log(`\n💾 Updated ${updatedCount} fighters with rankings in ${fightersPath}`);
