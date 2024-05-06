interface ITagProps {
  tag: string
}

export function CoffeTag({ tag }: ITagProps) {
  return (
    <div className="flex justify-center items-center px-[0.5rem] py-[0.25rem] gap-[0.25rem] bg-yellow-light rounded-full">
      <p className="font-sans font-bold text-[0.625rem] leading-[0.813rem] text-yellow-dark">
        {tag}
      </p>
    </div>
  )
}
