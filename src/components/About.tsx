import { useEffect, useRef, useState } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.25,
      }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`about scroll-section ${isVisible ? 'visible' : ''}`}
      id="about"
      ref={aboutRef}
    >
      <div className="about-content">
        <div className="about-text">
          <h2>Om mig</h2>

          <p>
            Jag håller på att skola om mig efter att ha jobbat flera år inom butik
            och service. Frontendutveckling kändes som ett naturligt val eftersom
            jag alltid har tyckt om design, skapande och problemlösning. Det jag
            fastnade för är kombinationen av teknik och kreativitet – att få bygga
            lösningar som både ser bra ut och känns tydliga och enkla att använda.
          </p>
        </div>

        <img
          className="about-image"
          src="/images/amandaportfolio.png"
          alt="Porträtt av Amanda"
        />
      </div>
    </section>
  )
}

export default About