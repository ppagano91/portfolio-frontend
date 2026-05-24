import { fetchAPI } from './api'
import { formatDatePeriod } from './experienceService'

export const MAX_COURSE_SKILLS = 5

export async function getCourses() {
  const response = await fetchAPI('/courses')
  return response.data
}

function normalizeSkills(skills) {
  if (skills == null || skills === '') return []
  const list = Array.isArray(skills)
    ? skills
    : typeof skills === 'string'
      ? skills.split(',')
      : []
  return list
    .map((item) => String(item).trim())
    .filter(Boolean)
    .slice(0, MAX_COURSE_SKILLS)
}

/**
 * Adapta un curso de la API al formato usado por la UI.
 */
export function mapCourseToView(record) {
  const endDate = record.end_date || record.issue_date
  const period = formatDatePeriod(record.start_date, endDate, false)

  return {
    id: record.id,
    title: record.title,
    institution: record.institution,
    period,
    description: record.description || '',
    category: record.category || null,
    skills: normalizeSkills(record.skills),
    credentialUrl: record.credential_url || record.certificate_url || null,
    institutionUrl: record.credential_url || null,
  }
}
