/**
 * Configuración centralizada del portfolio
 * Facilita el mantenimiento y futura integración con API
 */

export const PORTFOLIO_CONFIG = {
  // Información personal
  personal: {
    name: 'Patricio Pagano',
    role:
      'Desarrollador Full Stack GIS | Licenciado en Ciencias Geológicas | Especialista en Ciencia de Datos',
    tagline:
      'GIS, datos espaciales, backend, GeoServer, PostgreSQL/PostGIS, React y MapLibre',
    email: 'pagano.patricio@gmail.com',
    linkedin: 'https://www.linkedin.com/in/patricio-pagano/',
    github: 'https://github.com/ppagano91',
    profileImage:
      'https://media.licdn.com/dms/image/v2/D4D03AQFwDgltNvy2bg/profile-displayphoto-crop_800_800/B4DZ5QTuu_J8AI-/0/1779463810864?e=1781136000&v=beta&t=DXfE0ntB1aSf-WVQMzyoMF6JRTz9RPJ10hGPLZ0H-Ns',
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

