export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 px-4 py-24">
      {/* TYPOGRAPHY */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pt-12">
        <h1 className="bg-gradient-to-br from-fg to-fg-muted bg-clip-text text-3xl font-medium text-transparent">
          Project Boost
        </h1>
        <p className="text-center text-fg-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex
          sed nibh vestibulum dignissim at lobortis ligula.
        </p>
      </div>
    </main>
  )
}
