import React from "react";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import { TopBar } from "../EachComponent/topbar/TopBar";
import Start from "../pages/Start";
import Pitchmark from "../pages/Pitchmark";
import Variables from "../pages/Variables";

const Routing = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/pitchmark" element={<Pitchmark />} />
          <Route path="/variables" element={<Variables />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
