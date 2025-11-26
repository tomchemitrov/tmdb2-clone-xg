import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function usePersonCredits(id: number) {
  const params: UseAPIQeryProps = {
    url: "person/" + id + "/combined_credits",
    method: "get",
    queryKey: ["person", id, "credits"],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
