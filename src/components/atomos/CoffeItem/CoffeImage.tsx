/* eslint-disable @next/next/no-img-element */
interface ICoffeImageProps {
  imageURL: string
}

export function CoffeImage({ imageURL }: ICoffeImageProps) {
  return (
    <img src={imageURL} alt="" className="w-[7.5rem] h-[7.5rem] mt-[-1rem]" />
  )
}
