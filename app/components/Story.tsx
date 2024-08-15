import React, { useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { notoSans, robotoSerif } from "../fonts";
import { formatDistance } from "date-fns";
import StoryImage from "./StoryImage";
import StoryText from "./StoryText";
import { useFormattedDate } from "../hooks/useFormattedDate";
import Link from "next/link";

type Props = {
  color: "white" | "primary";
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
    banner: any;
  };
};

export default function Story({ story, color }: Props) {
  const date = useFormattedDate(story?.publishedAt);
  return (
    <>
      <Link href={`/stories/${story.slug}`}>
        <div className="p-2 md:p-5 space-y-5 cursor-pointer">
          <StoryImage
            url={story?.banner?.image?.url}
            width={story?.banner?.image?.width}
            height={story?.banner?.image?.height}
            alt={story?.banner?.image?.name}
          />
          <StoryText
            startup={story?.startup}
            title={story?.title}
            author={story?.author}
            date={date}
            color={color}
            notoSansClassName={notoSans.className}
            robotoSerifClassName={robotoSerif.className}
          />
        </div>
      </Link>
    </>
  );
}
