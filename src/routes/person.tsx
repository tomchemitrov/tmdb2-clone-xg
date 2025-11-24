import { usePerson } from "@/api/usePersonDetails";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IMAGE_HEADER_URL } from "@/constants/constants";
import type { Person } from "@/types/personType";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/person")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useSearch() as { id: number };

  const { data, isFetching } = usePerson(id);
  const person: Person = data?.data;

  if (!person) return null;

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
          className="rounded-lg w-[300px]"
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

      <Footer />
    </div>
  );
}
