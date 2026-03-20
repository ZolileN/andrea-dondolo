import type { Metadata } from 'next'
import { getPressList } from '@/lib/sanity/fetchers'
import Container from '@/components/layout/container'
import PressCardComponent from '@/components/cards/press-card'
import ScrollTopButton from '@/components/ui/scroll-top-button'

export const metadata: Metadata = {
  title: 'Press',
  description: 'News, interviews, thought leadership, and media mentions featuring Andrea Dondolo.',
}

export default async function PressPage() {
  const posts = await getPressList()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p._id !== featured?._id)

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 100 }}>
        <Container>
          <p className="section-label">Press & Media</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginTop: 24, marginBottom: 72, alignItems: 'end' }} className="two-col">
            <h1 className="display-heading">In the <em>conversation</em>.</h1>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.55)' }}>
              Interviews, features, thought leadership pieces, and media mentions — a record of the conversations that shape and amplify Andrea's work.
            </p>
          </div>

          {/* Featured */}
          {featured && (
            <div style={{ border: '0.5px solid rgba(201,168,76,0.18)', padding: 56, marginBottom: 64, background: 'rgba(201,168,76,0.02)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="featured-press">
              <div style={{ background: 'var(--mid-brown)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-cormorant)', fontSize: 64, color: 'rgba(201,168,76,0.15)' }}>
                AD
              </div>
              <div>
                <p className="section-label">Featured</p>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 32, fontWeight: 400, color: 'var(--cream)', margin: '16px 0' }}>{featured.title}</h2>
                <p style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
                  {featured.sourceName}
                </p>
                {featured.excerpt && <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(245,240,232,0.55)', marginBottom: 32 }}>{featured.excerpt}</p>}
                <a href={`/press/${featured.slug.current}`} className="btn-ghost">Read Article <span className="btn-arrow" /></a>
              </div>
            </div>
          )}

          {/* All posts */}
          <div>
            {(rest.length ? rest : posts).map((p) => <PressCardComponent key={p._id} post={p} />)}
          </div>

          {posts.length === 0 && (
            <p style={{ textAlign: 'center', fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', color: 'rgba(245,240,232,0.35)', padding: '80px 0' }}>
              Press coverage coming soon.
            </p>
          )}
        </Container>
      </section>
      <ScrollTopButton />
      <style>{`
        @media (max-width: 900px) {
          .two-col, .featured-press { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  )
}
