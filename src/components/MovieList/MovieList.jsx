import { Link } from "react-router-dom"

export function MovieList({movies}) {
    return (
        movies.map((movie) => {
            return (
                <Link to={`/movies/${movie.id}`} key={movie.id}  >
                    {movie.title}
                </Link>
            );
        })
    );
};