import { useMovieDetails } from '@/api/useMovieDetails';
import { Header } from '@/components/Header';
import { IMAGE_HEADER_URL } from '@/constants/constants';
import type { Movie } from '@/types/movieType';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie')({
  component: MovieComponent,
})

function MovieComponent() {
  const { id } = Route.useSearch() as { id: number };

  const { data: movieData } = useMovieDetails(id);
  const movie: Movie = movieData?.data;

  if (!movie) return null;

  const date = new Date(movie.release_date);

  return (
    <div>
      <Header />
      <div className='flex p-4'>
        <img src={IMAGE_HEADER_URL + movie.poster_path}
          className="rounded-t-lg w-[250px] h-[400px]"
        />
        <div className='px-12'>
          <h1>{movie.title + " (" + date.getFullYear() + ")"} </h1>
          <h6>{movie.genres.map(genre => genre.name).join(", ")}</h6>

          <h6 className='mt-12'>{movie.tagline}</h6>
          <h6 className='mt-2'>Overview</h6>
          <p className='text-blue-900'>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}