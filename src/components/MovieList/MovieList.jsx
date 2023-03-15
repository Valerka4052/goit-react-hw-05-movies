import { useLocation } from "react-router-dom";
import { List, Item, Thumb, Link, Img, Text } from "./MovieList.styled";
import PropTypes from 'prop-types';

export function MovieList({ movies}) {
    const location = useLocation();

    return (
        <List>
            {movies.map(({ id, poster_path, title }) => {
                return (
                    <Item key={id}>
                        <Link state={{ from: location }} to={`/movies/${id}`}   >
                            <Thumb>
                                <Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                            </Thumb>
                            <Text>{title}</Text>
                        </Link>
                    </Item>);
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
    ).isRequired
};
