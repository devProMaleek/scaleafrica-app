"use client";
import React from "react";
import ErrorSection from "./components/ErrorSection";
import StoriesPageSection from "./components/StoriesPageSection";
import { useStoriesData } from "../hooks/useStoriesData";

export default function StoriesPage() {
  const {
    topStories,
    stories,
    quotes,
    topStoriesIsLoading,
    storiesIsLoading,
    quotesIsLoading,
    pageError,
  } = useStoriesData();
  return (
    <>
      {pageError ? (
        <ErrorSection error={pageError} />
      ) : (
        <StoriesPageSection
          storiesIsLoading={storiesIsLoading}
          topStoriesIsLoading={topStoriesIsLoading}
          quotesIsLoading={quotesIsLoading}
          stories={stories}
          topStories={topStories}
          quotes={quotes}
        />
      )}
    </>
  );
}
