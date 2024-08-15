import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  ImageLogo: StaticImageData;
};

export default function FooterLogo({ ImageLogo }: Props) {
  return (
    <>
      <div className="flex items-center">
        <div className="relative w-24 h-12 md:w-32 md:h-16 lg:w-44 lg:h-20">
          <Image
            src={ImageLogo}
            sizes="500px"
            layout="fill"
            objectFit="contain"
            alt="Scale Africa Logo"
          />
        </div>
      </div>
    </>
  );
}
