import { InputHTMLAttributes } from 'react'

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  placeholder: string
}

export function CustomInput({ id, placeholder, ...rest }: ICustomInputProps) {
  return (
    <input
      id={id}
      // name={id}
      type="text"
      className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] text-base-subtitle font-sans rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
      placeholder={placeholder}
      // {...register('cep')}
      {...rest}
    />
  )
}
