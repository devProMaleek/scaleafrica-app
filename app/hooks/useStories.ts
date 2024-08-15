import { useFetcher } from '../actions/fetcher';

export function useStories() {
  const {
    data: storiesData,
    error: storiesError,
    isLoading: storiesIsLoading,
    refetch: refetchStories,
  } = useFetcher<ApiResponse<any>>("/stories");

  const stories = storiesData?.data?.attributes?.stories;

  return {
    stories,
    storiesError,
    storiesIsLoading,
    refetchStories,
  };
}