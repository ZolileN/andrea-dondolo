import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'quoteItem', title: 'Quote', type: 'object',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 3, validation: (R) => R.required() }),
    defineField({ name: 'author', type: 'string', validation: (R) => R.required() }),
  ],
  preview: { select: { title: 'author', subtitle: 'quote' } },
})
