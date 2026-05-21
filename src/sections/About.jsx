import React from 'react'
import { usePortfolio } from '../contexts/PortfolioContext'
import { aboutData } from '../data/mockData'
import { SectionError, SectionLoading } from '../components/SectionState'

const About = () => {
  const { profile, loading, error } = usePortfolio()
  const about = profile?.about || aboutData

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">{about.title}</h2>
        {loading && <SectionLoading />}
        {error && !loading && <SectionError message={error} />}
        {!loading && (
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>{about.content}</p>
            {about.focus && (
              <p className="text-primary-600 dark:text-primary-400 font-medium">{about.focus}</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
