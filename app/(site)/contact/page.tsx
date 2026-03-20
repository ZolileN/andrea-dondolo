import type { Metadata } from 'next'
import Link from 'next/link'
import { getContactPage, getSiteSettings } from '@/lib/sanity/fetchers'
import Container from '@/components/layout/container'
import ContactForm from '@/components/forms/contact-form'
import FaqAccordion from '@/components/ui/faq-accordion'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book Andrea Dondolo for speaking engagements, coaching, MC & hosting, or media appearances.',
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getContactPage(), getSiteSettings()])

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 100 }}>
        <Container>
          <p className="section-label">Get in Touch</p>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, marginTop: 32 }}>

            {/* LEFT */}
            <div>
              <h1 className="display-heading">Let's create something <em>together</em>.</h1>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(245,240,232,0.55)', margin: '32px 0 56px' }}>
                {page?.intro ?? "Andrea welcomes enquiries for speaking engagements, MC & hosting, coaching programmes, media appearances, brand collaborations, and general press enquiries."}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { label: 'Bookings', value: settings?.primaryEmail ?? 'bookings@andrea-dondolo.co.za', href: `mailto:${settings?.primaryEmail ?? 'bookings@andrea-dondolo.co.za'}` },
                  { label: 'Press & Media', value: settings?.secondaryEmail ?? 'press@andrea-dondolo.co.za', href: `mailto:${settings?.secondaryEmail ?? 'press@andrea-dondolo.co.za'}` },
                  { label: 'WhatsApp', value: settings?.whatsappNumber ?? '+27 82 000 0000', href: `https://wa.me/${(settings?.whatsappNumber ?? '').replace(/\s/g, '')}` },
                ].map((c) => (
                  <a key={c.label} href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-detail-link">
                    <p className="contact-detail-label">{c.label}</p>
                    <p className="contact-detail-value">{c.value}</p>
                  </a>
                ))}
              </div>

              <div style={{ marginTop: 48 }}>
                <p className="contact-social-heading">Follow Andrea</p>
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  {(settings?.socialLinks?.length ? settings.socialLinks : [
                    { platform: 'Instagram', url: '#' },
                    { platform: 'LinkedIn', url: '#' },
                    { platform: 'Facebook', url: '#' },
                    { platform: 'X / Twitter', url: '#' },
                  ]).map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                      {s.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div>
              <ContactForm successMessage={page?.formSuccessMessage} />
            </div>
          </div>
        </Container>
      </section>

      {page?.faqItems?.length ? (
        <>
          <div style={{ height: '0.5px', background: 'rgba(245,240,232,0.08)' }} />
          <section style={{ padding: '80px 0' }}>
            <Container>
              <div className="contact-faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
                <div>
                  <p className="section-label">FAQ</p>
                  <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 300, color: 'var(--cream)', marginTop: 20, lineHeight: 1.2 }}>
                    Common <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>questions</em>.
                  </h2>
                </div>
                <FaqAccordion faqs={page.faqItems} />
              </div>
            </Container>
          </section>
        </>
      ) : null}

      <style>{`
        .contact-detail-link {
          display: block;
          border-bottom: 0.5px solid rgba(245,240,232,0.08);
          padding: 24px 0;
          text-decoration: none;
          transition: padding-left 0.3s ease;
        }
        .contact-detail-link:hover { padding-left: 8px; }
        .contact-detail-label {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 6px;
        }
        .contact-detail-value { font-size: 15px; color: var(--cream); font-weight: 300; }
        .contact-social-heading {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(245,240,232,0.28); margin-bottom: 20px;
        }
        .contact-social-link {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(245,240,232,0.38); text-decoration: none; transition: color 0.3s;
        }
        .contact-social-link:hover { color: var(--gold); }
        @media (max-width: 900px) {
          .contact-grid, .contact-faq-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
      `}</style>
    </>
  )
}
