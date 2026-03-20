import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getServiceSlugs } from '@/lib/sanity/fetchers'
import { urlFor } from '@/lib/sanity/image'
import Container from '@/components/layout/container'
import PortableTextRenderer from '@/components/portable-text/portable-text-renderer'

export async function generateStaticParams() {
  return getServiceSlugs()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  return { title: service?.seoTitle ?? service?.title, description: service?.seoDescription ?? service?.summary }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 100 }}>
        <Container>
          <Link href="/services" className="btn-ghost" style={{ marginBottom: 48, display: 'inline-flex', fontSize: 10 }}>
            ← All Services
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            <div>
              <p className="section-label">Service</p>
              <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px,5vw,72px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.05, margin: '20px 0 24px' }}>{service.title}</h1>
              {service.summary && <p style={{ fontSize: 16, lineHeight: 1.9, color: 'rgba(245,240,232,0.6)', marginBottom: 40 }}>{service.summary}</p>}
              <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="btn-primary" style={{ padding: '16px 40px' }}>Enquire About This Service</Link>
              <p style={{ fontSize: 11, color: 'rgba(245,240,232,0.35)', marginTop: 16 }}>{service.pricingNote ?? 'Pricing available on request'}</p>
            </div>
            <div>
              {service.heroImage && (
                <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', marginBottom: 40 }}>
                  <Image src={urlFor(service.heroImage).width(800).height(600).url()} alt={service.title} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
              {service.includedItems?.length && (
                <div style={{ border: '0.5px solid rgba(245,240,232,0.08)', padding: 32, marginBottom: 24 }}>
                  <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>What's Included</p>
                  {service.includedItems.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                      <span style={{ color: 'var(--gold)', fontSize: 10, marginTop: 4 }}>◆</span>
                      <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(245,240,232,0.6)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              )}
              {service.idealFor?.length && (
                <div style={{ border: '0.5px solid rgba(245,240,232,0.08)', padding: 32 }}>
                  <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Ideal For</p>
                  {service.idealFor.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                      <span style={{ color: 'var(--gold)', fontSize: 10, marginTop: 4 }}>◆</span>
                      <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.6)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {service.body && (
            <div style={{ marginTop: 80, maxWidth: 720 }}>
              <PortableTextRenderer value={service.body} />
            </div>
          )}
        </Container>
      </section>
      <style>{`.two-col { @media (max-width:900px) { grid-template-columns:1fr!important; } }`}</style>
    </>
  )
}
