import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { _type, slug } = body

    switch (_type) {
      case 'homepage':
        revalidatePath('/')
        break
      case 'aboutPage':
        revalidatePath('/about')
        break
      case 'work':
        revalidatePath('/work')
        if (slug?.current) revalidatePath(`/work/${slug.current}`)
        break
      case 'service':
        revalidatePath('/services')
        if (slug?.current) revalidatePath(`/services/${slug.current}`)
        break
      case 'book':
        revalidatePath('/books')
        if (slug?.current) revalidatePath(`/books/${slug.current}`)
        break
      case 'pressPost':
        revalidatePath('/press')
        if (slug?.current) revalidatePath(`/press/${slug.current}`)
        break
      default:
        revalidatePath('/', 'layout')
    }

    return NextResponse.json({ revalidated: true, _type })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', err }, { status: 500 })
  }
}
