import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({ name: 'title', type: 'string', initialValue: 'Get in Touch' }),
    defineField({ name: 'intro', type: 'text', rows: 4 }),
    defineField({ name: 'formSuccessMessage', type: 'string', initialValue: 'Thank you — we will be in touch within 2–3 business days.' }),
    defineField({ name: 'responseTimeText', type: 'string' }),
    defineField({ name: 'faqItems', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
  ],
  preview: { prepare: () => ({ title: 'Contact Page' }) },
})
