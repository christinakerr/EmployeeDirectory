import React from "react";

function SearchBar({handleInputChange}) {
    return (
        <form>
            <input className="mdb-select md-form colorful-select dropdown-primary" onChange={(event) => handleInputChange(event)} />
        </form>
    )
};

export default SearchBar;