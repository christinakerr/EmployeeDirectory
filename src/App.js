// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import employees from "../src/employees.json"

function App() {
  return (
    <Table users={employees}/>
  );
}

export default App;
