import React from 'react'
import { educationData } from '../data/mockData'

/**
 * Sección Educación y Cursos
 * Separada en educación formal y cursos/diplomaturas
 */
const Education = () => {
  return (
    <section id="education" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Educación y Cursos</h2>
        <p className="section-subtitle text-center">
          Mi formación académica y aprendizaje continuo
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Educación Formal */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary-600 dark:text-primary-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path d="M12 14v7" />
              </svg>
              Educación Formal
            </h3>
            <div className="space-y-6">
              {educationData.formal.map((edu) => (
                <div key={edu.id} className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cursos y Diplomaturas */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary-600 dark:text-primary-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Cursos y Diplomaturas
            </h3>
            <div className="space-y-6">
              {educationData.courses.map((course) => (
                <div key={course.id} className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {course.title}
                    </h4>
                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">
                      {course.period}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {course.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

