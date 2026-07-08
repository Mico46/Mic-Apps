import { useState } from 'react'

const services = [
  {
    icon: '⚡',
    title: 'Custom Web Apps',
    desc: 'Tailor-made web applications built for your exact business logic. Fast, scalable, and maintainable.',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile applications that deliver native performance for iOS and Android users.',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
  },
  {
    icon: '🏢',
    title: 'ERP Systems',
    desc: 'Enterprise Resource Planning solutions that unify your finance, HR, supply chain, and operations.',
    tags: ['Enterprise', 'Integration', 'Automation'],
  },
  {
    icon: '🎓',
    title: 'School Management',
    desc: 'Complete school administration platforms: admissions, grades, timetables, fees, and parent portals.',
    tags: ['Education', 'Multi-role', 'Reports'],
  },
  {
    icon: '🏥',
    title: 'Hospital Systems',
    desc: 'Patient management, appointment booking, EMR, billing, and pharmacy systems for modern healthcare.',
    tags: ['Healthcare', 'EMR', 'HIPAA-aligned'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    desc: 'Full-featured online stores with inventory management, payment gateway integration, and analytics.',
    tags: ['Payments', 'Inventory', 'Analytics'],
  },
]

export default function Services() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section
      id="services"
      style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '64px' }}>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(0,201,177,0.1)',
            border: '1px solid rgba(0,201,177,0.3)',
            borderRadius: '100px',
            padding: '5px 14px',
            marginBottom: '20px',
          }}
        >
          <span style={{ fontSize: '0.72rem', color: '#00c9b1', fontWeight: 700, letterSpacing: '0.1em' }}>
            WHAT WE BUILD
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            margin: '0 0 16px',
            letterSpacing: '-0.03em',
          }}
        >
          End-to-End Digital
          <br />
          <span style={{ color: '#f5a623' }}>Solutions</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '480px', lineHeight: 1.7 }}>
          From concept to deployment, we engineer software that solves real problems
          and creates measurable business value.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
        }}
      >
        {services.map((s, i) => (
          <div
            key={s.title}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              background: active === i
                ? 'linear-gradient(135deg, rgba(245,166,35,0.08), rgba(0,201,177,0.05))'
                : 'rgba(255,255,255,0.03)',
              border: active === i
                ? '1px solid rgba(245,166,35,0.3)'
                : '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '36px',
              cursor: 'default',
              transition: 'all 0.3s ease',
              transform: active === i ? 'translateY(-4px)' : 'none',
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                marginBottom: '20px',
                width: '52px',
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(245,166,35,0.1)',
                borderRadius: '12px',
              }}
            >
              {s.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                margin: '0 0 12px',
                letterSpacing: '-0.01em',
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                margin: '0 0 24px',
              }}
            >
              {s.desc}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.6)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
