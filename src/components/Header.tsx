import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <div className="bg-blue-900 p-4 flex flex-row gap-6">
      <Link to={"/"}>
        <img
          className="h-[20px]"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        />
      </Link>
      <Link to={"/movies"} className="text-white">
        Movies
      </Link>
      <Link to={"/tvs"} className="text-white">
        TV Shows
      </Link>
      <Link to={"/people"} className="text-white">
        People
      </Link>
      <Link to={"/"} className="text-white">
        More
      </Link>
    </div>
  );
};
