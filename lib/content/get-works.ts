import {
  getFallbackWorkBySlug,
  getFallbackWorkCategories,
  getFallbackWorkList,
  getFallbackWorkSlugs,
  getRelatedFallbackWork,
  type FallbackWork,
} from '@/lib/content/works'
import type { Work, WorkCard, WorkCategory } from '@/lib/sanity/types'

export function resolveWorkList(cmsWorks: WorkCard[]): WorkCard[] {
  return cmsWorks.length > 0 ? cmsWorks : getFallbackWorkList()
}

export function resolveWorkCategories(cmsCategories: WorkCategory[]): WorkCategory[] {
  return cmsCategories.length > 0 ? cmsCategories : getFallbackWorkCategories()
}

export function resolveWorkBySlug(cmsWork: Work | null, slug: string): Work | null {
  if (cmsWork) return cmsWork
  return getFallbackWorkBySlug(slug)
}

export function resolveWorkSlugs(cmsWorks: WorkCard[]): { slug: string }[] {
  if (cmsWorks.length > 0) {
    return cmsWorks.map((w) => ({ slug: w.slug.current }))
  }
  return getFallbackWorkSlugs()
}

export function resolveRelatedWork(cmsWork: Work | null, slug: string): WorkCard[] {
  if (cmsWork?.relatedWork?.length) return cmsWork.relatedWork
  return getRelatedFallbackWork(slug)
}

export function isFallbackWork(work: Work): work is FallbackWork {
  return 'heroImagePath' in work && typeof (work as FallbackWork).heroImagePath === 'string'
}
