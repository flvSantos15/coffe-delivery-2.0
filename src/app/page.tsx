'use client'

import { Header } from '@/components/moleculas/Header'
import { Hero } from '@/components/organims/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[100%] absolute bg-background">
      <Header />
      <Hero />
    </main>
  )
}
