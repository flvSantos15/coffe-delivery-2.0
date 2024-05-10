'use client'

import { Header } from '@/components/moleculas/Header'
import { CoffeList } from '@/components/organims/CoffeList'
import { Hero } from '@/components/organims/Hero'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col w-full bg-background">
      <Header />

      <Hero />

      <CoffeList />
    </main>
  )
}
