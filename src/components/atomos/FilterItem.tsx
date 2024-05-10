import { useFilter } from '@/hooks/useFilter'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

interface IFilterItemProps {
  name: string
}

export function FilterItem({ name }: IFilterItemProps) {
  const { getFilterValue, filterValue } = useFilter()
  const queryClient = useQueryClient()

  const handlePrefetcCoffe = async () => {
    await queryClient.refetchQueries({ queryKey: ['coffes'], type: 'all' })
  }

  useEffect(() => {
    handlePrefetcCoffe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue])

  const isTheSameValue = filterValue === name

  return (
    <button
      onClick={() => getFilterValue(name)}
      className={`flex items-center justify-center p-2 border border-solid border-yellow-dark rounded-3xl ${
        isTheSameValue ? 'bg-yellow-dark' : 'bg-background'
      } group
        hover:bg-yellow-dark
      `}
    >
      <p
        className={`${
          isTheSameValue ? 'text-background' : 'text-yellow-dark'
        } uppercase font-bold text-[10px] font-sans group-hover:text-background`}
      >
        {name}
      </p>
    </button>
  )
}
