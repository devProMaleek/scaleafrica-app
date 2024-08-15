import React from "react";
import ShareStory from "@/app/components/ShareStory";
import ListStories from "./ListStories";
import { piazzolla } from "../../fonts";
import LoadingStories from "./LoadingStories";

type Props = {
  isLoading: boolean;
  stories: any[];
};

export default function StoriesSection({ stories, isLoading }: Props) {
  return (
    <>
      <section className="pt-5 bg-primary md:pt-10">
        <div className="px-3 space-y-6 md:px-10 md:space-y-12 lg:space-y-16 lg:px-24">
          <div className="w-full mx-auto">
            <h4
              className={`${piazzolla.className} text-xl max-w-xl mx-auto text-center tracking-normal text-white md:text-[32px]/[45px] font-medium capitalize`}
            >
              Discover all our stories and learn from them
            </h4>
          </div>
          {isLoading ? <LoadingStories /> : <ListStories stories={stories} />}
        </div>
        <div className="mt-10 md:mt-20 lg:mt-32">
          <ShareStory backgroundColor="primary" />
        </div>
      </section>
    </>
  );
}
