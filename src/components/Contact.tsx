import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = {
      name: formData.name.trim() ? '' : 'Fyll i ditt namn',
      email: formData.email.trim() ? '' : 'Fyll i din e-post',
      phone: formData.phone.trim() ? '' : 'Fyll i ditt telefonnummer',
      subject: formData.subject.trim() ? '' : 'Fyll i ett ämne',
      message: formData.message.trim() ? '' : 'Skriv ett meddelande',
    }

    setErrors(newErrors)

    const isValid = Object.values(newErrors).every(
      (error) => error === ''
    )

    setSuccess(isValid)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-layout">
        <div className="contact-left">
          <h2>Kontakt</h2>

          <p className="contact-intro">
            Har du en fråga, ett förslag eller vill komma i
            kontakt angående LIA? Fyll i formuläret så hör
            jag av mig!
          </p>

      <div className="contact-info">
  <a href="mailto:andersson.91.amanda@gmail.com">
    <span className="contact-icon">
      <FaEnvelope />
    </span>
    <span>andersson.91.amanda@gmail.com</span>
  </a>

  <a
    href="https://github.com/amanda-andersson"
    target="_blank"
    rel="noreferrer"
  >
    <span className="contact-icon">
      <FaGithub />
    </span>
    <span>GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/amanda-andersson-b0780b404/"
    target="_blank"
    rel="noreferrer"
  >
    <span className="contact-icon">
      <FaLinkedin />
    </span>
    <span>LinkedIn</span>
  </a>
</div>
</div>

        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>
                Namn
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <span className="error">{errors.name}</span>
                )}
              </label>

              <label>
                E-post
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </label>
            </div>

            <div className="form-row">
              <label>
                Telefon
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <span className="error">{errors.phone}</span>
                )}
              </label>

              <label>
                Ämne
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
                {errors.subject && (
                  <span className="error">{errors.subject}</span>
                )}
              </label>
            </div>

            <label>
              Meddelande
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </label>

            <button type="submit">
              Skicka meddelande <span aria-hidden="true">→</span>
            </button>

            {success && (
              <p className="success" role="status">
                Tack! Formuläret är korrekt ifyllt.
                Meddelandet har inte skickats ännu.
              </p>
            )}
          </form>
        </div>
      </div>
   <div className="contact-ending">
        <h3>Tack för att du tog dig hit!</h3>
        <p>Jag ser fram emot att höra från dig. ♡</p>
      </div>
      
    </section>
  )
}

export default Contact