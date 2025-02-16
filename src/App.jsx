import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";
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
      <AppContent landingPageData={landingPageData} />
    </Router>
  );
};

// ✅ แยก `AppContent` เพื่อให้ `useLocation()` ใช้ได้
const AppContent = ({ landingPageData }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* ✅ แสดง Header เฉพาะหน้า "/" */}
      {isHomePage && <Header data={landingPageData.Header} />}
      <Navigation />

      <Routes>
        <Route path="/" element={<About data={landingPageData.About} />} />
        <Route path="/topics-of-interest" element={<TopicsOfInterest />} />

        {/* ✅ ใช้ Layout2 เมื่อเข้าหน้า Organizing Committee */}
        <Route path="/organizing-committee" element={<Layout2 data={landingPageData} />}>
          <Route index element={<OrganizeCommittee data={landingPageData.OrganizeCommittee} />} />
        </Route>

        {/* ✅ ใช้ Layout3 เมื่อเข้าหน้า Topics of Interest */}
        <Route path="/topics-of-interest" element={<Layout3 data={landingPageData} />}>
          <Route index element={<TopicsOfInterest data={landingPageData.OrganizeCommittee} />} />
        </Route>
      </Routes>

      {/* ✅ แสดง Team2 Team1 และ Contact เฉพาะหน้า "/" */}
      {isHomePage && (
        <>
          <Team2 data={landingPageData.Team} />
          <Team1 data={landingPageData.Team2} />
          <Contact data={landingPageData.Contact} />
        </>
      )}      
    </>
  );
};

export default App;
