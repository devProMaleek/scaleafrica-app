import React from "react";
import Image, { StaticImageData } from "next/image";
import { notoSans, robotoSerif } from "../fonts";

type Props = {
  color: "white" | "primary";
  story: {
    image: StaticImageData;
    title: string;
    writtenBy: string;
    createdAt: string;
  };
};

export default function Story({ story, color }: Props) {
  return (
    <>
      <div className="p-2 md:p-5 space-y-5">
        <div className="w-full h-32 md:h-48 lg:h-64 lg:w-96 rounded">
          <Image
            src={story.image}
            className="object-cover w-full h-full rounded"
            alt={story.title}
          />
        </div>
        <div className="space-y-2 md:space-y-5">
          <div className="">
            <p
              className={`${notoSans.className} uppercase text-xs md:text-sm font-medium tracking-wide text-secondary`}
            >
              Startup name
            </p>
          </div>
          <div className="">
            <h5
              className={`${robotoSerif.className} ${
                color === "primary" ? "text-white" : "text-primary-800"
              } text-base md:text-xl/6  font-semibold`}
            >
              {story.title}
            </h5>
          </div>
          <div
            className={`${notoSans.className} ${
              color === "primary" ? "text-white" : "text-primary-800"
            }`}
          >
            <span className="text-xs tracking-wide font-normal">
              {story.writtenBy}
            </span>{" "}
            |{" "}
            <span className="text-xs tracking-wide font-normal">
              {story.createdAt}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
