import { useState } from "react";
import Button from "./Button";

const SearchForm = () => {
    const [search, setSearch] = useState('');
    <form>
        <input 
            type="text"
            value = {search}
            onChange={() => setSearch}
        />

        <Button value="Search" />
    </form>
};

export default SearchForm;
