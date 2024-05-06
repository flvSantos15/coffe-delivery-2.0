interface IDescriptionProps {
  description: string
}

export function CoffeDescription({ description }: IDescriptionProps) {
  return (
    <p className="font-sans font-normal text-sm leading-[1.125rem] text-center text-base-label">
      {description}
    </p>
  )
}
