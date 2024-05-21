interface IPrimaryButtonProps {
  loading: boolean
  onClick?: () => void
  label: string
}

export function PrimaryButton({
  loading,
  onClick,
  label
}: IPrimaryButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      // onClick={onClick}
      className="flex justify-center items-center py-[0.75rem] px-[0.5rem] gap-[0.25rem] w-[100%] h-[2.875rem] bg-yellow rounded-md"
    >
      <p className="font-sans font-bold text-sm leading-[1.375rem] text-white">
        {loading ? 'Carregando...' : 'CONFIRMAR PEDIDO'}
      </p>
    </button>
  )
}
