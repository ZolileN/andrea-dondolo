import Link from 'next/link'
import Container from '@/components/layout/container'

export default function NotFound() {
  return (
    <section style={{ paddingTop: 72, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container narrow>
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 120, fontWeight: 300, color: 'rgba(201,168,76,0.18)', lineHeight: 1, marginBottom: 24 }}>404</p>
          <p className="section-label" style={{ justifyContent: 'center' }}>Page Not Found</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300, color: 'var(--cream)', margin: '20px auto 24px', maxWidth: 560 }}>
            This page has taken its <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>final bow</em>.
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(245,240,232,0.45)', marginBottom: 48 }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-primary">Go Home</Link>
            <Link href="/contact" className="btn-ghost">Contact Us <span className="btn-arrow" /></Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
