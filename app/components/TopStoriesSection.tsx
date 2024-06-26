import React from "react";
import TopStoriesList from "./TopStoriesList";

type Props = {};

export default function TopStoriesSection({}: Props) {
  return (
    <>
      <section className="bg-primary">
        <TopStoriesList />
      </section>
    </>
  );
}
