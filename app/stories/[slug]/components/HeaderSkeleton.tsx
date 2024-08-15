import React from "react";

type Props = {};

export default function HeaderSkeleton({}: Props) {
  return (
    <>
      <div className="w-full mx-auto space-y-3 lg:space-y-7">
        <div className="flex flex-col items-center space-y-3 justify-center">
          <div className="animate-pulse bg-gray-300 h-6 rounded-lg w-4/5"></div>
          <div className="animate-pulse bg-gray-300 h-6 rounded-lg w-3/5"></div>
        </div>
        <div className="flex space-x-4 md:pl-10">
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-44"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-24"></div>
        </div>
      </div>
    </>
  );
}
