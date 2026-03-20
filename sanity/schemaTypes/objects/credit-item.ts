import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'creditItem', title: 'Credit', type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'value', type: 'string' }),
  ],
  preview: { select: { title: 'label', subtitle: 'value' } },
})
