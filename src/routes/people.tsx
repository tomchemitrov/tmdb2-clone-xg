import { usePeople } from "@/api/usePeople";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PersonItem } from "@/components/PersonItem";
import type { Person } from "@/types/personType";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/people")({
  component: PeopleComponent,
});

function PeopleComponent() {
  const people = usePeople();
  console.log(people.data?.data.results);

  return (
    <div>
      <Header />
      <h1 className="p-8">Popular people</h1>
      <div className="p-2 gap-4 grid grid-cols-4">
        {people.data?.data.results.map((person: Person) => (
          <PersonItem key={person.id} person={person} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
