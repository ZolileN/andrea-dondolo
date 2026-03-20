import { groq } from 'next-sanity'

// ── Fragments ──────────────────────────────────────────────────────────────────

const imageFields = groq`
  asset->{ _id, url, metadata { dimensions, lqip } }
`

const seoFields = groq`
  seoTitle, seoDescription
`

const workCardFields = groq`
  _id,
  title,
  slug,
  year,
  excerpt,
  roleLabel,
  heroImage { ${imageFields} },
  category->{ _id, title, slug },
  featured
`

const serviceCardFields = groq`
  _id,
  title,
  slug,
  summary,
  heroImage { ${imageFields} },
  pricingNote,
  featured,
  sortOrder
`

const bookCardFields = groq`
  _id,
  title,
  slug,
  subtitle,
  releaseDate,
  genre,
  publisher,
  coverImage { ${imageFields} },
  featured
`

const pressCardFields = groq`
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  sourceName,
  featuredImage { ${imageFields} },
  featured
`

const testimonialFields = groq`
  _id, name, role, organisation, quote,
  image { ${imageFields} }
`

// ── Site Settings ──────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle, siteDescription,
    logo { ${imageFields} },
    primaryEmail, secondaryEmail, phone, whatsappNumber,
    prContactName, prContactPhone,
    socialLinks[] { platform, url },
    footerText
  }
`

// ── Homepage ───────────────────────────────────────────────────────────────────

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    heroEyebrow, heroTitle, heroSubtitle,
    heroImage { ${imageFields} },
    aboutPreviewTitle, aboutPreviewText,
    aboutPreviewImage { ${imageFields} },
    featuredWork[]->{ ${workCardFields} },
    featuredServices[]->{ ${serviceCardFields} },
    featuredBooks[]->{ ${bookCardFields} },
    featuredPress[]->{ ${pressCardFields} },
    testimonialItems[]->{ ${testimonialFields} },
    contactCtaTitle, contactCtaText,
    ${seoFields}
  }
`

// ── About Page ─────────────────────────────────────────────────────────────────

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    title, intro,
    heroImage { ${imageFields} },
    biography,
    milestones[] { year, title, description },
    stats[] { label, value },
    philosophyTitle, philosophyText,
    ${seoFields}
  }
`

// ── Work ───────────────────────────────────────────────────────────────────────

export const workListQuery = groq`
  *[_type == "work"] | order(year desc) {
    ${workCardFields}
  }
`

export const workCategoriesQuery = groq`
  *[_type == "workCategory"] | order(title asc) {
    _id, title, slug
  }
`

export const workBySlugQuery = groq`
  *[_type == "work" && slug.current == $slug][0] {
    _id, title, year, roleLabel, excerpt,
    heroImage { ${imageFields} },
    gallery[] { ${imageFields} },
    body,
    credits[] { label, value },
    externalLinks[] { label, url, isExternal },
    category->{ _id, title, slug },
    relatedWork[]->{ ${workCardFields} },
    ${seoFields}
  }
`

// ── Services ───────────────────────────────────────────────────────────────────

export const servicesListQuery = groq`
  *[_type == "service"] | order(sortOrder asc) {
    ${serviceCardFields}
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id, title, summary, pricingNote,
    heroImage { ${imageFields} },
    body,
    includedItems,
    idealFor,
    ${seoFields}
  }
`

// ── Books ──────────────────────────────────────────────────────────────────────

export const booksListQuery = groq`
  *[_type == "book"] | order(releaseDate desc) {
    ${bookCardFields}
  }
`

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id, title, subtitle, releaseDate, genre, publisher, buyLink,
    coverImage { ${imageFields} },
    summary,
    endorsements[] { quote, author },
    relatedPress[]->{ ${pressCardFields} },
    ${seoFields}
  }
`

// ── Press ──────────────────────────────────────────────────────────────────────

export const pressListQuery = groq`
  *[_type == "pressPost"] | order(publishedAt desc) {
    ${pressCardFields}
  }
`

export const pressBySlugQuery = groq`
  *[_type == "pressPost" && slug.current == $slug][0] {
    _id, title, publishedAt, excerpt, sourceName, sourceUrl,
    featuredImage { ${imageFields} },
    body,
    relatedWork[]->{ ${workCardFields} },
    relatedBooks[]->{ ${bookCardFields} },
    ${seoFields}
  }
`

// ── Testimonials ───────────────────────────────────────────────────────────────

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt asc) {
    ${testimonialFields}
  }
`

// ── FAQs ───────────────────────────────────────────────────────────────────────

export const faqsQuery = groq`
  *[_type == "faq"] | order(sortOrder asc) {
    _id, question, answer
  }
`

// ── Contact Page ───────────────────────────────────────────────────────────────

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    title, intro, formSuccessMessage, responseTimeText,
    faqItems[]->{ _id, question, answer }
  }
`
