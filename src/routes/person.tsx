import { usePersonCredits } from "@/api/usePersonCredits";
import { usePerson } from "@/api/usePersonDetails";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieItem } from "@/components/MovieItem";
import { IMAGE_HEADER_URL } from "@/constants/constants";
import type { Movie } from "@/types/movieType";
import type { Person } from "@/types/personType";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/person")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useSearch() as { id: number };

  const { data, isFetching } = usePerson(id);
  const { data: creditsData } = usePersonCredits(id);
  const person: Person = data?.data;
  const credits: Movie[] = creditsData?.data.cast;

  if (!person) return;

  return (
    <div>
      <Header />
      {isFetching && (
        <div className="flex justify-center">
          <div className="w-16 h-16 p-4 self-center border-2 border-gray-300 border-t-black rounded-full animate-spin" />
        </div>
      )}
      <div className="flex p-4">
        <img
          src={IMAGE_HEADER_URL + person.profile_path}
          className="rounded-lg w-[300px] h-[450px]"
        />
        <div className="px-4">
          <h1 className="font-bold text-xl">{person.name}</h1>
          {person.biography &&
            <div className="mt-4">
              <h3 className="font-bold">Biography</h3>
              <span className="mt-4">{person.biography}</span>
            </div>
          }
        </div>
      </div>

      <h1 className="px-6 py-2 font-bold">Known for</h1>
      {credits &&
        <div className="flex px-4 overflow-x-auto">
          {
            credits.map((movie: Movie) => <MovieItem movie={movie} />)
          }
        </div>
      }

      <Footer />
    </div>
  );
}
