'use client'

import { HiLocationMarker, HiClock } from 'react-icons/hi'
import { BiDollar } from 'react-icons/bi'

import { DeliveryManIcon } from '@/components/atomos/DeliveryManIconSVG'
import { Header } from '@components/moleculas/Header'
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'

interface IAddress {
  rua: string
  number: number
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

export default function Checkout() {
  const [infoAddress, setInfoAddress] = useState<IAddress | null>(() => {
    const { '@coffe.delivery': products } = parseCookies()

    if (products && products !== null) {
      return JSON.parse(products) as IAddress
    } else {
      return null
    }
  })

  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <Header />

      <div className="flex justify-center items-center w-full absolute xl:h-screen">
        <div className="flex flex-col min-w-[78rem] max-w-[90rem]">
          <div className="xl:mb-[2.5rem]">
            <h3 className="font-serif font-extrabold text-[32px] text-[#C47F17]">
              Uhu! Pedido confirmado
            </h3>
            <p className="font-sans font-normal text-xl text-[#403937]">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col p-10 gap-8 border border-solid border-t-[rgba(219,172,44,1)] border-l-[rgba(219,172,44,1)] border-r-[rgba(128,71,248,1)] border-b-[rgba(128,71,248,1)] rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
              <div className="flex items-center p-0 gap-3">
                <div className="flex justify-center items-center p-2 gap-2 w-8 h-8 bg-[#8047F8] rounded-full">
                  <HiLocationMarker color="#fff" />
                </div>
                <span className="font-sans font-normal text-base text-[#574F4D]">
                  {`Entrega em ${infoAddress?.rua}, ${infoAddress?.number}
                  ${infoAddress?.bairro} - ${infoAddress?.cidade},
                  ${infoAddress?.uf}`}
                </span>
              </div>
              <div className="flex items-center p-0 gap-3">
                <div className="flex justify-center items-center p-2 gap-2 w-8 h-8 bg-[#DBAC2C] rounded-full">
                  <HiClock color="#fff" />
                </div>
                <span className="font-sans font-normal text-base text-[#574F4D]">
                  Previsão de entrega 20 min - 30 min
                </span>
              </div>
              <div className="flex items-center p-0 gap-3">
                <div className="flex justify-center items-center p-2 gap-2 w-8 h-8 bg-[#C47F17] rounded-full">
                  <BiDollar color="#fff" />
                </div>
                <span className="font-sans font-normal text-base text-[#574F4D]">
                  {`Pagamento na entrega ${infoAddress?.pagamento}`}
                </span>
              </div>
            </div>
            <div>
              <DeliveryManIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
