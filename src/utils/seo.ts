/**
 * SEO Utilities for Quimbara SILO Architecture
 * Helpers for breadcrumbs, meta descriptions, and SEO optimization
 */

import { weightClassMap, weightClassMapReverse } from '@/data/weightClasses'

interface BreadcrumbItem {
    title: string
    link?: string
}

/**
 * Generate breadcrumbs automatically from URL path
 * @param pathname - Current page pathname (e.g., '/fighters/peso-pesado/')
 * @returns Array of breadcrumb items
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
    const breadcrumbs: BreadcrumbItem[] = [{ title: 'Inicio', link: '/' }]

    if (pathname === '/' || pathname === '') {
        return breadcrumbs
    }

    const segments = pathname
        .split('/')
        .filter((segment) => segment.length > 0)

    let currentPath = ''

    segments.forEach((segment, index) => {
        currentPath += `/${segment}`

        // Humanize segment names
        let title = segment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        // Special cases
        if (segment === 'fighters') {
            title = 'Peleadores'
        } else if (segment === 'eventos-ufc') {
            title = 'Eventos UFC'
        } else if (segment === 'noticias') {
            title = 'Noticias'
        } else if (segment === 'analisis') {
            title = 'Análisis'
        } else if (segment === 'rankings') {
            title = 'Rankings'
        } else if (segment === 'tecnicas-entrenamientos') {
            title: 'Técnicas y Entrenamientos'
        }

        // Don't link the last segment (current page)
        const isLast = index === segments.length - 1

        breadcrumbs.push({
            title,
            link: isLast ? undefined : currentPath
        })
    })

    return breadcrumbs
}

/**
 * Generate optimized meta description
 * @param type - Type of page (category, subcategory, individual)
 * @param context - Context object with relevant data
 * @returns SEO-optimized meta description
 */
export function generateMetaDescription(
    type: 'category' | 'subcategory' | 'individual',
    context: Record<string, any>
): string {
    switch (type) {
        case 'category':
            return `Descubre ${context.name} en Quimbara. ${context.description || ''} Tu fuente definitiva de información MMA en español.`

        case 'subcategory':
            return `${context.name} - ${context.description || 'Perfiles completos, estadísticas y análisis.'} Rankings actualizados y contenido exclusivo.`

        case 'individual':
            return `${context.name} - ${context.description || 'Perfil completo, estadísticas, historial de combates y análisis técnico.'} | Quimbara`

        default:
            return 'Referencia líder en contenido de MMA y UFC en español.'
    }
}

/**
 * Map English division name to Spanish slug
 * @param englishName - Division name in English (e.g., 'Heavyweight')
 * @returns Spanish slug (e.g., 'peso-pesado')
 */
export function getDivisionSlug(englishName: string): string {
    return weightClassMap[englishName] || englishName.toLowerCase().replace(/\s+/g, '-')
}

/**
 * Map Spanish slug to English division name
 * @param slug - Division slug in Spanish (e.g., 'peso-pesado')
 * @returns English division name (e.g., 'Heavyweight')
 */
export function getDivisionEnglishName(slug: string): string {
    return weightClassMapReverse[slug] || slug
}

/**
 * Create SEO-friendly anchor text
 * Varies anchor text to avoid over-optimization
 * @param fighterName - Name of the fighter
 * @param variation - Type of variation (name, nickname, full)
 * @returns Anchor text string
 */
export function getFighterAnchorText(
    fighterName: string,
    variation: 'name' | 'nickname' | 'full' = 'name'
): string {
    // This is a placeholder - in a real implementation,
    // you'd fetch the fighter's nickname from the data
    switch (variation) {
        case 'name':
            return fighterName
        case 'full':
            return `Perfil de ${fighterName}`
        case 'nickname':
            // Would need fighter data to get actual nickname
            return `Ver ${fighterName}`
        default:
            return fighterName
    }
}

/**
 * Validate SILO structure URLs
 * Ensures URLs follow the /category/subcategory/item/ pattern
 * @param url - URL to validate
 * @returns Boolean indicating if URL is valid SILO structure
 */
export function isValidSILOUrl(url: string): boolean {
    // Remove trailing slash and split
    const segments = url.replace(/\/$/, '').split('/').filter(Boolean)

    // Valid SILO URLs have 1-3 segments (category, subcategory, item)
    if (segments.length < 1 || segments.length > 3) {
        return false
    }

    // Check if first segment is a valid category
    const validCategories = [
        'fighters',
        'eventos-ufc',
        'noticias',
        'analisis',
        'rankings',
        'tecnicas-entrenamientos'
    ]

    return validCategories.includes(segments[0])
}

/**
 * Generate canonical URL
 * @param pathname - Current page pathname
 * @param siteUrl - Base site URL
 * @returns Canonical URL string
 */
export function getCanonicalUrl(pathname: string, siteUrl: string): string {
    // Remove trailing slash for consistency
    const cleanPath = pathname.replace(/\/$/, '') || '/'
    return `${siteUrl}${cleanPath}`
}
