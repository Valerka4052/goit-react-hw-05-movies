import { useEffect, useRef, useState } from "react";
import { Outlet, Link,useLocation } from "react-router-dom";

export function Details({ detailsMovie }) {
    const location = useLocation();
    const [locationState, SetLocationState] = useState(null);
    const backLinkHref = useRef(location.state?.from ?? "/");
    const { genres, original_title, release_date, overview, poster_path
 } = detailsMovie;
    console.log(detailsMovie)
    useEffect(() => {
        SetLocationState(backLinkHref.current);
    }, []);
    return (
        <>
            <Link to={locationState}>go back</Link>
            <div><img src={`https://image.tmdb.org/t/p/w500${poster_path
}`} alt="" />
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
            </div>
        </>);
};

