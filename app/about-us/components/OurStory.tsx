import React from "react";
import { piazzolla } from "@/app/fonts";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import ContentSkeleton from "./ContentSkeleton";

type Props = {
  isLoading: boolean;
  content: BlocksContent;
};

export default function OurStory({ content, isLoading }: Props) {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start mt-10 mb-[80px]">
        <div className="w-full sm:w-2/5">
          <h3
            className={` ${piazzolla.className} text-3xl mb-4 md:mb-0 md:text-5xl text-[#413667] font-medium text-left`}
          >
            Our Story
          </h3>
        </div>
        <div className="w-full">
          {isLoading ? (
            <ContentSkeleton />
          ) : (
            <BlocksRenderer
              content={content ? content : []}
              blocks={{
                paragraph: ({ children }) => (
                  <p
                    className={`${piazzolla.className} text-base md:text-lg lg:text-xl text-[#413667CC] font-medium text-left`}
                  >
                    {children}
                  </p>
                ),
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
