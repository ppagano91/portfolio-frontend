import { fetchAPI } from './api'

export const DEFAULT_ABOUT_TITLE = 'Sobre mí'

export async function getProfile() {
  const response = await fetchAPI('/profile')
  return response.data
}

function normalizeStringList(items) {
  if (!Array.isArray(items)) return []
  return items.map((item) => String(item).trim()).filter(Boolean)
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
    focusAreas: normalizeStringList(profile.focus_areas),
    keySkills: normalizeStringList(profile.key_skills),
  }
}
