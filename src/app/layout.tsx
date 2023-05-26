import Providers from '@/components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import AppBar from '@/components/AppBar'
import { Metadata } from 'next';
import { ToastifyProvider } from '@/components/ToastifyProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Auth',
  description: 'Next-Auth login',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ToastifyProvider>
          <Providers>
            <AppBar />
            {children}
          </Providers>
        </ToastifyProvider>
      </body>
    </html>
  )
}
