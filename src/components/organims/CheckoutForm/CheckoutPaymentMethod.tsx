import clsx from 'clsx'

interface ICheckoutPaymentMethodProps {
  icon: JSX.Element
  onClick: () => void
  label: string
  name: string
  paymentMethod: string
}

export function CheckoutPaymentMethod({
  icon,
  label,
  name,
  paymentMethod,
  onClick
}: ICheckoutPaymentMethodProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        'flex items-center p-[1rem] gap-[0.75rem] w-full md:w-[11.125rem] lg:w-[11.125rem] h-[3.188rem] rounded-md',
        {
          'bg-base-button border border-solid border-purple-light':
            paymentMethod !== name,
          'bg-purple-light border border-solid border-[#8047F8]':
            paymentMethod === name
        }
      )}
    >
      {icon}

      <p className="text-center font-sans font-normal text-xs leading-[1.188rem] text-base-text">
        {label}
      </p>
    </button>
  )
}
