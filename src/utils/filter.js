import employees from "../employees.json"

function filter(searchedEmployee) {
    const filtered = employees.filter(employee => employee.name === searchedEmployee);
    return filtered;
}

export default filter;