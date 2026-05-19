# Portfolio Profesional

Portfolio profesional moderno desarrollado con React y Tailwind CSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia, profesional y responsive
- **Mobile-First**: Diseño optimizado para todos los dispositivos
- **Dark Mode**: Tema oscuro/claro con toggle y persistencia
- **Foto de Perfil**: Sección hero con foto de perfil personalizable
- **Paleta Indigo/Purple**: Colores modernos y profesionales
- **Animaciones Sutiles**: Transiciones y efectos hover elegantes
- **Arquitectura Escalable**: Estructura preparada para integración con API REST
- **Componentes Reutilizables**: Código modular y mantenible

## 🛠️ Tecnologías

- **React**: Framework frontend
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Framework de estilos utility-first
  - Elegido sobre Bootstrap por su flexibilidad, mejor integración con React y enfoque más moderno

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/       # Componentes reutilizables (Navbar, Footer)
│   ├── sections/         # Secciones del portfolio
│   ├── config/           # Configuración centralizada
│   ├── data/             # Datos mock (preparado para API)
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales y Tailwind
├── public/               # Archivos estáticos
└── package.json
```

## 🎨 Secciones

1. **Hero**: Presentación principal con CTA
2. **Sobre mí**: Información personal y enfoque profesional
3. **Experiencia**: Timeline de experiencia laboral
4. **Proyectos**: Cards con proyectos destacados
5. **Tecnologías**: Stack tecnológico por categorías
6. **Educación**: Educación formal y cursos
7. **Contacto**: Formulario y links sociales

## 🚦 Instalación y Uso

### Prerrequisitos

- Node.js (v18 o superior)
- npm

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para Producción

```bash
npm run build
```

### Preview de Producción

```bash
npm run preview
```

## ⚙️ Configuración

### Personalizar Contenido

Edita los archivos en `src/config/constants.js` y `src/data/mockData.js` para personalizar:

- Información personal
- Foto de perfil (coloca tu imagen en `public/images/profile.jpg`)
- Experiencia laboral
- Proyectos
- Tecnologías
- Educación

### Agregar Foto de Perfil

1. Coloca tu imagen en `public/images/profile.jpg`
2. O actualiza la ruta en `src/config/constants.js`:
   ```javascript
   profileImage: '/images/tu-imagen.jpg',
   ```
3. La imagen se mostrará automáticamente en la sección Hero
4. Si no hay imagen, se mostrará un placeholder con las iniciales

### Dark Mode

El dark mode está habilitado por defecto con:
- Toggle en el Navbar (desktop y mobile)
- Persistencia en localStorage
- Detección automática de preferencia del sistema
- Transiciones suaves entre temas

### Preparación para Backend

El proyecto está estructurado para facilitar la integración con una API REST:

- Los datos mock están en `src/data/mockData.js`
- La configuración centralizada está en `src/config/constants.js`
- Los componentes están preparados para recibir props dinámicas

## 📝 Próximos Pasos

- [ ] Integrar API REST para datos dinámicos
- [ ] Implementar lógica de envío del formulario de contacto
- [ ] Agregar más animaciones y transiciones
- [ ] Optimización de imágenes
- [ ] SEO y meta tags
- [ ] Analytics

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

