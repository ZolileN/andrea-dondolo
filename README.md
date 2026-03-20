# Andrea Dondolo — Personal Brand Website

A production-grade personal brand platform for actress, author, speaker and coach Andrea Dondolo.

Built with **Next.js 15 · TypeScript · Tailwind CSS · Sanity CMS · Web3Forms · Vercel**.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| CMS | Sanity Studio (embedded at `/studio`) |
| Content API | Sanity Content Lake (GROQ) |
| Contact Forms | Web3Forms |
| Deployment | Vercel |
| Image CDN | Sanity CDN via `@sanity/image-url` |

---

## Project Structure

```
andrea-dondolo/
├── app/
│   ├── (site)/              # All public pages (layout: Nav + Footer)
│   │   ├── page.tsx         # Home
│   │   ├── about/
│   │   ├── work/[slug]/
│   │   ├── services/[slug]/
│   │   ├── books/[slug]/
│   │   ├── press/[slug]/
│   │   ├── media/
│   │   ├── contact/
│   │   ├── privacy/
│   │   └── thank-you/
│   ├── studio/[[...tool]]/  # Sanity Studio
│   └── api/revalidate/      # ISR webhook
├── components/
│   ├── layout/              # SiteHeader, SiteFooter, Container
│   ├── cards/               # WorkCard, BookCard, PressCard, TestimonialCard
│   ├── forms/               # ContactForm (Web3Forms)
│   ├── ui/                  # FaqAccordion, ScrollTopButton, WorkFilterGrid
│   └── portable-text/       # PortableTextRenderer
├── lib/sanity/
│   ├── client.ts            # Sanity client
│   ├── queries.ts           # All GROQ queries
│   ├── fetchers.ts          # Typed data fetchers
│   ├── image.ts             # urlFor helper
│   └── types.ts             # TypeScript types
└── sanity/
    ├── schemaTypes/
    │   ├── documents/       # 11 document schemas
    │   └── objects/         # 7 reusable object schemas
    └── structure/
        └── deskStructure.ts # Custom Sanity Studio sidebar
```

---

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/andrea-dondolo.git
cd andrea-dondolo
npm install
```

### 2. Set up Sanity

```bash
# Create a new Sanity project (or use an existing one)
npx sanity init

# This will give you a projectId and dataset name
```

Go to [sanity.io/manage](https://sanity.io/manage) → your project → **API** → **Tokens** → create a token with **Viewer** permissions.

### 3. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token
SANITY_REVALIDATE_SECRET=any_random_string_here

NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key
```

Get your Web3Forms key free at [web3forms.com](https://web3forms.com).

### 4. Run locally

```bash
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

### 5. Add content in Studio

Open `/studio` and populate:
1. **Site Settings** — contact details, social links, logo
2. **Homepage** — hero text, hero image, featured content references
3. **About Page** — biography, milestones, portrait
4. **Work Categories** — Acting, Writing, Speaking, Coaching, Ambassador
5. **Work** — individual projects and roles
6. **Services** — speaking, coaching, hosting, etc.
7. **Testimonials** — client/colleague endorsements
8. **FAQs** — common booking questions

---

## Deployment (Vercel)

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/andrea-dondolo)

### Manual deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard or via CLI:
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_DATASET
vercel env add NEXT_PUBLIC_SANITY_API_VERSION
vercel env add SANITY_API_READ_TOKEN
vercel env add SANITY_REVALIDATE_SECRET
vercel env add NEXT_PUBLIC_WEB3FORMS_KEY
```

### Sanity CORS

In [sanity.io/manage](https://sanity.io/manage) → API → CORS Origins, add:
- `http://localhost:3000`
- `https://your-domain.co.za`
- `https://your-vercel-preview-url.vercel.app`

---

## ISR Revalidation Webhook

To enable automatic revalidation when content is updated in Sanity:

1. In Sanity Studio → Settings → API → Webhooks, create a new webhook:
   - **URL**: `https://your-domain.co.za/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type in ["work","service","book","pressPost","homepage","aboutPage"]`

---

## Content Types

| Type | Description |
|------|-------------|
| `siteSettings` | Global site config, contact details, social links |
| `homepage` | Hero, featured content references, CTAs |
| `aboutPage` | Biography, milestones, stats, philosophy |
| `contactPage` | Intro copy, FAQ references |
| `work` | Acting roles, speaking, writing, coaching projects |
| `workCategory` | Categories for filtering the work grid |
| `service` | Service offerings with included items and ideal-for |
| `book` | Publications with cover, summary, endorsements |
| `pressPost` | Press articles and media mentions |
| `testimonial` | Endorsements and quotes |
| `faq` | Frequently asked questions |

---

## Phase 2 Additions (Roadmap)

- [ ] `mediaItem` Sanity schema (replace hardcoded media grid)
- [ ] Newsletter capture (Mailchimp / ConvertKit)
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Multilingual support (i18n)
- [ ] CRM webhook from Web3Forms
- [ ] Open Graph image generation (`@vercel/og`)

---

## License

Private — all rights reserved. Built for Andrea Dondolo.
