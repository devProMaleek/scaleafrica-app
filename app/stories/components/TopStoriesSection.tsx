import React from "react";
import TopStoriesList from "./TopStoriesList";

type Props = {};

export default function TopStoriesSection({}: Props) {
  return (
    <>
      <section className="bg-white">
        <div className="px-5 pt-4 pb-6 md:pb-12 lg:pb-20 md:px-7">
          <TopStoriesList />
        </div>
      </section>
    </>
  );
}
