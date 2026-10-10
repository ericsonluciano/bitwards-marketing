import { NextResponse } from 'next/server'
import { SITE } from '@/lib/site'

// The address printed on posters and flyers: https://bitwards.app/join
// It sends people to the customer app. It is a temporary (307) redirect on purpose, so the destination can change
// later without anyone needing to reprint anything.
export function GET() {
  return NextResponse.redirect(`${SITE.appUrl}/explore`, 307)
}
