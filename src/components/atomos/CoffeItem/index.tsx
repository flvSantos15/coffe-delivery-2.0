/* eslint-disable @next/next/no-img-element */
import { ICoffeComponentProps } from '@/types/coffe'
import { CartIconSVG } from '../CartIconSVg'

export function CoffeItem({
  description,
  imageURL,
  price,
  tag,
  title
}: ICoffeComponentProps) {
  return (
    <div className="flex flex-col items-center w-[16rem] h-[19.375rem] rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.25rem] rounded-bl-[2.25rem] bg-base-card gap-[0.5rem] px-[1rem]">
      <img src={imageURL} alt="" className="w-[7.5rem] h-[7.5rem] mt-[-1rem]" />

      <div className="flex justify-center items-center px-[0.5rem] py-[0.25rem] gap-[0.25rem] bg-yellow-light rounded-full">
        <p className="font-sans font-bold text-[0.625rem] leading-[0.813rem] text-yellow-dark">
          {tag}
        </p>
      </div>

      <p className="font-serif font-bold text-[1.25rem] leading-[1.625rem] text-center text-base-subtitle">
        {title}
      </p>

      <p className="font-sans font-normal text-sm leading-[1.125rem] text-center text-base-label">
        {description}
      </p>

      <div className="flex justify-between items-center p-0 gap-[1.813rem]">
        <p className="font-serif font-extrabold text-[1.5rem] leading-[1.938rem] text-right text-base-text">
          <span className="font-sans font-normal text-sm leading-[1.125rem]">
            R$
          </span>{' '}
          {price}
        </p>
        <div className="flex items-center p-0 gap-[0.5rem] w-[7.5rem] h-[2.375rem]">
          <div className="flex justify-center items-center p-[0.5rem] gap-[0.25rem] bg-base-button rounded-[0.375rem]">
            <button
              // onClick={handleDecreaseCartItens}
              className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple"
            >
              -
            </button>
            <p className="font-sans font-normal text-base leading-[1.313rem] text-center text-base-title">
              1
            </p>
            <button
              // onClick={handleIncreaseCartItens}
              className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple"
            >
              +
            </button>
          </div>
          <button>
            <CartIconSVG color="#8047f8" />
          </button>
        </div>
      </div>
    </div>
  )
}
