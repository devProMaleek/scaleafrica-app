import React from "react";
import Footer from "@/app/components/Footer";
import ShareStory from "@/app/components/ShareStory";
import RelatedStories from "./RelatedStories";
import ContentSection from "./ContentSection";

type Props = {
  isLoading: boolean;
  story: any;
  relatedStories: any[];
};

export default function StorySection({
  isLoading,
  story,
  relatedStories,
}: Props) {
  return (
    <>
      <main className="">
        <ContentSection isLoading={isLoading} story={story} />
        <RelatedStories isLoading={isLoading} relatedStories={relatedStories} />
        <ShareStory backgroundColor="white" />
        <Footer backgroundColor="primary" />
      </main>
    </>
  );
}
