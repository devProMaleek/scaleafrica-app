import React from "react";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import QuoteSection from "../components/QuoteSection";
import HeroSection from "./components/HeroSection";
import StoriesSection from "./components/StoriesSection";

export default function StoriesPage() {
  return (
    <>
      <main className="">
        <HeroSection />
        <StoriesSection />
        <QuoteSection backgroundColor="white" />
        <Newsletter backgroundColor="white" />
        <Footer backgroundColor="white" />
      </main>
    </>
  );
}
