import Image from 'next/image'
import coffeHome from '../../../public/assets/coffe-home.png'

export function CoffeImg() {
  return (
    <Image
      src={coffeHome}
      alt=""
      className="w-[15rem] h-[12rem] md:w-[25rem] md:h-[18rem] lg:w-[29.75rem] lg:h-[22.5rem]"
    />
  )
}
