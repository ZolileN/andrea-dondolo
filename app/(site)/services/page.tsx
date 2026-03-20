import type { Metadata } from 'next'
import Link from 'next/link'
import { getServicesList, getFaqs } from '@/lib/sanity/fetchers'
import Container from '@/components/layout/container'
import FaqAccordion from '@/components/ui/faq-accordion'
import ScrollTopButton from '@/components/ui/scroll-top-button'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Speaking engagements, MC & hosting, coaching, workshops, and brand ambassadorship with Andrea Dondolo.',
}

const FALLBACK_SERVICES = [
  { title: 'Speaking Engagements', summary: 'Thought-provoking keynotes on identity, resilience, and authentic leadership for corporate, academic, and public audiences.', num: '01', slug: { current: '' } },
  { title: 'MC & Hosting', summary: 'Masterful facilitation for events, galas, award ceremonies, and brand launches — warmth and gravitas in every occasion.', num: '02', slug: { current: '' } },
  { title: 'Acting Coaching', summary: 'One-on-one and group workshops for actors at every level — from technique and audition prep to professional development.', num: '03', slug: { current: '' } },
  { title: 'Transformation Coaching', summary: 'Intensive personal development sessions integrating performance methodology with life coaching principles.', num: '04', slug: { current: '' } },
  { title: 'Brand Ambassadorship', summary: 'Strategic partnerships with values-aligned brands — leveraging authentic storytelling and reach for meaningful impact.', num: '05', slug: { current: '' } },
  { title: 'Workshops & Training', summary: 'Tailored creative and leadership programmes for corporates, NGOs, schools, and community organisations.', num: '06', slug: { current: '' } },
]

const BOOKING_STEPS = [
  { n: '01', t: 'Submit Enquiry', d: 'Complete the contact form with your event details, requirements, and preferred dates.' },
  { n: '02', t: 'Review Requirements', d: 'Andrea\'s team reviews your brief and confirms fit and availability.' },
  { n: '03', t: 'Discovery Call', d: 'A call is arranged to align expectations, customise the offering, and clarify logistics.' },
  { n: '04', t: 'Finalise Booking', d: 'Agreements are signed, deposits confirmed, and the collaboration officially begins.' },
]

export default async function ServicesPage() {
  const [services, faqs] = await Promise.all([getServicesList(), getFaqs()])
  const displayServices = services.length ? services : FALLBACK_SERVICES

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 80 }}>
        <Container>
          <p className="section-label">Services</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginTop: 24, marginBottom: 80, alignItems: 'end' }} className="two-col">
            <h1 className="display-heading">How Andrea can <em>serve</em> you.</h1>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.55)' }}>
              Each engagement is approached with deep intention — tailored to the specific needs of the audience, organisation, or individual, and delivered with the precision of a seasoned performing artist.
            </p>
          </div>

          {/* Services grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }} className="services-grid">
            {displayServices.map((s, i) => (
              <div key={s.title} className="service-card">
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 56, fontWeight: 300, color: 'rgba(201,168,76,0.18)', marginBottom: 24, lineHeight: 1 }}>
                  {'num' in s ? s.num : String(i + 1).padStart(2, '0')}
                </p>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, fontWeight: 400, color: 'var(--cream)', marginBottom: 14 }}>{s.title}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(245,240,232,0.5)', marginBottom: 28 }}>{s.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <span className="tag">{'pricingNote' in s ? s.pricingNote : 'Pricing on request'}</span>
                  {s.slug.current ? (
                    <Link href={`/services/${s.slug.current}`} className="btn-ghost" style={{ fontSize: 10 }}>Learn More <span className="btn-arrow" /></Link>
                  ) : (
                    <Link href="/contact" className="btn-ghost" style={{ fontSize: 10 }}>Enquire <span className="btn-arrow" /></Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.08)' }} />

      {/* Booking process */}
      <section style={{ padding: '100px 0' }}>
        <Container>
          <p className="section-label">How it works</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: 'var(--cream)', margin: '24px 0 56px' }}>
            The booking <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>process</em>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="steps-grid">
            {BOOKING_STEPS.map((s, i) => (
              <div key={i} style={{ padding: '40px 28px', borderRight: i < 3 ? '0.5px solid rgba(245,240,232,0.08)' : 'none' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 64, fontWeight: 300, color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: 24 }}>{s.n}</p>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 400, color: 'var(--cream)', marginBottom: 12 }}>{s.t}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(245,240,232,0.42)' }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 48px' }}>Submit an Enquiry</Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <>
          <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.08)' }} />
          <section style={{ padding: '100px 0' }}>
            <Container>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }} className="two-col">
                <div>
                  <p className="section-label">FAQ</p>
                  <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, color: 'var(--cream)', marginTop: 20, lineHeight: 1.2 }}>
                    Common <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>questions</em>.
                  </h2>
                </div>
                <FaqAccordion faqs={faqs} />
              </div>
            </Container>
          </section>
        </>
      )}

      <ScrollTopButton />
      <style>{`
        @media (max-width: 900px) {
          .two-col, .services-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
