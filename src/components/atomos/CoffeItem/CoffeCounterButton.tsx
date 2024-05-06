interface ICounterButtonProps {
  label: string
  onClick?: () => void
}

export function CoffeCounterButton({ label }: ICounterButtonProps) {
  return (
    <button
      // onClick={onClick}
      className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple"
    >
      {label}
    </button>
  )
}
