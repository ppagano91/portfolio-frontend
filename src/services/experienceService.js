import { fetchAPI } from './api'

export async function getExperiences() {
  const response = await fetchAPI('/experiences')
  return response.data
}

function formatYear(value) {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.getFullYear()
}

export function formatDatePeriod(startDate, endDate, isCurrent) {
  const start = formatYear(startDate)
  const end = isCurrent ? 'Presente' : formatYear(endDate)

  if (start && end) return `${start} - ${end}`
  if (start) return isCurrent ? `${start} - Presente` : String(start)
  if (end) return String(end)
  return ''
}

/**
 * Adapta una experiencia de la API al formato usado por la sección Experience.
 */
export function mapExperienceToCard(experience) {
  return {
    id: experience.id,
    title: experience.position,
    company: experience.company,
    period: formatDatePeriod(
      experience.start_date,
      experience.end_date,
      experience.is_current
    ),
    description: experience.summary || '',
    technologies: experience.technologies || [],
    location: experience.location || null,
    employmentType: experience.employment_type || null,
    companyUrl: experience.company_url || null,
  }
}
