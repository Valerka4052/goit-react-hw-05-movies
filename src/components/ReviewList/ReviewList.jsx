export function ReviewList({reviews }) {
   
    return (
        reviews.length < 1 ?
            <p>There are no reviews</p> :
            <ul>
                {reviews.map(({ author, id, content }) => {
                    return (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </li>
                    );
                })}
            </ul>
    );
};