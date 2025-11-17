import { useNavigate } from "@tanstack/react-router";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-900 p-4 flex flex-row gap-6">
            <img
                onClick={() => navigate({ to: "/" })}
                className="h-[20px]"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            />
            <a onMouseEnter={() => { }} className="text-white">Movies</a>
            <a onMouseEnter={() => console.log("Enter TV")} className="text-white">TV Shows</a>
            <a onMouseEnter={() => console.log("Enter People")} className="text-white" onClick={() => navigate({ to: "/people" })}>People</a>
            <a onMouseEnter={() => console.log("Enter More")} className="text-white">More</a>
        </div>
    )
}