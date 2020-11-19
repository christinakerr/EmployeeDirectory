// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import employees from "../src/employees.json"
import SearchBar from "./components/SearchBar";
import filter from "./utils/filter"
import React from "react";

function App() {
  // const [filteredEmployees, setFilteredEmployees] = useState("")

  let employeeArray = employees;

  const searchEmployees = (employeeFilter) => {
    if (employeeFilter !== "Select Employee") { // if an employee name is selected, filter the array to only include that employee
      employeeArray = filter(employeeFilter);
      console.log(employeeArray);
    }
    // setFilteredEmployees(employeeArray)
  }

  return (
    <div className="container">
      <h1>Employee Directory</h1>
      <p>Filter by employee name using the dropdown below or sort by name, position, or email with the column heading buttons.</p>
    <SearchBar employee={searchEmployees}/>
    <Table users={employeeArray}/>
    </div>
  );
}

export default App;
