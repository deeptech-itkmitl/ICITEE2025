import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  { title: "Planning and Topic Selection", date: "March 1, 2025" },
  { title: "Contacting Speakers and Venue", date: "March 5, 2025" },
  { title: "Promotion and Registration", date: "March 10, 2025" },
  { title: "Conference Execution", date: "March 20, 2025" },
  { title: "Evaluation and Summary", date: "March 25, 2025" }
].sort((a, b) => new Date(b.date) - new Date(a.date)); // เรียงจากใหม่ -> เก่า

export default function ProgressTimeline() {
  const [] = useState(2);

  return (   
    <div className="container mx-auto p-4"> 
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>

      <div className="content-layout flex flex-col md:flex-row gap-6">

        {/* ส่วนซ้าย */}
        <div className="about-section text-center md:text-left flex-1">
          <h1 className="topic-title">Announcement</h1>
          <h6 className="text-gray-400"></h6>
        </div>

        {/* ส่วนตารางขวา */}
        <div className="about-content flex-2">
          <div className="important-dates-container">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Proceedings</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((step, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-2">
                      <Link to={`/details/${index}`} className="text-blue-500 underline">
                        {step.title} <span className="ml-1">🔗</span>
                      </Link>
                    </td>
                    <td className="border p-2">{step.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>
    </div>
  );
}
