import React, { useEffect, useState } from 'react'
import { educationData } from '../data/mockData'
import { getEducation, mapEducationToView } from '../services/educationService'
import { SectionEmpty, SectionError, SectionLoading } from '../components/SectionState'

const Education = () => {
  const [education, setEducation] = useState({ formal: [], courses: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        const data = await getEducation()
        if (!cancelled) {
          setEducation(mapEducationToView(data))
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setEducation(educationData)
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

  const { formal, courses } = education

  return (
    <section id="education" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Educación y Cursos</h2>
        <p className="section-subtitle text-center">
          Mi formación académica y aprendizaje continuo
        </p>

        {loading && <SectionLoading />}
        {error && !loading && (
          <p className="text-center text-amber-600 dark:text-amber-400 text-sm mb-4">
            Mostrando datos locales: {error}
          </p>
        )}
        {!loading && !formal.length && !courses.length && (
          <SectionEmpty message="Sin registros de educación." />
        )}
        {!loading && (formal.length > 0 || courses.length > 0) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                {formal.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Sin registros de educación formal.
                  </p>
                )}
                {formal.map((edu) => (
                  <div key={edu.id} className="card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      {edu.period && (
                        <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">
                          {edu.period}
                        </span>
                      )}
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institutionUrl ? (
                        <a
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {edu.institution}
                        </a>
                      ) : (
                        edu.institution
                      )}
                    </p>
                    {edu.fieldOfStudy && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {edu.fieldOfStudy}
                      </p>
                    )}
                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

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
                {courses.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Sin cursos o diplomaturas registrados.
                  </p>
                )}
                {courses.map((course) => (
                  <div key={course.id} className="card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {course.title}
                      </h4>
                      {course.period && (
                        <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">
                          {course.period}
                        </span>
                      )}
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {course.institutionUrl ? (
                        <a
                          href={course.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {course.institution}
                        </a>
                      ) : (
                        course.institution
                      )}
                    </p>
                    {course.fieldOfStudy && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {course.fieldOfStudy}
                      </p>
                    )}
                    {course.description && (
                      <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
