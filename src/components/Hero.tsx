import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] =
      []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,166,35,${p.alpha})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #070d1f 0%, #0f1a35 50%, #070d1f 100%)',
      }}
    >
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, opacity: 0.6 }}
      />

      {/* Accent orb */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,201,177,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 40px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          paddingTop: '100px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245,166,35,0.1)',
            border: '1px solid rgba(245,166,35,0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '28px',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#f5a623', fontWeight: 600, letterSpacing: '0.08em' }}>
            ADDIS ABABA, ETHIOPIA
          </span>
          <span style={{ fontSize: '0.7rem', color: 'rgba(245,166,35,0.6)' }}>🇪🇹</span>
        </div>

        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            margin: '0 0 28px',
            letterSpacing: '-0.03em',
            maxWidth: '820px',
          }}
        >
          We Build Digital
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #f5a623, #ffc45a, #00c9b1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Solutions
          </span>{' '}
          That Move
          <br />
          Business Forward.
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.125rem',
            lineHeight: 1.75,
            maxWidth: '540px',
            margin: '0 0 44px',
            fontWeight: 400,
          }}
        >
          Custom web apps, enterprise systems, and digital platforms engineered for
          ambitious businesses across Ethiopia and beyond.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              background: '#f5a623',
              color: '#070d1f',
              padding: '16px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '1rem',
              fontFamily: "'Outfit', sans-serif",
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffc45a'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f5a623'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View Our Work
          </a>
          <a
            href="#contact"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '16px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              fontFamily: "'Outfit', sans-serif",
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,166,35,0.5)'
              e.currentTarget.style.color = '#f5a623'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#fff'
            }}
          >
            Start a Project
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '72px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '30+', label: 'Happy Clients' },
            { num: '5+', label: 'Years Experience' },
            { num: '10+', label: 'Industries Served' },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: '#f5a623',
                  letterSpacing: '-0.03em',
                }}
              >
                {s.num}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '4px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
