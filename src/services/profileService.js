import { PORTFOLIO_CONFIG } from '../config/constants'
import { fetchAPI } from './api'

export const DEFAULT_ABOUT_TITLE = 'Sobre mí'
export const MAX_FOCUS_AREAS = 5
export const MAX_KEY_SKILLS = 10

export async function getProfile() {
  const response = await fetchAPI('/profile')
  return response.data
}

function normalizeStringList(items, maxItems = Infinity) {
  if (items == null || items === '') return []

  const list = Array.isArray(items)
    ? items
    : typeof items === 'string'
      ? items.split(',')
      : []

  return list
    .map((item) => String(item).trim())
    .filter(Boolean)
    .slice(0, maxItems)
}

/**
 * Construye un enlace wa.me a partir del teléfono del perfil.
 */
export function buildWhatsAppUrl(phone) {
  const trimmed = phone?.trim()
  if (!trimmed) return null

  const digits = trimmed.replace(/\D/g, '')
  if (!digits) return null

  return `https://wa.me/${digits}`
}

/**
 * Adapta el perfil de la API al formato usado por Hero, Contact y Footer.
 * Los datos de contacto provienen exclusivamente del perfil cuando está disponible.
 */
export function mapProfileToPersonal(profile, fallback = PORTFOLIO_CONFIG.personal) {
  if (!profile) {
    return {
      name: fallback.name,
      role: fallback.role,
      tagline: fallback.tagline,
      email: fallback.email || null,
      phone: null,
      whatsappUrl: null,
      location: null,
      linkedin: fallback.linkedin || null,
      github: fallback.github || null,
      profileImage: fallback.profileImage || null,
    }
  }

  const phone = profile.phone?.trim() || null

  return {
    name: profile.name?.trim() || fallback.name,
    role: profile.title?.trim() || fallback.role,
    tagline:
      profile.subtitle?.trim() ||
      profile.summary?.trim() ||
      fallback.tagline,
    email: profile.email?.trim() || null,
    phone,
    whatsappUrl: buildWhatsAppUrl(phone),
    location: profile.location?.trim() || null,
    linkedin: profile.linkedin_url?.trim() || null,
    github: profile.github_url?.trim() || null,
    profileImage: profile.profile_image_url?.trim() || fallback.profileImage,
  }
}

/**
 * Adapta el perfil de la API al formato usado por la sección About.
 */
export function mapProfileToAbout(profile) {
  if (!profile) {
    return {
      title: DEFAULT_ABOUT_TITLE,
      content: '',
      focusAreas: [],
      keySkills: [],
    }
  }

  const content =
    profile.about_content?.trim() || profile.summary?.trim() || ''

  return {
    title: profile.about_title?.trim() || DEFAULT_ABOUT_TITLE,
    content,
    focusAreas: normalizeStringList(profile.focus_areas, MAX_FOCUS_AREAS),
    keySkills: normalizeStringList(profile.key_skills, MAX_KEY_SKILLS),
  }
}
