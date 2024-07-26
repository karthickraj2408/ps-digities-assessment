import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDo from "./components/Todo-App/App";
import DataTable from "./components/DataTable/index";

const App = () => (

  <Router>
    <nav className="bg-red-400 border py-3 m-0">
      <ul className="flex space-x-4 justify-center">
        <li className="bg-white rounded p-3 font-sans font-bold">
          <Link to="/">ToDo</Link>
        </li>
        <li className="bg-white rounded p-3 font-sans font-bold">
          <Link to="/DataTable">DataTable</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<ToDo />} />
      <Route path="/DataTable" element={<DataTable />} />
    </Routes>
  </Router>
  
);

export default App;
