import type { Metadata } from 'next'
import Container from '@/components/layout/container'
import ScrollTopButton from '@/components/ui/scroll-top-button'

export const metadata: Metadata = {
  title: 'Media',
  description: 'Video interviews, gallery, and event appearances featuring Andrea Dondolo.',
}

const MEDIA = [
  { type: 'video', title: 'TEDx Cape Town: The Politics of Presence', year: 2023, duration: '18 min', color: '#1A0A0A' },
  { type: 'video', title: 'Kaya FM: Morning Drive Interview', year: 2023, duration: '32 min', color: '#0A0A1A' },
  { type: 'video', title: 'SABC Special: The Andrea Dondolo Story', year: 2022, duration: '46 min', color: '#0A1A0A' },
  { type: 'gallery', title: 'The River — Season 5 Promo Shoot', year: 2022, images: 12, color: '#1A1400' },
  { type: 'gallery', title: 'Forbes Africa Cover Shoot', year: 2023, images: 8, color: '#1A001A' },
  { type: 'video', title: 'Books Live: The Weight of Wings Launch', year: 2022, duration: '55 min', color: '#001A1A' },
  { type: 'gallery', title: 'Ubuntu Leadership Forum 2023', year: 2023, images: 24, color: '#1A0A14' },
  { type: 'video', title: 'SABC3 Expresso: Author Interview', year: 2020, duration: '14 min', color: '#0A141A' },
]

export default function MediaPage() {
  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 100 }}>
        <Container>
          <p className="section-label">Media & Gallery</p>
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginTop: 24, marginBottom: 64, alignItems: 'end' }}>
            <h1 className="display-heading">Seen & <em>heard</em>.</h1>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.55)' }}>
              Interviews, panel discussions, event appearances, editorial shoots, and behind-the-scenes moments from Andrea's creative life.
            </p>
          </div>

          <div className="media-mosaic">
            {MEDIA.map((m, i) => (
              <div
                key={i}
                className={`media-item${i === 0 ? ' media-item--featured' : ''}`}
                style={{ background: m.color }}
              >
                <span className="media-item__icon">
                  {m.type === 'video' ? '▶' : '⬛'}
                </span>
                <div className="media-item__overlay">
                  <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>
                    {m.type === 'video' ? `▶ Video · ${m.duration}` : `Gallery · ${(m as { images?: number }).images} images`}
                  </span>
                  <p className="media-item__title">{m.title}</p>
                  <p className="media-item__year">{m.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 80, textAlign: 'center', padding: '48px', border: '0.5px solid rgba(245,240,232,0.08)', background: 'rgba(201,168,76,0.02)' }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 20, color: 'rgba(245,240,232,0.5)', marginBottom: 20 }}>
              For media requests, hi-res assets, or interview enquiries
            </p>
            <a href="/contact" className="btn-primary">Contact Press Team</a>
          </div>
        </Container>
      </section>

      <ScrollTopButton />

      <style>{`
        .media-mosaic {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }
        .media-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 4/3;
          border: 0.5px solid rgba(245,240,232,0.04);
        }
        .media-item--featured {
          grid-column: span 2;
          grid-row: span 2;
          aspect-ratio: 1/1;
        }
        .media-item__icon {
          font-family: var(--font-cormorant);
          color: rgba(201,168,76,0.12);
          font-size: 40px;
          user-select: none;
          transition: transform 0.4s ease;
        }
        .media-item--featured .media-item__icon { font-size: 72px; }
        .media-item:hover .media-item__icon { transform: scale(1.15); }
        .media-item__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }
        .media-item--featured .media-item__overlay { padding: 28px; }
        .media-item:hover .media-item__overlay { opacity: 1; }
        .media-item__title {
          font-family: var(--font-cormorant);
          font-size: 15px;
          font-weight: 400;
          color: var(--cream);
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .media-item--featured .media-item__title { font-size: 22px; }
        .media-item__year {
          font-size: 10px;
          color: rgba(245,240,232,0.45);
          letter-spacing: 0.12em;
        }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .media-mosaic { grid-template-columns: repeat(2, 1fr); }
          .media-item--featured { grid-column: span 2; }
        }
        @media (max-width: 480px) {
          .media-mosaic { grid-template-columns: 1fr; }
          .media-item--featured { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>
    </>
  )
}
