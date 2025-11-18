import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Welcome } from '@/components/Welcome';
import type { Movie } from '@/types/movieType';
import { useNowPlaying } from '@/api/useNowPlaying';
import { useTrending } from '@/api/useTrending';
import { MovieItem } from '@/components/MovieItem';
import { Search } from '@/components/Search';
import { useState } from 'react';
import { useTrendingWeek } from '@/api/useTrendingWeek';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import clsx from "clsx";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [trendingPeriod, setTrendingPeriod] = useState<"today" | "this_week">("today");

  const { data: nowPlaying } = useNowPlaying();
  const { data: trending } = useTrending();
  const { data: trendingWeek } = useTrendingWeek();

  return (
    <div>
      <Header />
      <Search />
      <Welcome />

      <div className='flex'>
        <h1 className="px-12 py-6 text-start">Trending</h1>
        <ToggleGroup
          type="single"
          defaultValue='today'
          value={trendingPeriod}
          onValueChange={(val: 'today' | 'this_week') => {
            if (val) {
              setTrendingPeriod(val)
            }
          }}
        >
          <ToggleGroupItem
            value='today'
            className={clsx(
              "px-6 py-2 w-24 text-center rounded-md transition-colors",
              trendingPeriod === "today"
                ? "bg-blue-600 text-white"
                : "bg-transparent text-slate-900 hover:bg-gray-100"
            )}
          >
            Today
          </ToggleGroupItem>
          <ToggleGroupItem
            value='this_week'
            className={clsx(
              "px-6 py-2 w-24 text-center rounded-md transition-colors",
              trendingPeriod === "this_week"
                ? "bg-blue-600 text-white"
                : "bg-transparent text-slate-900 hover:bg-gray-100"
            )}
          >
            This Week
          </ToggleGroupItem>
        </ToggleGroup>

      </div>
      <div className="flex overflow-x-auto px-12 w-full">
        {trending && trendingPeriod === "today" &&
          trending.data.results.map((movie: Movie) =>
            <MovieItem
              key={movie.id}
              movie={movie}
            />
          )
        }
      </div>
      <div className="flex overflow-x-auto px-12">
        {trendingWeek && trendingPeriod === "this_week" &&
          trendingWeek.data.results.map((movie: Movie) =>
            <MovieItem
              key={movie.id}
              movie={movie}
            />
          )
        }
      </div>

      <h1 className="px-12 py-6 text-start">Now playing</h1>
      <div className="flex px-12 overflow-x-auto">
        {nowPlaying &&
          nowPlaying.data.results.map((movie: Movie) =>
            <MovieItem
              key={movie.id}
              movie={movie}
            />
          )
        }
      </div>
      <Footer />
    </div>
  )
}
