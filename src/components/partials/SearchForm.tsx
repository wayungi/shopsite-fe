import { useState } from "react";
import Button from "./Button";

const SearchForm = () => { // JSX.Element
    const [search, setSearch] = useState('');
    return (
        <form className="search-form">
            <input 
                type="text"
                value = {search}
                onChange={() => setSearch}
            />
            <Button value="Search" />
    </form>
    )
    
};

export default SearchForm;
