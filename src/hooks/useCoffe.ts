import { getCoffeList } from '@/services/coffeServices'
import { ICoffeComponentProps } from '@/types/coffe'
import { useQuery } from '@tanstack/react-query'

export async function getCoffe(): Promise<ICoffeComponentProps[]> {
  const coffe = await getCoffeList()

  return coffe as ICoffeComponentProps[]
}

export function useCoffe() {
  return useQuery<ICoffeComponentProps[]>({
    queryKey: ['coffes'],
    queryFn: getCoffe
  })
}
