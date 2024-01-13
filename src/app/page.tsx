'use client'

import { useCoffe } from '@/hooks/useCoffe'

export default function Home() {
  const { data: coffeData, isFetching, error } = useCoffe()

  if (isFetching && !error) {
    return <p>Loading...</p>
  }

  if (!isFetching && error) {
    return <div>{error.message}</div>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h2 className="font-sans text-xl">Coofe Delivery</h2>
        <ul>
          {coffeData?.map((coffe) => {
            return <li key={coffe?.id}>{coffe.title}</li>
          })}
        </ul>
      </div>
    </main>
  )
}
