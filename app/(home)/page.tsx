import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-24">
      {/* TYPOGRAPHY */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pt-12">
        <h1 className="bg-gradient-to-br from-fg to-fg-muted bg-clip-text text-center text-3xl font-medium text-transparent md:text-4xl">
          <Balancer>
            Impulsa tu carrera mientras contribuyes al cambio positivo
          </Balancer>
        </h1>
        <p className="max-w-lg text-center text-fg-muted md:text-lg">
          <Balancer>
            Únete a nosotros y aprovecha la oportunidad de trabajar en
            desafiantes proyectos sociales, expandir tus habilidades y hacer
            conexiones significativas en la industria.
          </Balancer>
        </p>
      </div>
      <div className="py-2">
        <Link
          href="/sign-in"
          className="rounded-md bg-canvas-variant px-6 py-3 text-lg"
        >
          Explorar
        </Link>
      </div>
    </div>
  )
}
