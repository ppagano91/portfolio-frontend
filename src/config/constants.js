/**
 * Configuración centralizada del portfolio
 * Facilita el mantenimiento y futura integración con API
 */

export const PORTFOLIO_CONFIG = {
  // Información personal
  personal: {
    name: 'Patricio Pagano',
    role: 'Full Stack GIS Developer',
    tagline:
      'Geólogo, Especialista en Ciencia de Datos y Desarrollador Full Stack GIS.',
    linkedin: 'https://www.linkedin.com/in/patricio-pagano',
    github: 'https://github.com/ppagano91',
    profileImage: '/images/profile.jpg',
  },
  
  // Secciones activas
  sections: {
    hero: true,
    about: true,
    experience: true,
    projects: true,
    technologies: true,
    education: true,
    contact: true,
  },
}

