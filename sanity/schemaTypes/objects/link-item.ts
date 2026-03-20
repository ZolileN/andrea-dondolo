import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'linkItem', title: 'Link', type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'url', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'isExternal', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'label', subtitle: 'url' } },
})
