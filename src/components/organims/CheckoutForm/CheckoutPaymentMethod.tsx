import clsx from 'clsx'

interface ICheckoutPaymentMethodProps extends HTMLButtonElement {
  icon: JSX.Element
  // onClick: () => void
  label: string
}

export function CheckoutPaymentMethod({
  icon,
  label,
  ...rest
}: ICheckoutPaymentMethodProps) {
  return (
    <button
      // onClick={() => setPaymentMethod('cash')}
      type="button"
      {...register('pagamento')}
      className={clsx(
        'flex items-center p-[1rem] gap-[0.75rem] w-[11.125rem] h-[3.188rem] rounded-md',
        {
          'bg-base-button': paymentMethod === 'cash',
          'bg-purple-light border border-solid border-[#8047F8]':
            paymentMethod !== 'cash'
        }
      )}
      {...rest}
    >
      {icon}

      <p className="text-center font-sans font-normal text-xs leading-[1.188rem] text-base-text">
        {label}
      </p>
    </button>
  )
}
