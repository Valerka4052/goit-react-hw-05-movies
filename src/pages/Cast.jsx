import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {movieCast}from '../api'
import { CastList } from 'components/CastList/CastList'


export function Cast() {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();
    useEffect(() => {
        movieCast(movieId).then(setCast)
    }, [movieId]);
    if (!cast) return;
    console.log(cast);
    return (
        < CastList cast={cast} />
    );
}