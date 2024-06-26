import React from "react";
import Image, { StaticImageData } from "next/image";
import { notoSans, robotoSerif } from "../fonts";

type Props = {
  color: "white" | "primary";
  story: {
    image: StaticImageData;
    title: string;
    startupCompany: string;
  };
};

export default function TopStory({ story, color }: Props) {
  return (
    <>
      <div className="max-w-sm p-2 space-y-5 min-w-60 md:min-w-80 md:p-5">
        <div className="w-full h-32 rounded md:h-40 lg:h-56">
          <Image
            src={story.image}
            className="object-cover w-full h-full rounded"
            alt={story.title}
          />
        </div>
        <div className="space-y-3 md:space-y-5">
          <div className="">
            <p
              className={`${notoSans.className} uppercase text-xs md:text-sm font-normal tracking-wide text-white`}
            >
              {story.startupCompany}
            </p>
          </div>
          <div className="">
            <h5
              className={` ${
                color === "primary" ? "text-white" : "text-primary-800"
              } text-sm md:text-base/6 font-semibold`}
            >
              {story.title}
            </h5>
          </div>
          <div
            className={`${
              notoSans.className
            } flex items-center justify-between ${
              color === "primary" ? "text-white" : "text-primary-800"
            }`}
          >
            <span className="text-xs font-normal tracking-normal md:text-sm">
              Read More
            </span>
            <span className="text-xs font-normal tracking-normal md:text-sm">
              →
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
