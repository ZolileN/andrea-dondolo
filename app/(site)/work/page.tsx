import type { Metadata } from 'next'
import { getWorkList, getWorkCategories } from '@/lib/sanity/fetchers'
import Container from '@/components/layout/container'
import WorkFilterGrid from '@/components/ui/work-filter-grid'
import ScrollTopButton from '@/components/ui/scroll-top-button'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Two decades of creative output spanning television, theatre, literature, and keynote platforms.',
}

export default async function WorkPage() {
  const [works, categories] = await Promise.all([getWorkList(), getWorkCategories()])

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 60 }}>
        <Container>
          <p className="section-label">Portfolio</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginTop: 24, marginBottom: 56, alignItems: 'end' }} className="two-col">
            <h1 className="display-heading">A body of <em>work</em>.</h1>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.55)' }}>
              Two decades of creative output spanning television, theatre, literature, keynote platforms, and coaching practice — each piece a testament to the power of disciplined craft.
            </p>
          </div>
          <WorkFilterGrid works={works} categories={categories} />
        </Container>
      </section>
      <ScrollTopButton />
      <style>{`.two-col { @media (max-width:900px) { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
