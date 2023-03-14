import { movieReviews } from "api";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList } from "components/ReviewList/ReviewList";
export function Reviews() {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();
    useEffect(() => {
        movieReviews(movieId).then(setReviews)
    }, [movieId]);
    if (!reviews) return;
    console.log(reviews);
    
    return (
        < ReviewList reviews={reviews} />
    );
};