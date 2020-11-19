import React, {useState } from "react";
import Sort from "./Sort";

function Table(props) {
    const [sort, setSort] = useState("id");

    const sortBy = event => {
        setSort(event.target.id);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" id="id" onClick={sortBy}>ID</th>
                    <th scope="col" id="name" onClick={sortBy}>Name</th>
                    <th scope="col" id="occupation" onClick={sortBy}>Occupation</th>
                    <th scope="col" id="email" onClick={sortBy}>Email</th>
                </tr>
            </thead>
            <tbody>
                <Sort users={props.users} sort={sort}/>
            </tbody>
        </table>
    )
}

export default Table;