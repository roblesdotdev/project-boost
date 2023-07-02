import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import { ChevronLeftIcon } from 'lucide-react'
import UserAuthForm from '~/components/user-auth-form'

export const metadata = {
  title: 'Ingresar',
}

export default function SignInPage() {
  return (
    <>
      <div className="flex items-center p-6">
        <Link href="/">
          <div className="flex items-center gap-2">
            <ChevronLeftIcon className="h-3 w-3" />
            <span>Volver</span>
          </div>
        </Link>
      </div>

      <div className="mt-24 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold md:text-4xl">Ingresar</h1>
        <p className="mt-2 max-w-xl text-center text-fg-muted md:text-lg">
          <Balancer>
            Nuestra aplicación tiene fines exclusivamente demostrativos. Solo
            almacenaremos información básica.
          </Balancer>
        </p>
        <UserAuthForm />
        <div className="pt-4">
          <p className="px-8 text-center text-gray-400">
            Aún no tienes cuenta?{' '}
            <Link
              className="text-fg underline underline-offset-4"
              href="/sign-up"
            >
              Crear una
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
