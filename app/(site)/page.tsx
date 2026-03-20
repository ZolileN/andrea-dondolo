import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getHomepage, getSiteSettings, getWorkList, getWorkCategories, getServicesList, getBooksList, getPressList, getTestimonials } from '@/lib/sanity/fetchers'
import { urlFor } from '@/lib/sanity/image'
import Container from '@/components/layout/container'
import WorkCardComponent from '@/components/cards/work-card'
import PressCardComponent from '@/components/cards/press-card'
import TestimonialCard from '@/components/cards/testimonial-card'
import ScrollTopButton from '@/components/ui/scroll-top-button'

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getHomepage(), getSiteSettings()])
  return {
    title: page?.seoTitle ?? settings?.siteTitle ?? 'Andrea Dondolo — Actress · Author · Speaker · Coach',
    description: page?.seoDescription ?? settings?.siteDescription,
  }
}

const AWARDS = [
  'SAFTA Best Actress Nominee', 'Monomatapa Award for Excellence',
  'South African Film & TV Awards', 'NAACP Image Award Recognition',
  'Naledi Theatre Award', 'BAFTA Africa Recognition', 'South African Women in Film',
]

const FALLBACK_SERVICES = [
  { title: 'Speaking Engagements', desc: 'Thought-provoking keynotes on identity, resilience, and authentic leadership for corporate, academic, and public audiences.', num: '01' },
  { title: 'MC & Hosting', desc: 'Masterful facilitation for events, galas, award ceremonies, and brand launches — bringing warmth and gravitas to every occasion.', num: '02' },
  { title: 'Coaching', desc: 'One-on-one and group sessions integrating performance methodology with life coaching for profound, lasting transformation.', num: '03' },
]

