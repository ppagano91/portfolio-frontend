import { fetchAPI } from './api'
import { formatDatePeriod } from './experienceService'

export async function getEducation() {
  const response = await fetchAPI('/education')
  return response.data
}

function mapEducationItem(record) {
  const period = formatDatePeriod(record.start_date, record.end_date, record.is_current)
  const base = {
    id: record.id,
    institution: record.institution,
    period,
    description: record.description || '',
    fieldOfStudy: record.field_of_study || null,
    location: record.location || null,
    institutionUrl: record.institution_url || null,
  }

  if (record.education_type === 'course') {
    return {
      ...base,
      title: record.degree,
    }
  }

  return {
    ...base,
    degree: record.degree,
  }
}

/**
 * Agrupa registros de educación en formal y cursos para la UI.
 */
export function mapEducationToView(records) {
  const formal = []
  const courses = []

  for (const record of records) {
    const item = mapEducationItem(record)
    if (record.education_type === 'course') {
      courses.push(item)
    } else {
      formal.push(item)
    }
  }

  return { formal, courses }
}
