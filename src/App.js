import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage";
import SingleMovie from "./components/SingleMovie";
// Import other components you want to route to

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/movies/:id" element={<SingleMovie />} />

      </Routes>
    </Router>
  );
}

export default App;
