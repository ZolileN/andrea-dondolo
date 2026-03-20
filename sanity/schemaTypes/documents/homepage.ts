import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({ name: 'heroEyebrow', title: 'Hero Eyebrow Text', type: 'string', initialValue: 'Actress · Author · Speaker · Coach' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'aboutPreviewTitle', title: 'About Preview Title', type: 'string' }),
    defineField({ name: 'aboutPreviewText', title: 'About Preview Text', type: 'text', rows: 4 }),
    defineField({ name: 'aboutPreviewImage', title: 'About Preview Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'featuredWork',
      title: 'Featured Work (up to 6)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'work' }] }],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'featuredServices',
      title: 'Featured Services (up to 3)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'featuredBooks',
      title: 'Featured Books',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'book' }] }],
    }),
    defineField({
      name: 'featuredPress',
      title: 'Featured Press Posts (up to 3)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pressPost' }] }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'testimonialItems',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
    defineField({ name: 'contactCtaTitle', title: 'Contact CTA Title', type: 'string' }),
    defineField({ name: 'contactCtaText', title: 'Contact CTA Text', type: 'text', rows: 3 }),
    defineField({ name: 'seoTitle', title: 'SEO Title Override', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description Override', type: 'text', rows: 3 }),
  ],
  preview: { prepare: () => ({ title: 'Homepage' }) },
})
