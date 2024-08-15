import React from "react";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import StoriesSection from "./StoriesSection";
import TopStoriesSection from "./TopStoriesSection";
import QuoteSectionWrapper from "@/app/components/QuoteSectionWrapper";

type Props = {
  storiesIsLoading: boolean;
  quotesIsLoading: boolean;
  topStoriesIsLoading: boolean;
  stories: any[];
  topStories: any[];
  quotes: any[];
};

export default function StoriesPageSection({
  storiesIsLoading,
  topStoriesIsLoading,
  quotesIsLoading,
  stories,
  topStories,
  quotes,
}: Props) {
  return (
    <>
      <main className="">
        <HeroSection />
        <TopStoriesSection
          isLoading={topStoriesIsLoading}
          topStories={topStories}
        />
        <StoriesSection 
          isLoading={storiesIsLoading}
          stories={stories}
        />
        <QuoteSectionWrapper
          isLoading={quotesIsLoading}
          quotes={quotes}
          index={1}
          stories
          backgroundColor="white"
        />
        <Newsletter backgroundColor="white" />
        <Footer backgroundColor="white" />
      </main>
    </>
  );
}
