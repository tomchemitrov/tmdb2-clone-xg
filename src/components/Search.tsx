import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

interface SearchProps { }

export const Search = ({ }: SearchProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleNavigate() {
    navigate({
      to: "/search",
      search: { searchQuery: query }
    })
  }

  return (
    <div className="flex px-2 my-2 mx-6 border border-gray-300 rounded-lg overflow-hidden">
      <SearchIcon className="self-center" />
      <input
        className="flex-grow px-4 py-2 focus:outline-none"
        placeholder="Search for movies, TV Shows, people"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleNavigate();
          }
        }}
      />
      <Button
        onClick={handleNavigate}
        className="self-center"
      >
        Search
      </Button>
    </div>
  );
};
