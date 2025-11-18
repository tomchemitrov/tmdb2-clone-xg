import { useTvDetails } from '@/api/useTvDetails';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { IMAGE_HEADER_URL } from '@/constants/constants';
import type { TvSeries } from '@/types/movieType';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tv')({
  component: TVComponent,
})

function TVComponent() {
  const { id } = Route.useSearch() as { id: number };

  const { data: tvData, isFetching } = useTvDetails(id);
  const tv: TvSeries = tvData?.data;

  if (!tv) return null;

  const date = new Date(tv.first_air_date);

  return (
    <div>
      <Header />
      {isFetching && <div className="flex justify-center">
        <div className="w-16 h-16 p-4 self-center border-2 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>}

      <div className='flex p-4'>
        <img src={IMAGE_HEADER_URL + tv.poster_path}
          className="rounded-lg w-[250px] h-[400px]"
        />
        <div className='px-12'>
          <h1 className='font-bold text-xl'>{tv.name + " (" + date.getFullYear() + ")"} </h1>
          <h6>{tv.genres.map(genre => genre.name).join(", ")}</h6>

          <h6 className='mt-12'>{tv.tagline}</h6>
          <h6 className='mt-2'>Overview</h6>
          <p className='text-blue-900'>{tv.overview}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}