import { ICoffeComponentProps } from '@/types/coffe'
import { CoffeItem } from '../atomos/CoffeItem'

interface ICoffeItemsProps {
  data: ICoffeComponentProps[]
}

export function CoffeItems({ data }: ICoffeItemsProps) {
  return (
    <div className="border border-solid border-[red] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
      {data.map((coffe) => {
        return (
          <CoffeItem
            key={coffe.id}
            id={coffe.id}
            description={coffe.description}
            imageURL={coffe.imageURL}
            price={coffe.price}
            tag={coffe.tag}
            title={coffe.title}
          />
        )
      })}
    </div>
  )
}
