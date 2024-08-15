import React from "react";

type Props = {};

export default function ContentSkeleton({}: Props) {
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-4/5"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-3/4"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-1/2"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-1/4"></div>
        </div>
        <div className="space-y-2">
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-full"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-4/5"></div>
          <div className="animate-pulse bg-gray-300 h-4 rounded-lg w-3/4"></div>
        </div>
      </div>
    </>
  );
}
