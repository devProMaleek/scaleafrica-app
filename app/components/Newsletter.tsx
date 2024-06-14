"use client";
import React from "react";
import { montserrat, piazzolla, roboto } from "../fonts";
import { Button } from "@nextui-org/react";

type Props = {
  backgroundColor: "white" | "primary";
};

export default function Newsletter({ backgroundColor }: Props) {
  return (
    <>
      <section
        className={`${piazzolla.className} ${
          backgroundColor === "white"
            ? "bg-white border-primary-100"
            : "bg-primary border-primary-500"
        } border-y`}
      >
        <div className="max-w-2xl px-5 mx-auto ">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="">
              <h2
                className={`${
                  backgroundColor === "white"
                    ? "text-primary-700"
                    : "text-white"
                } font-bold text-center text-2xl/7 md:text-5xl/[50px] lg:text-[52px] lg:leading-[48px]`}
              >
                Stay In the Loop
              </h2>
              <p
                className={`w-full px-4 mt-4 font-normal text-center ${
                  backgroundColor === "white"
                    ? "text-primary/80"
                    : "text-white/80"
                } md:px-0 lg:px-8 md:max-w-md lg:max-w-xl md:mt-5 text-sm/6 lg:text-base`}
              >
                Subscribe to our newsletter for exclusive access to the latest
                startup stories, founder interviews, and insightful analyses
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-10 space-x-0 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className={`py-4 w-full ${
                  backgroundColor === "white"
                    ? "text-primary-700 placeholder:text-primary-700 border-primary-700"
                    : "text-white border-white placeholder:text-white"
                } bg-transparent border px-6 md:px-10 text-base md:text-xl/6 placeholder:text-base md:placeholder:text-xl/6  rounded-[58px]`}
              />
              <Button
                variant="solid"
                radius="full"
                className={`${backgroundColor === "white" ? "bg-primary-700 text-white hover:bg-primary-800 hover:border-primary-700" : "bg-white text-primary-400 hover:text-primary-600"} w-full md:max-w-48 text-base md:text-lg/6 font-medium border py-5 lg:py-7 lg:px-12`}
              >
                Subscribe →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
