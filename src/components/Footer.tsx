export default function Footer() {
  const links = {
    Services: ['Custom Web Apps', 'Mobile Apps', 'ERP Systems', 'School Management', 'Hospital Systems', 'E-Commerce'],
    Company: ['About Mic', 'Our Process', 'Careers', 'Blog'],
    Contact: ['tex.mic22@gmail.com', '+251 91 246 93 72', 'Addis Ababa, Ethiopia'],
  }

  return (
    <footer
      className="footer-root"
      style={{
        background: '#040a18',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '72px 40px 40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Brand */}
          <div className="footer-brand">
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: '2rem',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Mic<span style={{ color: '#f5a623' }}>.</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '280px', margin: '0 0 28px' }}>
              Building digital solutions that transform businesses across Ethiopia and East Africa.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['𝕏', 'in', 'fb', 'gh'].map((social) => (
                <div
                  key={social}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(245,166,35,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(245,166,35,0.3)'
                    e.currentTarget.style.color = '#f5a623'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                  }}
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.1em',
                  marginBottom: '20px',
                }}
              >
                {col.toUpperCase()}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a623')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>
            © 2024 Mic Web & App Development. All rights reserved. · Addis Ababa, Ethiopia 🇪🇹
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
