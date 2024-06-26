import React from "react";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import QuoteSection from "../components/QuoteSection";
import HeroSection from "./components/HeroSection";
import StoriesSection from "./components/StoriesSection";
import TopStoriesSection from "./components/TopStoriesSection";

export default function StoriesPage() {
  return (
    <>
      <main className="">
        <HeroSection />
        <TopStoriesSection />
        <StoriesSection />
        <QuoteSection backgroundColor="white" />
        <Newsletter backgroundColor="white" />
        <Footer backgroundColor="white" />
      </main>
    </>
  );
}
