import React from "react";
import Image from "next/image";
import Bridge from "@/public/assets/images/bridge.png";
import { piazzolla } from "@/app/fonts";

type Props = {
  header?: string;
  paragraph?: string;
};

export default function Header({ header, paragraph }: Props) {
  return (
    <>
      <header className="w-full px-4 py-6 mx-auto bg-white md:px-6 md:py-10 lg:px-12 lg:py-16">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center mt-2 mb-6">
            <h3
              className={` ${piazzolla.className} text-[54px] font-medium text-[#413667]`}
            >
              {header}
            </h3>
            <p
              className={` ${piazzolla.className} text-center text-sm text-[#413667CC] font-medium w-full sm:text-xl sm:w-4/5 md:w-3/4  leading-[30px]`}
            >
              {paragraph}
            </p>
          </div>
          <div className="w-full  sm:mt-5 sm:mb-10 h-[420px]">
            <Image
              className="w-full h-full"
              src={Bridge}
              alt="Scale Africa Logo"
            />
          </div>
        </div>
      </header>
    </>
  );
}
