import { SearchBar } from "../components/SearchBar/SearchBar";
import { MovieList } from "../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../api";
import { Loader } from "../components/Loader/Loader";
import { MovieResponseType } from "../types";

function Movies() {
    const [loading, setLoading] = useState<boolean>(false);
    const [findMovies, setfindMovies] = useState<MovieResponseType[]>([]);
    const [searchParams, setSearchParams] = useSearchParams({ query: '' });
    const query = searchParams.get('query');
    
    useEffect(() => {
        setLoading(true);
        if(typeof query==="string") searchMovie(query).then((movies:MovieResponseType[]) => {
            setfindMovies(movies);
            setLoading(false);
        });
    }, [query]);

    function getfindMovies(value:string) {
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