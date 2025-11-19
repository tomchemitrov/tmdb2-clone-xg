import { IMAGE_HEADER_URL } from "@/constants/constants";
import type { Person } from "@/types/personType";
import { Link } from "@tanstack/react-router";

interface PersonItemProps {
  person: Person;
}

export const PersonItem = ({ person }: PersonItemProps) => {
  return (
    <Link
      to="/person"
      search={{ id: person.id }}
      className="block flex flex-col items-center gap-2 m-1 rounded-lg bg-white shadow-lg w-[300px]"
    >
      <img
        src={
          person.profile_path
            ? IMAGE_HEADER_URL + person.profile_path
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={person.name}
        className="w-[300px] h-[300px] object-cover rounded"
      />
      <h2 className="mx-2 text-l font-semibold">{person.name}</h2>
      {person.known_for && (
        <h2 className="mx-2 mb-2 text-sm text-gray-500">
          {person.known_for
            .map((item) => item.title || item.name) // some items might be movies (title) or shows (name)
            .join(", ")}
        </h2>
      )}
    </Link>
  );
};
