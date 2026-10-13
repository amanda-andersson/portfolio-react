type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
}

function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image"></div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard