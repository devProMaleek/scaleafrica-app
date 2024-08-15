import { useFetcher } from '../actions/fetcher';

export function useTopStories() {
  const {
    data: topStoriesData,
    error: topStoriesError,
    isLoading: topStoriesIsLoading,
    refetch: refetchTopStories,
  } = useFetcher<ApiResponse<any>>("/top-stories");

  const topStories = topStoriesData?.data?.attributes?.topStories;

  return {
    topStories,
    topStoriesError,
    topStoriesIsLoading,
    refetchTopStories,
  };
}