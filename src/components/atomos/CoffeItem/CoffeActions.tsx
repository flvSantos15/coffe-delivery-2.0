interface ICoffeActionsProps {
  children: React.ReactNode
}

export function CoffeActions({ children }: ICoffeActionsProps) {
  return (
    <div className="flex justify-center items-center p-[0.5rem] gap-[0.25rem] bg-base-button rounded-[0.375rem]">
      {children}
    </div>
  )
}
