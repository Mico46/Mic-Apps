import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Projects', 'About', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 40px' : '20px 40px',
        background: scrolled ? 'rgba(7,13,31,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,166,35,0.15)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: '1.6rem',
          color: '#fff',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        Mic<span style={{ color: '#f5a623' }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a623')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            background: '#f5a623',
            color: '#070d1f',
            padding: '10px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
            fontFamily: "'Outfit', sans-serif",
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffc45a'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#f5a623'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Get Started
        </a>
      </div>
    </nav>
  )
}
