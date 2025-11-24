import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function usePerson(id: number) {
  const params: UseAPIQeryProps = {
    url: "person/" + id,
    method: "get",
    queryKey: ["person", id],
    enabled: true,
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  };

  return useAPIQuery(params);
}
