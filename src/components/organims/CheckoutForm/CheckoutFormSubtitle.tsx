interface ICheckoutFormSubtitleProps {
  title: string
  subtitle: string
  icon: JSX.Element
}

export function CheckoutFormSubtitle({
  title,
  subtitle,
  icon
}: ICheckoutFormSubtitleProps) {
  return (
    <div className="flex items-start p-0 gap-[0.5rem] w-full">
      {icon}

      <div className="flex flex-col items-start p-0 gap-[0.125rem]">
        <p className="font-sans font-normal text-base leading-[1.313rem] text-left text-base-subtitle">
          {title}
        </p>

        <p className="font-sans font-normal text-sm leading-[1.313rem] text-left text-base-text">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
