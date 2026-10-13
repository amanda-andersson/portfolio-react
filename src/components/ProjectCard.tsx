type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  live: string
}

function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
  className="project-image"
  src={image}
  alt={`Bild av projektet ${title}`}
/>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
  {live && (
    <a href={live} target="_blank" rel="noreferrer">
      Live
    </a>
  )}

  {github && (
    <a href={github} target="_blank" rel="noreferrer">
      GitHub
    </a>
  )}
</div>

    </article>
  )
}

export default ProjectCard