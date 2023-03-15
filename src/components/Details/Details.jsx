import { useEffect, useRef, useState } from "react";
import { Outlet,useLocation,} from "react-router-dom";
import PropTypes from 'prop-types';
import { List, Item, Image, TextContainer, Text, MainText, Container, GenreItem, LinkContainer, NavLink, Link } from './Details1.styled';

export function Details({ detailsMovie }) {
    const location = useLocation();
    const [locationState, SetLocationState] = useState(null);
    const backLinkHref = useRef(location.state?.from ?? "/");
    const { genres, original_title, release_date, overview, poster_path, vote_average } = detailsMovie;
    const score = Math.round(vote_average * 10);
console.log(detailsMovie)
    useEffect(() => {
        SetLocationState(backLinkHref.current);
    }, []);

    const releaseDate = new Date(release_date).getFullYear();
    
    return (
        <>
            <LinkContainer>
                <Link to={locationState}>Go back</Link>
            </LinkContainer>
            <Container>
                <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                <TextContainer>
                    <MainText>{original_title} ({releaseDate})</MainText>
                    <Text><strong>User score: </strong>{score}%</Text>
                    <Text><strong>Owervew:</strong></Text>
                    <Text>{overview}</Text>
                    <Text><strong>Genres:</strong></Text>
                    <List>
                        {genres.map(({ id, name }) => { return <GenreItem key={id}>{name}</GenreItem> })}
                    </List>
                    <div>
                        <Text><strong>Additonal information</strong></Text>
                        <List>
                            <Item><NavLink to={'cast'}>Cast</NavLink></Item>
                            <Item><NavLink to={'reviews'}>Reviews</NavLink></Item>
                        </List>
                    </div>
                </TextContainer>
            </Container>
            <Outlet />
        </>
    );
};
Details.propTypes = {
    detailsMovie: PropTypes.shape({
        original_title: PropTypes.string,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string,
            }).isRequired,
        ).isRequired,
    }).isRequired,
};
