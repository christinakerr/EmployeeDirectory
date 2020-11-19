// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import employees from "../src/employees.json"
import SearchBar from "./components/SearchBar";
import filter from "./utils/filter"
// import React, {useState} from "react";

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
    <>
    <SearchBar employee={searchEmployees}/>
    <Table users={employeeArray}/>
    </>
  );
}

export default App;
