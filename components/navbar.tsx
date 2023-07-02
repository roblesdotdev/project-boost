import Link from 'next/link'
import { getUserSession } from '~/lib/session'
import UserMenu from './user-menu'

export default async function Navbar() {
  const user = await getUserSession()
  return (
    <div>
      <header className="sticky inset-x-0 top-0 z-30 flex h-16 w-full flex-col justify-center bg-canvas/5 backdrop-blur">
        <nav>
          <ul className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4 text-sm">
            <li>
              <Link href="/">
                <span className="text-base font-medium">Project Boost</span>
              </Link>
            </li>
            <li className="ml-auto flex items-center gap-2 text-base">
              {user ? (
                <UserMenu user={user} />
              ) : (
                <Link href="/sign-in">Ingresar</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
