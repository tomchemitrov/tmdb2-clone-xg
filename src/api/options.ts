import { API_KEY } from "@/constants/constants";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};
