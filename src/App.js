import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Concept from "./Concept";
import Navbar from "./Navbar";
import Welcome from "./Welcome"


export default function App() {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-item">
          <h1>React Concepts </h1>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/Concept" element={<Concept />} />
              <Route path="/Welcome" element={<Welcome />} />
            </Routes>
          </Router>
        </div>
      </div>

    </React.Fragment>
  )
}
