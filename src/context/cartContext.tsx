'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { ICoffeComponentProps } from '@/types/coffe'

export interface AddCoffeProps extends ICoffeComponentProps {
  coffeAmount: number
}
interface CartContextData {
  addCoffeToCart: (product: AddCoffeProps) => void
  increaseCartAmount: (item: AddCoffeProps) => void
  decreaseCartAmount: (item: AddCoffeProps) => void
  removeCoffeFromCart: (product: AddCoffeProps) => void
  addCoffe: (item: AddCoffeProps) => void
  cartProducts: AddCoffeProps[]
  cartItems: AddCoffeProps[]
  currentProduct: string
  setCartProducts: (product: AddCoffeProps[]) => void
}

interface CartProviderData {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderData) {
  const [cartProducts, setCartProducts] = useState<AddCoffeProps[]>(() => {
    const { '@coffe.cart': products } = parseCookies()

    if (products && products !== null) {
      return JSON.parse(products) as AddCoffeProps[]
    } else {
      return []
    }
  })
  const [currentProduct, setCurrentProduct] = useState('')
  const [cartItems, setCartItems] = useState<AddCoffeProps[]>([])

  const addCoffeToCart = (item: AddCoffeProps) => {
    setCurrentProduct(item.title)

    const coffeExist = cartProducts.find(
      (coffe) => coffe.id === item.id
    ) as AddCoffeProps

    if (!coffeExist) {
      setCartProducts((state) => [...state, item])
    } else {
      setCartProducts(cartProducts.filter((coffe) => coffe.id !== item.id))

      setCartProducts((state) => [
        ...state,
        { ...coffeExist, coffeAmount: coffeExist.coffeAmount + 1 }
      ])
    }
  }

  const increaseCartAmount = (coffe: AddCoffeProps) => {
    const coffeExist = cartProducts.find(
      (item) => item.id === coffe.id
    ) as AddCoffeProps

    setCartProducts(cartProducts.filter((item) => item.id !== coffe.id).sort())

    setCartProducts((state) => [
      ...state,
      { ...coffeExist, coffeAmount: coffeExist.coffeAmount + 1 }
    ])
  }

  const decreaseCartAmount = (coffe: AddCoffeProps) => {
    const coffeExist = cartProducts.find(
      (item) => item.id === coffe.id
    ) as AddCoffeProps

    setCartProducts(cartProducts.filter((item) => item.id !== coffe.id).sort())

    if (coffeExist.coffeAmount > 1) {
      setCartProducts((state) => [
        ...state,
        { ...coffeExist, coffeAmount: coffeExist.coffeAmount - 1 }
      ])
    }
  }

  const removeCoffeFromCart = (item: AddCoffeProps) => {
    const cartProductsFiltered = cartProducts.filter(
      (product) => product.id !== item.id
    )
    setCartProducts(cartProductsFiltered)
  }

  const addCoffe = (coffe: AddCoffeProps) => {
    // const coffesAmount = getCoffesAmount(coffeTitle, coffeAmount)
    // if (cartItemsAmount > 1) {
    //   setCartItensAmount((state) => {
    //     return state + coffesAmount?.length
    //   })
    // } else {
    //   setCartItensAmount(coffesAmount?.length)
    // }
    // if (coffesToBuy?.length) {
    //   coffesAmount.map((coffe) => {
    //     setCoffeToBuy((state) => {
    //       return [...state, coffe]
    //     })
    //   })
    // } else {
    //   setCoffeToBuy(coffesAmount)
    // }
  }

  useEffect(() => {
    if (cartProducts.length > 0) {
      setCartItems([])
      for (let i = 0; i < cartProducts.length; i++) {
        for (let k = 1; k <= cartProducts[i].coffeAmount; k++) {
          setCartItems((state) => [...state, cartProducts[i]])
        }
      }

      setCookie(null, '@coffe.cart', JSON.stringify(cartProducts), {
        path: '/',
        maxAge: 1000 * 60 * 60 // 1 hour
      })
    }

    if (cartProducts.length === 0) {
      setCartItems([])
      destroyCookie(null, '@coffe.cart')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts])

  return (
    <CartContext.Provider
      value={{
        addCoffeToCart,
        removeCoffeFromCart,
        addCoffe,
        cartItems,
        cartProducts,
        currentProduct,
        setCartProducts,
        decreaseCartAmount,
        increaseCartAmount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
