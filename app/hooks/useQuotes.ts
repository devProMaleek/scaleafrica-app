import { useFetcher } from '../actions/fetcher';

export function useQuotes() {
  const {
    data: quotesData,
    error: quotesError,
    isLoading: quotesIsLoading,
    refetch: refetchQuotes,
  } = useFetcher<ApiResponse<any>>("/quotes");

  const quotes = quotesData?.data?.attributes?.quotes;

  return {
    quotes,
    quotesError,
    quotesIsLoading,
    refetchQuotes,
  };
}