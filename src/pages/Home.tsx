import { getTrendingMovies } from "../api"
import { MovieList } from "../components/MovieList/MovieList";
import { Loader } from "../components/Loader/Loader";
import { useEffect, useState } from "react";
import { MovieResponseType } from "../types";

function Home() {

    const [movies, setMovies] = useState<MovieResponseType[]|[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getTrendingMovies().then((movies: MovieResponseType[]) => {
            setMovies(movies);
            setLoading(false);
        });
    }, []);

    return (
        loading ? <Loader /> : <MovieList movies={movies} />
    );
};
export default Home;