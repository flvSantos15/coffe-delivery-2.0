import { Cart } from '../atomos/Cart'
import { Location } from '../atomos/Location'
import { Logo } from '../atomos/Logo'

export function Header() {
  return (
    <div className="flex items-center justify-center bg-background fixed w-full z-[999]">
      <div className="flex items-center justify-between bg-background w-[100%] max-w-[90rem] h-[6.5rem] py-[2rem] px-[4rem] md:px-[5rem] lg:px-[6rem] gap-6 md:gap-8 lg:gap-12">
        <Logo />

        <div className="flex justify-end items-center w-[16rem] h-[2.375rem] p-0 gap-[0.75rem]">
          <Location />

          <Cart />
        </div>
      </div>
    </div>
  )
}
