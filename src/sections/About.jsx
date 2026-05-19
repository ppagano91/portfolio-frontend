import React from 'react'
import { aboutData } from '../data/mockData'

/**
 * Sección Sobre mí
 * Información personal y enfoque profesional
 */
const About = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">{aboutData.title}</h2>
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>{aboutData.content}</p>
          <p className="text-primary-600 dark:text-primary-400 font-medium">{aboutData.focus}</p>
        </div>
      </div>
    </section>
  )
}

export default About

