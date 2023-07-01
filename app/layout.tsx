import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Project Boost',
  description: `"Project-Boost" es una plataforma en línea que conecta a profesionales 
voluntarios con proyectos disponibles en ONGs y startups que requieren colaboración`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
