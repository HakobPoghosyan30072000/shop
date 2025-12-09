"use client";

import { useState } from "react";

type ApiFunction<Args extends unknown[], Response> = (...args: Args) => Promise<Response>;

interface UseApiOptions {
    append?: boolean; // for pagination / infinite scroll
  }

export function useApi<Response, Args extends unknown[] = []>(
  apiFunc: ApiFunction<Args, Response>,
  options?: UseApiOptions
) {
  const [data, setData] = useState<Response | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (...args: Args): Promise<Response> => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunc(...args);

      // If append is true and previous data exists (for pagination)
      if (options?.append && data && Array.isArray(data) && Array.isArray(response)) {
        setData([...data, ...response] as unknown as Response);
      } else {
        setData(response);
      }

      setLoading(false);
      return response;
    } catch (err: unknown) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      throw err;
    }
  };

  return { data, request, loading, error };
}
