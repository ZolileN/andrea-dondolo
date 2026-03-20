import { defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

export default defineType({
  name: 'book',
  title: 'Books',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'subtitle', type: 'string' }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'releaseDate', type: 'date' }),
    defineField({ name: 'genre', type: 'string' }),
    defineField({ name: 'publisher', type: 'string' }),
    defineField({ name: 'summary', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'buyLink', type: 'url' }),
    defineField({ name: 'endorsements', type: 'array', of: [{ type: 'quoteItem' }] }),
    defineField({
      name: 'relatedPress',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pressPost' }] }],
    }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle', media: 'coverImage' } },
  orderings: [{ title: 'Release Date, Newest', name: 'releaseDateDesc', by: [{ field: 'releaseDate', direction: 'desc' }] }],
})
