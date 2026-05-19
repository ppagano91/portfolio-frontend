import React from 'react'
import { PORTFOLIO_CONFIG } from '../config/constants'

/**
 * Sección Hero - Primera impresión del portfolio
 * Incluye foto de perfil, nombre, rol, tagline y CTA
 */
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Foto de perfil */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={PORTFOLIO_CONFIG.personal.profileImage}
                alt={PORTFOLIO_CONFIG.personal.name}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl ring-4 ring-primary-200 dark:ring-primary-800"
                onError={(e) => {
                  // Fallback si la imagen no se encuentra
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Placeholder si no hay imagen */}
              <div
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-xl ring-4 ring-primary-200 dark:ring-primary-800"
                style={{ display: 'none' }}
              >
                {PORTFOLIO_CONFIG.personal.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            {PORTFOLIO_CONFIG.personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-600 dark:text-primary-400 mb-6">
            {PORTFOLIO_CONFIG.personal.role}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {PORTFOLIO_CONFIG.personal.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

