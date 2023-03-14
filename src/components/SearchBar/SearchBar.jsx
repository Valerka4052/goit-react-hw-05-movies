
export function SearchBar({onSubmitValue}) {
   
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmitValue(e.target.search.value)
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