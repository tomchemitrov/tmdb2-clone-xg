import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function usePopularMovies(page: number) {
  const params: UseAPIQeryProps = {
    url: "movie/popular?page=" + page,
    method: "get",
    queryKey: ["movie/popular", page],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
