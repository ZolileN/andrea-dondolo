import type { Metadata } from 'next'
import Link from 'next/link'
import { getBooksList } from '@/lib/sanity/fetchers'
import Container from '@/components/layout/container'
import BookCardComponent from '@/components/cards/book-card'
import ScrollTopButton from '@/components/ui/scroll-top-button'

export const metadata: Metadata = {
  title: 'Books',
  description: 'Published works by Andrea Dondolo — memoir, essays, and guides on performance and identity.',
}

export default async function BooksPage() {
  const books = await getBooksList()

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 100 }}>
        <Container>
          <p className="section-label">Publications</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginTop: 24, marginBottom: 80, alignItems: 'end' }} className="two-col">
            <h1 className="display-heading">Words that <em>endure</em>.</h1>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.55)', marginBottom: 24 }}>
                Andrea's writing extends her artistic practice into the literary realm — exploring Black womanhood, identity, the craft of performance, and the ongoing work of becoming.
              </p>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                "Writing, for me, is acting on the page."
              </p>
            </div>
          </div>

          {books.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 36 }} className="books-grid">
              {books.map((b) => <BookCardComponent key={b._id} book={b} />)}
            </div>
          ) : (
            <p style={{ textAlign: 'center', fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', color: 'rgba(245,240,232,0.35)', padding: '80px 0' }}>
              Books coming soon.
            </p>
          )}

          {/* Author note */}
          <div style={{ marginTop: 100, border: '0.5px solid rgba(201,168,76,0.15)', padding: '56px 64px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'center', background: 'rgba(201,168,76,0.02)' }} className="two-col">
            <div>
              <p className="section-label">From the Author</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 36, fontWeight: 300, color: 'var(--cream)', marginTop: 16 }}>On writing and craft.</h2>
            </div>
            <div>
              <blockquote style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.7, marginBottom: 24 }}>
                "Every book I write begins the same way — with a question I can't stop asking. The writing is simply the long, honest attempt to sit with that question long enough to discover what I actually think."
              </blockquote>
              <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.4)' }}>
                For bulk orders, reading group bookings, or institutional adoptions, please{' '}
                <Link href="/contact" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: 4 }}>contact the team</Link>.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <ScrollTopButton />
      <style>{`
        @media (max-width: 900px) {
          .two-col, .books-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .books-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
