import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({ name: 'siteTitle', title: 'Site Title', type: 'string' }),
    defineField({ name: 'siteDescription', title: 'Site Description', type: 'text', rows: 3 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'defaultSeoTitle', title: 'Default SEO Title', type: 'string' }),
    defineField({ name: 'defaultSeoDescription', title: 'Default SEO Description', type: 'text', rows: 3 }),
    defineField({ name: 'ogImage', title: 'Default OG Image', type: 'image' }),
    defineField({ name: 'primaryEmail', title: 'Bookings Email', type: 'string' }),
    defineField({ name: 'secondaryEmail', title: 'Press Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'prContactName', title: 'PR Contact Name', type: 'string' }),
    defineField({ name: 'prContactPhone', title: 'PR Contact Phone', type: 'string' }),
    defineField({ name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'socialLink' }] }),
    defineField({ name: 'footerText', title: 'Footer Tagline', type: 'string' }),
  ],
  preview: { select: { title: 'siteTitle' } },
})
