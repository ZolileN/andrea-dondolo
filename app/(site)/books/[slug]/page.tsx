import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBookBySlug, getBookSlugs } from '@/lib/sanity/fetchers'
import { urlFor } from '@/lib/sanity/image'
import Container from '@/components/layout/container'
import PortableTextRenderer from '@/components/portable-text/portable-text-renderer'
import PressCardComponent from '@/components/cards/press-card'

export async function generateStaticParams() { return getBookSlugs() }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const book = await getBookBySlug(slug)
  return { title: book?.seoTitle ?? book?.title, description: book?.seoDescription }
}

export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const book = await getBookBySlug(slug)
  if (!book) notFound()

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 100 }}>
        <Container>
          <Link href="/books" className="btn-ghost" style={{ marginBottom: 48, display: 'inline-flex', fontSize: 10 }}>← All Books</Link>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 80, alignItems: 'start' }} className="book-detail-grid">
            {/* Cover */}
            <div>
              <div style={{ aspectRatio: '2/3', background: 'var(--mid-brown)', position: 'relative', overflow: 'hidden', marginBottom: 24 }}>
                {book.coverImage ? (
                  <Image src={urlFor(book.coverImage).width(560).height(840).url()} alt={book.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-cormorant)', fontSize: 64, color: 'rgba(201,168,76,0.15)' }}>AD</div>
                )}
              </div>
              {[['Genre', book.genre], ['Publisher', book.publisher], ['Year', book.releaseDate ? new Date(book.releaseDate).getFullYear() : '']].filter(([,v]) => v).map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '0.5px solid rgba(245,240,232,0.08)', padding: '10px 0' }}>
                  <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.32)' }}>{k}</span>
                  <span style={{ fontSize: 13, color: 'var(--cream)' }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                {book.buyLink && <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center' }}>Purchase Book</a>}
                <Link href="/contact" className="btn-ghost" style={{ fontSize: 10 }}>Bulk / Institutional Orders <span className="btn-arrow" /></Link>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="section-label">{book.genre ?? 'Book'}</p>
              <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,5vw,68px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.05, margin: '16px 0 12px' }}>{book.title}</h1>
              {book.subtitle && <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', color: 'rgba(245,240,232,0.5)', marginBottom: 40 }}>{book.subtitle}</p>}
              {book.summary && <PortableTextRenderer value={book.summary} />}

              {book.endorsements?.length && (
                <div style={{ borderTop: '0.5px solid rgba(245,240,232,0.1)', paddingTop: 48, marginTop: 40 }}>
                  <p className="section-label" style={{ marginBottom: 32 }}>Praise</p>
                  {book.endorsements.map((e, i) => (
                    <div key={i} style={{ marginBottom: 32, paddingLeft: 24, borderLeft: '1px solid var(--gold)', opacity: 0.82 }}>
                      <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontStyle: 'italic', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.65, marginBottom: 12 }}>"{e.quote}"</p>
                      <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{e.author}</p>
                    </div>
                  ))}
                </div>
              )}

              {book.relatedPress?.length && (
                <div style={{ borderTop: '0.5px solid rgba(245,240,232,0.1)', paddingTop: 48, marginTop: 40 }}>
                  <p className="section-label" style={{ marginBottom: 16 }}>Press Coverage</p>
                  {book.relatedPress.map((p) => <PressCardComponent key={p._id} post={p} />)}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      <style>{`@media (max-width: 900px) { .book-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
