import { Link, useLocation } from "react-router-dom";
import { List,Item,Thumb } from "./MovieList.styled";
import PropTypes from 'prop-types';

export function MovieList({ movies}) {
    const location = useLocation();

    return (
        <List>
            {movies.map(({ id, poster_path, title }) => {
                return (<Item key={id}>
                    <Link state={{ from: location }} to={`/movies/${id}`}   >
                        <Thumb>
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                        </Thumb>
                        <p>{title}</p>
                    </Link>
                </Item>)
            })}
        </List>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            poster_path: PropTypes.string,
        })
    )
};