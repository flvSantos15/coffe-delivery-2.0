interface ICheckoutFormTitleProps {
  label: string
}

export function CheckoutFormTitle({ label }: ICheckoutFormTitleProps) {
  return (
    <h2 className="font-serif font-bold text-[1.125rem] leading-[1.438rem] text-center text-base-subtitle">
      {label}
    </h2>
  )
}
