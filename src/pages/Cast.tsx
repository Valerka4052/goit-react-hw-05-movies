import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {movieCast}from '../api'
import { CastList } from '../components/CastList/CastList'
import { Loader } from "../components/Loader/Loader";
import { CastType } from '../types';

export function Cast() {
    const [cast, setCast] = useState<CastType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { movieId } = useParams<{movieId?: string}>();
    useEffect(() => { setLoading(true); if (typeof movieId === "string") movieCast(movieId).then(movie => { setCast(movie); setLoading(false); }); }, [movieId]);
    if (!cast) return null;
    
    return loading ? <Loader /> : < CastList cast={cast} />;
};