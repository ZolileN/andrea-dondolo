'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Books', href: '/books' },
  { label: 'Press', href: '/press' },
  { label: 'Media', href: '/media' },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          Andrea <span>Dondolo</span>
        </Link>

        <nav className="nav-desktop">
          {NAV_LINKS.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link">{n.label}</Link>
          ))}
          <Link href="/contact" className="btn-primary nav-cta">Book Andrea</Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          <span className={mobileOpen ? 'bar bar--top-open' : 'bar'} />
          <span className={mobileOpen ? 'bar bar--mid-open' : 'bar'} />
          <span className={mobileOpen ? 'bar bar--bot-open' : 'bar'} />
        </button>
      </header>

      {mobileOpen && (
        <div className="nav-mobile">
          {NAV_LINKS.map((n) => (
            <Link key={n.href} href={n.href} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: 20 }} onClick={() => setMobileOpen(false)}>
            Book Andrea
          </Link>
        </div>
      )}

      <style>{`
        .site-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px;
          transition: background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
        }
        .site-header--scrolled {
          background: rgba(10,10,10,0.93);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 0.5px solid rgba(201,168,76,0.15);
        }
        .nav-logo {
          font-family: var(--font-cormorant);
          font-size: 22px; font-weight: 400;
          letter-spacing: 0.04em;
          color: var(--cream); text-decoration: none;
        }
        .nav-logo span { color: var(--gold); }
        .nav-desktop {
          display: flex; align-items: center; gap: 28px;
        }
        .nav-link {
          font-family: var(--font-jost);
          font-size: 11px; font-weight: 400;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(245,240,232,0.65);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: var(--cream); }
        .nav-cta { font-size: 10px !important; padding: 10px 22px !important; }
        .nav-hamburger {
          display: none; background: none; border: none;
          cursor: pointer; padding: 8px;
          flex-direction: column; gap: 5px;
        }
        .bar {
          display: block; width: 24px; height: 0.5px;
          background: var(--cream);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .bar--top-open { transform: rotate(45deg) translateY(7.5px); }
        .bar--mid-open { opacity: 0; }
        .bar--bot-open { transform: rotate(-45deg) translateY(-7.5px); }
        .nav-mobile {
          position: fixed; inset: 0; z-index: 99;
          background: rgba(10,10,10,0.97);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 32px;
          animation: fadeIn 0.3s ease;
        }
        .nav-mobile-link {
          font-family: var(--font-cormorant);
          font-size: 36px; font-weight: 300;
          color: var(--cream); text-decoration: none;
          transition: color 0.3s;
        }
        .nav-mobile-link:hover { color: var(--gold); }
        @media (max-width: 900px) {
          .site-header { padding: 0 24px; }
          .nav-desktop { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>
    </>
  )
}
