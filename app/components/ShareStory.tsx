"use client";
import React from "react";
import { montserrat, piazzolla, roboto } from "../fonts";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  backgroundColor: "primary" | "white";
};
// background: linear-gradient(90.28deg, #776D98 20.47%, rgba(65, 54, 103, 0) 99.81%);

export default function ShareStory({ backgroundColor }: Props) {
  return (
    <>
      <section
        className={`${backgroundColor === "white" ? "bg-white" : "bg-primary"}`}
      >
        <div className="px-4 pb-10 mx-auto rounded-md max-w-screen-2xl md:px-6 lg:px-8 md:pb-16">
          <div className="w-full bg-right bg-no-repeat bg-cover rounded-md h-60 bg-share-story">
            <div
              className={`md:bg-gradient-to-r ${
                backgroundColor === "white"
                  ? "md:from-[#413667] md:from-[20.47%] md:to-[rgba(65,54,103,0)] md:to-99%"
                  : "md:from-[#776D98] md:from-[20.47%] md:to-[rgba(65,54,103,0)] md:to-99%"
              }  bg-primary/70 rounded-md md:bg-transparent w-full h-full md:py-10 md:px-6 lg:p-16`}
            >
              <div className="flex flex-col items-center py-6 space-y-6 lg:items-center md:items-stretch md:py-5 lg:py-0 lg:space-x-40 px-7 md:flex-row md:justify-between md:space-y-0">
                <div className="flex flex-col items-center space-x-0 space-y-3 lg:flex-row text-start lg:space-x-28 md:space-y-3">
                  <div className="text-white md:max-w-80 lg:max-w-sm">
                    <h6
                      className={`${piazzolla.className} text-2xl font-bold tracking-normal text-center md:text-start lg:text-5xl/[54px]`}
                    >
                      Want to Share Your Story?
                    </h6>
                  </div>
                  <div className="w-full text-white md:max-w-80">
                    <p
                      className={`${piazzolla.className} font-normal text-center md:text-start md:pl-2.5 lg:pl-0 text-sm lg:text-base tracking-wide`}
                    >
                      Your story matters. Contribute to the narrative of African
                      startups by sharing your experiences or suggesting
                      startups.
                    </p>
                  </div>
                </div>
                <div className="md:self-end">
                  <Link href="/about-us#contact-us">
                    <Button
                      color="primary"
                      radius="full"
                      variant="bordered"
                      className={`${piazzolla.className} bg-white text-primary md:px-6 md:py-4 lg:px-10 lg:py-6 font-bold tracking-normal text-sm/5`}
                    >
                      Share Your Story →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
