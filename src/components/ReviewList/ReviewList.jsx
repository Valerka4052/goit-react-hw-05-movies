import PropTypes from 'prop-types';
import { List, Item, Text } from './ReviewList.styled';

export function ReviewList({ reviews }) {
   
    return (
        reviews.length < 1 ?
            <Text><strong>There are no reviews</strong></Text> :
            <List>
                {reviews.map(({ author, id, content }) => {
                    return (
                        <Item key={id}>
                            <Text><strong>Author: {author}</strong></Text>
                            <Text>{content}</Text>
                        </Item>
                    );
                })}
            </List>
    );
};

ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.exact({
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};