import { Details } from "components/Details/Details";
import { useEffect, useState } from "react";
import {useParams,} from "react-router-dom";
import { movieDetails } from "../api";
// import { Loader } from "components/Loader/Loader";
// import { Suspense } from "react";

 function MovieDetails() {
    const { movieId } = useParams();
    const [detailsMovie, setDetailsMovie] = useState(null);
    //  const [loading, setLoading] = useState(false);


    useEffect(() => {
        // setLoading(true);
        movieDetails(movieId).then(movie => {
            setDetailsMovie(movie);
            // setLoading(false);
        })
    }, [movieId]);
    
    if (!detailsMovie) return null;
   
     return (
         <Details detailsMovie={detailsMovie} />
     );
};
export default MovieDetails;