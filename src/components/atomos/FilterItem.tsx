interface IFilterItemProps {
  name: string
}

export function FilterItem({ name }: IFilterItemProps) {
  return (
    <button className="flex items-center justify-center p-2 border border-solid border-yellow-dark rounded-3xl">
      <p className="text-yellow-dark uppercase font-bold text-[10px] font-sans">
        {name}
      </p>
    </button>
  )
}
