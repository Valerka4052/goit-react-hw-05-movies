import { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { movieDetails } from "../api";

export function MovieDetails() {
    const { movieId } = useParams();
    const [detailsMovie, setDetailsMovie] = useState(null);
    useEffect(() => {
        movieDetails(movieId).then(setDetailsMovie)
    }, [movieId]);
    
    if (!detailsMovie) return null;
    const { genres, original_title, release_date, overview, backdrop_path } = detailsMovie;
    console.log(detailsMovie);
   
    return (
        <>
            <div><img src={backdrop_path} alt="" />
                <p>{original_title} ({release_date})</p>
                <p>Owerview</p>
                <p>{overview}</p>
                <ul>
                
                    {genres.map((value) => { return <li key={value.id}>{value.name}</li> })}
                </ul></div>
            <div>
                <p>additonal information</p>
                <ul>
                    <li><Link to={'cast'}>cast</Link></li>
                    <li><Link to={'reviews'}>reviews</Link></li>
                </ul>
                <Outlet />
            </div></>
    );
};