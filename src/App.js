import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact strict path="/" element={<Home />} />
        <Route exact strict path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
