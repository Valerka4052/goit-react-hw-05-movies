import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {movieCast}from '../api'
import { CastList } from 'components/CastList/CastList'
import { Loader } from "components/Loader/Loader";

export function Cast() {

    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    
    useEffect(() => {
        setLoading(true);
        movieCast(movieId).then(movie => {
            setCast(movie);
            setLoading(false);
        });
    }, [movieId]);
    
    if (!cast) return;

    return (
        loading ? <Loader /> : < CastList cast={cast} />
    );
};