import { ICoffeComponentProps } from '@/types/coffe'
import { api } from '@/lib/api'

export const getCoffeList = async (): Promise<
  ICoffeComponentProps[] | unknown
> => {
  try {
    const { data } = await api.get<ICoffeComponentProps[]>('/coffe')

    const res = data.map((coffe) => {
      return {
        id: Math.random(),
        title: coffe.title,
        description: coffe.description,
        imageURL: coffe.imageURL,
        tag: coffe.tag,
        price: coffe.price
      }
    })

    return res
  } catch (error) {
    return error
  }
}
