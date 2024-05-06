interface ITitleProps {
  title: string
}

export function CoffeTitle({ title }: ITitleProps) {
  return (
    <p className="font-serif font-bold text-[1.25rem] leading-[1.625rem] text-center text-base-subtitle">
      {title}
    </p>
  )
}
