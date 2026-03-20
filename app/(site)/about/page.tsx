import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAboutPage } from '@/lib/sanity/fetchers'
import { urlFor } from '@/lib/sanity/image'
import Container from '@/components/layout/container'
import PortableTextRenderer from '@/components/portable-text/portable-text-renderer'
import ScrollTopButton from '@/components/ui/scroll-top-button'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAboutPage()
  return {
    title: page?.seoTitle ?? 'About',
    description: page?.seoDescription ?? page?.intro,
  }
}

const FALLBACK_MILESTONES = [
  { year: '2002', title: 'First stage role, Grahamstown National Arts Festival', description: 'Performed to critical acclaim in the formative years of her craft.' },
  { year: '2008', title: 'National Television debut', description: 'Broke onto South African screens with a memorable performance that launched her TV career.' },
  { year: '2010', title: 'Intersexions — International recognition', description: 'Joined the acclaimed multi-award-winning series and gained continental visibility.' },
  { year: '2014', title: 'First SAFTA nomination', description: 'Recognised by the South African Film and Television Awards for Outstanding Performance.' },
  { year: '2016', title: 'Generations: The Legacy', description: 'Joined one of South Africa\'s most-watched soaps, reaching millions of viewers weekly.' },
  { year: '2018', title: 'The River — Lead Actress', description: 'Delivered career-defining work as a series lead on the award-winning drama.' },
  { year: '2020', title: 'Author & Speaker platform launched', description: 'Expanded her practice to include keynote speaking, writing, and transformational coaching.' },
  { year: '2023', title: 'Coaching practice milestone', description: 'Surpassed 1,000 individuals coached through workshops, intensives, and group programmes.' },
]

const FALLBACK_STATS = [
  { value: '20+', label: 'Years active' },
  { value: '15+', label: 'Nominations' },
  { value: '50+', label: 'Productions' },
  { value: '1000+', label: 'Coached' },
]

export default async function AboutPage() {
  const page = await getAboutPage()
  const milestones = page?.milestones?.length ? page.milestones : FALLBACK_MILESTONES
  const stats = page?.stats?.length ? page.stats : FALLBACK_STATS

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(61,43,26,0.35) 0%, transparent 65%)' }} />
        <Container>
          <p className="section-label">Biography</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginTop: 32 }} className="two-col">
            <div>
              <h1 className="display-heading">The woman <em>behind</em><br />the work.</h1>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.58)', marginTop: 32, marginBottom: 40 }}>
                {page?.intro ?? 'Andrea Dondolo is a South African actress, author, public speaker, and transformation coach whose two-decade career has been defined by an unwavering commitment to authentic storytelling and meaningful impact.'}
              </p>
              <Link href="/contact" className="btn-primary">Book Andrea</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'linear-gradient(155deg, var(--mid-brown) 0%, var(--dark-brown) 100%)', position: 'relative', overflow: 'hidden', maxWidth: 420, marginLeft: 'auto' }}>
                <Image src="/images/andrea.png" alt="Andrea Dondolo" fill sizes="(max-width:768px) 100vw, 420px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -16, right: -16, width: '45%', height: '32%', border: '0.5px solid rgba(201,168,76,0.18)', pointerEvents: 'none' }} />
            </div>
          </div>
        </Container>
      </section>

      <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.08)' }} />

      {/* ── BIOGRAPHY ── */}
      <section style={{ padding: '100px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }} className="two-col">
            <div>
              <p className="section-label">Full Biography</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 40 }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ borderBottom: '0.5px solid rgba(245,240,232,0.1)', paddingBottom: 20 }}>
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, opacity: 0.7 }}>{s.value}</p>
                    <p style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.38)', marginTop: 8 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {page?.biography ? (
                <PortableTextRenderer value={page.biography} />
              ) : (
                <>
                  {[
                    'Born and raised in South Africa, Andrea Dondolo discovered the transformative power of performance as a teenager. What began as a deep love for storytelling evolved into a career that would span stage, screen, page, and platform — touching millions of lives across the continent.',
                    'Her acting work has been characterised by intelligence, emotional precision, and an ability to inhabit characters with uncommon depth. From theatre stages to primetime television dramas, she has consistently delivered performances that resonate long after the credits roll.',
                    'In parallel to her acting career, Andrea has developed into one of South Africa\'s most compelling public voices. Her keynote addresses — which weave together personal narrative, social insight, and practical wisdom — have been received with standing ovations at corporate summits, academic conferences, and community gatherings alike.',
                    'As a coach, she works with individuals and groups who are ready to do the real work of transformation — integrating the tools of the actor\'s craft with the frameworks of personal development to create profound, lasting change.',
                    'Her writing explores identity, resilience, and the politics of self-definition — giving voice to experiences and perspectives that are too often invisible in mainstream South African culture.',
                  ].map((p, i) => (
                    <p key={i} style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.62)', marginBottom: 24 }}>{p}</p>
                  ))}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.08)' }} />

      {/* ── MILESTONES ── */}
      <section style={{ padding: '100px 0' }}>
        <Container>
          <p className="section-label">Milestones</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,4vw,56px)', fontWeight: 300, color: 'var(--cream)', margin: '24px 0 56px' }}>
            A career built with <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>intention</em>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 80px' }} className="two-col">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>{m.year}</p>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 400, color: 'var(--cream)', marginBottom: 8 }}>{m.title}</h3>
                {m.description && <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(245,240,232,0.48)' }}>{m.description}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={{ padding: '100px 0', background: 'rgba(201,168,76,0.025)', borderTop: '0.5px solid rgba(201,168,76,0.1)' }}>
        <Container narrow>
          <div style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Philosophy</p>
            {page?.philosophyText ? (
              <PortableTextRenderer value={page.philosophyText} />
            ) : (
              <blockquote style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.45, margin: '32px 0 24px' }}>
                "The most radical act we can perform is to tell the truth — about who we are, where we've come from, and what we refuse to accept."
              </blockquote>
            )}
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontStyle: 'italic', color: 'var(--gold)', marginTop: 16 }}>— Andrea Dondolo</p>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/work" className="btn-primary">View Her Work</Link>
            <Link href="/contact" className="btn-primary">Book Andrea</Link>
          </div>
        </Container>
      </section>

      <ScrollTopButton />
      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  )
}
