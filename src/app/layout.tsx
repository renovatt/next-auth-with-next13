// "use client"

import Providers from '@/components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import AppBar from '@/components/AppBar'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from 'next';

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
        <ToastContainer />
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
