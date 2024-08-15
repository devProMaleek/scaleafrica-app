import { format } from "date-fns";
import React, { useMemo } from "react";
import HeaderSkeleton from "./HeaderSkeleton";
import Header from "./Header";

type Props = {
  isLoading: boolean;
  readTime?: string;
  createdAt?: string;
  title?: string;
};

export default function HeaderSection({
  isLoading,
  readTime,
  createdAt,
  title,
}: Props) {
  const date = useMemo(() => {
    if (createdAt) {
      return format(createdAt, "dd LLLL yyyy");
    }
  }, [createdAt]);
  return (
    <>
      <div className="w-full lg:max-w-6xl mx-auto space-y-3 lg:space-y-7">
        {isLoading ? (
          <HeaderSkeleton />
        ) : (
          <Header title={title} readTime={readTime} date={date} />
        )}
      </div>
    </>
  );
}
