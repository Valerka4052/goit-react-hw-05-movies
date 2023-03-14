import { SearchBar } from "components/SearchBar/SearchBar";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "api";


export function Movies() {
    const [findMovies, setfindMovies] = useState('');
    const [searchParams,setSearchParams] = useSearchParams({query:''})
    const query = searchParams.get('query')
    useEffect(() => {
        searchMovie(query).then(setfindMovies)
    },[query])
    function getfindMovies(value) {
        const normalizedValue = value.trim().toLowerCase();
        setSearchParams(normalizedValue !== '' ? { query: normalizedValue } : {});
    }
    
    if (!findMovies) return null;
    return (
        <>
        <SearchBar onSubmitValue={getfindMovies} />
        <MovieList movies={findMovies} />
        </>
    )
}