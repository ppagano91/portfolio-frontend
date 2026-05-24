/**
 * Datos mock para el portfolio (fallback cuando la API no está disponible).
 * Alineados con init.sql y la DB de producción.
 */

export const profileData = {
  id: 1,
  name: 'Patricio Pagano',
  slug: 'patricio-pagano',
  title:
    'Desarrollador Full Stack GIS | Licenciado en Ciencias Geológicas | Especialista en Ciencia de Datos',
  subtitle:
    'GIS, datos espaciales, backend, GeoServer, PostgreSQL/PostGIS, React y MapLibre',
  summary:
    'Geólogo y Desarrollador Full Stack GIS con experiencia en aplicaciones web geoespaciales, APIs REST, bases de datos espaciales y publicación de servicios GIS.',
  location: 'Argentina',
  profile_image_url:
    'https://media.licdn.com/dms/image/v2/D4D03AQFwDgltNvy2bg/profile-displayphoto-crop_800_800/B4DZ5QTuu_J8AI-/0/1779463810864?e=1781136000&v=beta&t=DXfE0ntB1aSf-WVQMzyoMF6JRTz9RPJ10hGPLZ0H-Ns',
  linkedin_url: 'https://www.linkedin.com/in/patricio-pagano/',
  github_url: 'https://github.com/ppagano91',
  email: 'pagano.patricio@gmail.com',
  phone: '2916418967',
  cv_url:
    'https://drive.google.com/drive/u/1/folders/1mqtv3alsWqKROhL-kHZItUuF0GuMMeqs',
  about_title: 'Sobre mí',
  about_content: `Soy Licenciado en Ciencias Geológicas y Desarrollador Full Stack GIS, con formación complementaria en Ciencia de Datos, Sistemas de Información Geográfica y Geomática. Mi perfil combina conocimiento territorial, análisis de datos espaciales y desarrollo de software para construir soluciones geoespaciales robustas, claras y mantenibles.

Trabajo en el desarrollo de aplicaciones web GIS, APIs REST y herramientas para consulta, visualización y administración de información geográfica. Tengo experiencia con PostgreSQL/PostGIS, GeoServer, QGIS, servicios OGC y librerías de mapas web como Leaflet y MapLibre, integrando backend, frontend y bases de datos espaciales en soluciones orientadas a usuarios técnicos y funcionales.

Me interesa especialmente la intersección entre geociencias, datos y tecnología. Por eso oriento mi trabajo hacia proyectos vinculados a GIS, geomática, análisis territorial, minería, Oil & Gas y visualización de datos georreferenciados. Busco desarrollar herramientas que no solo funcionen, sino que también sean útiles, eficientes y fáciles de evolucionar.`,
  focus_areas: [
    'Aplicaciones Web Geoespaciales',
    'APIs REST para Datos Espaciales',
    'Ciencia de Datos',
    'Geomática',
    'Geociencias',
    'Minería',
    'Oil & Gas',
  ],
  key_skills: [
    'Python',
    'PostgreSQL',
    'PostGIS',
    'GeoServer',
    'GeoNetwork',
    'Geoserver',
    'React',
    'JavaScript',
    'TypeScript',
    'MapLibre',
    'Power BI',
    'Docker',
    'Git',
  ],
  is_active: true,
  sort_order: 0,
}

export const aboutData = {
  title: profileData.about_title,
  content: profileData.about_content,
  focusAreas: profileData.focus_areas,
  keySkills: profileData.key_skills,
}

/** Formato de tarjeta usado por Experience.jsx (solo publicados). */
export const experienceData = [
  {
    id: 1,
    title: 'Desarrollador Full Stack GIS',
    company: 'Geosystems SA',
    period: '2023 - Presente',
    description:
      'Desarrollo de soluciones web geoespaciales, APIs REST, integración con servicios GIS y bases de datos espaciales.',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL/PostGIS',
      'GeoServer',
      'QGIS',
      'React',
      'Leaflet',
      'MapLibre',
      'Docker',
      'Git',
    ],
    location: 'Ciudad Autónoma de Buenos Aires',
  },
  {
    id: 2,
    title: 'Desarrollador Full Stack Jr',
    company: 'Paradigma del Sur SA',
    period: '2022 - 2023',
    description:
      'Desarrollo y mantenimiento de aplicaciones web, funcionalidades frontend/backend y resolución de incidencias técnicas.',
    technologies: ['JavaScript', 'React', 'Python', 'Django', 'SQL', 'Git'],
    location: 'Bahía Blanca',
  },
  {
    id: 3,
    title: 'Auxiliar de Investigación',
    company: 'Universidad Nacional del Sur',
    period: '2021 - 2022',
    description: 'Análisis geológico y geoespacial aplicado a la Cuenca Neuquina.',
    technologies: ['QGIS', 'GIS', 'Python', 'Datos georreferenciados'],
    location: 'Bahía Blanca',
  },
]

