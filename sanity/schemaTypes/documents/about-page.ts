import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', initialValue: 'About Andrea Dondolo' }),
    defineField({ name: 'intro', title: 'Intro Paragraph', type: 'text', rows: 4 }),
    defineField({ name: 'heroImage', title: 'Hero Portrait', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'biography',
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }, { title: 'H2', value: 'h2' }, { title: 'Quote', value: 'blockquote' }] }],
    }),
    defineField({
      name: 'milestones',
      title: 'Career Milestones',
      type: 'array',
      of: [{ type: 'milestone' }],
    }),
    defineField({
      name: 'stats',
      title: 'Stats / Achievements',
      type: 'array',
      of: [{ type: 'statItem' }],
    }),
    defineField({ name: 'philosophyTitle', title: 'Philosophy Section Title', type: 'string' }),
    defineField({
      name: 'philosophyText',
      title: 'Philosophy / Mission',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
})
