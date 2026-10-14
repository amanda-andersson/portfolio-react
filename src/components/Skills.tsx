import { useEffect, useRef, useState } from 'react'

const skills = [
  'HTML',
  'CSS / SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'REST API',
  'Git / GitHub',
  'Databaser',
  'Figma',
]

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <h2>Kompetenser</h2>

      <div className={`skills-list ${isVisible ? 'visible' : ''}`}>
        {skills.map((skill, index) => (
          <span
            className="skill-animation"
            style={{ transitionDelay: `${index * 120}ms` }}
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills