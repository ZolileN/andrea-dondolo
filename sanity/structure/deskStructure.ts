import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Site Settings').id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem().title('Homepage').id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem().title('About Page').id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem().title('Contact Page').id('contactPage')
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.divider(),
      S.documentTypeListItem('work').title('Work'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('book').title('Books'),
      S.documentTypeListItem('pressPost').title('Press & News'),
      S.divider(),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('workCategory').title('Work Categories'),
    ])
