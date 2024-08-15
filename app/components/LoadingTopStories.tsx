import React from "react";
import TopStorySkeleton from "./TopStorySkeleton";

type Props = {
  home?: boolean;
};

export default function LoadingTopStories({ home }: Props) {
  const topStories = home ? [1, 2, 3, 4] : [1, 2, 3];
  return (
    <>
      <div
        className={`grid grid-cols-2 gap-y-4 md:gap-y-0 ${
          home ? "md:grid-cols-4" : " md:grid-cols-3 pb-7"
        }`}
      >
        {topStories.map((topStory, index) => (
          <TopStorySkeleton home={home ? home : false} key={index} />
        ))}
      </div>
    </>
  );
}
