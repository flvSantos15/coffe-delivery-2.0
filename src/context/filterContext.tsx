'use client'

import { createContext, ReactNode, useState } from 'react'

interface FilterContextData {
  getFilterValue: (value: string) => void
  filterValue: string
}

interface FilterProviderData {
  children: ReactNode
}

export const FilterContext = createContext({} as FilterContextData)

export function FilterProvider({ children }: FilterProviderData) {
  const [filterValue, setFilterValue] = useState('')

  const getFilterValue = (item: string) => {
    if (filterValue === item || item === '') {
      setFilterValue('')
    } else {
      setFilterValue(item)
    }
  }

  return (
    <FilterContext.Provider
      value={{
        filterValue,
        getFilterValue
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
