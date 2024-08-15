import React from "react";
import TopStoriesList from "./TopStoriesList";
import LoadingTopStories from "@/app/components/LoadingTopStories";
import { piazzolla } from "@/app/fonts";

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
      <section className="bg-white px-7 md:px-12 lg:px-20">
        <h4
          className={`${piazzolla.className} font-medium text-lg md:text-2xl lg:text-3xl text-left md:text-center text-primary-800`}
        >
          Top Stories
        </h4>
        {isLoading ? (
          <LoadingTopStories />
        ) : (
          <TopStoriesList topStories={topStories} />
        )}
      </section>
    </>
  );
}
