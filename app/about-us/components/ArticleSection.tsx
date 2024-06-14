import { piazzolla } from "@/app/fonts";
import React from "react";

type Props = {
  articles: {
    header: string;
    paragraph: string;
  }[];
};

export default function ArticleSection({ articles }: Props) {
  return (
    <>
      <section className="w-full px-4 py-6 mx-auto bg-white md:px-6 lg:px-12 lg:py-10">
        {articles.map((article) => {
          const { header, paragraph } = article;
          return (
            <div
              key={header}
              className="flex flex-col sm:flex-row justify-center sm:justify-between items-start mt-10 mb-[80px]"
            >
              <div className="w-full sm:w-2/5">
                <h3
                  className={` ${piazzolla.className} text-3xl mb-4 md:mb-0 md:text-5xl text-[#413667] font-medium text-left`}
                >
                  {header}
                </h3>
              </div>
              <div className="w-full ">
                <p
                  className={`${piazzolla.className} text-base md:text-lg lg:text-xl text-[#413667CC] font-medium text-left`}
                >
                  {paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
