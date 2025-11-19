import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function useTrendingWeek() {
  const params: UseAPIQeryProps = {
    url: "trending/all/week",
    method: "get",
    queryKey: ["trending_week"],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
