import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'includedItems', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'idealFor', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'pricingNote', type: 'string', initialValue: 'Pricing available on request' }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'sortOrder', type: 'number', initialValue: 0 }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'summary' } },
  orderings: [{ title: 'Sort Order', name: 'sortOrderAsc', by: [{ field: 'sortOrder', direction: 'asc' }] }],
})
