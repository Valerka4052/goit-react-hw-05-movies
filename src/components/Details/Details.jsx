import { useEffect, useRef, useState } from "react";
import { Outlet, Link,useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export function Details({ detailsMovie }) {
    const location = useLocation();
    const [locationState, SetLocationState] = useState(null);
    const backLinkHref = useRef(location.state?.from ?? "/");
    const { genres, original_title, release_date, overview, poster_path } = detailsMovie;

    useEffect(() => {
        SetLocationState(backLinkHref.current);
    }, []);

    const releaseDate = new Date(release_date).getFullYear();
    
    return (
        <>
            <Link to={locationState}>go back</Link>
            <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                <p>{original_title} ({releaseDate})</p>
                <p>Owerview</p>
                <p>{overview}</p>
                <ul>
                
                    {genres.map(({ id, name }) => { return <li key={id}>{name}</li> })}
                </ul></div>
            <div>
                <p>additonal information</p>
                <ul>
                    <li><Link to={'cast'}>cast</Link></li>
                    <li><Link to={'reviews'}>reviews</Link></li>
                </ul>
                <Outlet />
            </div>
        </>
    );
};
Details.propTypes = {
    detailsMovie: PropTypes.shape({
            original_title: PropTypes.string,
            release_date: PropTypes.string,
            overview: PropTypes.string,
            poster_path: PropTypes.string,
            genres: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string,
                })
            )
        })
    };
