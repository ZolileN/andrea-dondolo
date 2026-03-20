import { createClient } from 'next-sanity'

const projectId  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  || 'placeholder'
const dataset    = process.env.NEXT_PUBLIC_SANITY_DATASET      || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION  || '2024-01-01'

// Only create a real client when a valid projectId is configured
const validProject = /^[a-z0-9-]+$/.test(projectId) && projectId !== 'placeholder'

export const client = createClient({
  projectId: validProject ? projectId : 'placeholder',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
})
