import { defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'workCategory' }],
    }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({ name: 'roleLabel', title: 'Role / Contribution Label', type: 'string' }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [{ type: 'creditItem' }],
    }),
    defineField({
      name: 'externalLinks',
      title: 'External Links',
      type: 'array',
      of: [{ type: 'linkItem' }],
    }),
    defineField({
      name: 'relatedWork',
      title: 'Related Work',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'work' }] }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({ name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'year', media: 'heroImage' },
  },
  orderings: [
    { title: 'Year, Newest', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
})
