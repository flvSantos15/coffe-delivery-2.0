import { useContext } from 'react'
import { FilterContext } from '@/context/filterContext'

export const useFilter = () => {
  return useContext(FilterContext)
}
