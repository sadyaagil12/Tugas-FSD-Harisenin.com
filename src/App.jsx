import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";

import Login from "./components/form/Login";
import Regisform from "./components/form/Regis";
import Updatepass from "./components/form/Updatepass";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define routes here */}
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regis" element={<Regisform />} />
          <Route path="/update" element={<Updatepass />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
