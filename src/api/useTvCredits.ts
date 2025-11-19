import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function useTvCredits(id: number) {
  const params: UseAPIQeryProps = {
    url: "tv/" + id + "/credits",
    method: "get",
    queryKey: ["credits", id],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
