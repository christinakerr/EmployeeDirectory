// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import employees from "../src/employees.json"
import SearchBar from "./components/SearchBar";

function App() {

  const searchEmployees = (employeeFilter) => {
    console.log("Employee selected: " + employeeFilter);
  }
  return (
    <>
    <SearchBar employee={searchEmployees}/>
    <Table users={employees}/>
    </>
  );
}

export default App;
