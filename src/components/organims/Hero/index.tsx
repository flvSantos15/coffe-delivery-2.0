import { CoffeImg } from '@/components/atomos/CoffeIMG'
import { PackageIconSVG } from '@/components/atomos/PackageIconSVG'
import { CoffeIconSVG } from '@/components/atomos/CoffeIconSVG'
import { TimeIconSVG } from '@/components/atomos/TimeIconSVG'
import { CartIconSVG } from '@/components/atomos/CartIconSVg'
import { HeroItems } from '@/components/moleculas/HeroItems'

import { Title } from './title'

const itensLeft = [
  {
    icon: <CartIconSVG color="#fff" />,
    color: '#c47f17',
    description: 'Compra simples e segura'
  },
  {
    icon: <TimeIconSVG />,
    color: '#dbac2c',
    description: 'Entrega rápida e rastreada'
  }
]

const itensRight = [
  {
    icon: <PackageIconSVG />,
    color: '#574f4d',
    description: 'Embalagem mantém o café intacto'
  },
  {
    icon: <CoffeIconSVG />,
    color: '#8047f8',
    description: 'O café chega fresquinho até você'
  }
]

export function Hero() {
  return (
    <div className="flex items-center justify-center mt-[6.5rem] w-full">
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between w-full max-w-[90rem] px-[2rem] md:px-[6rem] py-[1rem] md:py-[4rem]">
        <div className="flex flex-col justify-between gap-10">
          <Title />

          <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full md:w-full lg:w-[35.438rem] lg:h-[5.25rem] gap-2">
            <HeroItems items={itensLeft} />

            <HeroItems items={itensRight} />
          </div>
        </div>

        <CoffeImg />
      </div>
    </div>
  )
}
