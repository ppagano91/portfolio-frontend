/**
 * Ejemplo de servicio API para futura integración
 * 
 * Este archivo muestra cómo se estructuraría la integración con el backend
 * cuando se implemente la API REST.
 * 
 * Para usar:
 * 1. Renombrar este archivo a api.js
 * 2. Configurar la URL base de tu API
 * 3. Implementar los métodos necesarios
 * 4. Reemplazar los imports de mockData.js por llamadas a estos servicios
 */

const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

/**
 * Función helper para hacer requests
 */
const fetchAPI = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Servicios de API
 */
export const apiService = {
  // Obtener información personal
  getPersonalInfo: () => fetchAPI('/personal'),

  // Obtener experiencia
  getExperience: () => fetchAPI('/experience'),

  // Obtener proyectos
  getProjects: () => fetchAPI('/projects'),

  // Obtener tecnologías
  getTechnologies: () => fetchAPI('/technologies'),

  // Obtener educación
  getEducation: () => fetchAPI('/education'),

  // Enviar mensaje de contacto
  sendContactMessage: (data) =>
    fetchAPI('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
}

/**
 * Ejemplo de uso en un componente:
 * 
 * import { useState, useEffect } from 'react'
 * import { apiService } from '../services/api'
 * 
 * const Experience = () => {
 *   const [experience, setExperience] = useState([])
 *   const [loading, setLoading] = useState(true)
 * 
 *   useEffect(() => {
 *     const fetchExperience = async () => {
 *       try {
 *         const data = await apiService.getExperience()
 *         setExperience(data)
 *       } catch (error) {
 *         console.error('Error fetching experience:', error)
 *       } finally {
 *         setLoading(false)
 *       }
 *     }
 * 
 *     fetchExperience()
 *   }, [])
 * 
 *   if (loading) return <div>Cargando...</div>
 * 
 *   return (
 *     // ... renderizar experiencia
 *   )
 * }
 */

