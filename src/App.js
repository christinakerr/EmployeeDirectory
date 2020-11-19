// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import employeeDirectory from "../src/employees.json"
import SearchBar from "./components/SearchBar";
import React, {useEffect, useState} from "react";

function App() {
  const [employees, setEmployees] = useState(employeeDirectory)
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      setEmployees(employeeDirectory)
      return;
    }

    const filtered = employees.filter(employee => employee.name.includes(search));

    setEmployees(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


  const handleInputChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="container">
      <h1>Employee Directory</h1>
      <p>Filter by employee name using the dropdown below or sort by name, position, or email with the column heading buttons.</p>
    <SearchBar results={search} handleInputChange={handleInputChange}/>
    <Table users={employees}/>
    </div>
  );
}

export default App;
