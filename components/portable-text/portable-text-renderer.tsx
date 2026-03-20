import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'

interface PortableTextRendererProps {
  value: PortableTextBlock[]
  className?: string
}

const components = {
  types: {
    image: ({ value }: { value: { asset: { url: string }; alt?: string } }) => {
      if (!value?.asset?.url) return null
      return (
        <figure style={{ margin: '40px 0' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt || ''}
              fill
              sizes="(max-width: 768px) 100vw, 860px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => {
      const href = value?.href ?? '#'
      return (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          style={{ color: 'var(--gold)', textUnderlineOffset: 4 }}
        >
          {children}
        </a>
      )
    },
  },
}

export default function PortableTextRenderer({ value, className }: PortableTextRendererProps) {
  if (!value) return null
  return (
    <div className={`portable-text ${className ?? ''}`}>
      <PortableText value={value} components={components} />
    </div>
  )
}
