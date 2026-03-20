'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ENQUIRY_TYPES = [
  'Speaking Engagement',
  'MC / Hosting',
  'Acting Coaching',
  'Transformation Coaching',
  'Workshop / Training',
  'Brand Collaboration',
  'Media / Press',
  'General Enquiry',
]

export default function ContactForm({ successMessage }: { successMessage?: string }) {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    enquiry_type: '',
    service_interest: '',
    event_date: '',
    message: '',
  })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          subject: `New enquiry from ${form.name} — ${form.enquiry_type || 'General'}`,
          from_name: 'Andrea Dondolo Website',
          botcheck: '',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        router.push('/thank-you')
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Network error. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  const fieldStyle: React.CSSProperties = {
    marginBottom: 28,
  }
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    marginBottom: 8,
    fontWeight: 400,
  }

  return (
    <form onSubmit={submit} noValidate>
      {/* honeypot */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }} className="form-2col">
        <div style={fieldStyle}>
          <label htmlFor="name" style={labelStyle}>Full Name *</label>
          <input id="name" name="name" className="form-input" value={form.name} onChange={handle}
            placeholder="Your full name" required />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="email" style={labelStyle}>Email Address *</label>
          <input id="email" name="email" type="email" className="form-input" value={form.email} onChange={handle}
            placeholder="your@email.com" required />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="phone" style={labelStyle}>Phone Number</label>
          <input id="phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handle}
            placeholder="+27 00 000 0000" />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="organisation" style={labelStyle}>Organisation</label>
          <input id="organisation" name="organisation" className="form-input" value={form.organisation} onChange={handle}
            placeholder="Company / Institution" />
        </div>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="enquiry_type" style={labelStyle}>Enquiry Type *</label>
        <select id="enquiry_type" name="enquiry_type" className="form-input" value={form.enquiry_type} onChange={handle} required
          style={{ appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
          <option value="">Select enquiry type…</option>
          {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="event_date" style={labelStyle}>Event / Start Date</label>
        <input id="event_date" name="event_date" type="date" className="form-input" value={form.event_date} onChange={handle}
          style={{ colorScheme: 'dark' }} />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="message" style={labelStyle}>Message *</label>
        <textarea id="message" name="message" className="form-input" value={form.message} onChange={handle}
          placeholder="Tell Andrea about your event, project, or enquiry — the more detail the better."
          rows={6} required style={{ resize: 'vertical' }} />
      </div>

      {error && (
        <p style={{ fontSize: 13, color: '#E24B4A', marginBottom: 20 }}>{error}</p>
      )}

      <button type="submit" className="btn-primary" disabled={sending}
        style={{ width: '100%', padding: '16px 32px', fontSize: 12, cursor: sending ? 'wait' : 'pointer' }}>
        {sending ? 'Sending…' : 'Send Message'}
      </button>

      <p style={{ fontSize: 11, color: 'rgba(245,240,232,0.28)', marginTop: 16, textAlign: 'center', letterSpacing: '0.06em' }}>
        Your information is kept confidential. We respond within 2–3 business days.
      </p>

      <style>{`
        @media (max-width: 600px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}
