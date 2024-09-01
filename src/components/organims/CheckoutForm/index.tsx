import { forwardRef, useRef, useState } from 'react'
import Image from 'next/image'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { TrashBinIconSVG } from '@/components/atomos/TrashBinIconSVG'
import { LocationIconOutlineSVG } from '@/components/atomos/LocationIconOutlineSVG'
import { MoneyIconSVG } from '@/components/atomos/MoneyIconSVG'
import { CredCardIconSVG } from '@/components/atomos/CredCardIconSVG'
import { DebitIcon } from '@/components/atomos/DebitIconSVG'
import { CashMoneyIcon } from '@/components/atomos/CashMoneyIconSVG'
import { PrimaryButton } from '@/components/atomos/PrimaryButton'
import { Divider } from '@/components/atomos/Divider'
import { CustomInput } from '@/components/atomos/CustomInput'

import { useCart } from '@/hooks/useCart'

import { CheckoutFormTitle } from './CheckoutFormTitle'
import { CheckoutFormSubtitle } from './CheckoutFormSubtitle'
import { CheckoutPaymentMethod } from './CheckoutPaymentMethod'

import { ConvertNumber } from '@/utils/ConvertNumber'
import { destroyCookie, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'

const coffeDeliveryFormScheme = zod.object({
  cep: zod.string({}),
  rua: zod.string().min(5, { message: 'A rua é obrigatória.' }),
  number: zod.string({ description: 'O número é obrigatório.' }),
  complemento: zod.string().optional(),
  bairro: zod.string().min(5, { message: 'O bairro é obrigatório.' }),
  cidade: zod.string().min(5, { message: 'A cidade é obrigatória.' }),
  uf: zod.string().min(2, { message: 'UF precisa ter no mínimo 2 letras.' }),
  pagamento: zod.string().optional()
})

type CoffeDeliveryForm = zod.infer<typeof coffeDeliveryFormScheme>

const deliveryPrice = '3,50'

export function CheckoutForm() {
  const router = useRouter()
  const {
    cartProducts,
    increaseCartAmount,
    decreaseCartAmount,
    removeCoffeFromCart,
    setCartProducts
  } = useCart()

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    setValue
  } = useForm<CoffeDeliveryForm>({
    resolver: zodResolver(coffeDeliveryFormScheme)
  })

  const [paymentMethod, setPaymentMethod] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (data: CoffeDeliveryForm) => {
    setLoading(true)
    try {
      const responseData: CoffeDeliveryForm = await {
        bairro: data.bairro,
        cep: data.cep,
        rua: data.rua,
        number: data.number,
        cidade: data.cidade,
        complemento: data.complemento,
        uf: data.uf,
        pagamento: paymentMethod
      }
      const response = {
        ...responseData,
        coffe: cartProducts
      }
      console.log('response', response)
      /**
       * Send for API
       * Where the order will be saved and the message will be sent
       */
      setCookie(null, '@coffe.delivery', JSON.stringify(response))
      destroyCookie(null, '@coffe.cart')

      // Toast here
      router.push('/success')
    } catch (err) {
      console.log(err)
      // Add sentry here
    } finally {
      setLoading(false)
      setPaymentMethod('')
      setCartProducts([])
      reset()
    }
  }

  const handleIncreaseCartItens = (coffe: any) => {
    increaseCartAmount(coffe)
  }

  const handleDecreaseCartItens = (coffe: any) => {
    decreaseCartAmount(coffe)
  }

  const prices: number[] = []

  const subTotalPrice = (amount: number, price: string) => {
    const priceConverted = Number(price.replace(',', '.'))

    const total = amount * priceConverted
    prices.push(total)

    return ConvertNumber(total)
  }

  const totalItemsPrice = () => {
    const totalPrices = prices.reduce((acc, curr) => {
      const total = (acc += curr)

      return total
    }, 0)

    return ConvertNumber(totalPrices)
  }

  const totalPrice = () => {
    const totalPrices = prices.reduce((acc, curr) => {
      const total = (acc += curr)

      return total
    }, 0)

    return ConvertNumber(totalPrices + Number(deliveryPrice.replace(',', '.')))
  }

  return (
    <div className="flex items-center justify-center xl:py-[6.5rem] py-[2rem]">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex items-start justify-between gap-4 flex-col md:flex-row lg:flex-row mt-[6rem] lg:mt-[2rem] w-full max-w-[90rem] px-[2rem] lg:px-[6rem]"
      >
        <div className="flex flex-col items-start">
          <CheckoutFormTitle label="Complete seu pedido" />

          <div className="flex flex-col items-start p-0 gap-[0.75rem] w-full md:w-[40rem] lg:w-[40rem] md:lg-[36.938rem] lg:h-[36.938rem] mt-[0.5rem]">
            <div className="flex flex-col items-start p-[1rem] md:p-[2.5rem] lg:p-[2.5rem] gap-[2rem] w-full md:h-[23.25rem] lg:h-[23.25rem] bg-base-card rounded-[0.375rem]">
              <CheckoutFormSubtitle
                title="Endereço de Entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon={<LocationIconOutlineSVG />}
              />

              <div className="flex flex-col items-start p-0 gap-4 w-full">
                <input
                  id="cep"
                  type="text"
                  className="flex items-start p-[0.75rem] gap-[0.25rem] w-full md:w-[12.5rem] lg:w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5] font-sans text-base-title"
                  placeholder="CEP"
                  {...register('cep')}
                />

                <input
                  id="rua"
                  type="text"
                  className="flex items-start p-[0.75rem] gap-[0.25rem] w-full h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid border-[#e6e5e5] font-sans text-base-title"
                  placeholder="Rua"
                  {...register('rua')}
                />

                <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full gap-4">
                  <input
                    id="number"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-full md:w-[12.5rem] lg:w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid border-[#e6e5e5] font-sans text-base-title"
                    placeholder="Número"
                    {...register('number')}
                  />

                  <input
                    id="complemento"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-full md:w-[21.875rem] lg:w-[21.875rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid border-[#e6e5e5] font-sans text-base-title"
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full gap-4">
                  <input
                    id="bairro"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-full md:w-[12.5rem] lg:w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid border-[#e6e5e5] font-sans text-base-title"
                    placeholder="Bairro"
                    {...register('bairro')}
                  />

                  <input
                    id="cidade"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-full md:w-[17.25rem] lg:w-[17.25rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid border-[#e6e5e5] font-sans text-base-title"
                    placeholder="Cidade"
                    {...register('cidade')}
                  />

                  <input
                    id="uf"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[3.75rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid border-[#e6e5e5] font-sans text-base-title"
                    placeholder="UF"
                    {...register('uf')}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start p-[1rem] md:p-[2.5rem] lg:p-[2.5rem] gap-[2rem] w-full md:h-[12.938rem] lg:h-[12.938rem] bg-base-card rounded-[0.375rem]">
              <CheckoutFormSubtitle
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja
                pagar"
                icon={<MoneyIconSVG />}
              />

              <div className="flex justify-center flex-col md:flex-row lg:flex-row items-center p-0 gap-[0.75rem] w-full">
                <CheckoutPaymentMethod
                  onClick={() => {
                    setPaymentMethod('credcard')
                    setValue('pagamento', 'credcard')
                  }}
                  {...register('pagamento')}
                  icon={<CredCardIconSVG />}
                  label="CARTÃO DE CRÉDITO"
                  name="credcard"
                  paymentMethod={paymentMethod}
                />

                <CheckoutPaymentMethod
                  onClick={() => {
                    setPaymentMethod('debitcard')
                    setValue('pagamento', 'debitcard')
                  }}
                  {...register('pagamento')}
                  icon={<DebitIcon />}
                  label="CARTÃO DE DÉBITO"
                  name="debitcard"
                  paymentMethod={paymentMethod}
                />

                <CheckoutPaymentMethod
                  onClick={() => {
                    setPaymentMethod('cash')
                    setValue('pagamento', 'cash')
                  }}
                  {...register('pagamento')}
                  icon={<CashMoneyIcon />}
                  label="DINHEIRO"
                  name="cash"
                  paymentMethod={paymentMethod}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-full md:w-[28rem] lg:w-[28rem]">
          <CheckoutFormTitle label="Cafés selecionados" />

          <div className="flex flex-col items-start p-[1rem] md:p-[2.5rem] lg:p-[2.5rem] gap-[1.5rem] w-full md:w-[28rem] lg:w-[28rem] max-h-[31.125rem]  mt-[0.5rem] bg-base-card rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
            <div className="flex flex-col w-full gap-[1rem] overflow-auto">
              {cartProducts.map((coffe) => {
                return (
                  <>
                    <div
                      key={coffe.id}
                      className="flex justify-between items-start py-[0.5rem] px-[0.25rem] gap-[3.688rem]"
                    >
                      <div className="flex items-center p-0 gap-[1.25rem] w-full md:w-[15.938rem] lg:w-[15.938rem] h-24 md:h-16 lg:h-16">
                        <Image
                          src={coffe.imageURL}
                          alt=""
                          width={100}
                          height={100}
                          // className="w-[4rem] h-[4rem]"
                        />

                        <div className="flex flex-col items-start p-0 gap-[0.5rem] w-[10.75rem] h-[100%]">
                          <p className="font-sans font-normal text-base leading-[1.313rem] text-base-subtitle">
                            {coffe.title}
                          </p>

                          <div className="flex justify-between w-[100%] gap-2">
                            <div className="flex justify-center items-center p-[0.5rem] gap-[0.25rem] bg-base-button rounded-[0.375rem] w-[4.5rem] h-[2rem]">
                              <button
                                onClick={() => handleDecreaseCartItens(coffe)}
                                className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple"
                              >
                                -
                              </button>

                              <p className="font-sans font-normal text-base leading-[1.313rem] text-center text-base-title">
                                {coffe.coffeAmount}
                              </p>

                              <button
                                onClick={() => handleIncreaseCartItens(coffe)}
                                className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeCoffeFromCart(coffe)}
                              className="flex justify-center items-center py-0 px-[0.5rem] gap-[0.25rem] w-[5.688rem] h-[2rem] bg-base-button rounded-md"
                            >
                              <TrashBinIconSVG />

                              <p className="font-sans font-normal text-xs leading-[1.188rem] text-base-text">
                                REMOVER
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="font-sans font-bold text-base leading-[1.313rem] text-right text-base-text w-[4rem]">
                        {subTotalPrice(coffe.coffeAmount, coffe.price)}
                      </p>
                    </div>

                    <Divider />
                  </>
                )
              })}
            </div>

            <div className="flex flex-col justify-between w-full md:w-[23rem] lg:w-[23rem] gap-[1rem]">
              {/* items */}
              <div className="flex flex-col justify-center items-start p-0 gap-[0.75rem] h-[5.75rem]">
                <div className="flex justify-between items-center w-[100%] p-0 gap-[0.5rem] h-[1.313rem]">
                  <p className="font-sans font-normal text-sm leading-[1.125rem] text-right text-base-text">
                    Total de Itens
                  </p>

                  <p className="font-sans font-normal text-base leading-[1.313rem] text-right text-base-text">
                    {totalItemsPrice()}
                  </p>
                </div>

                <div className="flex justify-between items-center w-[100%] p-0 gap-[0.5rem] h-[1.313rem]">
                  <p className="font-sans font-normal text-sm leading-[1.125rem] text-right text-base-text">
                    Entrega
                  </p>

                  <p className="font-sans font-normal text-base leading-[1.313rem] text-right text-base-text">
                    R$ {deliveryPrice}
                  </p>
                </div>

                <div className="flex justify-between items-center w-[100%] p-0 gap-[0.5rem] h-[1.313rem]">
                  <p className="font-sans font-bold text-[1.25rem] leading-[1.625rem] text-right text-base-subtitle">
                    Total
                  </p>

                  <p className="font-sans font-bold text-[1.25rem] leading-[1.625rem] text-right text-base-subtitle">
                    {totalPrice()}
                  </p>
                </div>
              </div>

              <PrimaryButton
                loading={loading}
                onClick={handleSubmit(handleRegister)}
                label={loading ? 'Carregando...' : 'CONFIRMAR PEDIDO'}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
