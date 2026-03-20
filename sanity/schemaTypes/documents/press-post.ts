import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
  name: 'pressPost',
  title: 'Press & News',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (R) => R.required() }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'featuredImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'sourceName', type: 'string' }),
    defineField({ name: 'sourceUrl', type: 'url' }),
    defineField({ name: 'relatedWork', type: 'array', of: [{ type: 'reference', to: [{ type: 'work' }] }] }),
    defineField({ name: 'relatedBooks', type: 'array', of: [{ type: 'reference', to: [{ type: 'book' }] }] }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'sourceName', media: 'featuredImage' } },
  orderings: [{ title: 'Published, Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
