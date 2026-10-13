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

    setErrors({
      name: formData.name ? '' : 'Fyll i ditt namn',
      email: formData.email ? '' : 'Fyll i din e-post',
      phone: formData.phone ? '' : 'Fyll i ditt telefonnummer',
      subject: formData.subject ? '' : 'Fyll i ett ämne',
      message: formData.message ? '' : 'Skriv ett meddelande',
    })

    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.subject &&
      formData.message
    ) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <h2>Kontakt</h2>

      <div className="contact-info">
        <p>
          E-post:{' '}
          <a href="mailto:andersson.91.amanda@gmail.com">
            andersson.91.amanda@gmail.com
          </a>
        </p>

        <p>
          GitHub:{' '}
          <a
            href="https://github.com/amanda-andersson"
            target="_blank"
            rel="noreferrer"
          >
            github.com/amanda-andersson
          </a>
        </p>

        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/amanda-andersson-b0780b404/"
            target="_blank"
            rel="noreferrer"
          >
            Amanda Andersson
          </a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
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
            {errors.name && <span className="error">{errors.name}</span>}
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
            {errors.email && <span className="error">{errors.email}</span>}
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
            {errors.phone && <span className="error">{errors.phone}</span>}
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
            {errors.subject && <span className="error">{errors.subject}</span>}
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
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit">Skicka meddelande</button>
      </form>

      {success && (
        <p className="success">Tack! Ditt meddelande har skickats.</p>
      )}
    </section>
  )
}

export default Contact