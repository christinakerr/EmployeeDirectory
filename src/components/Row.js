import React from "react";

function Row({users}) {
    return <>
        {
            users.map(({id, name, occupation, email }) => (
                <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>{occupation}</td>
                    <td>{email}</td>
                </tr>
            ))
        }
    </>
}

export default Row;