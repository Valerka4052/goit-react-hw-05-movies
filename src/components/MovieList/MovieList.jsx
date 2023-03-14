import { Link, useLocation } from "react-router-dom"

export function MovieList({ movies, }) {
     const location = useLocation();
    return (
        movies.map((movie) => {
            return (
                <Link state={{ from: location }} to={`/movies/${movie.id}`} key={movie.id}  >
                    {movie.title}
                </Link>
            );
        })
    );
};