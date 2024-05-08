import { ICoffeComponentProps } from '@/types/coffe'
import { Coffe } from '@components/atomos/CoffeItem'
import { CartIconSVG } from '@components/atomos/CartIconSVg'
import { useCart } from '@hooks/useCart'
import { useEffect, useState } from 'react'

interface ICoffeItemsProps {
  coffe: ICoffeComponentProps
}

export function CoffeComponent({ coffe }: ICoffeItemsProps) {
  const { addCoffeToCart, removeCoffeFromCart, addCoffe } = useCart()

  const [cartItens, setCartItens] = useState(0)

  const handleIncreaseCartItens = () => {
    setCartItens(cartItens + 1)
  }

  const handleDecreaseCartItens = () => {
    if (cartItens > 0) {
      setCartItens(cartItens - 1)
    }
  }

  const handleAddCoffe = async () => {
    await addCoffeToCart({ ...coffe, coffeAmount: cartItens })
    setCartItens(0)
  }

  // useEffect(() => {
  //   if (coffesToBuy?.length) {
  //     coffesToBuy.map((item) => {
  //       const coffesName = []

  //       if (item === coffe.coffeTitle) {
  //         coffesName.push(item)
  //       }

  //       // setCartItens((state) => {
  //       //   return state + coffesName?.length
  //       // })
  //     })
  //   }
  // }, [coffesToBuy, coffe])

  const isCartItensEmpty = cartItens === 0

  return (
    <Coffe.Root key={coffe.id}>
      <Coffe.Image imageURL={coffe.imageURL} />

      <Coffe.Tag tag={coffe.tag} />

      <Coffe.Title title={coffe.title} />

      <Coffe.Description description={coffe.description} />

      <Coffe.Content>
        <Coffe.Price price={coffe.price} />

        <Coffe.SubContent>
          <Coffe.Actions>
            <Coffe.CounterButton onClick={handleDecreaseCartItens} label="-" />

            <p className="font-sans font-normal text-base leading-[1.313rem] text-center text-base-title">
              {cartItens}
            </p>

            <Coffe.CounterButton onClick={handleIncreaseCartItens} label="+" />
          </Coffe.Actions>

          <button
            onClick={handleAddCoffe}
            disabled={isCartItensEmpty}
            className="flex justify-center items-center p-0 gap-[0.25rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] bg-purple-dark cursor-pointer"
          >
            <CartIconSVG color="#fff" />
          </button>
        </Coffe.SubContent>
      </Coffe.Content>
    </Coffe.Root>
  )
}
