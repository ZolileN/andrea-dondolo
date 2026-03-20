import Link from 'next/link'
import Image from 'next/image'
import type { BookCard } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'

export default function BookCardComponent({ book }: { book: BookCard }) {
  return (
    <Link href={`/books/${book.slug.current}`} className="book-card" style={{ textDecoration: 'none', display: 'block' }}>
      {/* Cover */}
      <div style={{ aspectRatio: '2/3', background: 'var(--mid-brown)', position: 'relative', overflow: 'hidden' }}>
        {book.coverImage ? (
          <Image
            src={urlFor(book.coverImage).width(400).height(600).url()}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 64, color: 'rgba(201,168,76,0.15)' }}>AD</span>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 16, color: 'var(--cream)', textAlign: 'center', padding: '0 16px', opacity: 0.7 }}>{book.title}</p>
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }} />
      </div>
      {/* Info */}
      <div style={{ padding: '24px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          {book.genre && <span className="tag">{book.genre}</span>}
          {book.releaseDate && (
            <span style={{ fontSize: 11, color: 'rgba(245,240,232,0.3)', letterSpacing: '0.1em' }}>
              {new Date(book.releaseDate).getFullYear()}
            </span>
          )}
        </div>
        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 400, color: 'var(--cream)', marginBottom: 6, lineHeight: 1.2 }}>
          {book.title}
        </h3>
        {book.subtitle && (
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 14, fontStyle: 'italic', color: 'rgba(245,240,232,0.4)', lineHeight: 1.4 }}>
            {book.subtitle}
          </p>
        )}
      </div>
    </Link>
  )
}
