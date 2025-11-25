import { useSearch } from "@/api/useSearch";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieItem } from "@/components/MovieItem";
import { PersonItem } from "@/components/PersonItem";
import { Button } from "@/components/ui/button";
import type { Movie, TvSeries } from "@/types/movieType";
import type { Person } from "@/types/personType";
import { createFileRoute } from "@tanstack/react-router";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/search")({
  component: SearchComponent,
});

function SearchComponent() {
  const { searchQuery } = Route.useSearch() as { searchQuery: string };
  const [query, setQuery] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState<'movies' | 'tv' | 'people'>('movies');

  const { data: searchResults, isFetching } = useSearch(query);

  const movies = searchResults?.data.results.filter((item: Movie) => item.media_type === 'movie');
  const tvs = searchResults?.data.results.filter((item: TvSeries) => item.media_type === 'tv');
  const people = searchResults?.data.results.filter((item: Person) => item.media_type === 'person');

  return (
    <div>
      <Header />
      <div className="flex px-2 my-2 mx-6 border border-gray-300 rounded-lg overflow-hidden">
        <SearchIcon className="self-center" />
        <input
          className="flex-grow px-4 py-2 focus:outline-none"
          placeholder="Search for movies, TV Shows, people"
          value={query}
          onChange={(e) => setQuery(e.target.value)
          }
        />
      </div>

      {isFetching && <div className="p-8">Loading...</div>}

      <div className="flex space-x-4 px-8 justify-center">
        <Button className={
          selectedCategory === "movies"
            ? "bg-blue-900 text-white"
            : ""
        } variant="outline" onClick={() => setSelectedCategory("movies")}>Movies</Button>
        <Button className={
          selectedCategory === "tv"
            ? "bg-blue-900 text-white"
            : ""
        } variant="outline" onClick={() => setSelectedCategory("tv")}>TV Shows</Button>
        <Button
          className={
            selectedCategory === "people"
              ? "bg-blue-900 text-white"
              : ""
          }
          variant="outline" onClick={() => setSelectedCategory("people")}>People</Button>
      </div>
      <div className="p-8">
        <h1>Search results: </h1>
        <div className="flex overflow-x-auto w-full">
          {
            selectedCategory === "movies" && movies && movies.length > 0 &&
            movies.map((movie: Movie) => <MovieItem movie={movie} />)
          }
        </div>

        <div className="flex overflow-x-auto w-full">
          {
            selectedCategory === "tv" && tvs && tvs.length > 0 &&
            tvs.map((tv: Movie) => <MovieItem movie={tv} />)
          }
        </div>

        <div className="flex overflow-x-auto w-full">
          {
            selectedCategory === "people" && people && people.length > 0 &&
            people.map((person: Person) => <PersonItem person={person} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
