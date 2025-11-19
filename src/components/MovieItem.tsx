import { IMAGE_HEADER_URL } from "@/constants/constants";
import type { Movie } from "@/types/movieType";
import { Link } from "@tanstack/react-router";

interface NowPlayingProps {
    movie: Movie;
}

export const MovieItem = ({ movie }: NowPlayingProps) => {
    return (
        <Link
            to={movie.media_type === "movie" ? "/movie" : "/tv"}
            search={{ id: movie.id }}
            className="m-1 flex-col flex-shrink-0 w-[150px] mr-8 rounded-lg bg-white shadow-lg">
            <img src={IMAGE_HEADER_URL + movie.poster_path} className="rounded-t-lg" />
            <div className="px-4 pt-1 items-center">
                <p className="font-bold">{movie.title ? movie.title : movie.name}</p>
                <span className="text-gray-400 text-sm">{movie.release_date ? movie.release_date : movie.first_air_date}</span>
            </div>
            <div>Test</div>
        </Link>
    )
}