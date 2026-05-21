import { fetchAPI } from './api'

export async function getFeaturedProjects() {
  const response = await fetchAPI('/projects/featured')
  return response.data
}

export async function getProjects() {
  const response = await fetchAPI('/projects')
  return response.data
}

export async function getProjectBySlug(slug) {
  const response = await fetchAPI(`/projects/${slug}`)
  return response.data
}

/**
 * Adapta un proyecto de la API al formato usado por las cards del frontend.
 */
export function mapProjectToCard(project) {
  const placeholder = `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`
  return {
    id: project.id,
    title: project.title,
    description: project.summary || project.description || '',
    technologies: (project.technologies || []).map((t) => t.name),
    image: project.cover_image_url || placeholder,
    githubUrl: project.repository_url || null,
    liveUrl: project.demo_url || null,
  }
}
