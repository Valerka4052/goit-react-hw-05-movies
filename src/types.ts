export type MovieResponseType = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
};

type GenresType = {
    id: number,
    name: string
}
type ProductionCompaniesType = {
    id: number
    logo_path: string
    name: string
    origin_country: string
};
type ProductionContriesType = {
    id: number
    logo_path: string
    name: string
    origin_country: string
};

export type MovieInfoResponseType = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: GenresType[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompaniesType[],
    production_countries: ProductionContriesType[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    release_date: string,
    revenue: number,
    runtime: number,
};

export type CastType = {
    adult?: boolean,
    gender?: number,
    id: number,
    known_for_department?: string,
    name?: string,
    original_name: string,
    popularity?: number,
    profile_path: string,
    cast_id?: number,
    character: string,
    credit_id?: string,
    order?: number
};

export type ReviewsType = {
    author: string,
    author_details: {
        name: string,
        username: string,
        avatar_path: string,
        rating: number
    },
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
}