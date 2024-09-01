export function Title() {
  // lg:w-[36.75rem]
  return (
    <div className="flex flex-col items-start p-0 gap-[1rem] w-full md:w-full lg:max-w-[36.75rem] md:h-[10rem] lg:h-[12rem]">
      <h1 className="font-serif font-extrabold text-left text-5xl md:text-[2.5rem] lg:text-[3rem] leading-[3rem] md:leading-[2.5rem] lg:leading-[3rem] text-base-title">
        Encontre o café perfeito para qualquer hora do dia
      </h1>

      <p className="font-sans text-left font-normal text-xl md:text-xl leading-[1.25rem] text-base-subtitle">
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>
    </div>
  )
}
