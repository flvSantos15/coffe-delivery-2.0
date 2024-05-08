import { ICoffeComponentProps } from '@/types/coffe'
import { CoffeComponent } from '@components/atomos/Coffe'

interface ICoffeItemsProps {
  data: ICoffeComponentProps[]
}

export function CoffeItems({ data }: ICoffeItemsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 pt-4">
      {data.map((coffe) => {
        return <CoffeComponent key={coffe.id} coffe={coffe} />
      })}
    </div>
  )
}
