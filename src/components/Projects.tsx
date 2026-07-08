import { useState } from 'react'

const projects = [
  {
    title: 'MedTrack Pro',
    category: 'Hospital Management',
    desc: 'A complete hospital information system covering patient records, appointment scheduling, pharmacy management, and billing for a network of 8 clinics across Addis Ababa.',
    img: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=600&h=400&fit=crop&auto=format',
    accent: '#00c9b1',
    tags: ['EMR', 'Billing', 'Pharmacy', 'Multi-branch'],
  },
  {
    title: 'EduSphere LMS',
    category: 'School Management System',
    desc: 'Full school administration platform serving 3 private schools — student enrollment, grade tracking, fee collection, timetables, and parent mobile portal in one unified platform.',
    img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop&auto=format',
    accent: '#f5a623',
    tags: ['Grades', 'Timetables', 'Fees', 'Parent Portal'],
  },
  {
    title: 'Selam ERP',
    category: 'Enterprise Resource Planning',
    desc: 'Custom ERP system built for a mid-size manufacturing company, integrating inventory, procurement, HR payroll, and financial reporting into a single workflow.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
    accent: '#f5a623',
    tags: ['Inventory', 'HR', 'Payroll', 'Finance'],
  },
  {
    title: 'ShopEthio',
    category: 'E-Commerce Platform',
    desc: 'Multi-vendor e-commerce marketplace with real-time inventory, Telebirr & bank payment integration, delivery tracking, and a seller analytics dashboard.',
    img: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=600&h=400&fit=crop&auto=format',
    accent: '#00c9b1',
    tags: ['Multi-vendor', 'Payments', 'Delivery', 'Analytics'],
  },
]

export default function Projects() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section
      id="projects"
      style={{
        padding: '100px 40px',
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
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
                OUR WORK
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: '-0.03em',
              }}
            >
              Projects That
              <br />
              <span style={{ color: '#f5a623' }}>Drive Results</span>
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '320px', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>
            A selection of systems we have built and deployed for clients across Ethiopia and East Africa.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
            gap: '28px',
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: active === i
                  ? `1px solid ${p.accent}40`
                  : '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.35s ease',
                transform: active === i ? 'translateY(-6px)' : 'none',
                boxShadow: active === i ? `0 24px 60px rgba(0,0,0,0.4)` : 'none',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '220px', background: '#0f1a35', overflow: 'hidden' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.7,
                    transition: 'transform 0.4s ease, opacity 0.3s',
                    transform: active === i ? 'scale(1.04)' : 'scale(1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom, transparent 30%, rgba(7,13,31,0.9) 100%)`,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '20px',
                    background: `${p.accent}22`,
                    border: `1px solid ${p.accent}55`,
                    borderRadius: '100px',
                    padding: '4px 12px',
                  }}
                >
                  <span style={{ fontSize: '0.7rem', color: p.accent, fontWeight: 700, letterSpacing: '0.08em' }}>
                    {p.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px', background: 'rgba(15,26,53,0.5)' }}>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    margin: '0 0 12px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.7, margin: '0 0 20px' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `${p.accent}12`,
                        border: `1px solid ${p.accent}30`,
                        borderRadius: '4px',
                        padding: '3px 10px',
                        fontSize: '0.72rem',
                        color: p.accent,
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
