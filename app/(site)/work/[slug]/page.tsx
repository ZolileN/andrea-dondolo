import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWorkBySlug, getWorkSlugs } from '@/lib/sanity/fetchers'
import { urlFor } from '@/lib/sanity/image'
import Container from '@/components/layout/container'
import PortableTextRenderer from '@/components/portable-text/portable-text-renderer'
import WorkCardComponent from '@/components/cards/work-card'

export async function generateStaticParams() {
  const slugs = await getWorkSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const work = await getWorkBySlug(slug)
  if (!work) return {}
  return {
    title: work.seoTitle ?? work.title,
    description: work.seoDescription ?? work.excerpt,
  }
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = await getWorkBySlug(slug)
  if (!work) notFound()

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 72, position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: '100%', aspectRatio: '21/9', background: 'var(--dark-brown)', position: 'relative', minHeight: 400 }}>
          {work.heroImage && (
            <Image
              src={urlFor(work.heroImage).width(1600).height(686).url()}
              alt={work.title} fill sizes="100vw"
              style={{ objectFit: 'cover', opacity: 0.6 }}
              priority
            />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.95) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px' }}>
            <Container>
              {work.category && (
                <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>{work.category.title}</span>
              )}
              <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,5vw,72px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.05 }}>
                {work.title}
              </h1>
              <p style={{ fontSize: 12, letterSpacing: '0.18em', color: 'rgba(245,240,232,0.5)', marginTop: 12 }}>
                {work.roleLabel}{work.roleLabel && work.year ? ' · ' : ''}{work.year}
              </p>
            </Container>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div className="work-detail-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80 }}>
            <div>
              {work.excerpt && (
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', color: 'rgba(245,240,232,0.7)', lineHeight: 1.6, marginBottom: 40, borderLeft: '1px solid var(--gold)', paddingLeft: 24 }}>
                  {work.excerpt}
                </p>
              )}
              {work.body && <PortableTextRenderer value={work.body} />}
            </div>
            <div>
              {(work.credits?.length || work.externalLinks?.length) ? (
                <div style={{ border: '0.5px solid rgba(245,240,232,0.08)', padding: '32px' }}>
                  <p className="section-label" style={{ marginBottom: 24 }}>Details</p>
                  {work.credits?.map((c, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '0.5px solid rgba(245,240,232,0.07)', padding: '10px 0' }}>
                      <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)' }}>{c.label}</span>
                      <span style={{ fontSize: 13, color: 'var(--cream)' }}>{c.value}</span>
                    </div>
                  ))}
                  {work.externalLinks?.length ? (
                    <div style={{ marginTop: 24 }}>
                      {work.externalLinks.map((l, i) => (
                        <a key={i} href={l.url}
                          target={l.isExternal ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          style={{ display: 'block', fontSize: 12, color: 'var(--gold)', textDecoration: 'none', marginBottom: 8, letterSpacing: '0.1em' }}>
                          ↗ {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {work.gallery?.length ? (
        <section style={{ padding: '40px 0 80px' }}>
          <Container>
            <p className="section-label">Gallery</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4, marginTop: 32 }}>
              {work.gallery.map((img, i) => (
                <div key={i} className="gallery-thumb" style={{ aspectRatio: '4/3', position: 'relative', background: 'var(--dark-brown)', overflow: 'hidden' }}>
                  <Image
                    src={urlFor(img).width(600).height(450).url()}
                    alt="" fill sizes="33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Related work */}
      {work.relatedWork?.length ? (
        <section style={{ padding: '60px 0 100px', borderTop: '0.5px solid rgba(245,240,232,0.08)' }}>
          <Container>
            <p className="section-label">Related Work</p>
            <div className="work-grid" style={{ marginTop: 32 }}>
              {work.relatedWork.map((w) => <WorkCardComponent key={w._id} work={w} />)}
            </div>
          </Container>
        </section>
      ) : null}

      <div style={{ padding: '40px 0', textAlign: 'center' }}>
        <Link href="/work" className="btn-ghost" style={{ justifyContent: 'center' }}>
          ← Back to Work
        </Link>
      </div>

      <style>{`
        .gallery-thumb { transition: transform 0.5s ease; }
        .gallery-thumb:hover { transform: scale(1.03); }
        @media (max-width: 900px) {
          .work-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
