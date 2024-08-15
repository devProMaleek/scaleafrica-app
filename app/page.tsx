"use client";
import { useMemo } from "react";
import { useFetcher } from "./actions/fetcher";
import ErrorSection from "./components/ErrorSection";
import MainContent from "./components/MainContent";

export default function HomePage() {
  const { data, error, isLoading, refetch } = useFetcher<any>("/homepage");
  const quotes = useMemo(() => {
    if (data) {
      return data.data.attributes.quotes.data;
    }
  }, [data]);
  const stories = useMemo(() => {
    if (data) {
      return data.data.attributes.homepage.stories;
    }
  }, [data]);
  const topStories = useMemo(() => {
    if (data) {
      return data.data.attributes.homepage.topStories;
    }
  }, [data]);

  return (
    <>
      {error ? (
        <ErrorSection error={error} />
      ) : (
        <MainContent
          isLoading={isLoading}
          quotes={quotes}
          stories={stories}
          topStories={topStories}
        />
      )}
    </>
  );
}
