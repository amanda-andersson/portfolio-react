import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

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

  return (
    <section className="projects" id="projects">
      <h2>Några av mina projekt</h2>

      <div className="project-filters">
  <button
    className={selectedTechnologies.includes('React') ? 'active' : ''}
    onClick={() => toggleTechnology('React')}
  >
    React
  </button>

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

  <button onClick={() => setSelectedTechnologies([])}>
  Rensa filter
</button>
</div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <ProjectCard
  key={project.id}
  title={project.title}
  description={project.description}
  technologies={project.technologies}
  image={project.image}
  github={project.github}
  live={project.live}
/>
        ))}
      </div>
    </section>
  )
}

export default Projects