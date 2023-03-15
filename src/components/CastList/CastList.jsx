import PropTypes from 'prop-types';
import { List,Item,Image,TextContainer,Text } from './CastList1.styled';

export function CastList({ cast }) {

    return (
        <List>
            {cast.map(({ id, character, original_name, profile_path }) => {
                return (
                    <Item key={id}>
                        <Image src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt="" />
                        <TextContainer>
                            <Text>{original_name}</Text>
                            <Text><strong>Character:</strong> {character}</Text>
                        </TextContainer>
                    </Item>
                );
            })};
        </List>
    );
}

CastList.propTypes = {
    cast:PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        character: PropTypes.string,
        original_name: PropTypes.string,
        profile_path: PropTypes.string,
        }).isRequired,
    ).isRequired
};
