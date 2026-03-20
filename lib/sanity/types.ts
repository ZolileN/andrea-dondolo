import type { PortableTextBlock } from '@portabletext/react'

export interface SanityImage {
  asset: {
    _id: string
    url: string
    metadata: {
      dimensions: { width: number; height: number; aspectRatio: number }
      lqip: string
    }
  }
}

export interface SanitySlug { current: string }

export interface SocialLink { platform: string; url: string }

export interface LinkItem { label: string; url: string; isExternal: boolean }

export interface CreditItem { label: string; value: string }

export interface QuoteItem { quote: string; author: string }

export interface Milestone { year: string; title: string; description?: string }

export interface StatItem { label: string; value: string }

// ── Content Types ──────────────────────────────────────────────────────────────

export interface WorkCategory {
  _id: string
  title: string
  slug: SanitySlug
}

export interface WorkCard {
  _id: string
  title: string
  slug: SanitySlug
  year?: number
  excerpt?: string
  roleLabel?: string
  heroImage?: SanityImage
  category?: WorkCategory
  featured?: boolean
}

export interface Work extends WorkCard {
  gallery?: SanityImage[]
  body?: PortableTextBlock[]
  credits?: CreditItem[]
  externalLinks?: LinkItem[]
  relatedWork?: WorkCard[]
  seoTitle?: string
  seoDescription?: string
}

export interface ServiceCard {
  _id: string
  title: string
  slug: SanitySlug
  summary?: string
  heroImage?: SanityImage
  pricingNote?: string
  featured?: boolean
  sortOrder?: number
}

export interface Service extends ServiceCard {
  body?: PortableTextBlock[]
  includedItems?: string[]
  idealFor?: string[]
  seoTitle?: string
  seoDescription?: string
}

export interface BookCard {
  _id: string
  title: string
  slug: SanitySlug
  subtitle?: string
  releaseDate?: string
  genre?: string
  publisher?: string
  coverImage?: SanityImage
  featured?: boolean
}

export interface Book extends BookCard {
  summary?: PortableTextBlock[]
  buyLink?: string
  endorsements?: QuoteItem[]
  relatedPress?: PressCard[]
  seoTitle?: string
  seoDescription?: string
}

export interface PressCard {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt?: string
  excerpt?: string
  sourceName?: string
  featuredImage?: SanityImage
  featured?: boolean
}

export interface PressPost extends PressCard {
  sourceUrl?: string
  body?: PortableTextBlock[]
  relatedWork?: WorkCard[]
  relatedBooks?: BookCard[]
  seoTitle?: string
  seoDescription?: string
}

export interface Testimonial {
  _id: string
  name: string
  role?: string
  organisation?: string
  quote: string
  image?: SanityImage
}

export interface Faq {
  _id: string
  question: string
  answer: PortableTextBlock[]
}

export interface SiteSettings {
  siteTitle?: string
  siteDescription?: string
  logo?: SanityImage
  primaryEmail?: string
  secondaryEmail?: string
  phone?: string
  whatsappNumber?: string
  prContactName?: string
  prContactPhone?: string
  socialLinks?: SocialLink[]
  footerText?: string
}

export interface HomepageData {
  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  heroImage?: SanityImage
  aboutPreviewTitle?: string
  aboutPreviewText?: string
  aboutPreviewImage?: SanityImage
  featuredWork?: WorkCard[]
  featuredServices?: ServiceCard[]
  featuredBooks?: BookCard[]
  featuredPress?: PressCard[]
  testimonialItems?: Testimonial[]
  contactCtaTitle?: string
  contactCtaText?: string
  seoTitle?: string
  seoDescription?: string
}

export interface AboutPageData {
  title?: string
  intro?: string
  heroImage?: SanityImage
  biography?: PortableTextBlock[]
  milestones?: Milestone[]
  stats?: StatItem[]
  philosophyTitle?: string
  philosophyText?: PortableTextBlock[]
  seoTitle?: string
  seoDescription?: string
}

export interface ContactPageData {
  title?: string
  intro?: string
  formSuccessMessage?: string
  responseTimeText?: string
  faqItems?: Faq[]
}
