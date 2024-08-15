import React from "react";
import { notoSans } from "@/app/fonts";
import TopStoryImage from "./TopStoryImage";
import TopStoryText from "./TopStoryText";

type Props = {
  color: "white" | "primary";
  topStory?: {
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
  };
};

export default function TopStory({ topStory, color }: Props) {
  return (
    <>
      <div className="max-w-md p-2 space-y-5 min-w-60 md:min-w-96 md:p-5">
        <TopStoryImage
          url={topStory?.banner?.image?.url}
          width={topStory?.banner?.image?.width}
          height={topStory?.banner?.image?.height}
          alt={topStory?.banner?.image?.name}
        />
        <TopStoryText
          startup={topStory?.startup}
          title={topStory?.title}
          slug={topStory?.slug}
          color={color}
          notoSansClassName={notoSans.className}
        />
      </div>
    </>
  );
}
