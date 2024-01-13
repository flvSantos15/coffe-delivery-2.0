import { useContext } from 'react'
import { CartContext } from '@/context/cartContext'

export const useCart = () => {
  return useContext(CartContext)
}
