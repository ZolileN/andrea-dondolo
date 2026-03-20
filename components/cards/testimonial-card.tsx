import type { Testimonial } from '@/lib/sanity/types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card">
      <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontWeight: 300, lineHeight: 1.75, color: 'var(--cream)', marginBottom: 28, marginTop: 32 }}>
        {testimonial.quote}
      </p>
      <div style={{ height: '0.5px', background: 'rgba(201,168,76,0.2)', marginBottom: 20 }} />
      <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--cream)', marginBottom: 4 }}>{testimonial.name}</p>
      <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)' }}>
        {testimonial.role}{testimonial.role && testimonial.organisation ? ', ' : ''}{testimonial.organisation}
      </p>
    </div>
  )
}
