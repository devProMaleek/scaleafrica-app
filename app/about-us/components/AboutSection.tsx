import React from "react";
import TeamSection from "./TeamSection";
import Header from "./Header";
import ArticleSection from "./ArticleSection";
import ContactSection from "./ContactSection";
import Footer from "../../components/Footer";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Props = {
  title?: string;
  description?: string;
  isLoading: boolean;
  ourStory: BlocksContent;
  ourVision: BlocksContent;
};

export default function AboutSection({
  title,
  description,
  isLoading,
  ourStory,
  ourVision,
}: Props) {
  return (
    <>
      <main className="">
        <Header header={title} paragraph={description} />
        <ArticleSection
          isLoading={isLoading}
          storyContent={ourStory}
          visionContent={ourVision}
        />
        {/* <TeamSection members={members} /> */}
        <ContactSection />
        <Footer backgroundColor="primary" />
      </main>
    </>
  );
}
