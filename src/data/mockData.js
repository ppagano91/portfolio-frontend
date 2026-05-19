/**
 * Datos mock para el portfolio
 * En el futuro, estos datos vendrán de una API REST
 */

export const aboutData = {
  title: 'Sobre mí',
  content: `Soy un desarrollador frontend apasionado por crear interfaces de usuario 
    intuitivas y experiencias digitales memorables. Con experiencia en tecnologías 
    modernas y un enfoque en código limpio y mantenible, busco siempre la excelencia 
    en cada proyecto.`,
  focus: 'Mi enfoque se centra en la creación de aplicaciones escalables, accesibles y con un diseño centrado en el usuario.',
}

export const experienceData = [
  {
    id: 1,
    title: 'Desarrollador Frontend Senior',
    company: 'Empresa Tech',
    period: '2022 - Presente',
    description: 'Lidero el desarrollo de interfaces de usuario utilizando React y TypeScript. Colaboro con equipos multidisciplinarios para entregar productos de alta calidad.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    id: 2,
    title: 'Desarrollador Frontend',
    company: 'Startup Innovadora',
    period: '2020 - 2022',
    description: 'Desarrollé y mantuve aplicaciones web responsivas, implementando mejores prácticas y optimizando el rendimiento.',
    technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
  },
  {
    id: 3,
    title: 'Desarrollador Junior',
    company: 'Agencia Digital',
    period: '2019 - 2020',
    description: 'Participé en el desarrollo de sitios web y aplicaciones, aprendiendo las bases del desarrollo frontend moderno.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
  },
]

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

export const educationData = {
  formal: [
    {
      id: 1,
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad Nacional',
      period: '2015 - 2019',
      description: 'Formación en ciencias de la computación, algoritmos y estructuras de datos.',
    },
    {
      id: 2,
      degree: 'Técnico en Programación',
      institution: 'Instituto Técnico',
      period: '2013 - 2015',
      description: 'Base técnica en programación y desarrollo de software.',
    },
  ],
  courses: [
    {
      id: 1,
      title: 'React Avanzado',
      institution: 'Platzi',
      period: '2023',
      description: 'Curso avanzado de React con hooks, context y optimización.',
    },
    {
      id: 2,
      title: 'TypeScript para Desarrolladores',
      institution: 'Udemy',
      period: '2022',
      description: 'Dominio completo de TypeScript en proyectos reales.',
    },
    {
      id: 3,
      title: 'Diplomatura en Desarrollo Full Stack',
      institution: 'Universidad Online',
      period: '2021',
      description: 'Programa completo de desarrollo full stack con proyectos prácticos.',
    },
  ],
}

