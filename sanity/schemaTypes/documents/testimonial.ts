import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({ name: 'name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'organisation', type: 'string' }),
    defineField({ name: 'quote', type: 'text', rows: 4, validation: (R) => R.required() }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'organisation' } },
})
