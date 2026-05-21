import React from 'react'
import { usePortfolio } from '../contexts/PortfolioContext'
import { experienceData } from '../data/mockData'
import { SectionEmpty, SectionError, SectionLoading } from '../components/SectionState'

const Experience = () => {
  const { profile, loading, error } = usePortfolio()
  const items = profile?.experience?.length ? profile.experience : experienceData

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Experiencia</h2>
        <p className="section-subtitle text-center">
          Mi trayectoria profesional y los proyectos en los que he trabajado
        </p>

        {loading && <SectionLoading />}
        {error && !loading && <SectionError message={error} />}
        {!loading && !items.length && <SectionEmpty message="Sin experiencia registrada." />}
        {!loading && items.length > 0 && (
          <div className="space-y-8">
            {items.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-primary-300 dark:border-primary-600 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
