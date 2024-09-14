import { useMemo } from "react";
import { useFetcher } from "../actions/fetcher";

function useQuotes(data: any) {
  return useMemo(() => {
    if (data) {
      return data?.data?.attributes?.quotes?.data;
    }
  }, [data]);
}

function useStories(data: any) {
  return useMemo(() => {
    if (data) {
      return data?.data?.attributes?.homepage?.stories;
    }
  }, [data]);
}

function useTopStories(data: any) {
  return useMemo(() => {
    if (data) {
      return data?.data?.attributes?.homepage?.topStories;
    }
  }, [data]);
}

export function useHomePageData() {
  const { data, error, isLoading, refetch } = useFetcher<any>("/homepage");

  const quotes = useQuotes(data);
  const stories = useStories(data);
  const topStories = useTopStories(data);

  return { data, error, isLoading, refetch, quotes, stories, topStories };
}