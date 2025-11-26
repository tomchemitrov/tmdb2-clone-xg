import { API_URL } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type UseAPIQeryProps = {
  url: string;
  method: string;
  body?: string;
  headers?: Record<string, string>;
  queryKey?: any;
  enabled?: boolean;
  params?: any
};

const http = axios.create({
  baseURL: API_URL,
});

export function useAPIQuery({
  url,
  method,
  body,
  headers,
  queryKey,
  enabled,
  params
}: UseAPIQeryProps) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () =>
      http.request({
        method,
        url,
        data: body,
        headers,
        params
      }),
    enabled,
  });
}
