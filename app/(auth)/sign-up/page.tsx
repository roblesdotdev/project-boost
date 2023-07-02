import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import UserAuthForm from '~/components/user-auth-form'

export const metadata = {
  title: 'Registro',
}

export default function RegisterPage() {
  return (
    <>
      <div className="flex items-center justify-end p-6">
        <Link href="/sign-in">Ingresar</Link>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold md:text-4xl">Registro</h1>
        <p className="mt-2 max-w-xl text-center text-fg-muted md:text-lg">
          <Balancer>
            Nuestra aplicación tiene fines exclusivamente demostrativos. Solo
            almacenaremos información básica.
          </Balancer>
        </p>
        <UserAuthForm />
        <div className="pt-4">
          <p className="max-w-md px-8 text-center text-fg-muted">
            Al hacer clic en continuar, aceptas nuestros Términos de Servicio y
            Política de Privacidad.
          </p>
        </div>
      </div>
    </>
  )
}
