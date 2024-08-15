import React from "react";

type Props = {
  title?: string;
  date?: string;
  readTime?: string;
};

export default function Header({ title, date, readTime }: Props) {
  return (
    <>
      <h3 className="text-primary text-center font-bold tracking-wide text-2xl md:text-4xl lg:text-5xl">
        {title}
      </h3>
      <div className="space-x-4 md:pl-3">
        <span className="text-sm md:text-base text-gray-800 font-semibold tracking-normal">
          {date}
        </span>
        <span className="text-sm md:text-base text-gray-600 font-medium tracking-normal">
          {readTime}
        </span>
      </div>
    </>
  );
}
