#!/usr/bin/env tsx
/**
 * Script para obtener próximos eventos de UFC desde la API
 * Se ejecuta en build time para generar events-generated.json
 */

import { writeFileSync } from 'fs'
import { join } from 'path'

const API_KEY = process.env.MMA_API_KEY
const API_BASE = 'https://v1.mma.api-sports.io'

if (!API_KEY) {
    console.error('❌ MMA_API_KEY not found in environment')
    process.exit(1)
}

interface Fight {
    id: number
    date: string
    time: string
    slug: string
    category: string
    status: {
        long: string
        short: string
    }
    fighters: {
        first: {
            id: number
            name: string
            winner?: boolean
        }
        second: {
            id: number
            name: string
            winner?: boolean
        }
    }
}

interface Event {
    id: string
    name: string
    date: string
    location: string
    isNumbered: boolean
    fights: Array<{
        weightClass: string
        isTitle: boolean
        fighterA: { id: number; name: string; rank: string }
        fighterB: { id: number; name: string; rank: string }
    }>
}

async function fetchFights(date: string): Promise<Fight[]> {
    const url = `${API_BASE}/fights?date=${date}`

    const response = await fetch(url, {
        headers: {
            'x-rapidapi-host': 'v1.mma.api-sports.io',
            'x-apisports-key': API_KEY!
        }
    })

    if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
    }

    const data = await response.json()
    // Filter UFC events (slug contains "UFC")
    const ufcFights = (data.response || []).filter((f: Fight) =>
        f.slug && f.slug.includes('UFC')
    )
    return ufcFights
}

async function main() {
    console.log('🔍 Fetching upcoming UFC events...')

    // Buscar eventos en los próximos 90 días
    const today = new Date()
    const dates: string[] = []

    // Generar fechas para los próximos 90 días
    for (let i = 0; i < 90; i++) {
        const date = new Date(today)
        date.setDate(date.getDate() + i)
        dates.push(date.toISOString().split('T')[0])
    }

    // Collect all fights first
    const allFights: Fight[] = []

    // Buscar peleas en cada fecha (batch de 5 a la vez para no saturar API)
    for (let i = 0; i < dates.length; i += 5) {
        const batch = dates.slice(i, i + 5)
        const results = await Promise.all(
            batch.map(date => fetchFights(date).catch(() => []))
        )

        results.forEach((fights) => {
            if (fights.length > 0) {
                allFights.push(...fights)
            }
        })

        // Esperar un poco entre batches
        if (i + 5 < dates.length) {
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
    }

    console.log(`  ✓ Found total ${allFights.length} fights`)

    // Agrupar por evento (mismo slug)
    const eventsMap = allFights.reduce((acc: any, fight: Fight) => {
        if (!acc[fight.slug]) {
            acc[fight.slug] = {
                id: fight.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                name: fight.slug,
                date: fight.date, // Keep earliest date? Or main card date? Usually earliest is fine for sorting
                location: 'TBD',
                isNumbered: fight.slug.includes('UFC ') && /\d+/.test(fight.slug),
                fights: []
            }
        }

        // Avoid duplicates if API returns same fight multiple times
        const exists = acc[fight.slug].fights.some((f: any) =>
            f.fighterA.id === fight.fighters.first.id &&
            f.fighterB.id === fight.fighters.second.id
        )

        if (!exists) {
            acc[fight.slug].fights.push({
                weightClass: fight.category,
                isTitle: false,
                fighterA: {
                    id: fight.fighters.first.id,
                    name: fight.fighters.first.name,
                    rank: 'C'
                },
                fighterB: {
                    id: fight.fighters.second.id,
                    name: fight.fighters.second.name,
                    rank: 'NR'
                }
            })
        }

        return acc
    }, {})

    const events = Object.values(eventsMap) as Event[]

    // Tomar solo los primeros 5 eventos
    const upcomingEvents: Event[] = events
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 5)

    // Guardar
    const outputPath = join(process.cwd(), 'src/data/events-generated.json')
    writeFileSync(outputPath, JSON.stringify(upcomingEvents, null, 2))

    console.log(`\n✅ Generated ${upcomingEvents.length} events`)
    console.log(`📁 Saved to: ${outputPath}`)

    upcomingEvents.forEach(event => {
        console.log(`   - ${event.name} (${new Date(event.date).toLocaleDateString()})`)
    })
}

main().catch(console.error)
