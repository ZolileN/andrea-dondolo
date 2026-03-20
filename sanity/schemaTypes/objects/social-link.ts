import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'socialLink', title: 'Social Link', type: 'object',
  fields: [
    defineField({ name: 'platform', type: 'string', options: { list: ['Instagram','LinkedIn','Facebook','X / Twitter','YouTube','TikTok'] } }),
    defineField({ name: 'url', type: 'url', validation: (R) => R.required() }),
  ],
  preview: { select: { title: 'platform', subtitle: 'url' } },
})
