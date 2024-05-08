import { ICoffeComponentProps } from '@/types/coffe'
import { Coffe } from '../atomos/CoffeItem'
import { CartIconSVG } from '../atomos/CartIconSVg'

interface ICoffeItemsProps {
  data: ICoffeComponentProps[]
}

export function CoffeItems({ data }: ICoffeItemsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 pt-4">
      {data.map((coffe) => {
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
                  <Coffe.CounterButton
                    // onClick={handleDecreaseCartItens}
                    label="-"
                  />

                  <p className="font-sans font-normal text-base leading-[1.313rem] text-center text-base-title">
                    1
                  </p>

                  <Coffe.CounterButton
                    // onClick={handleIncreaseCartItens}
                    label="+"
                  />
                </Coffe.Actions>

                <button>
                  <CartIconSVG color="#8047f8" />
                </button>
              </Coffe.SubContent>
            </Coffe.Content>
          </Coffe.Root>
        )
      })}
    </div>
  )
}
