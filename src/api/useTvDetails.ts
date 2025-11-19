import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function useTvDetails(id: number) {
  const params: UseAPIQeryProps = {
    url: "tv/" + id,
    method: "get",
    queryKey: ["tv", id],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
