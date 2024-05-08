import { HeroItem } from '@/components/atomos/HeroItem'

interface IHeroItemsProps {
  items: {
    icon: JSX.Element
    color: string
    description: string
  }[]
}

export function HeroItems({ items }: IHeroItemsProps) {
  return (
    <div className="flex flex-col justify-between gap-2">
      {items.map((item, index) => {
        return (
          <HeroItem.Root key={index}>
            <HeroItem.Icon icon={item.icon} color={item.color} />

            <HeroItem.Description description={item.description} />
          </HeroItem.Root>
        )
      })}
    </div>
  )
}
