import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery"

export function useTrending() {
    const params: UseAPIQeryProps = {
        url: "trending/all/day",
        method: "get",
        queryKey: ["trending"],
        enabled: true,
        headers: {
            "Accept": "application/json",
            "Authorization": API_KEY
        },
    }

    return useAPIQuery(params);
}