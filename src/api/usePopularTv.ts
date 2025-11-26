import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function usePopularTv(page: number = 1) {
  const params: UseAPIQeryProps = {
    url: "tv/popular?page=" + page,
    method: "get",
    queryKey: ["tv/popular", page],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
