"use client";
import { useFetcher } from "@/app/actions/fetcher";
import React from "react";
import ErrorSection from "./components/ErrorSection";
import StorySection from "./components/StorySection";

type Props = {
  params: { slug: string };
};

export default function SingleStoryPage({ params }: Props) {
  const { data, error, isLoading, refetch } = useFetcher<any>(
    `/stories/${params.slug}`
  );

  const story = data?.data?.attributes?.story;
  const relatedStories = data?.data?.attributes?.relatedStories;
  return (
    <>
      {error ? (
        <ErrorSection error={error} />
      ) : (
        <StorySection
          isLoading={isLoading}
          story={story}
          relatedStories={relatedStories}
        />
      )}
    </>
  );
}
