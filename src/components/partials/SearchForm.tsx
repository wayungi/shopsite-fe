import { useState } from "react";

const SearchForm = () => { // JSX.Element
    const [search, setSearch] = useState('');
    return (
        <form className="search-form">
            <input 
                type="text"
                value = {search}
                onChange={() => setSearch}
            />
            <button className="search-form-button">Search</button>
    </form>
    )
    
};

export default SearchForm;
