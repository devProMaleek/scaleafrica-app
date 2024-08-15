import React from "react";
import HeaderSection from "./HeaderSection";
import StoryImage from "./StoryImage";
import Content from "./Content";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Props = {
  isLoading: boolean;
  story: {
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
    readTime: string;
    banner: any;
  };
};

export default function ContentSection({ isLoading, story }: Props) {
  const content = story?.content as unknown as BlocksContent;
  return (
    <>
      <section className="bg-white pt-4 md:pt-10 pb-5">
        <div className="space-y-5 md:space-y-7 lg:space-y-10">
          <div className="px-5 md:px-12 lg:px-20">
            <HeaderSection
              isLoading={isLoading}
              title={story?.title}
              createdAt={story?.createdAt}
              readTime={story?.readTime}
            />
          </div>
          <div className="px-0 md:px-12 lg:px-20">
            <StoryImage
              isLoading={isLoading}
              url={story?.banner?.image?.url}
              width={story?.banner?.image?.width}
              height={story?.banner?.image?.height}
              alt={story?.banner?.image?.name}
            />
          </div>
          <div className="px-5 md:px-12 lg:px-20">
            <Content isLoading={isLoading} content={content} />
          </div>
        </div>
      </section>
    </>
  );
}
