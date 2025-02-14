import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Team1 } from "./components/Team1";
import { Team2 } from "./components/Team2";
import { Contact } from "./components/contact";
import { TopicsOfInterest } from "./components/TopicsOfInterest";
import { OrganizeCommittee } from "./components/OrganizeCommittee";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Header data={landingPageData.Header} /> {/* ✅ Header คงที่ */}
      <Navigation />
      <Routes>
        <Route path="/" element={<About data={landingPageData.About} />} />
        <Route path="/team1" element={<Team1 data={landingPageData.Team} />} />
        <Route path="/team2" element={<Team2 data={landingPageData.Team2} />} />
        <Route path="/topics-of-interest" element={<TopicsOfInterest />} />
        <Route path="/organizing-committee" element={<OrganizeCommittee />} />
      </Routes>  
      <div>
        <Team2 data={landingPageData.Team} />   
        <Team1 data={landingPageData.Team2} />   
      </div>   
      <Contact data={landingPageData.Contact} /> {/* ✅ Contact คงที่ */}
    </Router>
  );
};

export default App;
