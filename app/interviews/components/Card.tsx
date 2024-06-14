import React from "react";
import { robotoSerif, notoSans } from "@/app/fonts";
// type Props = {};

const Card = ({ value }: any) => {
  return (
    <div
      key={value.id}
      className="bg-interview-image1 bg-cover bg-center h-80 md:h-[250px] lg:h-[450px] rounded"
    >
      <div className="bg-gradient-to-b from-[#41366700] to-[#413569] w-full h-full relative">
        <div className="flex flex-col w-full h-full mb-5 space-y-5 items-center justify-end">
          <div className="max-w-md text-center">
            <p
              className={`${robotoSerif.className} text-lg/6 tracking-wide font-normal`}
            >
              {value.story}
            </p>
          </div>
          <div className="text-center pb-5">
            <h6
              className={`${robotoSerif.className} text-[26px]/8 font-semibold capitalize`}
            >
              {value.nam}
            </h6>
            <p
              className={`${notoSans.className} font-medium text-lg/7 tracking-wide text-white/80`}
            >
              {value.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
