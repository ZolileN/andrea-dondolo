import Link from 'next/link'

const FOOTER_NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Books', href: '/books' },
  { label: 'Press', href: '/press' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
]

const SERVICES_NAV = [
  'Speaking Engagements',
  'MC & Hosting',
  'Acting Coaching',
  'Transformation Coaching',
  'Brand Ambassadorship',
  'Workshops & Training',
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" className="footer-logo">
              Andrea <span>Dondolo</span>
            </Link>
            <p className="footer-tagline">
              Actress. Author. Speaker. Coach. Transforming stories and lives across South Africa and the African continent.
            </p>
            <div className="footer-socials">
              {['IG', 'LI', 'FB', 'X'].map((s) => (
                <a key={s} href="#" aria-label={s} className="footer-social-icon">{s}</a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="footer-col-heading">Navigate</p>
            {FOOTER_NAV.map((n) => (
              <Link key={n.href} href={n.href} className="footer-link">{n.label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="footer-col-heading">Services</p>
            {SERVICES_NAV.map((s) => (
              <Link key={s} href="/services" className="footer-link">{s}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-heading">Contact</p>
            {[
              { label: 'Bookings', value: 'bookings@andrea-dondolo.co.za' },
              { label: 'Press', value: 'press@andrea-dondolo.co.za' },
              { label: 'WhatsApp', value: '+27 82 000 0000' },
              { label: 'Location', value: 'South Africa' },
            ].map((c) => (
              <div key={c.label} className="footer-contact-item">
                <p className="footer-contact-label">{c.label}</p>
                <p className="footer-contact-value">{c.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Andrea Dondolo. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <p className="footer-built">Built with intention.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
