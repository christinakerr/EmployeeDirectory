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
                    <th scope="col"><button id="id" onClick={sortBy} type="button" class="btn btn-primary">ID</button></th>
                    <th scope="col"><button id="name" onClick={sortBy} type="button" class="btn btn-primary">Name</button></th>
                    <th scope="col"><button id="occupation" onClick={sortBy} type="button" class="btn btn-primary">Position</button></th>
                    <th scope="col"><button id="email" onClick={sortBy} type="button" class="btn btn-primary">Email</button></th>
                </tr>
            </thead>
            <tbody>
                <Sort users={props.users} sort={sort}/>
            </tbody>
        </table>
    )
}

export default Table;