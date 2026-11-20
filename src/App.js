import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/footer";
import { JournalArticle, JournalIndex } from "./components/Journal/Journal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact strict path="/" element={<Home />} />
        <Route exact strict path="/skills" element={<Skill />} />
        <Route path="/journal" element={<JournalIndex />} />
        <Route path="/journal/:slug" element={<JournalArticle />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
