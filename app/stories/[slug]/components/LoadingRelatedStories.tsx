import React from "react";
import FeaturedStoriesSkeleton from "@/app/components/FeaturedStoriesSkeleton";

type Props = {};

const stories = [1, 2, 3];

export default function LoadingRelatedStories({}: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 lg:grid-cols-3">
        {stories.map((story, index) => (
          <FeaturedStoriesSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
