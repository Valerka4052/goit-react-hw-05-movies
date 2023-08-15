import PropTypes from 'prop-types';
import { List, Item, Image, TextContainer, Text,Box } from './CastList.styled';
import { CastType } from '../../types';

export function CastList({ cast }:{cast:Array<CastType>}) {

    return (
        cast.length === 0 ? <Box><Text>there is no cast</Text> </Box>:
            <List>
                {cast.map(({ id, character, original_name, profile_path }: CastType) => {
                    return (
                        <Item key={id}>
                            <Image src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt="image" />
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
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            character: PropTypes.string,
            original_name: PropTypes.string,
            profile_path: PropTypes.string,
        }).isRequired,
    ).isRequired
};
