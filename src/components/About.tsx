export default function About() {
  const values = [
    { icon: '🎯', title: 'Precision Engineering', desc: 'Every system we build is architected for reliability, performance, and long-term maintainability.' },
    { icon: '🤝', title: 'Partnership First', desc: 'We embed ourselves in your business challenge before writing a single line of code.' },
    { icon: '🌍', title: 'Built for Africa', desc: "Our solutions are designed for Ethiopian and East African infrastructure realities — offline-first, lightweight, and localized." },
    { icon: '📈', title: 'Measurable Impact', desc: 'We track outcomes, not just deliverables. Our clients see real ROI from the systems we build.' },
  ]

  return (
    <section
      id="about"
      className="about-section"
      style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div>
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
              ABOUT MIC
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
            Technology Built
            <br />
            in Ethiopia,
            <br />
            <span style={{ color: '#f5a623' }}>For the World.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '20px', fontSize: '0.95rem' }}>
            Mic is a software development studio headquartered in Addis Ababa, Ethiopia. We specialize in designing and engineering custom digital solutions that transform how organizations operate.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '36px', fontSize: '0.95rem' }}>
            From automating hospital workflows to powering multi-school networks to building enterprise platforms for growing businesses — we turn complex requirements into elegant, working software.
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '12px 20px',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>🇪🇹</span>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.95rem' }}>Addis Ababa</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>Headquarters</div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '12px 20px',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>💻</span>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.95rem' }}>15+ Engineers</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>Full-time team</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — values grid */}
        <div
          className="about-values-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '28px 22px',
              }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '14px' }}>{v.icon}</div>
              <h4
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  margin: '0 0 10px',
                }}
              >
                {v.title}
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.65, margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack strip */}
      <div
        className="about-tech-strip"
        style={{
          marginTop: '80px',
          padding: '36px 40px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '24px', margin: '0 0 24px' }}>
          TECHNOLOGIES WE WORK WITH
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['React', 'React Native', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Firebase', 'Flutter', 'Django', 'Laravel', 'GraphQL'].map((tech) => (
            <span
              key={tech}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                padding: '6px 14px',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
