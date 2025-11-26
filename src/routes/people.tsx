import { usePeople } from "@/api/usePeople";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PersonItem } from "@/components/PersonItem";
import { Button } from "@/components/ui/button";
import type { Person } from "@/types/personType";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/people")({
  component: PeopleComponent,
});

function PeopleComponent() {
  const [page, setPage] = useState(1);

  const people = usePeople(page);
  const totalPages = people.data?.data.total_pages;

  return (
    <div>
      <Header />
      <h1 className="px-8 py-4 font-bold text-lg">Popular people</h1>
      <div className="p-2 gap-4 grid grid-cols-5">
        {people.data?.data.results.map((person: Person) => (
          <PersonItem key={person.id} person={person} />
        ))}
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
  );
}