export const educationData = {
  formal: [
    {
      id: 2,
      degree: 'Especialización en Ciencia de Datos',
      institution: 'Universidad Nacional del Sur',
      period: '2022 - 2023',
      description: '',
      fieldOfStudy: 'Computación',
      location: 'Bahía Blanca',
      institutionUrl: null,
    },
    {
      id: 1,
      degree: 'Licenciatura en Ciencias Geológicas',
      institution: 'Universidad Nacional del Sur',
      period: '2011 - 2017',
      description: '',
      fieldOfStudy: 'Geología',
      location: 'Bahía Blanca',
      institutionUrl: null,
    },
  ],
  courses: [
    {
      id: 3,
      title: 'Diplomatura en Geomática Aplicada',
      institution: 'Instituto Gulich',
      period: '2025 - 2025',
      description: '',
      category: 'tecnologías de la información',
      skills: [],
      credentialUrl: null,
      institutionUrl: null,
    },
    {
      id: 4,
      title: 'Diplomatura en Sistemas de Información Geográfica',
      institution: 'Universidad de Buenos Aires',
      period: '2022 - 2022',
      description: '',
      category: 'tecnologías de la información',
      skills: [],
      credentialUrl: null,
      institutionUrl: null,
    },
  ],
}

export const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/600x400?text=E-commerce+Platform',
    githubUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://proyecto-demo.com',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interactivo para visualización de datos con gráficos en tiempo real y exportación de reportes.',
    technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
    image: 'https://via.placeholder.com/600x400?text=Dashboard+Analytics',
    githubUrl: 'https://github.com/usuario/dashboard',
    liveUrl: 'https://dashboard-demo.com',
  },
  {
    id: 3,
    title: 'App de Gestión de Tareas',
    description: 'Aplicación web para gestión de tareas con colaboración en tiempo real y notificaciones push.',
    technologies: ['React', 'Firebase', 'Material-UI', 'PWA'],
    image: 'https://via.placeholder.com/600x400?text=Task+Manager',
    githubUrl: 'https://github.com/usuario/task-manager',
    liveUrl: 'https://tasks-demo.com',
  },
]

export const technologiesData = {
  frontend: [
    { name: 'React', level: 'Avanzado' },
    { name: 'TypeScript', level: 'Avanzado' },
    { name: 'JavaScript', level: 'Avanzado' },
    { name: 'HTML5', level: 'Avanzado' },
    { name: 'CSS3', level: 'Avanzado' },
    { name: 'Tailwind CSS', level: 'Avanzado' },
    { name: 'Next.js', level: 'Intermedio' },
    { name: 'Vue.js', level: 'Intermedio' },
  ],
  backend: [
    { name: 'Node.js', level: 'Intermedio' },
    { name: 'Express', level: 'Intermedio' },
    { name: 'REST APIs', level: 'Intermedio' },
    { name: 'MongoDB', level: 'Intermedio' },
    { name: 'PostgreSQL', level: 'Básico' },
  ],
  gis: [
    { name: 'ArcGIS', level: 'Intermedio' },
    { name: 'QGIS', level: 'Intermedio' },
    { name: 'Leaflet', level: 'Intermedio' },
    { name: 'Mapbox', level: 'Básico' },
  ],
  otros: [
    { name: 'Git', level: 'Avanzado' },
    { name: 'Docker', level: 'Intermedio' },
    { name: 'CI/CD', level: 'Intermedio' },
    { name: 'AWS', level: 'Básico' },
  ],
}
