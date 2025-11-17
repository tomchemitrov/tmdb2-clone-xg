import { IMAGE_HEADER_URL } from "@/constants/constants";
import type { Person } from "@/types/personType";

interface PersonItemProps {
    person: Person;
    onClick: (id: number) => void;
}

export const PersonItem = ({ person, onClick }: PersonItemProps) => {
    return (
        <div
            onClick={() => onClick(person.id)}
            key={person.id} className="flex flex-col items-center gap-2 m-1 rounded-lg bg-white shadow-lg w-[300px]">
            <img
                src={
                    person.profile_path
                        ? IMAGE_HEADER_URL + person.profile_path
                        : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={person.name}
                className="w-[300px] h-[300px] object-cover rounded"
            />
            <h2 className="mx-2 text-l font-semibold">{person.name}</h2>
            <h2 className="mx-2 mb-2 text-sm text-gray-500">{person.known_for.map((item) => item.title || item.name) // some items might be movies (title) or shows (name)
                .join(', ')}</h2>
        </div>
    );
}