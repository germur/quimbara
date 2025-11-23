import fs from 'fs';
import path from 'path';

const API_KEY = '0a60e3546253c8e22c7c85f2340d77f0';
const API_BASE = 'https://v1.mma.api-sports.io';

// Read all fighters from the database
const fightersPath = path.join(process.cwd(), 'src/data/fighters.json');
const allFighters = JSON.parse(fs.readFileSync(fightersPath, 'utf-8'));

console.log(`📊 Total fighters in database: ${allFighters.length}`);
console.log('🔍 Filtering for UFC fighters (checking recent activity)...\n');

// Known UFC fighters (champions and top contenders) - we'll keep these for sure
const KNOWN_UFC_IDS = [214, 701, 2436, 856, 874, 855, 256, 479, 260, 47, 146];

async function checkRecentUFCActivity(fighterId) {
    try {
        // Only check 2023 for speed (most recent year available in PRO plan)
        const response = await fetch(
            `${API_BASE}/fights?fighter=${fighterId}&season=2023`,
            { headers: { 'x-apisports-key': API_KEY } }
        );

        const data = await response.json();

        if (data.response && data.response.length > 0) {
            // Check if any fight has "UFC" in the slug
            return data.response.some(fight =>
                fight.slug && fight.slug.toUpperCase().includes('UFC')
            );
        }

        return false;
    } catch (error) {
        return false;
    }
}

async function filterUFCFighters() {
    const ufcFighters = [];
    let processed = 0;
    let ufcCount = 0;

    // Process in batches of 100 to show progress
    const batchSize = 100;

    for (let i = 0; i < allFighters.length; i += batchSize) {
        const batch = allFighters.slice(i, Math.min(i + batchSize, allFighters.length));

        console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allFighters.length / batchSize)}...`);

        for (const fighter of batch) {
            processed++;

            // Keep known UFC fighters without checking
            if (KNOWN_UFC_IDS.includes(fighter.id)) {
                ufcFighters.push(fighter);
                ufcCount++;
                console.log(`✅ [KNOWN] ${fighter.name}`);
                continue;
            }

            const isUFC = await checkRecentUFCActivity(fighter.id);

            if (isUFC) {
                ufcFighters.push(fighter);
                ufcCount++;
                console.log(`✅ ${fighter.name} (${fighter.division})`);
            }

            // Rate limiting: 150ms between requests (faster than before)
            await new Promise(resolve => setTimeout(resolve, 150));
        }

        console.log(`Progress: ${processed}/${allFighters.length} | UFC Fighters: ${ufcCount}`);
    }

    return ufcFighters;
}

async function main() {
    console.log('⚠️  This will take approximately 5-10 minutes...\n');

    const ufcFighters = await filterUFCFighters();

    console.log(`\n🎯 UFC FIGHTERS FOUND: ${ufcFighters.length} / ${allFighters.length}`);
    console.log(`📊 Percentage: ${((ufcFighters.length / allFighters.length) * 100).toFixed(1)}%`);

    // Save UFC-only fighters
    fs.writeFileSync(fightersPath, JSON.stringify(ufcFighters, null, 2));

    console.log(`\n💾 Saved ${ufcFighters.length} UFC fighters to ${fightersPath}`);
    console.log('✨ Ready to generate profiles! Run: node scripts/generate-profiles.mjs');
}

main().catch(console.error);
