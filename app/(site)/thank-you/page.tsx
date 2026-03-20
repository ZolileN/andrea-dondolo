import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/container'

export const metadata: Metadata = { title: 'Message Sent — Thank You' }

export default function ThankYouPage() {
  return (
    <section style={{ paddingTop: 72, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container narrow>
        <div style={{ textAlign: 'center', padding: '80px 0', animation: 'fadeUp 0.8s ease' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 96, color: 'var(--gold)', lineHeight: 1, marginBottom: 32, opacity: 0.65 }}>✓</p>
          <p className="section-label" style={{ justifyContent: 'center', marginBottom: 20 }}>Message Sent</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 24 }}>
            Thank you for<br />reaching <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>out</em>.
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.55)', maxWidth: 480, margin: '0 auto 48px' }}>
            Your message has been received. Andrea's team will review your enquiry and be in touch within 2–3 business days.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-primary">Return Home</Link>
            <Link href="/work" className="btn-ghost">Explore Work <span className="btn-arrow" /></Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
