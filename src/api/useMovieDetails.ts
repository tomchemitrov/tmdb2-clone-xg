import { API_KEY } from "@/constants/constants";
import { useAPIQuery, type UseAPIQeryProps } from "@/api/useApiQuery"

export function useMovieDetails(id: number) {
    const params: UseAPIQeryProps = {
        url: "movie/" + id,
        method: "get",
        queryKey: ["movie", id],
        enabled: true,
        headers: {
            "Accept": "application/json",
            "Authorization": API_KEY
        },
    }

    return useAPIQuery(params);
}