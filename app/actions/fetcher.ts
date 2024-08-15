import useSWR, { SWRConfiguration } from "swr";
import axios from "axios";
import { useCallback } from "react";


export interface FetcherOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: any;
}

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL : process.env.NEXT_PUBLIC_DEVELOPMENT_API_BASE_URL;

const axiosInstance = axios.create();


export const axiosFetcher = async (url: string, options: FetcherOptions = {}) => {
  const response = await axiosInstance({
    url,
    method: options.method || "GET",
    headers: options.headers,
    data: options.body,
  });

  if (response.status !== 200) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.data;
};

export function useFetcher<T>(
  url: string,
  options: FetcherOptions = {},
  swrOptions: SWRConfiguration = {}
): { data: T | undefined; error: Error | undefined; isLoading: boolean; refetch: () => void } {
  const fetcher = useCallback(() => {
    return axiosFetcher(`${baseUrl}${url}`, options);

  }, [url, options]);

  const { data, error, mutate } = useSWR<T>(
    `${baseUrl}${url}`,
    fetcher,
    swrOptions
  );

  const isLoading = !data && !error;

  const refetch = () => {
    mutate();
  };

  return { data, error, isLoading, refetch };
}