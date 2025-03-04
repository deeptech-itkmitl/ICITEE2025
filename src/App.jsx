import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout2 from "./Layout2";
import Layout4 from "./Layout4";
import Layout5 from "./Layout5";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Team1 } from "./components/Team1";
import { Team2 } from "./components/Team2";
import { Contact } from "./components/contact";
import { TopicsOfInterest } from "./components/TopicsOfInterest";
import { OrganizeCommittee } from "./components/OrganizeCommittee";
import QualityControlPage from "./components/QualityControl";
import Announcement from "./components/ProgressTimeline";
import AnnouncementDetail from "./components/ProgressTimelineDetail";
import JsonData from "./data/data.json";
// import VisitorCounter from "./components/visitor-update";  // นำเข้าฟังก์ชัน VisitorCounter
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

const AppContent = ({ landingPageData }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* แสดง Header เฉพาะหน้า "/" */}
      {isHomePage && <Header data={landingPageData.Header} />}
      <Navigation />

      <Routes>
        <Route path="/" element={<About data={landingPageData.About} />} />
        <Route path="/topics-of-interest" element={<TopicsOfInterest />} />
        <Route path="/organizing-committee" element={<Layout2 data={landingPageData} />}>
          <Route index element={<OrganizeCommittee data={landingPageData.OrganizeCommittee} />} />
        </Route>
        <Route path="/quality-control-management" element={<Layout4 data={landingPageData} />}>
          <Route index element={<QualityControlPage data={landingPageData.Quality} />} />
        </Route>
        <Route path="/announcement" element={<Layout5 data={landingPageData} />}>
          <Route index element={<AnnouncementDetail data={landingPageData.Quality} />} />
        </Route>
      </Routes>

      {/* แสดงข้อมูล VisitorCounter และ Team2 Team1 Contact เฉพาะหน้า "/" */}
      {isHomePage && (
        <>          
          <Team2 data={landingPageData.Team} />
          <Team1 data={landingPageData.Team2} />
          <Announcement />
          <Contact data={landingPageData.Contact} />          
        </>
      )}
    </>
  );
};

export default App;
