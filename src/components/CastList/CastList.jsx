// const BaseUrl = "https://image.tmdb.org/t/p/w500/";
export function CastList({ cast }) {
    return (
        <ul>
            {cast.map(({ id, character, original_name, profile_path }) => {
                return (
                    <li key={id}>
                        <img src="https://image.tmdb.org/t/p/w500/{profile_path}" alt="" />
                        <p>{original_name}</p>
                        <p>{character}</p>
                    </li>
                );
            })};
        </ul>);
}


