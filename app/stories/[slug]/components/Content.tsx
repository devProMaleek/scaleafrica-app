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

export default function Content({ isLoading, content }: Props) {
  return (
    <>
      <div className="px-0 md:px-16 lg:px-28">
        {isLoading ? (
          <ContentSkeleton />
        ) : (
          <BlocksRenderer
            content={content ? content : []}
            blocks={{
              paragraph: ({ children }) => (
                <p
                  className={`${piazzolla.className} text-base md:text-lg lg:text-xl text-justify text-[#413667CC] font-medium`}
                >
                  {children}
                </p>
              ),
            }}
          />
        )}
      </div>
    </>
  );
}
