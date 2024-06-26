import { useCoffe } from '@/hooks/useCoffe'
import { FilterItems } from '../moleculas/FilterItems'
import { CoffeItems } from '../moleculas/CoffeItems'
import { useFilter } from '@/hooks/useFilter'

export function CoffeList() {
  const { filterValue } = useFilter()
  const { data } = useCoffe(filterValue)

  return (
    <div className="flex flex-col w-full px-[2rem] md:px-[6rem] pt-8 bg-background">
      <div className="flex items-center justify-between w-full">
        <p className="font-serif font-bold text-[32px] text-base-subtitle">
          Nossos cafés
        </p>

        <FilterItems />
      </div>

      {data?.length && data?.length > 0 && <CoffeItems data={data} />}
    </div>
  )
}
