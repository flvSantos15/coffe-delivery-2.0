/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
interface ICoffeImageProps {
  imageURL: string
}

export function CoffeImage({ imageURL }: ICoffeImageProps) {
  return (
    <Image
      src={imageURL}
      alt=""
      width={120}
      height={120}
      className="mt-[-1rem]"
    />
  )
}
