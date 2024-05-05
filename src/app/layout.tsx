import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Baloo_2 as Baloo } from 'next/font/google'
import './globals.css'
import TanStackProvider from '@/context/tanStackContext'
import { CartProvider } from '@/context/cartContext'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baloo = Baloo({ subsets: ['latin'], variable: '--font-baloo' })

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
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${baloo.variable} font-[sans] bg-background`}
      >
        <TanStackProvider>
          <CartProvider>{children}</CartProvider>
        </TanStackProvider>
      </body>
    </html>
  )
}
