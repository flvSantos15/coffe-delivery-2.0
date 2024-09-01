import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'

type TCustomInputProps = {
  id: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

const CustomInputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  TCustomInputProps
> = ({ id, placeholder, ...properties }, reference) => {
  return (
    <input
      type="text"
      className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] text-base-subtitle font-sans rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
      placeholder={placeholder}
      ref={reference}
      {...properties}
    />
  )
}

export const CustomInput = forwardRef(CustomInputComponent)
