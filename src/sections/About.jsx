import React, { useMemo } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import { aboutData } from "../data/mockData";
import { SectionEmpty, SectionLoading } from "../components/SectionState";
import { mapProfileToAbout } from "../services/profileService";

const CHIP_CLASS =
  "px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium";

function getLocalAboutFallback() {
  return {
    title: aboutData.title,
    content: aboutData.content,
    focusAreas: aboutData.focusAreas || [],
    keySkills: aboutData.keySkills || [],
    focusText: null,
  };
}

const About = () => {
  const { profile, loading, error } = usePortfolio();

  const about = useMemo(() => {
    if (profile) {
      return mapProfileToAbout(profile);
    }
    return getLocalAboutFallback();
  }, [profile]);

  const hasContent =
    Boolean(about.content) ||
    about.focusAreas.length > 0 ||
    about.keySkills.length > 0 ||
    Boolean(about.focusText);

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">{about.title}</h2>

        {loading && <SectionLoading />}

        {error && !loading && (
          <p className="text-center text-amber-600 dark:text-amber-400 text-sm mb-4">
            Mostrando datos locales: {error}
          </p>
        )}

        {!loading && (
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {about.content && <p className="text-justify">{about.content}</p>}

            {!profile && about.focusText && (
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {about.focusText}
              </p>
            )}

            {about.focusAreas.length > 0 && (
              <div>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  Áreas de foco
                </p>
                <div className="flex flex-wrap gap-2">
                  {about.focusAreas.map((area) => (
                    <span key={area} className={CHIP_CLASS}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {about.keySkills.length > 0 && (
              <div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                  Habilidades principales
                </p>
                <div className="flex flex-wrap gap-2">
                  {about.keySkills.map((skill) => (
                    <span key={skill} className={CHIP_CLASS}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {!hasContent && (
              <SectionEmpty message="No hay información disponible en esta sección." />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
