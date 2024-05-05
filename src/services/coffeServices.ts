import { ICoffeComponentProps } from '@/types/coffe'
import { api } from '@/lib/api'

export const getCoffeList = async (): Promise<
  ICoffeComponentProps[] | unknown
> => {
  try {
    const { data } = await api.get('/coffe')

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

    return res
  } catch (error) {
    return error
  }
}
