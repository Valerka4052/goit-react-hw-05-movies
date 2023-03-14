export function ReviewList({reviews }) {
    return (
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