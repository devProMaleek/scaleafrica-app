import { useTopStories } from './useTopStories';
import { useStories } from './useStories';
import { useQuotes } from './useQuotes';

export function useStoriesData() {
  const {
    topStories,
    topStoriesError,
    topStoriesIsLoading,
    refetchTopStories,
  } = useTopStories();

  const {
    stories,
    storiesError,
    storiesIsLoading,
    refetchStories,
  } = useStories();

  const {
    quotes,
    quotesError,
    quotesIsLoading,
    refetchQuotes,
  } = useQuotes();

  const pageError = topStoriesError || storiesError || quotesError;

  return {
    topStories,
    stories,
    quotes,
    topStoriesIsLoading,
    storiesIsLoading,
    quotesIsLoading,
    pageError,
    refetchTopStories,
    refetchStories,
    refetchQuotes,
  };
}