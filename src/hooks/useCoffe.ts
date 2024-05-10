import { api } from '@/lib/api'
import { ICoffeComponentProps } from '@/types/coffe'
import { useQuery } from '@tanstack/react-query'

export async function getCoffe(
  filter: string
): Promise<ICoffeComponentProps[]> {
  const { data } = await api.get('/coffe')

  if (filter) {
    const res = data
      .filter((item: any) => item.tag === filter)
      .map((coffe: any) => {
        return {
          id: Math.random(),
          title: coffe.title,
          description: coffe.description,
          imageURL: coffe.image,
          tag: coffe.tag,
          price: coffe.price
        }
      })

    return res as ICoffeComponentProps[]
  }

  const res = data.map((coffe: any) => {
    return {
      id: Math.random(),
      title: coffe.title,
      description: coffe.description,
      imageURL: coffe.image,
      tag: coffe.tag,
      price: coffe.price
    }
  })

  return res as ICoffeComponentProps[]
}

export function useCoffe(filter: string) {
  return useQuery<ICoffeComponentProps[]>({
    queryKey: ['coffes'],
    queryFn: () => getCoffe(filter),
    staleTime: 1000 * 60 * 2 // 2 minutes
  })
}
