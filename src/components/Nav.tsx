import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const links = ['Services', 'Projects', 'About', 'Contact']

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '12px 24px' : '20px 24px',
          background: scrolled || menuOpen ? 'rgba(7,13,31,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,166,35,0.15)' : 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
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
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
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

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#fff',
            borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#fff',
            borderRadius: '2px',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.3s',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#fff',
            borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className="nav-mobile-menu"
        style={{
          position: 'fixed',
          top: scrolled ? '56px' : '68px',
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(7,13,31,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(245,166,35,0.15)',
          display: 'none',
          flexDirection: 'column',
          padding: '20px 24px 28px',
          gap: '0',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              transition: 'color 0.2s',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a623')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            background: '#f5a623',
            color: '#070d1f',
            padding: '14px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '1rem',
            fontFamily: "'Outfit', sans-serif",
            textAlign: 'center',
            marginTop: '20px',
            display: 'block',
          }}
        >
          Get Started
        </a>
      </div>
    </>
  )
}
