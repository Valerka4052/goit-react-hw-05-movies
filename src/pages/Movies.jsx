import { SearchBar } from "components/SearchBar/SearchBar";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "api";
import { Loader } from "components/Loader/Loader";

function Movies() {
    const [loading, setLoading] = useState(false);
    const [findMovies, setfindMovies] = useState('');
    const [searchParams, setSearchParams] = useSearchParams({ query: '' });
    const query = searchParams.get('query');
    
    useEffect(() => {
         setLoading(true);
        searchMovie(query).then(movies => {
            setfindMovies(movies);
            setLoading(false);
        });
    }, [query]);

    function getfindMovies(value) {
        const normalizedValue = value.trim().toLowerCase();
        setSearchParams(normalizedValue !== '' ? { query: normalizedValue } : {});
    };

    if (!findMovies) return null;
    return (
        <>
            <SearchBar onSubmitValue={getfindMovies} />
            {loading ? <Loader /> : findMovies.length > 0 && <MovieList movies={findMovies} />}
        </>
    );
};
export default Movies;