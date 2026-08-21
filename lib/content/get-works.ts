import {
  getFallbackWorkBySlug,
  getFallbackWorkCategories,
  getFallbackWorkList,
  getFallbackWorkSlugs,
  getRelatedFallbackWork,
  type FallbackWork,
} from '@/lib/content/works'
import type { Work, WorkCard, WorkCategory } from '@/lib/sanity/types'

function slugKey(work: WorkCard): string {
  return work.slug.current
}

/** Merge CMS work with static fallbacks — CMS wins on slug match, fallbacks fill gaps. */
export function resolveWorkList(cmsWorks: WorkCard[]): WorkCard[] {
  const fallbacks = getFallbackWorkList()
  if (cmsWorks.length === 0) return fallbacks

  const cmsBySlug = new Map(cmsWorks.map((w) => [slugKey(w), w]))
  const fallbackSlugs = new Set(fallbacks.map(slugKey))

  const merged = fallbacks.map((fb) => cmsBySlug.get(slugKey(fb)) ?? fb)

  for (const w of cmsWorks) {
    if (!fallbackSlugs.has(slugKey(w))) merged.push(w)
  }

  return merged
}

export function resolveWorkCategories(cmsCategories: WorkCategory[]): WorkCategory[] {
  const fallbacks = getFallbackWorkCategories()
  if (cmsCategories.length === 0) return fallbacks

  const cmsBySlug = new Map(cmsCategories.map((c) => [c.slug.current, c]))
  const fallbackSlugs = new Set(fallbacks.map((c) => c.slug.current))

  const merged = fallbacks.map((fb) => cmsBySlug.get(fb.slug.current) ?? fb)

  for (const c of cmsCategories) {
    if (!fallbackSlugs.has(c.slug.current)) merged.push(c)
  }

  return merged
}

export function resolveWorkBySlug(cmsWork: Work | null, slug: string): Work | null {
  if (cmsWork) return cmsWork
  return getFallbackWorkBySlug(slug)
}

export function resolveWorkSlugs(cmsWorks: WorkCard[]): { slug: string }[] {
  return resolveWorkList(cmsWorks).map((w) => ({ slug: w.slug.current }))
}

export function resolveRelatedWork(cmsWork: Work | null, slug: string): WorkCard[] {
  if (cmsWork?.relatedWork?.length) return cmsWork.relatedWork
  return getRelatedFallbackWork(slug)
}

/** Fill homepage featured grid up to 6 items — CMS picks first, fallbacks supplement. */
export function resolveFeaturedWork(cmsFeatured: WorkCard[] | undefined, allWorks: WorkCard[]): WorkCard[] {
  const defaults = allWorks.filter((w) => w.featured).slice(0, 6)
  if (!cmsFeatured?.length) return defaults

  const seen = new Set<string>()
  const merged: WorkCard[] = []

  for (const w of cmsFeatured) {
    if (merged.length >= 6) break
    const key = slugKey(w)
    if (!seen.has(key)) {
      merged.push(w)
      seen.add(key)
    }
  }

  for (const w of defaults) {
    if (merged.length >= 6) break
    const key = slugKey(w)
    if (!seen.has(key)) {
      merged.push(w)
      seen.add(key)
    }
  }

  return merged
}

export function isFallbackWork(work: Work): work is FallbackWork {
  return 'heroImagePath' in work && typeof (work as FallbackWork).heroImagePath === 'string'
}
