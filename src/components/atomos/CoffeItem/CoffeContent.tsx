interface ICoffeContentProps {
  children: React.ReactNode
}

export function CoffeContent({ children }: ICoffeContentProps) {
  return (
    <div className="flex justify-between items-center p-0 gap-[1.813rem]">
      {children}
    </div>
  )
}
