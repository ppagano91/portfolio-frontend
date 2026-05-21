const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1'

/**
 * Realiza un request a la API y devuelve el envelope { success, data, message, error }.
 */
export async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  const body = await response.json().catch(() => ({}))

  if (!response.ok || body.success === false) {
    const detail = body.error?.detail || body.message || response.statusText
    throw new Error(detail)
  }

  return body
}

export { API_BASE_URL }
