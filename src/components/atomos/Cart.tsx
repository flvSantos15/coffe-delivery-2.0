import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { CartIconSVG } from './CartIconSVg'

export function Cart() {
  const { cartItems } = useCart()
  return (
    <>
      <Link href="/checkout">
        <button className="flex justify-center items-center p-0 gap-[0.25rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] bg-yellow-light">
          <CartIconSVG color="#C47F17" />
        </button>
      </Link>
      {cartItems?.length > 0 && (
        <div className="flex justify-center items-center w-[1.25rem] h-[1.25rem] rounded-full bg-yellow-dark mt-[-1.5rem] ml-[-1.4rem]">
          <p className="font-sans font-bold text-xs leading-[1rem] text-white text-center">
            {cartItems?.length}
          </p>
        </div>
      )}
    </>
  )
}
