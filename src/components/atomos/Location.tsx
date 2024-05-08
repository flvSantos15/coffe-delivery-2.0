import { LocationIconSVG } from './LocationIconSVG'

interface ILocationProps {
  label: string
}

export function Location({ label }: ILocationProps) {
  return (
    <div className="flex justify-center items-center p-[0.5rem] gap-[0.25rem] h-[2.375rem] bg-purple-light rounded-[0.375rem]">
      <LocationIconSVG color="#8047F8" />

      <p className="font-sans font-normal text-sm leading-[1.125rem] text-purple-dark">
        {label}
      </p>
    </div>
  )
}
