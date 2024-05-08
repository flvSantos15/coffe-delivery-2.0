import clsx from 'clsx'

interface IHeroItemIconProps {
  icon: JSX.Element
  color: string
}

export function HeroItemIcon({ icon, color }: IHeroItemIconProps) {
  return (
    <div
      className={clsx(
        'flex p-2 h-8 w-8 justify-center items-center gap-2 rounded-full',
        {
          'bg-[#c47f17]': color === '#c47f17',
          'bg-[#dbac2c]': color === '#dbac2c',
          'bg-[#574f4d]': color === '#574f4d',
          'bg-[#8047f8]': color === '#8047f8'
        }
      )}
    >
      {icon}
    </div>
  )
}
