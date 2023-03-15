import { movieReviews } from "api";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList } from "components/ReviewList/ReviewList";
import { Loader } from "components/Loader/Loader";

export function Reviews() {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoading(true);
        movieReviews(movieId).then(movie => {
            setReviews(movie);
            setLoading(false);
        });
    }, [movieId]);

    if (!reviews) return;
    
    return (
        loading ? <Loader /> : < ReviewList reviews={reviews} />
    );
};