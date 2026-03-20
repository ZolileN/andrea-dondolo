import Link from 'next/link'
import type { PressCard } from '@/lib/sanity/types'
import { formatDateShort } from '@/lib/utils'

export default function PressCardComponent({ post }: { post: PressCard }) {
  return (
    <Link href={`/press/${post.slug.current}`} className="press-row" style={{ textDecoration: 'none' }}>
      <div>
        <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>
          {formatDateShort(post.publishedAt)}
        </p>
        <p style={{ fontSize: 11, color: 'rgba(245,240,232,0.3)', letterSpacing: '0.08em' }}>
          {post.sourceName}
        </p>
      </div>
      <div>
        <h3 className="press-row-title">{post.title}</h3>
        {post.excerpt && (
          <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(245,240,232,0.5)' }}>
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  )
}
