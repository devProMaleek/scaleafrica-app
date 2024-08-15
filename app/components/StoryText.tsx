import React from "react";

type Props = {
  startup?: string;
  title?: string;
  author?: string;
  date?: string;
  color: "white" | "primary";
  notoSansClassName: string;
  robotoSerifClassName: string;
};

export default function StoryText({
  startup,
  title,
  author,
  date,
  color,
  notoSansClassName,
  robotoSerifClassName,
}: Props) {
  return (
    <>
      <div className="space-y-2 md:space-y-5">
        <div>
          <p
            className={`${notoSansClassName} uppercase text-xs md:text-sm font-medium tracking-wide text-secondary`}
          >
            {startup}
          </p>
        </div>
        <div>
          <h5
            className={`${robotoSerifClassName} ${
              color === "primary" ? "text-white" : "text-primary-800"
            } text-base md:text-xl/6 font-semibold`}
          >
            {title}
          </h5>
        </div>
        <div
          className={`${notoSansClassName} ${
            color === "primary" ? "text-white" : "text-primary-800"
          }`}
        >
          <span className="text-xs tracking-wide font-normal">
            {author ? author : "N/A"}
          </span>{" "}
          | <span className="text-xs tracking-wide font-normal">{date}</span>
        </div>
      </div>
    </>
  );
}
