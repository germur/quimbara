import fs from 'fs';
import path from 'path';

const API_KEY = process.env.MMA_API_KEY || '0a60e3546253c8e22c7c85f2340d77f0';
const CACHE_DIR = path.join(process.cwd(), 'src/data/fighter-cache');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Read fighters list
const fighters = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/fighters.json'), 'utf-8'));

console.log(`📦 Caching data for ${fighters.length} fighters...`);

let cached = 0;
let errors = 0;

for (const fighter of fighters) {
    const cacheFile = path.join(CACHE_DIR, `${fighter.id}.json`);

    // Skip if already cached
    if (fs.existsSync(cacheFile)) {
        console.log(`⏭️  Skipping ${fighter.name} (already cached)`);
        cached++;
        continue;
    }

    try {
        // Fetch fighter profile
        const profileRes = await fetch(`https://v1.mma.api-sports.io/fighters?id=${fighter.id}`, {
            headers: { 'x-apisports-key': API_KEY }
        });
        const profileData = await profileRes.json();

        // Fetch fighter records
        const recordsRes = await fetch(`https://v1.mma.api-sports.io/fighters/records?id=${fighter.id}`, {
            headers: { 'x-apisports-key': API_KEY }
        });
        const recordsData = await recordsRes.json();

        // Fetch recent fights (2023-2025)
        const years = [2023, 2024, 2025];
        let fights = [];

        for (const year of years) {
            try {
                const fightsRes = await fetch(`https://v1.mma.api-sports.io/fights?fighter=${fighter.id}&season=${year}`, {
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
        console.log(`✅ Cached ${fighter.name}`);
        cached++;

        // Rate limiting: wait 200ms between requests
        await new Promise(resolve => setTimeout(resolve, 200));

    } catch (error) {
        console.error(`❌ Error caching ${fighter.name}:`, error.message);
        errors++;
    }
}

console.log(`\n🎉 Caching complete!`);
console.log(`✅ Cached: ${cached}`);
console.log(`❌ Errors: ${errors}`);
