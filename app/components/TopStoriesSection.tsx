import React from "react";
import TopStoriesList from "./TopStoriesList";
import LoadingTopStories from "./LoadingTopStories";

type Props = {
  isLoading: boolean;
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
    banner: any;
  }[];
};

export default function TopStoriesSection({ isLoading, topStories }: Props) {
  return (
    <>
      <section className="bg-primary">
        {isLoading ? (
          <LoadingTopStories home />
        ) : (
          <TopStoriesList topStories={topStories} />
        )}
      </section>
    </>
  );
}
