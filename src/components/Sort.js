import React from "react";
import Row from "./Row";

function Sort(props) {
    const {users, sort } = props;
    props.users.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1)
    return(
        <Row users={users} />
    )
}

export default Sort;