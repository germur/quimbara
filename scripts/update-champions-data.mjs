import fs from 'fs';
import path from 'path';

// Import the IDs from fetch-champions.ts (we'll duplicate them here to avoid import issues with TS/ESM)
const CHAMPIONS_IDS = {
    'Heavyweight': 701,
    'Light Heavyweight': 2436,
    'Middleweight': 856,
    'Welterweight': 15,
    'Lightweight': 333,
    'Featherweight': 855,
    'Bantamweight': 290,
    'Flyweight': 250,
    'Women\'s Bantamweight': 201,
    'Women\'s Flyweight': 196,
    'Women\'s Strawweight': 182
};

const P4P_IDS = [
    333, 855, 290, 743, 250, 2436, 361, 701, 856, 1665, 2411, 103, 332, 19, 15
];

const API_KEY = process.env.MMA_API_KEY || '0a60e3546253c8e22c7c85f2340d77f0';
const CACHE_DIR = path.join(process.cwd(), 'src/content/fighter-data');

if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Combine all unique IDs
const ALL_IDS = [...new Set([...Object.values(CHAMPIONS_IDS), ...P4P_IDS])];

console.log(`📦 Updating cache for ${ALL_IDS.length} champions and P4P fighters...`);

async function fetchFighter(id) {
    const cacheFile = path.join(CACHE_DIR, `${id}.json`);

    try {
        console.log(`Fetching fighter ${id}...`);

        // Fetch fighter profile
        const profileRes = await fetch(`https://v1.mma.api-sports.io/fighters?id=${id}`, {
            headers: { 'x-apisports-key': API_KEY }
        });
        const profileData = await profileRes.json();

        // Fetch fighter records
        const recordsRes = await fetch(`https://v1.mma.api-sports.io/fighters/records?id=${id}`, {
            headers: { 'x-apisports-key': API_KEY }
        });
        const recordsData = await recordsRes.json();

        // Fetch recent fights (2023-2025)
        const years = [2023, 2024, 2025];
        let fights = [];

        for (const year of years) {
            try {
                const fightsRes = await fetch(`https://v1.mma.api-sports.io/fights?fighter=${id}&season=${year}`, {
                    headers: { 'x-apisports-key': API_KEY }
                });
                const fightsData = await fightsRes.json();
                if (fightsData.response) {
                    fights.push(...fightsData.response);
                }
            } catch (e) {
                console.error(`  ⚠️  Error fetching fights for ${year}:`, e.message);
            }
        }

        // Save cached data
        const cacheData = {
            profile: profileData.response?.[0] || null,
            records: recordsData.response?.[0] || null,
            fights: fights,
            cachedAt: new Date().toISOString()
        };

        fs.writeFileSync(cacheFile, JSON.stringify(cacheData, null, 2));
        console.log(`✅ Updated fighter ${id}`);

    } catch (error) {
        console.error(`❌ Error updating fighter ${id}:`, error.message);
    }
}

async function main() {
    for (const id of ALL_IDS) {
        await fetchFighter(id);
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    console.log('🎉 Update complete!');
}

main();
