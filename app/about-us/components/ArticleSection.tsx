import React from "react";
import OurVision from "./OurVision";
import OurStory from "./OurStory";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Props = {
  isLoading: boolean;
  storyContent: BlocksContent;
  visionContent: BlocksContent;
};

export default function ArticleSection({ isLoading, storyContent, visionContent }: Props) {
  return (
    <>
      <section className="w-full px-4 py-6 mx-auto bg-white md:px-6 lg:px-12 lg:py-10">
        <OurStory isLoading={isLoading} content={storyContent} />
        <OurVision isLoading={isLoading}  content={visionContent} />
      </section>
    </>
  );
}
