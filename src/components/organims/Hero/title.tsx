export function Title() {
  return (
    <div className="flex flex-col items-start p-0 gap-[1rem] w-full md:w-full lg:w-[36.75rem] h-[8rem] md:h-[10rem] lg:h-[12rem]">
      {/* sans: ['var(--font-roboto)'],
      serif: ['var(--font-ballo)'] */}
      <h1 className="font-['Baloo_2'] font-extrabold text-left text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.5rem] md:leading-[2.5rem] lg:leading-[3.875rem] text-base-title">
        Encontre o café perfeito para qualquer hora do dia
      </h1>
      <p className="font-['Roboto'] text-left font-normal text-xl md:text-2xl leading-[1.25rem] text-base-subtitle">
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>
    </div>
  )
}
