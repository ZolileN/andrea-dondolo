import type { CreditItem, LinkItem, Work, WorkCard, WorkCategory } from '@/lib/sanity/types'

export const WORK_CATEGORIES: WorkCategory[] = [
  { _id: 'cat-television', title: 'Television', slug: { current: 'television' } },
  { _id: 'cat-film', title: 'Film', slug: { current: 'film' } },
]

export interface FallbackWork extends Work {
  heroImagePath: string
  seasonLabel?: string
  platform?: string
}

const television = WORK_CATEGORIES[0]
const film = WORK_CATEGORIES[1]

export const FALLBACK_WORKS: FallbackWork[] = [
  {
    _id: 'work-stokvel',
    title: 'Stokvel',
    slug: { current: 'stokvel' },
    year: 2003,
    roleLabel: 'Ayanda Twala',
    seasonLabel: 'Season 1–8',
    platform: 'SABC2',
    category: television,
    featured: true,
    heroImagePath: '/images/work/stokvel.jpg',
    excerpt:
      'Andrea\'s signature role as Ayanda Twala — a township tourism operator and Lerata\'s best friend — in one of South Africa\'s most beloved sitcoms.',
    credits: [
      { label: 'Character', value: 'Ayanda Twala' },
      { label: 'Seasons', value: '2003–2012' },
      { label: 'Awards', value: 'SAFTA 2007 Best Supporting Actress in a Comedy' },
      { label: 'Nominations', value: 'SAFTA 2010 & 2011 Best Actress in a Comedy' },
    ],
    externalLinks: [
      {
        label: 'View on TVSA',
        url: 'https://www.tvsa.co.za/shows/viewshowseasons.aspx?showId=248&season=1',
        isExternal: true,
      },
    ],
    seoTitle: 'Stokvel — Andrea Dondolo as Ayanda Twala',
    seoDescription:
      'Andrea Dondolo as Ayanda Twala in Stokvel — SAFTA-winning performance in the beloved South African sitcom.',
  },
  {
    _id: 'work-home-affairs',
    title: 'Home Affairs',
    slug: { current: 'home-affairs' },
    year: 2005,
    roleLabel: 'Nandi',
    seasonLabel: 'Season 1',
    platform: 'SABC1',
    category: television,
    featured: true,
    heroImagePath: '/images/work/home-affairs.jpg',
    excerpt:
      'A South African drama following nine interconnected women whose lives cross paths through love, loss, and identity.',
    credits: [
      { label: 'Character', value: 'Nandi' },
      { label: 'Seasons', value: '2005–2010' },
      { label: 'Channel', value: 'SABC1' },
    ],
    externalLinks: [
      {
        label: 'View on TVSA',
        url: 'https://www.tvsa.co.za/shows/viewshowseasons.aspx?showId=2640&season=1',
        isExternal: true,
      },
    ],
    seoTitle: 'Home Affairs — Andrea Dondolo as Nandi',
    seoDescription: 'Andrea Dondolo as Nandi in Home Affairs, the acclaimed SABC1 drama series.',
  },
  {
    _id: 'work-the-queen',
    title: 'The Queen',
    slug: { current: 'the-queen' },
    year: 2018,
    roleLabel: 'Aunt Bongi',
    seasonLabel: 'Season 4',
    platform: 'Mzansi Magic',
    category: television,
    featured: true,
    heroImagePath: '/images/work/the-queen.jpg',
    excerpt:
      'South African telenovela from Ferguson Films about power, family secrets, and survival in the world of the Khoza empire.',
    credits: [
      { label: 'Character', value: 'Aunt Bongi' },
      { label: 'Season', value: 'Season 4' },
      { label: 'Channel', value: 'Mzansi Magic' },
    ],
    externalLinks: [
      {
        label: 'View on TVSA',
        url: 'https://www.tvsa.co.za/shows/viewshowseasons.aspx?showId=3437&season=4',
        isExternal: true,
      },
    ],
    seoTitle: 'The Queen — Andrea Dondolo as Aunt Bongi',
    seoDescription: 'Andrea Dondolo as Aunt Bongi in The Queen, the hit Mzansi Magic telenovela.',
  },
  {
    _id: 'work-when-we-were-black',
    title: 'When We Were Black',
    slug: { current: 'when-we-were-black' },
    year: 2014,
    roleLabel: 'Rebecca Mxenge',
    seasonLabel: 'Season 2',
    platform: 'SABC1',
    category: television,
    featured: true,
    heroImagePath: '/images/work/when-we-were-black.jpg',
    excerpt:
      'A drama series set against the backdrop of the 1980s, exploring the lives of young South Africans during a pivotal era.',
    credits: [
      { label: 'Character', value: 'Rebecca Mxenge' },
      { label: 'Season', value: 'Season 2' },
    ],
    externalLinks: [
      {
        label: 'View on TVSA',
        url: 'https://www.tvsa.co.za/shows/viewshowseasons.aspx?showId=109&season=2',
        isExternal: true,
      },
    ],
    seoTitle: 'When We Were Black — Andrea Dondolo',
    seoDescription: 'Andrea Dondolo as Rebecca Mxenge in When We Were Black.',
  },
  {
    _id: 'work-traffic',
    title: 'Traffic!',
    slug: { current: 'traffic' },
    year: 2014,
    roleLabel: 'Ma Nkonyeni',
    seasonLabel: 'Season 2',
    platform: 'e.tv',
    category: television,
    featured: false,
    heroImagePath: '/images/work/traffic.jpg',
    excerpt:
      'A crime thriller series following the intersecting lives of people caught in Johannesburg\'s underworld.',
    credits: [
      { label: 'Character', value: 'Ma Nkonyeni' },
      { label: 'Season', value: 'Season 2' },
      { label: 'Channel', value: 'e.tv' },
    ],
    externalLinks: [
      {
        label: 'View on TVSA',
        url: 'https://www.tvsa.co.za/shows/viewshowseasons.aspx?showId=2235&season=2',
        isExternal: true,
      },
    ],
    seoTitle: 'Traffic! — Andrea Dondolo as Ma Nkonyeni',
    seoDescription: 'Andrea Dondolo as Ma Nkonyeni in the e.tv crime drama Traffic!',
  },
  {
    _id: 'work-gold-diggers',
    title: 'Gold Diggers',
    slug: { current: 'gold-diggers' },
    year: 2016,
    roleLabel: 'Mpho',
    seasonLabel: 'Season 2',
    platform: 'e.tv',
    category: television,
    featured: false,
    heroImagePath: '/images/work/gold-diggers.jpg',
    excerpt:
      'A drama series set in the world of illegal mining, exploring ambition, survival, and community in the mining belt.',
    credits: [
      { label: 'Character', value: 'Mpho' },
      { label: 'Season', value: 'Season 2' },
      { label: 'Channel', value: 'e.tv' },
    ],
    externalLinks: [
      {
        label: 'View on TVSA',
        url: 'https://www.tvsa.co.za/shows/viewshowseasons.aspx?showId=3272&season=2',
        isExternal: true,
      },
    ],
    seoTitle: 'Gold Diggers — Andrea Dondolo as Mpho',
    seoDescription: 'Andrea Dondolo as Mpho in Gold Diggers.',
  },
  {
    _id: 'work-call-the-midwife',
    title: 'Call the Midwife',
    slug: { current: 'call-the-midwife' },
    year: 2016,
    roleLabel: 'Sister Gertrude',
    seasonLabel: 'Christmas Special',
    platform: 'BBC',
    category: television,
    featured: true,
    heroImagePath: '/images/work/call-the-midwife.jpg',
    excerpt:
      'Guest appearance in the beloved BBC period drama following midwives in London\'s East End.',
    credits: [
      { label: 'Character', value: 'Sister Gertrude' },
      { label: 'Episode', value: 'Christmas Special (2016)' },
      { label: 'Network', value: 'BBC' },
    ],
    externalLinks: [
      {
        label: 'View on IMDb',
        url: 'https://www.imdb.com/title/tt1983079/',
        isExternal: true,
      },
    ],
    seoTitle: 'Call the Midwife — Andrea Dondolo',
    seoDescription: 'Andrea Dondolo as Sister Gertrude in Call the Midwife.',
  },
  {
    _id: 'work-silent-witness',
    title: 'Silent Witness',
    slug: { current: 'silent-witness' },
    year: 2010,
    roleLabel: 'Mandisa Dontsa',
    seasonLabel: 'Season 13',
    platform: 'BBC',
    category: television,
    featured: false,
    heroImagePath: '/images/work/silent-witness.jpg',
    excerpt:
      'Guest role in the long-running BBC forensic pathology drama series.',
    credits: [
      { label: 'Character', value: 'Mandisa Dontsa' },
      { label: 'Season', value: 'Season 13' },
      { label: 'Network', value: 'BBC' },
    ],
    externalLinks: [
      {
        label: 'View on IMDb',
        url: 'https://www.imdb.com/title/tt0115355/',
        isExternal: true,
      },
    ],
    seoTitle: 'Silent Witness — Andrea Dondolo',
    seoDescription: 'Andrea Dondolo as Mandisa Dontsa in Silent Witness.',
  },
  {
    _id: 'work-cape-town',
    title: 'Cape Town',
    slug: { current: 'cape-town' },
    year: 2016,
    roleLabel: 'Betsie Mbala',
    seasonLabel: 'Season 1',
    platform: 'e.tv',
    category: television,
    featured: false,
    heroImagePath: '/images/work/cape-town.jpg',
    excerpt:
      'A South African drama series set in Cape Town, following lives intertwined by crime and consequence.',
    credits: [
      { label: 'Character', value: 'Betsie Mbala' },
      { label: 'Season', value: 'Season 1' },
      { label: 'Episodes', value: '2 episodes' },
    ],
    externalLinks: [
      {
        label: 'View on IMDb',
        url: 'https://www.imdb.com/title/tt4760616/',
        isExternal: true,
      },
    ],
    seoTitle: 'Cape Town — Andrea Dondolo as Betsie Mbala',
    seoDescription: 'Andrea Dondolo as Betsie Mbala in Cape Town.',
  },
  {
    _id: 'work-honey-3',
    title: 'Honey 3: Dare to Dance',
    slug: { current: 'honey-3-dare-to-dance' },
    year: 2016,
    roleLabel: 'Featured Role',
    platform: 'Universal Pictures',
    category: film,
    featured: false,
    heroImagePath: '/images/work/honey-3.jpg',
    excerpt:
      'Dance film in the Honey franchise, released in South Africa and internationally in 2016.',
    credits: [
      { label: 'Type', value: 'Feature Film' },
      { label: 'Year', value: '2016' },
    ],
    externalLinks: [
      {
        label: 'View on IMDb',
        url: 'https://www.imdb.com/title/tt4677938/',
        isExternal: true,
      },
    ],
    seoTitle: 'Honey 3: Dare to Dance — Andrea Dondolo',
    seoDescription: 'Andrea Dondolo in Honey 3: Dare to Dance.',
  },
  {
    _id: 'work-miracle',
    title: 'Miracle',
    slug: { current: 'miracle' },
    year: 2019,
    roleLabel: 'Fancy Mama',
    platform: 'Zinc Pictures',
    category: film,
    featured: true,
    heroImagePath: '/images/work/miracle.jpg',
    excerpt:
      'Short drama following a mother\'s quest for absolution as she seeks a miracle for her daughter.',
    credits: [
      { label: 'Character', value: 'Fancy Mama' },
      { label: 'Director', value: 'Bongi Ndaba' },
      { label: 'Production', value: 'Zinc Pictures' },
    ],
    externalLinks: [
      {
        label: 'View on IMDb',
        url: 'https://www.imdb.com/title/tt10644940/',
        isExternal: true,
      },
    ],
    seoTitle: 'Miracle — Andrea Dondolo as Fancy Mama',
    seoDescription: 'Andrea Dondolo as Fancy Mama in Miracle, directed by Bongi Ndaba.',
  },
  {
    _id: 'work-black-and-white',
    title: 'I Now Pronounce You Black and White',
    slug: { current: 'i-now-pronounce-you-black-and-white' },
    year: 2010,
    roleLabel: 'Featured Role',
    platform: 'Silver Rouge Films',
    category: film,
    featured: false,
    heroImagePath: '/images/work/black-and-white.jpg',
    excerpt:
      'South African comedy-drama about an interracial couple navigating family, faith, and cultural expectations.',
    credits: [
      { label: 'Type', value: 'Feature Film' },
      { label: 'Director', value: 'Oliver Rodger' },
      { label: 'Year', value: '2010' },
    ],
    externalLinks: [
      {
        label: 'View on IMDb',
        url: 'https://www.imdb.com/title/tt1683879/',
        isExternal: true,
      },
    ],
    seoTitle: 'I Now Pronounce You Black and White — Andrea Dondolo',
    seoDescription: 'Andrea Dondolo in I Now Pronounce You Black and White.',
  },
]

export function getFallbackWorkList(): WorkCard[] {
  return FALLBACK_WORKS
}

export function getFallbackWorkCategories(): WorkCategory[] {
  return WORK_CATEGORIES
}

export function getFallbackWorkBySlug(slug: string): FallbackWork | null {
  return FALLBACK_WORKS.find((w) => w.slug.current === slug) ?? null
}

export function getFallbackWorkSlugs(): { slug: string }[] {
  return FALLBACK_WORKS.map((w) => ({ slug: w.slug.current }))
}

export function getWorkHeroSrc(work: WorkCard & { heroImagePath?: string }): string | null {
  if (work.heroImagePath) return work.heroImagePath
  return null
}

export function getRelatedFallbackWork(slug: string, limit = 3): WorkCard[] {
  const current = getFallbackWorkBySlug(slug)
  if (!current) return FALLBACK_WORKS.filter((w) => w.featured).slice(0, limit)
  return FALLBACK_WORKS.filter(
    (w) => w.slug.current !== slug && w.category?.slug.current === current.category?.slug.current,
  ).slice(0, limit)
}

export function mergeWorkWithFallback(cmsWork: Work | null, slug: string): Work | null {
  if (cmsWork) return cmsWork
  return getFallbackWorkBySlug(slug)
}
