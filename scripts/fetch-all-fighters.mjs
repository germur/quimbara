import fs from 'fs';
import path from 'path';

const API_KEY = '0a60e3546253c8e22c7c85f2340d77f0';
const API_BASE = 'https://v1.mma.api-sports.io';

// UFC weight divisions
const DIVISIONS = [
    'Heavyweight',
    'Light Heavyweight',
    'Middleweight',
    'Welterweight',
    'Lightweight',
    'Featherweight',
    'Bantamweight',
    'Flyweight'
];

async function fetchFightersByDivision(division) {
    console.log(`\n📥 Fetching fighters from ${division}...`);

    const response = await fetch(`${API_BASE}/fighters?category=${encodeURIComponent(division)}`, {
        headers: { 'x-apisports-key': API_KEY }
    });

    const data = await response.json();

    if (data.response && data.response.length > 0) {
        console.log(`✅ Found ${data.response.length} fighters in ${division}`);
        return data.response.map(f => ({
            id: f.id,
            name: f.name,
            nickname: f.nickname,
            division: division
        }));
    }

    return [];
}

async function fetchAllFighters() {
    console.log('🚀 Starting mass fighter extraction from API-Sports...\n');

    let allFighters = [];

    for (const division of DIVISIONS) {
        const fighters = await fetchFightersByDivision(division);
        allFighters = allFighters.concat(fighters);

        // Rate limiting: wait 200ms between requests
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log(`\n🎯 TOTAL FIGHTERS EXTRACTED: ${allFighters.length}`);

    // Remove duplicates (fighters who competed in multiple divisions)
    const uniqueFighters = Array.from(
        new Map(allFighters.map(f => [f.id, f])).values()
    );

    console.log(`📊 UNIQUE FIGHTERS: ${uniqueFighters.length}`);

    return uniqueFighters;
}

function createSlug(name) {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function createDescription(fighter) {
    const nickname = fighter.nickname ? `"${fighter.nickname}". ` : '';
    return `${nickname}Luchador de ${fighter.division}.`;
}

async function main() {
    const fighters = await fetchAllFighters();

    // Transform to our JSON format
    const fightersData = fighters.map(f => ({
        id: f.id,
        name: f.name,
        slug: createSlug(f.name),
        description: createDescription(f),
        division: f.division
    }));

    // Save to fighters.json
    const outputPath = path.join(process.cwd(), 'src/data/fighters.json');
    fs.writeFileSync(outputPath, JSON.stringify(fightersData, null, 2));

    console.log(`\n💾 Saved ${fightersData.length} fighters to ${outputPath}`);
    console.log('\n✨ Ready to generate profiles! Run: node scripts/generate-profiles.mjs');
}

main().catch(console.error);
