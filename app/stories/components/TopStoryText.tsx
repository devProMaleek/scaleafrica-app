import React from "react";
import Link from "next/link";

type Props = {
  startup?: string;
  title?: string;
  slug?: string;
  color: "white" | "primary";
  notoSansClassName: string;
};

export default function TopStoryText({
  startup,
  title,
  slug,
  color,
  notoSansClassName,
}: Props) {
  return (
    <>
      <div className="space-y-3 md:space-y-5">
        <div className="">
          <p
            className={`${notoSansClassName} text-primary-800 uppercase text-xs md:text-sm font-normal tracking-wide`}
          >
            {startup}
          </p>
        </div>
        <div className="">
          <h5
            className={` ${
              color === "primary" ? "text-white" : "text-primary-800"
            } text-sm md:text-base/6 font-semibold`}
          >
            {title}
          </h5>
        </div>
        <div
          className={`${notoSansClassName} flex items-center justify-between ${
            color === "primary" ? "text-white" : "text-primary-800"
          }`}
        >
          <Link href={`/top-stories/${slug}`}>
            <span className="text-xs font-normal cursor-pointer tracking-normal md:text-sm">
              Read More
            </span>
          </Link>
          <Link href={`/top-stories/${slug}`}>
            <span className="text-xs font-normal cursor-pointer tracking-normal md:text-sm">
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
