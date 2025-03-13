import { useLocation } from "react-router-dom";
import SEO from "./components/SEO";

const AppContent = ({ landingPageData }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = "https://icitee.it.kmitl.ac.th";

  // ตั้งค่า Title และ Description ตามหน้า
  const seoData = {
    "/": { title: "ICITEE 2025 - International Conference", description: "The 17th ICITEE Conference at KMITL & UGM" },
    "/organizing-committee": { title: "Organizing Committee - ICITEE 2025", description: "Meet the ICITEE 2025 organizing team." },
    "/quality-control-management": { title: "Quality Control - ICITEE 2025", description: "Explore quality control strategies for research and conferences." },
    "/topics-of-interest": { title: "Topics of Interest - ICITEE 2025", description: "Research topics covered in ICITEE 2025." },
    "/announcement": { title: "Announcements - ICITEE 2025", description: "Latest updates and important announcements for ICITEE 2025." },
    "/gallery": { title: "Gallery - ICITEE 2025", description: "Photo gallery from past ICITEE conferences." },
    "/pass-conference": { title: "Past Conferences - ICITEE", description: "Learn more about past editions of ICITEE." }
  };

  const { title, description } = seoData[currentPath] || {
    title: "ICITEE 2025",
    description: "International Conference on Information Technology and Electrical Engineering"
  };

  return (
    <>
      <SEO title={title} description={description} url={`${baseUrl}${currentPath}`} />
      {/* เนื้อหาเว็บเดิม */}
    </>
  );
};

export default AppContent;
