import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function useNowPlaying() {
  const params: UseAPIQeryProps = {
    url: "movie/now_playing",
    method: "get",
    queryKey: ["now_plaing"],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
