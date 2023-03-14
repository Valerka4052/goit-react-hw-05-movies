import { Details } from "components/Details/Details";
import { useEffect, useState } from "react";
import {useParams,} from "react-router-dom";
import { movieDetails } from "../api";

export function MovieDetails() {
    const { movieId } = useParams();
    const [detailsMovie, setDetailsMovie] = useState(null);
    useEffect(() => {
        movieDetails(movieId).then(setDetailsMovie)
    }, [movieId]);
    
    if (!detailsMovie) return null;

   
    return (
        <Details detailsMovie={detailsMovie} />
    );
};