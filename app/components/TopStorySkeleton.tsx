import React from "react";

type Props = {
  home?: boolean;
};

export default function TopStorySkeleton({ home }: Props) {
  return (
    <>
      <div
        className={`${
          home ? "max-w-sm" : "max-w-md"
        } p-2 space-y-5 min-w-60 md:min-w-80 md:p-5`}
      >
        <div className="w-full h-32 rounded md:h-40 lg:h-56">
          <div className="flex justify-center items-center animate-pulse bg-gray-300 w-full h-full rounded">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="space-y-3 md:space-y-5">
          <div className="">
            <div className="animate-pulse bg-gray-300 h-5 rounded-lg w-36"></div>
          </div>
          <div className="space-y-2">
            <div className="animate-pulse bg-gray-300 h-5 rounded-lg w-full"></div>
            <div className="animate-pulse bg-gray-300 h-5 rounded-lg w-1/2"></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="animate-pulse bg-gray-300 h-5 rounded-lg w-32"></span>
            <span className="animate-pulse bg-gray-300 h-5 rounded-lg w-12"></span>
          </div>
        </div>
      </div>
    </>
  );
}