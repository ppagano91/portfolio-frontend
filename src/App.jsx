import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Technologies from './sections/Technologies'
import Education from './sections/Education'
import Contact from './sections/Contact'
import { PORTFOLIO_CONFIG } from './config/constants'

/**
 * Componente principal de la aplicación
 * Integra todas las secciones del portfolio
 * Arquitectura preparada para futura integración con API REST
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {PORTFOLIO_CONFIG.sections.hero && <Hero />}
        {PORTFOLIO_CONFIG.sections.about && <About />}
        {PORTFOLIO_CONFIG.sections.experience && <Experience />}
        {PORTFOLIO_CONFIG.sections.projects && <Projects />}
        {PORTFOLIO_CONFIG.sections.technologies && <Technologies />}
        {PORTFOLIO_CONFIG.sections.education && <Education />}
        {PORTFOLIO_CONFIG.sections.contact && <Contact />}
      </main>
      <Footer />
    </div>
  )
}

export default App

