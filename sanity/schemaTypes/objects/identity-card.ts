import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'identityCard', title: 'Identity Card', type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title' } },
})
