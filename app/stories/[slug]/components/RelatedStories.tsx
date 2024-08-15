import React from "react";
import ListRelatedStories from "./ListRelatedStories";
import LoadingRelatedStories from "./LoadingRelatedStories";

type Props = {
  isLoading: boolean;
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

export default function RelatedStories({ isLoading, relatedStories }: Props) {
  const slicedRelatedStories = relatedStories && relatedStories?.slice(0, 3);
  return (
    <>
      {relatedStories && relatedStories?.length > 0 && (
        <section className="bg-white pt-20 md:pt-24 lg:pt-28 px-5 md:px-12 lg:px-20 pb-10">
          <div className="space-y-3 md:space-y-5">
            <div className="">
              <p className="text-base md:text-2xl lg:text-3xl font-semibold md:font-bold text-primary tracking-normal leading-10">
                Related Stories
              </p>
            </div>
            <div className="">
              {isLoading ? (
                <LoadingRelatedStories />
              ) : (
                <ListRelatedStories relatedStories={slicedRelatedStories} />
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
