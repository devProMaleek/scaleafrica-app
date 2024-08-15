import React, { useMemo } from "react";
import QuoteSection from "./QuoteSection";

type Props = {
  isLoading: boolean;
  quotes: any[];
  stories?: boolean;
  index: number;
  backgroundColor: "white" | "primary";
};

export default function QuoteSectionWrapper({
  isLoading,
  quotes,
  stories,
  index,
  backgroundColor,
}: Props) {
  const quote = useMemo(() => {
    if (stories) {
      return quotes && quotes[index];
    }
    return quotes && quotes[index]?.attributes;
  }, [quotes, stories, index]);

  return (
    <QuoteSection
      isLoading={isLoading}
      quote={quote}
      backgroundColor={backgroundColor}
    />
  );
}
