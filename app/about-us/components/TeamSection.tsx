import React from "react";
import { piazzolla, robotoSerif } from "@/app/fonts";
import Bridge from "@/public/assets/images/bridge.png";
import Image from "next/image";

type Props = {
  members: {
    id: number;
    name: string;
    role: string;
    img: string;
  }[];
};

export default function TeamSection({ members }: Props) {
  return (
    <>
      <section className="w-full px-4 py-6 mx-auto bg-white md:px-6 md:py-10 lg:px-12 lg:py-16">
        <h3
          className={` ${piazzolla.className} text-[#413667] text-4xl text-center mb-4 md:mb-6`}
        >
          Meet the team
        </h3>

        <div className="grid justify-center w-full grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 ">
          {members.map((member) => {
            const { id, name, role } = member;
            return (
              <div className=" rounded-[2px] p-4" key={id}>
                <Image
                  src={Bridge}
                  className="w-full h-[150px] rounded mb-2"
                  alt="User Image"
                />

                <div className="">
                  <p
                    className={`${robotoSerif.className} text-[#413667] text-[18px] mb-1 font-semibold`}
                  >
                    {name}
                  </p>
                  <p
                    className={`${piazzolla.className} text-[#413667CC] text-[16px] font-medium`}
                  >
                    {role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
