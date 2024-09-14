"use client";
import ErrorSection from "./components/ErrorSection";
import MainContent from "./components/MainContent";
import { useHomePageData } from "./hooks/useHomePageData";

export default function HomePage() {
  const { error, isLoading, quotes, stories, topStories } = useHomePageData();

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
