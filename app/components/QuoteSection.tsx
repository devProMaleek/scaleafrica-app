import React from "react";
import { notoSans, piazzolla } from "../fonts";

type Props = {
  backgroundColor: "white" | "primary";
  isLoading: boolean;
  quote: {
    author: string;
    content: string;
    authorPosition: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export default function QuoteSection({
  backgroundColor,
  quote,
  isLoading,
}: Props) {
  return (
    <>
      <section
        className={`${
          backgroundColor === "white" ? "bg-white" : "bg-primary"
        } py-6 md:py-12 px-7 md:px-14 w-full`}
      >
        {isLoading ? (
          <>
            <div className="mx-auto w-full text-center">
              <p
                className={`${piazzolla.className} ${
                  backgroundColor === "white"
                    ? "text-primary-700"
                    : "text-white"
                } text-xl/7 md:text-3xl/10 w-full text-center font-semibold tracking-wide`}
              >
                Loading Quote...
              </p>
            </div>
          </>
        ) : (
          <>
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
                    {quote?.content}
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
                      backgroundColor === "white"
                        ? "text-primary"
                        : "text-white"
                    } font-normal uppercase md:text-lg/8 tracking-wide mt-3`}
                  >
                    {quote?.author}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
