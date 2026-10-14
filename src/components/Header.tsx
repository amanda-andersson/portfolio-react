import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header>
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Öppna meny"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <a href="#home" onClick={closeMenu}>Hem</a>
        <a href="#about" onClick={closeMenu}>Om mig</a>
        <a href="#projects" onClick={closeMenu}>Projekt</a>
        <a href="#skills" onClick={closeMenu}>Kompetenser</a>
        <a href="#contact" onClick={closeMenu}>Kontakt</a>
      </nav>
    </header>
  )
}

export default Header