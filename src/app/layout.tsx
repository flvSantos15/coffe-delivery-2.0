import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Baloo_2 } from 'next/font/google'
import './globals.css'
import TanStackProvider from '@/context/tanStackContext'
import { CartProvider } from '@/context/cartContext'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const ballo = Baloo_2({ subsets: ['latin'], variable: '--font-ballor' })

export const metadata: Metadata = {
  title: 'Coffe Delivery',
  description: 'Cafeteria Dev'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${ballo.variable}`}>
        <TanStackProvider>
          <CartProvider>{children}</CartProvider>
        </TanStackProvider>
      </body>
    </html>
  )
}
