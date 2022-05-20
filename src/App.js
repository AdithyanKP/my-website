import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <Router>
      {/*  <Navibar /> */}
      <Routes>
        <Route exact strict path="/" element={<Home />} />
        <Route exact strict path="/skills" element={<Skill />} />
      </Routes>

      {/* <SocialLink /> */}
      <Footer />
    </Router>
  );
};

export default App;
