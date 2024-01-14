import { ReactNode } from 'react'

interface IHeroItemProps {
  children: ReactNode
  description: string
}

export function HeroItem({ children, description }: IHeroItemProps) {
  return (
    <div className="flex items-center p-0 gap-[0.75rem]">
      {children}
      <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-base-text">
        {description}
      </p>
    </div>
  )
}
