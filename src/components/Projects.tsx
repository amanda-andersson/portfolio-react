import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const projectListRef = useRef<HTMLDivElement>(null)

  const toggleTechnology = (technology: string) => {
    if (selectedTechnologies.includes(technology)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((item) => item !== technology)
      )
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology])
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (selectedTechnologies.length === 0) {
      return true
    }

    return selectedTechnologies.some((technology) =>
      project.technologies.includes(technology)
    )
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    if (projectListRef.current) {
      observer.observe(projectListRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects" id="projects">
      <h2>Några av mina projekt</h2>

      <p className="filter-label">Filtrera efter teknik</p>

      <div className="project-filters">
        <button
          className={selectedTechnologies.includes('TypeScript') ? 'active' : ''}
          onClick={() => toggleTechnology('TypeScript')}
        >
          TypeScript
        </button>

        <button
          className={selectedTechnologies.includes('JavaScript') ? 'active' : ''}
          onClick={() => toggleTechnology('JavaScript')}
        >
          JavaScript
        </button>

        <button
          className={selectedTechnologies.includes('API') ? 'active' : ''}
          onClick={() => toggleTechnology('API')}
        >
          API
        </button>

        <button
          className={selectedTechnologies.includes('SCSS') ? 'active' : ''}
          onClick={() => toggleTechnology('SCSS')}
        >
          SCSS
        </button>

        {selectedTechnologies.length > 0 && (
          <button
            className="clear-filter"
            onClick={() => setSelectedTechnologies([])}
          >
            Rensa filter
          </button>
        )}
      </div>

      <div
        className={`project-list ${isVisible ? 'visible' : ''}`}
        ref={projectListRef}
      >
        {filteredProjects.map((project, index) => (
          <div
            className="project-animation"
            style={{ transitionDelay: `${index * 100}ms` }}
            key={project.id}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              github={project.github}
              live={project.live}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects