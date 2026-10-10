import { NextResponse } from 'next/server'
import { SITE } from '@/lib/site'

// A poster for one store: https://bitwards.app/join/<store id> opens that store's page in the customer app
// (its quests and rewards). Anything that is not a store id falls back to the general page.
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const target = UUID.test(id) ? `${SITE.appUrl}/stores/${id.toLowerCase()}` : `${SITE.appUrl}/explore`
  return NextResponse.redirect(target, 307)
}
