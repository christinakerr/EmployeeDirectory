import React, {useState} from "react";
import employees from "../employees.json"

function SearchBar(props) {
    const [employeeState] = useState("Select Employee")

    const {employee} = props;
    let employeeOptions = ["<option key=\"0\">Select Employee</option>"];
    for (let i = 0; i < employees.length; i++) {
        employeeOptions.push(`<option key="${i+1}">${employees[i].name}</option>`)
    }

    const filterEmployees = (event) => {
        employee(event.target.value)
    }
    return (
        <form>
            <select value={employeeState} className="mdb-select md-form colorful-select dropdown-primary" searchable="Search here.." dangerouslySetInnerHTML={{ __html: employeeOptions }} onChange={filterEmployees}>
            </select>
        </form>
    )
};

export default SearchBar;