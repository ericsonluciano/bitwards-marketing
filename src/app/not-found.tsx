import { ButtonLink } from '@/components/ui'

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col items-center gap-4 px-4 py-20 text-center">
      <h1 className="text-3xl font-bold tracking-tight">We couldn&apos;t find that page</h1>
      <ButtonLink href="/">Back to home</ButtonLink>
    </main>
  )
}
