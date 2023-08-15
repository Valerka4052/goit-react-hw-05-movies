import { movieReviews } from "../api";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList } from "../components/ReviewList/ReviewList";
import { Loader } from "../components/Loader/Loader";
import { ReviewsType } from "../types";

export function Reviews() {
    const [reviews, setReviews] = useState<ReviewsType[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { movieId } = useParams<{ movieId: string }>();

    useEffect(() => {
        setLoading(true);
        if (typeof movieId === "string") movieReviews(movieId).then((movie:ReviewsType[]) => {
            setReviews(movie);
            setLoading(false);
        });
    }, [movieId]);

    if (!reviews) return null;
    
    return (
        loading ? <Loader /> : < ReviewList reviews={reviews} />
    );
};