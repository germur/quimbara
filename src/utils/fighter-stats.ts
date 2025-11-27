/**
 * Fighter Statistics Utilities
 * 
 * Functions to calculate real statistics from API data without inventing information.
 */

export interface FighterRecords {
    total: { win: number; loss: number; draw: number }
    ko: { win: number; loss: number }
    sub: { win: number; loss: number }
}

export interface Fight {
    id: number
    date: string
    status: { short: string; long: string }
    fighters: {
        first: { id: number; name: string; winner: boolean }
        second: { id: number; name: string; winner: boolean }
    }
    category?: string
    slug?: string
}

/**
 * Calculate current win streak for a fighter
 * @param fights - Array of fighter's fights (must be sorted by date DESC)
 * @param fighterId - ID of the fighter
 * @returns Number of consecutive wins
 */
export function getWinStreak(fights: Fight[], fighterId: number): number {
    let streak = 0

    // Sort fights by date descending (most recent first)
    const sortedFights = [...fights].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    for (const fight of sortedFights) {
        // Skip non-finished fights
        if (fight.status.short !== 'FT') continue

        // Determine if fighter won
        const isFirstFighter = fight.fighters.first.id === fighterId
        const won = isFirstFighter ? fight.fighters.first.winner : fight.fighters.second.winner

        if (won) {
            streak++
        } else {
            break // Streak broken
        }
    }

    return streak
}

/**
 * Calculate finish rate (KO + SUB vs Decisions)
 * @param records - Fighter's records
 * @returns Object with finish percentage and breakdown
 */
export function getFinishRate(records: FighterRecords) {
    const totalWins = records.total.win
    if (totalWins === 0) return { finishRate: 0, koRate: 0, subRate: 0, decWins: 0 }

    const koWins = records.ko.win || 0
    const subWins = records.sub.win || 0
    const finishWins = koWins + subWins
    const decWins = totalWins - finishWins

    return {
        finishRate: Math.round((finishWins / totalWins) * 100),
        koRate: Math.round((koWins / totalWins) * 100),
        subRate: Math.round((subWins / totalWins) * 100),
        decWins,
        koWins,
        subWins
    }
}

/**
 * Count fights in the last N months
 * @param fights - Array of fighter's fights
 * @param months - Number of months to look back (default: 12)
 * @returns Number of fights
 */
export function getFightsInLastMonths(fights: Fight[], months: number = 12): number {
    const cutoffDate = new Date()
    cutoffDate.setMonth(cutoffDate.getMonth() - months)

    return fights.filter(fight => {
        const fightDate = new Date(fight.date)
        return fightDate >= cutoffDate && fight.status.short === 'FT'
    }).length
}

/**
 * Get next scheduled fight
 * @param fights - Array of fighter's fights
 * @returns Next fight or null
 */
export function getNextFight(fights: Fight[]): Fight | null {
    const upcomingFights = fights
        .filter(fight => fight.status.short === 'NS') // Not Started
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return upcomingFights[0] || null
}

/**
 * Check if fighter is undefeated
 * @param records - Fighter's records
 * @returns True if undefeated
 */
export function isUndefeated(records: FighterRecords): boolean {
    return records.total.loss === 0
}

/**
 * Get fighter's win percentage
 * @param records - Fighter's records
 * @returns Win percentage (0-100)
 */
export function getWinPercentage(records: FighterRecords): number {
    const total = records.total.win + records.total.loss + records.total.draw
    if (total === 0) return 0
    return Math.round((records.total.win / total) * 100)
}

/**
 * Determine fighting style based on records
 * @param records - Fighter's records
 * @returns Style category
 */
export function getFightingStyle(records: FighterRecords): {
    primary: 'striker' | 'grappler' | 'balanced'
    label: string
} {
    const { koRate, subRate, finishRate } = getFinishRate(records)

    if (koRate >= 50) {
        return { primary: 'striker', label: 'Knockout Artist' }
    } else if (subRate >= 50) {
        return { primary: 'grappler', label: 'Submission Specialist' }
    } else if (finishRate >= 70) {
        return { primary: 'balanced', label: 'Pure Finisher' }
    } else {
        return { primary: 'balanced', label: 'All-Rounder' }
    }
}

/**
 * Get last N fights with results
 * @param fights - Array of fighter's fights
 * @param fighterId - ID of the fighter
 * @param count - Number of fights to return (default: 5)
 * @returns Array of recent fights with W/L/D
 */
export function getRecentResults(fights: Fight[], fighterId: number, count: number = 5): Array<{
    result: 'W' | 'L' | 'D' | 'NC'
    date: string
    opponent: string
}> {
    const sortedFights = [...fights]
        .filter(f => f.status.short === 'FT')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count)

    return sortedFights.map(fight => {
        const isFirstFighter = fight.fighters.first.id === fighterId
        const won = isFirstFighter ? fight.fighters.first.winner : fight.fighters.second.winner
        const lost = isFirstFighter ? fight.fighters.second.winner : fight.fighters.first.winner
        const opponent = isFirstFighter ? fight.fighters.second.name : fight.fighters.first.name

        return {
            result: won ? 'W' : lost ? 'L' : 'D',
            date: fight.date,
            opponent
        }
    })
}

/**
 * Calculate total career fights
 * @param records - Fighter's records
 * @returns Total number of fights
 */
export function getTotalFights(records: FighterRecords): number {
    return records.total.win + records.total.loss + records.total.draw
}
