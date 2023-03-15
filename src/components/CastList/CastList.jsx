import PropTypes from 'prop-types';

export function CastList({ cast }) {
    console.log(cast)
    return (
        <ul>
            {cast.map(({ id, character, original_name, profile_path }) => {
                return (
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
                        <p>{original_name}</p>
                        <p>{character}</p>
                    </li>
                );
            })};
        </ul>
    );
}

CastList.propTypes = {
    cast:PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        character: PropTypes.string,
        original_name: PropTypes.string,
        profile_path: PropTypes.string,
        }).isRequired,
    ).isRequired
};
