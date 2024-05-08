interface IHeroItemDescriptionProps {
  description: string
}

export function HeroItemDescription({
  description
}: IHeroItemDescriptionProps) {
  return (
    <p className="font-sans font-normal text-base leading-[1.313rem] text-base-text">
      {description}
    </p>
  )
}
