import React from "react";
import HeroSection from "./HeroSection";
import TopStoriesSection from "./TopStoriesSection";
import QuoteSectionWrapper from "./QuoteSectionWrapper";
import FeaturedStories from "./FeaturedStories";
import InterviewFounders from "./InterviewFounder";
import QuickSurvey from "./QuickSurvey";
import ShareStory from "./ShareStory";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

type Props = {
  isLoading: boolean;
  quotes: any[];
  stories: any[];
  topStories: any[];
};

export default function MainContent({ isLoading, quotes, stories, topStories }: Props) {
  return (
    <>
      <main className="">
        <HeroSection />
        <TopStoriesSection isLoading={isLoading} topStories={topStories} />
        <QuoteSectionWrapper
          isLoading={isLoading}
          quotes={quotes}
          index={0}
          backgroundColor="primary"
        />
        <FeaturedStories isLoading={isLoading} stories={stories} />
        <InterviewFounders />
        <QuickSurvey />
        <ShareStory backgroundColor="white" />
        <QuoteSectionWrapper
          isLoading={isLoading}
          quotes={quotes}
          index={1}
          backgroundColor="primary"
        />
        <Newsletter backgroundColor="primary" />
        <Footer backgroundColor="primary" />
      </main>
    </>
  );
}
