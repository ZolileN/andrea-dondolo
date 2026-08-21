import {
  resolveRelatedWork,
  resolveWorkBySlug,
  resolveWorkCategories,
  resolveWorkList,
  resolveWorkSlugs,
} from '@/lib/content/get-works'
import { client } from './client'
import {
  siteSettingsQuery, homepageQuery, aboutPageQuery, contactPageQuery,
  workListQuery, workCategoriesQuery, workBySlugQuery,
  servicesListQuery, serviceBySlugQuery,
  booksListQuery, bookBySlugQuery,
  pressListQuery, pressBySlugQuery,
  testimonialsQuery, faqsQuery,
} from './queries'
import type {
  SiteSettings, HomepageData, AboutPageData, ContactPageData,
  WorkCard, WorkCategory, Work,
  ServiceCard, Service,
  BookCard, Book,
  PressCard, PressPost,
  Testimonial, Faq,
} from './types'

const revalidate = 3600

// Safe fetch — returns null/[] instead of throwing when not configured
async function safeFetch<T>(query: string, params: Record<string,unknown> = {}): Promise<T | null> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) return null
  try {
    return await client.fetch<T>(query, params, { next: { revalidate } })
  } catch {
    return null
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch(siteSettingsQuery)
}

export async function getHomepage(): Promise<HomepageData | null> {
  return safeFetch(homepageQuery)
}

export async function getAboutPage(): Promise<AboutPageData | null> {
  return safeFetch(aboutPageQuery)
}

export async function getContactPage(): Promise<ContactPageData | null> {
  return safeFetch(contactPageQuery)
}

export async function getWorkList(): Promise<WorkCard[]> {
  const items = (await safeFetch<WorkCard[]>(workListQuery)) ?? []
  return resolveWorkList(items)
}

export async function getWorkCategories(): Promise<WorkCategory[]> {
  const items = (await safeFetch<WorkCategory[]>(workCategoriesQuery)) ?? []
  return resolveWorkCategories(items)
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  const cmsWork = await safeFetch<Work>(workBySlugQuery, { slug })
  return resolveWorkBySlug(cmsWork, slug)
}

export async function getWorkSlugs(): Promise<{ slug: string }[]> {
  const items = (await safeFetch<WorkCard[]>(workListQuery)) ?? []
  return resolveWorkSlugs(items)
}

export async function getRelatedWork(work: Work, slug: string): Promise<WorkCard[]> {
  return resolveRelatedWork(work, slug)
}

export async function getServicesList(): Promise<ServiceCard[]> {
  return (await safeFetch<ServiceCard[]>(servicesListQuery)) ?? []
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return safeFetch(serviceBySlugQuery, { slug })
}

export async function getServiceSlugs(): Promise<{ slug: string }[]> {
  const items = await getServicesList()
  return items.map((s) => ({ slug: s.slug.current }))
}

export async function getBooksList(): Promise<BookCard[]> {
  return (await safeFetch<BookCard[]>(booksListQuery)) ?? []
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  return safeFetch(bookBySlugQuery, { slug })
}

export async function getBookSlugs(): Promise<{ slug: string }[]> {
  const items = await getBooksList()
  return items.map((b) => ({ slug: b.slug.current }))
}

export async function getPressList(): Promise<PressCard[]> {
  return (await safeFetch<PressCard[]>(pressListQuery)) ?? []
}

export async function getPressBySlug(slug: string): Promise<PressPost | null> {
  return safeFetch(pressBySlugQuery, { slug })
}

export async function getPressSlugs(): Promise<{ slug: string }[]> {
  const items = await getPressList()
  return items.map((p) => ({ slug: p.slug.current }))
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return (await safeFetch<Testimonial[]>(testimonialsQuery)) ?? []
}

export async function getFaqs(): Promise<Faq[]> {
  return (await safeFetch<Faq[]>(faqsQuery)) ?? []
}
