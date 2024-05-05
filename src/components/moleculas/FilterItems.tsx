import { FilterItem } from '../atomos/FilterItem'

const filterItems = [
  'Tradicional',
  'Especial',
  'Com leite',
  'Alcoólico',
  'Gelado'
]

export function FilterItems() {
  return (
    <div className="flex gap-3">
      {filterItems.map((filterItem, index) => {
        return <FilterItem key={`${index}.${filterItem}`} name={filterItem} />
      })}
    </div>
  )
}
