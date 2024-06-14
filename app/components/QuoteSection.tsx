import React from "react";
import { notoSans, piazzolla } from "../fonts";

type Props = {
  backgroundColor: "white" | "primary";
};

export default function QuoteSection({ backgroundColor }: Props) {
  return (
    <>
      <section
        className={`${
          backgroundColor === "white" ? "bg-white" : "bg-primary"
        } py-6 md:py-12 px-7 md:px-14 w-full`}
      >
        <div className="mx-auto text-center">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-center">
              <span
                className={`${
                  backgroundColor === "white"
                    ? "text-primary-800/10"
                    : "text-white/10"
                } text-6xl/9 md:text-8xl/10 mb-10 md:mb-4`}
              >
                “
              </span>
              <p
                className={`${piazzolla.className} ${
                  backgroundColor === "white"
                    ? "text-primary-700"
                    : "text-white"
                } relative text-xl/7 md:text-3xl/10 max-w-3xl text-center font-semibold tracking-wide`}
              >
                It&apos;s fine to celebrate success but it is more important to
                heed the lessons of failure
              </p>
              <span
                className={`${
                  backgroundColor === "white"
                    ? "text-primary-800/10"
                    : "text-white/10"
                } text-6xl/9 md:text-8xl/10 mb-10 md:mb-4`}
              >
                ’’
              </span>
            </div>
            <div className="">
              <p
                className={`${notoSans.className} ${
                  backgroundColor === "white" ? "text-primary" : "text-white"
                } font-normal uppercase md:text-lg/8 tracking-wide mt-3`}
              >
                Bill Gates
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
