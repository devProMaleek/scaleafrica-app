import Image from 'next/image'
import React from 'react'

type Props = {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export default function TopStoryImage({ url, width, height, alt }: Props) {
  return (
    <>
      <div className="w-full h-32 rounded md:h-40 lg:h-56">
          <Image
          src={url}
          className="object-cover w-full h-full rounded"
          width={width}
          height={height}
          alt={alt}
          />
        </div>
    </>
  )
}