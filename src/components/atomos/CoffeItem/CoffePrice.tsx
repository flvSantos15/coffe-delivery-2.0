interface IPriceProps {
  price: string
}

export function CoffePrice({ price }: IPriceProps) {
  return (
    <p className="font-serif font-extrabold text-[1.5rem] leading-[1.938rem] text-right text-base-text">
      <span className="font-sans font-normal text-sm leading-[1.125rem]">
        R$
      </span>{' '}
      {price}
    </p>
  )
}
