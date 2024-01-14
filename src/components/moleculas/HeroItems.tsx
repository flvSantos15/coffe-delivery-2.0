import clsx from 'clsx'
import { HeroItem } from '../atomos/Item'

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
          <HeroItem key={index} description={item.description}>
            <div
              className={clsx(
                'flex p-2 h-8 w-8 justify-center items-center gap-2 rounded-full',
                {
                  'bg-[#c47f17]': item.color === '#c47f17',
                  'bg-[#dbac2c]': item.color === '#dbac2c',
                  'bg-[#574f4d]': item.color === '#574f4d',
                  'bg-[#8047f8]': item.color === '#8047f8'
                }
              )}
            >
              {item.icon}
            </div>
          </HeroItem>
        )
      })}
    </div>
  )
}
