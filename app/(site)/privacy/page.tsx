import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for andrea-dondolo.co.za',
}

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'When you submit an enquiry via our contact form, we collect your name, email address, phone number, organisation name, and the content of your message. We do not collect any additional personal data without your explicit consent.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Your information is used solely to respond to your enquiry, facilitate a booking or collaboration, and maintain necessary records for business administration. We will never use your data for unsolicited marketing communications.',
  },
  {
    title: 'Third-Party Services',
    body: 'We use Web3Forms to process contact form submissions. Your data may be transmitted to this service for processing purposes only. We do not sell, rent, or share your personal information with any third party for marketing or commercial purposes.',
  },
  {
    title: 'Data Retention',
    body: 'Enquiry data is retained for a period of up to 12 months, after which it is securely deleted unless an ongoing professional relationship requires otherwise. You may request deletion of your data at any time by contacting us.',
  },
  {
    title: 'Your Rights (POPIA)',
    body: 'In accordance with the Protection of Personal Information Act (POPIA), you have the right to request access to the personal data we hold about you, to request correction or deletion, and to object to certain types of processing. Please contact us at privacy@andrea-dondolo.co.za to exercise any of these rights.',
  },
  {
    title: 'Cookies',
    body: 'This website does not use tracking or advertising cookies. Any cookies set are strictly necessary for website functionality. No third-party analytics or advertising cookies are used without your consent.',
  },
  {
    title: 'Security',
    body: 'We take reasonable precautions to protect your personal information from unauthorised access, disclosure, or loss. All data transmissions are encrypted via HTTPS.',
  },
  {
    title: 'Contact',
    body: 'For any privacy-related queries, please contact: privacy@andrea-dondolo.co.za. This Privacy Policy was last updated in January 2025.',
  },
]

export default function PrivacyPage() {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 100 }}>
      <Container narrow>
        <p className="section-label">Legal</p>
        <h1 className="display-heading" style={{ margin: '20px 0 48px' }}>Privacy <em>Policy</em>.</h1>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(245,240,232,0.4)', marginBottom: 56, borderBottom: '0.5px solid rgba(245,240,232,0.08)', paddingBottom: 32 }}>
          Andrea Dondolo and her team are committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA). This policy explains what data we collect, how we use it, and your rights.
        </p>
        {SECTIONS.map((s, i) => (
          <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '0.5px solid rgba(245,240,232,0.07)' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 26, fontWeight: 400, color: 'var(--cream)', marginBottom: 14 }}>{s.title}</h2>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(245,240,232,0.52)' }}>{s.body}</p>
          </div>
        ))}
        <div style={{ marginTop: 40 }}>
          <Link href="/contact" className="btn-ghost">Contact Us <span className="btn-arrow" /></Link>
        </div>
      </Container>
    </section>
  )
}
