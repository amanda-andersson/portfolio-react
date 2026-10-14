function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hej, jag heter
          <br />
          Amanda.
        </h1>

        <p>
  Jag studerar till <span className="hero-highlight">Frontend Developer</span> på Medieinstitutet.
</p>

        <div className="hero-links">
          <a href="#projects">Se projekt</a>
          <a href="/cv.html" target="_blank" rel="noreferrer">
  Öppna CV
</a>
        </div>
      </div>

      <div className="lia-card">
        <h2>LIA 2027</h2>
        <p>4 januari – 12 mars 2027</p>
        <p>
          Jag söker en LIA-plats där jag får utvecklas inom frontend och samtidigt bidra med det jag kan. 
          <p>Kanske är vi en bra match?</p>
        </p>
      </div>
    </section>
  )
}

export default Hero