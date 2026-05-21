import { fetchAPI } from './api'

const CATEGORY_LABELS = {
  frontend: 'Frontend',
  backend: 'Backend',
  gis: 'GIS',
  database: 'Otros',
  data: 'Otros',
  devops: 'Otros',
  other: 'Otros',
}

const CATEGORY_ORDER = ['Frontend', 'Backend', 'GIS', 'Otros']

/**
 * Agrupa tecnologías de la API en el formato que usa la sección Technologies.
 */
export function groupTechnologies(technologies) {
  const grouped = {}

  for (const tech of technologies) {
    const label = CATEGORY_LABELS[tech.category] || 'Otros'
    if (!grouped[label]) {
      grouped[label] = []
    }
    grouped[label].push({ name: tech.name, level: null })
  }

  return CATEGORY_ORDER.filter((name) => grouped[name]?.length).map((name) => ({
    name,
    data: grouped[name],
  }))
}

export async function getTechnologies() {
  const response = await fetchAPI('/technologies')
  return response.data
}
