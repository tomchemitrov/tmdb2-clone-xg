import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery";

export function useSearch(query: string) {    
    const params: UseAPIQeryProps = {
        url: "search/multi?query=" + encodeURIComponent(query),
        method: "get",
        queryKey: ["search", query],
        enabled: true,
        headers: {
            Accept: "application/json",
            Authorization: API_KEY,
        },
    };

    return useAPIQuery(params);
}
