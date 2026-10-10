// Health check for uptime monitors: GET /api/health. Public, no sign-in, nothing personal in the answer.
export function GET() {
  return Response.json(
    { ok: true, app: 'bitwards-marketing', time: new Date().toISOString() },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
