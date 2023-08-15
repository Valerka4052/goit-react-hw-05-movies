import { Details } from "../components/Details/Details";
import { useEffect, useState } from "react";
import {useParams,} from "react-router-dom";
import { movieDetails } from "../api";
import { MovieInfoResponseType } from "../types";

function MovieDetails() {
    const { movieId } = useParams<{ movieId?: string }>();
    const [detailsMovie, setDetailsMovie] = useState<MovieInfoResponseType | null>(null); 

    useEffect(() => {
        if (typeof movieId === "string") movieDetails(movieId).then((movie: MovieInfoResponseType) => {
            setDetailsMovie(movie);
        })
    }, [movieId]);
    if (!detailsMovie) return null;
   
    return <Details detailsMovie={detailsMovie} />
};
export default MovieDetails;