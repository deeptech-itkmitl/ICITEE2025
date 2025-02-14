import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App2Layout from "./Layout2"; // ใช้ Layout2 ที่มี HeaderSub
import { About } from "./components/about";
import { OrganizeCommittee } from "./components/OrganizeCommittee";

const App2 = () => {
  return (
    <Router>
      <Routes>
        {/* ใช้ Layout2 ซึ่งจะมี HeaderSub */}
        <Route path="/" element={<App2Layout />}>
          <Route index element={<About />} />
          <Route path="organizing-committee" element={<OrganizeCommittee />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App2;
