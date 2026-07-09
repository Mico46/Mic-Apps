import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

type FormState = { name: string; email: string; service: string; message: string }
type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        ...form,
        createdAt: serverTimestamp(),
      })
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch (err) {
      console.error('Firestore write failed:', err)
      setErrorMsg('Something went wrong. Please try again or email us directly.')
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '14px 18px',
    color: '#fff',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: "'Inter', sans-serif",
    transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  }

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        padding: '100px 40px',
        background: 'linear-gradient(180deg, rgba(245,166,35,0.04) 0%, transparent 100%)',
        borderTop: '1px solid rgba(245,166,35,0.1)',
      }}
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(245,166,35,0.1)',
              border: '1px solid rgba(245,166,35,0.3)',
              borderRadius: '100px',
              padding: '5px 14px',
              marginBottom: '20px',
            }}
          >
            <span style={{ fontSize: '0.72rem', color: '#f5a623', fontWeight: 700, letterSpacing: '0.1em' }}>
              GET IN TOUCH
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 24px',
              letterSpacing: '-0.03em',
            }}
          >
            Let's Build
            <br />
            <span style={{ color: '#f5a623' }}>Something Great</span>
            <br />
            Together.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '44px', fontSize: '0.9rem' }}>
            Whether you have a detailed spec or just an idea, reach out. We will assess your needs and propose the right solution.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '📍', label: 'Address', value: 'Addis Ababa, Ethiopia' },
              { icon: '📧', label: 'Email', value: 'tex.mic22@gmail.com'},
              { icon: '📞', label: 'Phone', value: '+251 912469372 ,+251 912928016' },
              { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 8:30AM – 6:00PM EAT' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.35)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      marginBottom: '2px',
                    }}
                  >
                    {item.label.toUpperCase()}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          className="contact-form-box"
          style={{
            background: 'rgba(15,26,53,0.6)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '44px',
          }}
        >
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  marginBottom: '12px',
                }}
              >
                Message Received!
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '28px' }}>
                Thanks for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  background: 'rgba(245,166,35,0.12)',
                  border: '1px solid rgba(245,166,35,0.3)',
                  borderRadius: '8px',
                  color: '#f5a623',
                  padding: '10px 24px',
                  cursor: 'pointer',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                className="contact-name-email-grid"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.45)',
                      marginBottom: '8px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                    }}
                  >
                    FULL NAME
                  </label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Abebe Girma"
                    value={form.name}
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(245,166,35,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.45)',
                      marginBottom: '8px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    style={inputStyle}
                    type="email"
                    placeholder="abebe@company.com"
                    value={form.email}
                    required
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(245,166,35,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: '8px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                  }}
                >
                  SERVICE NEEDED
                </label>
                <select
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(245,166,35,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  <option value="" style={{ background: '#0f1a35' }}>Select a service...</option>
                  <option value="webapp" style={{ background: '#0f1a35' }}>Custom Web App</option>
                  <option value="mobile" style={{ background: '#0f1a35' }}>Mobile App</option>
                  <option value="erp" style={{ background: '#0f1a35' }}>ERP System</option>
                  <option value="school" style={{ background: '#0f1a35' }}>School Management</option>
                  <option value="hospital" style={{ background: '#0f1a35' }}>Hospital System</option>
                  <option value="ecommerce" style={{ background: '#0f1a35' }}>E-Commerce</option>
                  <option value="other" style={{ background: '#0f1a35' }}>Other</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: '8px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                  }}
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  placeholder="Tell us about your project — what problem are you solving, what's the scale, do you have a timeline?"
                  value={form.message}
                  required
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(245,166,35,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>

              {status === 'error' && (
                <div
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: '#f87171',
                    fontSize: '0.85rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  background: status === 'submitting' ? 'rgba(245,166,35,0.5)' : '#f5a623',
                  color: '#070d1f',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '16px',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'submitting') {
                    e.currentTarget.style.background = '#ffc45a'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = status === 'submitting' ? 'rgba(245,166,35,0.5)' : '#f5a623'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
