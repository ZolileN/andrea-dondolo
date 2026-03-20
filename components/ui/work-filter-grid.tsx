'use client'

import { useState } from 'react'
import WorkCardComponent from '@/components/cards/work-card'
import type { WorkCard, WorkCategory } from '@/lib/sanity/types'

interface WorkFilterGridProps {
  works: WorkCard[]
  categories: WorkCategory[]
}

export default function WorkFilterGrid({ works, categories }: WorkFilterGridProps) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? works
    : works.filter((w) => w.category?.slug?.current === active)

  return (
    <>
      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 32, borderBottom: '0.5px solid rgba(245,240,232,0.1)', marginBottom: 48, flexWrap: 'wrap' }}>
        <button className={`filter-btn ${active === 'all' ? 'active' : ''}`} onClick={() => setActive('all')}>
          All
        </button>
        {categories.map((c) => (
          <button key={c._id} className={`filter-btn ${active === c.slug.current ? 'active' : ''}`}
            onClick={() => setActive(c.slug.current)}>
            {c.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="work-grid">
        {filtered.map((w) => (
          <WorkCardComponent key={w._id} work={w} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: 'rgba(245,240,232,0.35)', fontSize: 20, padding: '80px 0', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>
          No work in this category yet.
        </p>
      )}
    </>
  )
}
