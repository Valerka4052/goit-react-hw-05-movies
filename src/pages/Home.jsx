import { getTrendingMovies } from "api"
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";

export function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies().then(movies => setMovies(movies));
    }, []);
    return (
        <MovieList movies={movies} />
        
    );
};