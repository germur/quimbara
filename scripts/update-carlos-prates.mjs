import fs from 'fs/promises';
import path from 'path';

const API_KEY = '0a60e3546253c8e22c7c85f2340d77f0';
const BASE_URL = 'https://v1.mma.api-sports.io';
const FIGHTER_ID = 2654; // Carlos Prates
const DATA_FILE = path.join(process.cwd(), 'src/content/fighter-data', `${FIGHTER_ID}.json`);

async function fetchAPI(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            headers: { 'x-apisports-key': API_KEY }
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error.message);
        return [];
    }
}

async function updateCarlosPrates() {
    console.log(`Fetching data for fighter ID ${FIGHTER_ID}...`);

    // Fetch profile, records, and fights
    const [profiles, records, fights] = await Promise.all([
        fetchAPI(`/fighters?id=${FIGHTER_ID}`),
        fetchAPI(`/fighters/records?id=${FIGHTER_ID}`),
        fetchAPI(`/fights?fighter=${FIGHTER_ID}`)
    ]);

    if (!profiles || profiles.length === 0) {
        console.error('Fighter not found!');
        return;
    }

    const fullData = {
        profile: profiles[0],
        records: records[0] || null,
        fights: fights || [],
        cachedAt: new Date().toISOString()
    };

    console.log(`Profile: ${fullData.profile.name}`);
    console.log(`Fights found: ${fullData.fights.length}`);

    // Write to file
    await fs.writeFile(DATA_FILE, JSON.stringify(fullData, null, 2));
    console.log(`✅ Updated ${DATA_FILE}`);
    console.log(`   - ${fullData.fights.length} fights`);
    console.log(`   - Record: ${fullData.records?.total.win}-${fullData.records?.total.loss}-${fullData.records?.total.draw || 0}`);
}

updateCarlosPrates().catch(console.error);
