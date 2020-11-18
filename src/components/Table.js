import React from "react";
import Row from "./Row";

function Table(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <Row users={props.users} />
            </tbody>
        </table>
    )
}

export default Table;