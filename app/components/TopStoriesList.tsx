import React from "react";
import TopStory from "./TopStory";

type Props = {
  topStories: {
    id: string;
    title: string;
    slug: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    metaDescription: string;
    startup: string;
    author: string;
    banner: any
  }[]
};


export default function TopStoriesList({ topStories }: Props) {
  return (
    <>
      <div className="scrollbar-hide">
        <div className="flex items-center overflow-auto flex-nowrap">
          {topStories && topStories?.map((topStory, index) => (
            <TopStory key={index} topStory={topStory} color="primary" />
          ))}
        </div>
      </div>
    </>
  );
}
