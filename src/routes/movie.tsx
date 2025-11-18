import { useMovieCredits } from '@/api/useMovieCredits';
import { useMovieDetails } from '@/api/useMovieDetails';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PersonItem } from '@/components/PersonItem';
import { IMAGE_HEADER_URL } from '@/constants/constants';
import type { Movie } from '@/types/movieType';
import type { Person } from '@/types/personType';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie')({
  component: MovieComponent,
})

function MovieComponent() {
  const { id } = Route.useSearch() as { id: number };

  const { data: movieData, isFetching } = useMovieDetails(id);
  const credits = useMovieCredits(id);
  const movie: Movie = movieData?.data;

  if (!movie) return null;

  const date = new Date(movie.release_date);

  return (
    <div>
      <Header />

      {isFetching && <div className="flex justify-center">
        <div className="w-16 h-16 p-4 self-center border-2 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>}

      <div className='flex p-4'>
        <img src={IMAGE_HEADER_URL + movie.poster_path}
          className="rounded-lg w-[250px] h-[400px]"
        />
        <div className='px-12'>
          <h1 className='font-bold text-xl'>{movie.title + " (" + date.getFullYear() + ")"} </h1>
          <h6>{movie.genres.map(genre => genre.name).join(", ")}</h6>

          <h6 className='mt-12'>{movie.tagline}</h6>
          <h6 className='mt-2'>Overview</h6>
          <p className='text-blue-900'>{movie.overview}</p>
        </div>
      </div>

      <div className='flex px-12 overflow-x-auto'>
        {credits.data?.data &&
          credits.data?.data.cast.map((cast: Person) => (
            <PersonItem person={cast} />
          ))
        }
      </div>
      <Footer />
    </div>
  )
}