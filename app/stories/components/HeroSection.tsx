import { piazzolla } from "@/app/fonts";
import React from "react";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <>
      <section className="bg-white py-10 md:py-20 px-7 md:px-14 w-full">
        <div className="mx-auto text-center">
          <div className="space-y-2 md:space-y-3">
            <div className="">
              <p
                className={`${piazzolla.className} text-2xl/7 text-primary-700 md:text-5xl/10 text-center font-bold`}
              >
                Explore Startup Stories
              </p>
            </div>
            <div className="">
              <p
                className={`${piazzolla.className} text-primary-700 opacity-70 font-normal md:text-2xl`}
              >
                Discover the Untold Journeys of African Entrepreneurs
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
