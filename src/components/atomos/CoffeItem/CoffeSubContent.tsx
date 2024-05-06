interface ICoffeSubContentProps {
  children: React.ReactNode
}

export function CoffeSubContent({ children }: ICoffeSubContentProps) {
  return (
    <div className="flex items-center p-0 gap-[0.5rem] w-[7.5rem] h-[2.375rem]">
      {children}
    </div>
  )
}
