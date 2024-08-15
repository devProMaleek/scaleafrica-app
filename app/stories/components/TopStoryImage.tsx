import Image from "next/image";
import React from "react";

type Props = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export default function TopStoryImage({ url, width, height, alt }: Props) {
  return (
    <>
      <div className="w-full rounded h-36 md:h-48 lg:h-64">
        <Image
          src={url}
          className="object-cover w-full h-full rounded"
          width={width}
          height={height}
          alt={alt}
        />
      </div>
    </>
  );
}
