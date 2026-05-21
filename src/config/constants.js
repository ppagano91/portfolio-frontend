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
    email: 'contacto@ejemplo.com',
    linkedin: 'https://www.linkedin.com/in/patricio-pagano',
    github: 'https://github.com/ppagano91',
    // Ruta a la foto de perfil (puede ser local o URL)
    // Coloca tu imagen en public/images/profile.jpg o usa una URL
    profileImage: '/images/profile.jpg', // Cambia esta ruta según tu imagen
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

