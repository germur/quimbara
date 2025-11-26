#!/usr/bin/env tsx
/**
 * Script para obtener datos de campeones y P4P desde los archivos de cache
 * Se ejecuta en build time para generar champions-generated.json
 */

import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

// IDs de campeones actuales (se debe actualizar si cambia el cinturón)
const CHAMPIONS_IDS: Record<string, number> = {
    'Heavyweight': 701,        // Tom Aspinall (Interim/Active)
    'Light Heavyweight': 2436, // Alex Pereira
    'Middleweight': 856,       // Dricus Du Plessis
    'Welterweight': 15,        // Belal Muhammad
    'Lightweight': 333,        // Islam Makhachev
    'Featherweight': 855,      // Ilia Topuria
    'Bantamweight': 290,       // Merab Dvalishvili
    'Flyweight': 250,          // Alexandre Pantoja
    'Women\'s Bantamweight': 201,
    'Women\'s Flyweight': 196,
    'Women\'s Strawweight': 182
}

// IDs para P4P (Top 15 - Actualizado Nov 2024)
const P4P_IDS = [
    333,  // 1. Islam Makhachev
    855,  // 2. Ilia Topuria
    290,  // 3. Merab Dvalishvili
    743,  // 4. Khamzat Chimaev
    250,  // 5. Alexandre Pantoja
    2436, // 6. Alex Pereira
    361,  // 7. Alexander Volkanovski
    701,  // 8. Tom Aspinall
    856,  // 9. Dricus Du Plessis
    1665, // 10. Max Holloway
    2411, // 11. Jack Della Maddalena
    103,  // 12. Magomed Ankalaev
    332,  // 13. Arman Tsarukyan
    19,   // 14. Charles Oliveira
    15    // 15. Belal Muhammad
]

interface FighterDetails {
    id: number
    name: string
    nickname: string
    photo: string
    weight: string
    height: string
    reach: string
    birth_date: string | null
    record: {
        total: number
        win: number
        loss: number
        draw: number
    }
}

function getFighterDetails(id: number): FighterDetails | null {
    try {
        const filePath = join(process.cwd(), 'src/content/fighter-data', `${id}.json`)

        if (!existsSync(filePath)) {
            console.warn(`  ⚠️  Fighter data not found for ID ${id}`)
            return null
        }

        const fileContent = readFileSync(filePath, 'utf-8')
        let data = JSON.parse(fileContent)

        // Apply patches if they exist
        const patchesPath = join(process.cwd(), 'src/data/patches.json')
        if (existsSync(patchesPath)) {
            const patches = JSON.parse(readFileSync(patchesPath, 'utf-8'))
            if (patches[id]) {
                data = { ...data, ...patches[id], records: { ...data.records, ...patches[id].records } }
            }
        }

        return {
            id: data.profile.id,
            name: data.profile.name,
            nickname: data.profile.nickname || '',
            photo: data.profile.photo,
            weight: data.profile.weight,
            height: data.profile.height,
            reach: data.profile.reach,
            birth_date: data.profile.birth_date,
            record: {
                total: data.records.total.win + data.records.total.loss + data.records.total.draw,
                win: data.records.total.win,
                loss: data.records.total.loss,
                draw: data.records.total.draw
            }
        }
    } catch (error) {
        console.error(`  ❌ Error reading fighter ${id}:`, error)
        return null
    }
}

async function main() {
    console.log('🔍 Reading Champions & P4P data from cache...')

    const championsData: any = {}
    const p4pData: any[] = []

    // Fetch Champions
    for (const [division, id] of Object.entries(CHAMPIONS_IDS)) {
        console.log(`  Reading ${division} champion (${id})...`)
        const data = getFighterDetails(id)
        if (data) {
            championsData[division] = data
        }
    }

    // Fetch P4P
    for (const id of P4P_IDS) {
        console.log(`  Reading P4P fighter (${id})...`)
        const data = getFighterDetails(id)
        if (data) {
            p4pData.push(data)
        }
    }

    const output = {
        generatedAt: new Date().toISOString(),
        champions: championsData,
        p4p: p4pData
    }

    const outputPath = join(process.cwd(), 'src/data/champions-generated.json')
    writeFileSync(outputPath, JSON.stringify(output, null, 2))

    console.log(`\n✅ Generated data for ${Object.keys(championsData).length} champions and ${p4pData.length} P4P fighters`)
    console.log(`📁 Saved to: ${outputPath}`)
}

main().catch(console.error)
