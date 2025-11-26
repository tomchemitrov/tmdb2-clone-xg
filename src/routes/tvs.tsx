import { usePopularTv } from '@/api/usePopularTv';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MovieItem } from '@/components/MovieItem';
import { Button } from '@/components/ui/button';
import type { Movie } from '@/types/movieType';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/tvs')({
  component: TvsComponent,
})

function TvsComponent() {
  const [page, setPage] = useState(1);
  const tvData = usePopularTv(page);
  const totalPages = tvData.data?.data.total_pages;
  const tvs: Movie[] = tvData.data?.data.results;

  if (!tvs) return;

  return (
    <div>
      <Header />
      <h1 className="px-8 py-4 font-bold text-lg">Popular TV Shows</h1>
      <div className="p-4 gap-4 grid grid-cols-5">
        {
          tvs.map((movie) => <MovieItem movie={movie} />)
        }
      </div>

      <div className="flex justify-center items-center align-center gap-4 my-4">
        Page: {page} of {totalPages}
        <Button
          disabled={page === 1}
          variant={"outline"}
          onClick={() => {
            setPage(prev => prev - 1)
          }}>Previous page</Button>
        <Button
          disabled={page === totalPages}
          variant={"outline"}
          onClick={() => {
            setPage(prev => prev + 1)
          }}>Next page</Button>
      </div>
      <Footer />
    </div>
  )
}
