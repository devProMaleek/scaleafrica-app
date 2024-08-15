import React from "react";
import Story from "./Story";

type Props = {
  stories: {
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
    banner: any
  }[]
};

export default function StoryList({ stories }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 lg:grid-cols-3">
        {stories && stories?.map((story, index) => (
          <Story key={index} story={story} color="white" />
        ))}
      </div>
    </>
  );
}
