'use client'

import { useState } from 'react'
import PortableTextRenderer from '@/components/portable-text/portable-text-renderer'
import type { Faq } from '@/lib/sanity/types'

interface FaqAccordionProps {
  faqs: Faq[]
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [open, setOpen] = useState<string | null>(null)

  if (!faqs?.length) return null

  return (
    <div>
      {faqs.map((faq) => (
        <div key={faq._id}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === faq._id ? null : faq._id)}
            aria-expanded={open === faq._id}
          >
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 20,
                fontWeight: 400,
                color: open === faq._id ? 'var(--gold)' : 'var(--cream)',
                transition: 'color 0.3s',
                lineHeight: 1.3,
                textAlign: 'left',
              }}
            >
              {faq.question}
            </span>
            <span
              style={{
                color: 'var(--gold)',
                fontSize: 22,
                lineHeight: 1,
                transform: open === faq._id ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                flexShrink: 0,
              }}
            >
              +
            </span>
          </button>
          {open === faq._id && (
            <div style={{ paddingBottom: 24, paddingRight: 48, animation: 'fadeUp 0.3s ease' }}>
              <PortableTextRenderer value={faq.answer} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
