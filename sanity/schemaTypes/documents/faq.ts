import { defineField, defineType } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export default defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: 'question', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'answer', type: 'array', of: [{ type: 'block' }], validation: (R) => R.required() }),
    defineField({ name: 'sortOrder', type: 'number', initialValue: 0 }),
  ],
  preview: { select: { title: 'question' } },
  orderings: [{ title: 'Sort Order', name: 'sortOrderAsc', by: [{ field: 'sortOrder', direction: 'asc' }] }],
})
