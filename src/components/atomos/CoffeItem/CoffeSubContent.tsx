interface ICoffeSubContentProps {
  children: React.ReactNode
}

export function CoffeSubContent({ children }: ICoffeSubContentProps) {
  return (
    <div className="flex items-center justify-between p-0 w-[7.5rem] h-[2.375rem]">
      {children}
    </div>
  )
}
