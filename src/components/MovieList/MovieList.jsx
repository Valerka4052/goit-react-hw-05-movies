import { Link, useLocation } from "react-router-dom";
import { List,Item,Thumb } from "./MovieList.styled";

export function MovieList({ movies}) {
    const location = useLocation();
    return (
        <List>
            {movies.map((movie) => {
                return (<Item  key={movie.id}>
                    <Link
                       state={{ from: location }}
                        to={`/movies/${movie.id}`}   >
                        <Thumb>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </Thumb>
                        <p>{movie.title}</p>
                    </Link>
                </Item>)
            })}
            
            </List>)

}
