import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function usePeople() {
  const params: UseAPIQeryProps = {
    url: "person/popular",
    method: "get",
    queryKey: ["person/popular"],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
