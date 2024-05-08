interface IHeroItemProps {
  children: React.ReactNode
}

export function HeroItemRoot({ children }: IHeroItemProps) {
  return <div className="flex items-center p-0 gap-[0.75rem]">{children}</div>
}
