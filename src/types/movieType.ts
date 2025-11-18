import type { Person } from "./personType";

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
    name: string;
    first_air_date: string;
    genres: {
        name: string
    }[];
    tagline: string;
    media_type: "movie" | "tv";
}

export interface TvSeries {
    adult: boolean;
    backdrop_path: string;
    created_by: Person;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
    genres: {
        id: number;
        name: string
    }[];
    tagline: string;
    homepage: string;
    in_production: boolean;
    number_of_episodes: number;
    number_of_seasons: number;
}