export default async function HomePage() {
  const [page, works, categories, services, books, press, testimonials] = await Promise.all([
    getHomepage(),
    getWorkList(),
    getWorkCategories(),
    getServicesList(),
    getBooksList(),
    getPressList(),
    getTestimonials(),
  ])

  const featuredWork = page?.featuredWork?.length ? page.featuredWork : works.filter((w) => w.featured).slice(0, 6)
  const displayServices = page?.featuredServices?.length ? page.featuredServices : services.slice(0, 3)
  const displayPress = page?.featuredPress?.length ? page.featuredPress : press.slice(0, 3)
  const displayTestimonials = page?.testimonialItems?.length ? page.testimonialItems : testimonials.slice(0, 3)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 72 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 65% 50%, rgba(61,43,26,0.45) 0%, transparent 65%)' }} />
        <div className="hero-bg-text">ANDREA</div>

        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="hero-grid">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p className="section-label animate-fade-up">
                {page?.heroEyebrow ?? 'Actress · Author · Speaker · Coach'}
              </p>
              <h1 className="display-heading animate-fade-up animate-delay-200">
                {page?.heroTitle ? (
                  <span dangerouslySetInnerHTML={{ __html: page.heroTitle.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                ) : (
                  <>Stories that<br /><em>move</em> the<br />world.</>
                )}
              </h1>
              <p className="animate-fade-up animate-delay-300" style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(245,240,232,0.58)', maxWidth: 440, marginTop: 28, marginBottom: 40 }}>
                {page?.heroSubtitle ?? 'Andrea Dondolo is one of South Africa\'s most compelling creative voices — actress, author, speaker, and transformational coach whose work inspires, challenges, and uplifts.'}
              </p>
              <div className="animate-fade-up animate-delay-400" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href="/work" className="btn-primary">View Work</Link>
                <Link href="/contact" className="btn-ghost">
                  Book Andrea <span className="btn-arrow" />
                </Link>
              </div>
            </div>

            {/* Portrait */}
            <div className="animate-fade-in animate-delay-200" style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'linear-gradient(135deg, var(--mid-brown) 0%, var(--dark-brown) 100%)', position: 'relative', overflow: 'hidden', maxWidth: 420, marginLeft: 'auto' }}>
                {page?.heroImage ? (
                  <Image src={urlFor(page.heroImage).width(840).height(1120).url()} alt="Andrea Dondolo" fill sizes="(max-width:768px) 100vw, 420px" style={{ objectFit: 'cover' }} priority />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-cormorant)', fontSize: 96, color: 'rgba(201,168,76,0.1)' }}>AD</div>
                )}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)', padding: '32px 28px' }}>
                  <span className="tag" style={{ marginBottom: 10, display: 'inline-block' }}>Award-winning Actress</span>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontWeight: 300, color: 'var(--cream)', fontStyle: 'italic' }}>"The art of authentic storytelling."</p>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: -20, left: -20, border: '0.5px solid rgba(201,168,76,0.18)', width: '55%', height: '38%', pointerEvents: 'none' }} />
            </div>
          </div>
        </Container>

        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeIn 1.5s ease 1.8s forwards', opacity: 0 }}>
          <span style={{ fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)' }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(201,168,76,0.6) 50%, transparent)', animation: 'shimmer 2s ease infinite' }} />
        </div>
      </section>

      {/* ── AWARDS TICKER ──────────────────────────────────────────────────── */}
      <div style={{ borderTop: '0.5px solid rgba(245,240,232,0.08)', borderBottom: '0.5px solid rgba(245,240,232,0.08)', padding: '18px 0', background: 'rgba(201,168,76,0.025)', overflow: 'hidden' }}>
        <div className="awards-ticker">
          <div className="awards-ticker-inner">
            {[...AWARDS, ...AWARDS].map((a, i) => (
              <span key={i} style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.38)', display: 'flex', alignItems: 'center', gap: 20 }}>
                <span style={{ color: 'var(--gold)', fontSize: 7 }}>◆</span> {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── IDENTITY / ABOUT PREVIEW ────────────────────────────────────────── */}
      <section style={{ padding: '100px 0' }}>
        <Container>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 72 }}>
            {['Actress', 'Author', 'Speaker', 'Coach'].map((id) => (
              <span key={id} style={{ border: '0.5px solid rgba(201,168,76,0.35)', padding: '10px 24px', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{id}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }} className="two-col">
            <h2 className="display-heading">A creative <em>life</em><br />fully lived.</h2>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.58)', marginBottom: 32 }}>
                {page?.aboutPreviewText ?? 'Over two decades at the intersection of performance, storytelling, and personal transformation — Andrea Dondolo has built a creative practice that reaches across screens, stages, pages, and boardrooms.'}
              </p>
              <Link href="/about" className="btn-ghost">Read Full Story <span className="btn-arrow" /></Link>
            </div>
          </div>
        </Container>
      </section>

      <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.08)', margin: '0 48px' }} />

      {/* ── STATS ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="stats-grid">
            {[
              { n: '20+', l: 'Years in\nthe Industry' },
              { n: '15+', l: 'Award\nNominations' },
              { n: '50+', l: 'Roles &\nProductions' },
              { n: '1000+', l: 'Workshops\nDelivered' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '48px 24px', borderRight: i < 3 ? '0.5px solid rgba(245,240,232,0.08)' : 'none', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(48px,6vw,80px)', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, opacity: 0.65 }}>{s.n}</p>
                <p style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.38)', marginTop: 12, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.08)' }} />

      {/* ── FEATURED WORK ───────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0' }}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p className="section-label">Selected Work</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: 'var(--cream)' }}>The work that defines her.</h2>
            </div>
            <Link href="/work" className="btn-ghost">View All <span className="btn-arrow" /></Link>
          </div>
          <div className="work-grid">
            {featuredWork.slice(0, 6).map((w) => <WorkCardComponent key={w._id} work={w} />)}
          </div>
        </Container>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'rgba(255,255,255,0.018)', borderTop: '0.5px solid rgba(245,240,232,0.07)' }}>
        <Container>
          <p className="section-label">Services</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 72, marginBottom: 56, alignItems: 'end' }} className="two-col">
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: 'var(--cream)' }}>How Andrea can serve you.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(245,240,232,0.52)' }}>
              Each engagement is crafted with intention, authenticity, and the pursuit of genuine transformation — whether it's a keynote for thousands or an intimate coaching programme.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="services-preview-grid">
            {(displayServices.length ? displayServices : FALLBACK_SERVICES).slice(0, 3).map((s, i) => (
              <div key={'title' in s ? s.title : i} className="service-card">
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 52, fontWeight: 300, color: 'rgba(201,168,76,0.18)', marginBottom: 24, lineHeight: 1 }}>
                  {'num' in s ? s.num : String(i + 1).padStart(2, '0')}
                </p>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 24, fontWeight: 400, color: 'var(--cream)', marginBottom: 14 }}>
                  {'title' in s ? s.title : ''}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(245,240,232,0.5)', marginBottom: 24 }}>
                  {'summary' in s ? s.summary : ('desc' in s ? s.desc : '')}
                </p>
                <Link href="/contact" className="btn-ghost" style={{ fontSize: 10 }}>Enquire <span className="btn-arrow" /></Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/services" className="btn-primary">View All Services</Link>
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────────── */}
      {displayTestimonials.length > 0 && (
        <section style={{ padding: '100px 0' }}>
          <Container>
            <p className="section-label">Testimonials</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 40 }} className="testimonials-grid">
              {displayTestimonials.slice(0, 3).map((t) => <TestimonialCard key={t._id} testimonial={t} />)}
            </div>
          </Container>
        </section>
      )}

      {/* ── PRESS ───────────────────────────────────────────────────────────── */}
      {displayPress.length > 0 && (
        <section style={{ padding: '100px 0', borderTop: '0.5px solid rgba(245,240,232,0.08)' }}>
          <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
              <div>
                <p className="section-label">Press & Media</p>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: 'var(--cream)' }}>In the conversation.</h2>
              </div>
              <Link href="/press" className="btn-ghost">View All <span className="btn-arrow" /></Link>
            </div>
            {displayPress.slice(0, 3).map((p) => <PressCardComponent key={p._id} post={p} />)}
          </Container>
        </section>
      )}

      {/* ── CONTACT CTA ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 0', background: 'rgba(201,168,76,0.03)', borderTop: '0.5px solid rgba(201,168,76,0.1)' }}>
        <Container>
          <div style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Bookings & Enquiries</p>
            <h2 className="display-heading" style={{ margin: '20px auto 28px', maxWidth: 700 }}>
              {page?.contactCtaTitle ? (
                <span dangerouslySetInnerHTML={{ __html: page.contactCtaTitle.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
              ) : <>Let's create something <em>remarkable</em>.</>}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(245,240,232,0.52)', maxWidth: 520, margin: '0 auto 40px' }}>
              {page?.contactCtaText ?? 'Whether it\'s a speaking engagement, media appearance, coaching programme, or brand collaboration — Andrea would love to hear from you.'}
            </p>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 48px', fontSize: 12 }}>Start a Conversation</Link>
          </div>
        </Container>
      </section>

      <ScrollTopButton />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid, .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .services-preview-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
