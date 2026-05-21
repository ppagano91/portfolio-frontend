import React, { useEffect, useState } from 'react'
import { technologiesData } from '../data/mockData'
import { getTechnologies, groupTechnologies } from '../services/technologyService'
import { SectionEmpty, SectionError, SectionLoading } from '../components/SectionState'

const MOCK_CATEGORIES = [
  { name: 'Frontend', data: technologiesData.frontend },
  { name: 'Backend', data: technologiesData.backend },
  { name: 'GIS', data: technologiesData.gis },
  { name: 'Otros', data: technologiesData.otros },
]

const Technologies = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        const data = await getTechnologies()
        if (!cancelled) {
          setCategories(groupTechnologies(data))
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setCategories(MOCK_CATEGORIES)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const getLevelColor = (level) => {
    if (level === 'Avanzado') return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
    if (level === 'Intermedio') return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
    return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
  }

  return (
    <section id="technologies" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Tecnologías</h2>
        <p className="section-subtitle text-center">
          Stack tecnológico y herramientas que utilizo
        </p>

        {loading && <SectionLoading />}
        {error && !loading && (
          <p className="text-center text-amber-600 dark:text-amber-400 text-sm mb-4">
            Mostrando datos locales: {error}
          </p>
        )}
        {!loading && !categories.length && <SectionEmpty />}
        {!loading && categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className="card animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-200 dark:border-primary-700">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.data.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                      {tech.level && (
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(
                            tech.level
                          )}`}
                        >
                          {tech.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Technologies
