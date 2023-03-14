import { Outlet, Link,useLocation } from "react-router-dom";

export function Details({ detailsMovie, }) {
    const location = useLocation();
    const backLinkHref = location.state?.from.pathname ?? "/";
  const  { genres, original_title, release_date, overview, backdrop_path } = detailsMovie
    return(
    <>
            <Link to={backLinkHref}>go back</Link>
            <div><img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
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
        </>)
}

// location.state.from.pathname