import { client } from './client'

type SanityFetchOptions = {
  query: string
  params?: Record<string, unknown>
}

export async function sanityFetch<T>({ query, params = {} }: SanityFetchOptions): Promise<T> {
  return client.fetch<T>(query, params)
}

export function SanityLive(): null {
  return null
}
