import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'statItem', title: 'Stat', type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'value', type: 'string', validation: (R) => R.required() }),
  ],
  preview: { select: { title: 'label', subtitle: 'value' } },
})
