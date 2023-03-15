import PropTypes from 'prop-types';

export function SearchBar({onSubmitValue}) {

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!e.target.search.value) return;
            onSubmitValue(e.target.search.value);
            }}>
            <input
                type="text"
                name="search"
                placeholder='enter the film'
                />
            <button type='submit' >Search</button>
        </form>
    );
}
SearchBar.propTypes={
       onSubmitValue:PropTypes.func.isRequired,    
    };