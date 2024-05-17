'use client'

import { CheckoutForm } from '@/components/organims/CheckoutForm'
import { Header } from '@components/moleculas/Header'

export default function Checkout() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <Header />

      <CheckoutForm />
    </main>
  )
}
