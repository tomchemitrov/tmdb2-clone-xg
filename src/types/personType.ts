import type { Movie } from "./movieType";

export interface Person {
  adult: boolean;
  id: number;
  gender: number;
  name: string;
  profile_path: string | null;
  known_for_department: string;
  popularity: number;
  known_for: Movie[];
}
