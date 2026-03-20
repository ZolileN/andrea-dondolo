import Link from 'next/link'
import Image from 'next/image'
import type { WorkCard } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'

interface WorkCardProps {
  work: WorkCard
}

export default function WorkCardComponent({ work }: WorkCardProps) {
  return (
    <Link
      href={`/work/${work.slug.current}`}
      className="work-item"
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <div className="work-item-bg" style={{ background: 'var(--mid-brown)' }}>
        {work.heroImage ? (
          <Image
            src={urlFor(work.heroImage).width(600).height(800).url()}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <span style={{ fontSize: 64, opacity: 0.2, fontFamily: 'var(--font-cormorant)' }}>AD</span>
        )}
      </div>
      <div className="work-item-overlay">
        {work.category && (
          <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>
            {work.category.title}
          </span>
        )}
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 22,
            fontWeight: 400,
            color: 'var(--cream)',
            marginBottom: 4,
            lineHeight: 1.2,
          }}
        >
          {work.title}
        </p>
        <p style={{ fontSize: 11, color: 'rgba(245,240,232,0.5)', letterSpacing: '0.1em' }}>
          {work.roleLabel}{work.roleLabel && work.year ? ' · ' : ''}{work.year}
        </p>
      </div>
    </Link>
  )
}
