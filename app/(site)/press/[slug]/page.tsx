import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPressBySlug, getPressSlugs } from '@/lib/sanity/fetchers'
import Container from '@/components/layout/container'
import PortableTextRenderer from '@/components/portable-text/portable-text-renderer'
import WorkCardComponent from '@/components/cards/work-card'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() { return getPressSlugs() }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPressBySlug(slug)
  return { title: post?.seoTitle ?? post?.title, description: post?.seoDescription ?? post?.excerpt }
}

export default async function PressDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPressBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 100 }}>
        <Container narrow>
          <Link href="/press" className="btn-ghost" style={{ marginBottom: 48, display: 'inline-flex', fontSize: 10 }}>← All Press</Link>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
              {post.sourceName && <span className="tag">{post.sourceName}</span>}
              <span style={{ fontSize: 11, color: 'rgba(245,240,232,0.4)', letterSpacing: '0.1em' }}>{formatDate(post.publishedAt)}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,5vw,60px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 24 }}>{post.title}</h1>
            {post.excerpt && (
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontStyle: 'italic', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65, borderLeft: '1px solid var(--gold)', paddingLeft: 24 }}>{post.excerpt}</p>
            )}
          </div>

          <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.1)', margin: '40px 0' }} />

          {post.body ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            post.sourceUrl && (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <p style={{ fontSize: 14, color: 'rgba(245,240,232,0.5)', marginBottom: 24 }}>This article was published externally.</p>
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Read on {post.sourceName ?? 'Source'}</a>
              </div>
            )
          )}
        </Container>

        {(post.relatedWork?.length || post.relatedBooks?.length) && (
          <div style={{ marginTop: 80 }}>
            <Container>
              <p className="section-label">Related Work</p>
              {post.relatedWork?.length && (
                <div className="work-grid" style={{ marginTop: 32 }}>
                  {post.relatedWork.map((w) => <WorkCardComponent key={w._id} work={w} />)}
                </div>
              )}
            </Container>
          </div>
        )}
      </section>
    </>
  )
}
