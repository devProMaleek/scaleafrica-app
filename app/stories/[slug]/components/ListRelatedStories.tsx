import Story from "@/app/components/Story";
import React from "react";

type Props = {
  relatedStories: {
    id: string;
    title: string;
    slug: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    metaDescription: string;
    startup: string;
    author: string;
    banner: any;
  }[];
};

export default function ListRelatedRelatedStories({ relatedStories }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 lg:grid-cols-3">
        {relatedStories &&
          relatedStories?.map((relatedStory, index) => (
            <Story key={index} story={relatedStory} color="white" />
          ))}
      </div>
    </>
  );
}
