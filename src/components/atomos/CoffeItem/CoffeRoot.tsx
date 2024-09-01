interface ICoffeRootProps {
  children: React.ReactNode
}

export function CoffeRoot({ children }: ICoffeRootProps) {
  return (
    <div className="flex flex-col items-center w-full md:w-[16rem] lg:w-[16rem] h-[19.375rem] rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.25rem] rounded-bl-[2.25rem] bg-base-card gap-[0.5rem] px-[1rem]">
      {children}
    </div>
  )
}
