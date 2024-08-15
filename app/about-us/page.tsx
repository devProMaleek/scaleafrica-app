"use client";
import React from "react";
import { useFetcher } from "../actions/fetcher";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import AboutSection from "./components/AboutSection";
import ErrorSection from "./components/ErrorSection";

type Props = {};

export default function AboutUs({}: Props) {
  const { data, error, isLoading, refetch } = useFetcher<
    ApiResponse<AboutData>
  >("/aboutpage?populate=*");

  const title = data?.data?.attributes?.title;
  const description = data?.data?.attributes?.description;
  const ourVision = data?.data?.attributes
    ?.ourVision as unknown as BlocksContent;
  const ourStory = data?.data?.attributes?.ourStory as unknown as BlocksContent;

  return (
    <>
      {error ? (
        <ErrorSection error={error} />
      ) : (
        <AboutSection
          isLoading={isLoading}
          title={title}
          description={description}
          ourVision={ourVision}
          ourStory={ourStory}
        />
      )}
    </>
  );
}
