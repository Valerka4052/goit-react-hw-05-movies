import { getTrendingMovies } from "api"
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState, Suspense } from "react";
import { Loader } from "components/Loader/Loader";

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getTrendingMovies().then(movies => {
            setMovies(movies);
            setLoading(false);
        });
    }, []);
    return (
        <Suspense  fallback={<div>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</div>}>
           { loading ? <Loader /> : <MovieList movies={movies} />}
        </Suspense>
    );
};
export default Home