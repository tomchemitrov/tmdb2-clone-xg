import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate } from "@tanstack/react-router";

interface SearchProps {

}

export const Search = ({ }: SearchProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex px-2 my-2 mx-6 border border-gray-300 rounded-lg overflow-hidden">
            <SearchIcon className="self-center" />
            <input
                className="flex-grow px-4 py-2 focus:outline-none"
                placeholder="Search for movies, TV Shows, people"
            />
            <Button
                onClick={() => navigate({ to: '/search' })}
                className="self-center">
                Search
            </Button>
        </div>
    )
}