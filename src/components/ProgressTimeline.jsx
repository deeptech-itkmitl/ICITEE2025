import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  { title: "Planning and Topic Selection", date: "March 1, 2025" },
  { title: "Contacting Speakers and Venue", date: "March 5, 2025" },
  { title: "Promotion and Registration", date: "March 10, 2025" },
  { title: "Conference Execution", date: "March 20, 2025" },
  { title: "Evaluation and Summary", date: "March 25, 2025" }
].sort((a, b) => new Date(b.date) - new Date(a.date)); // เรียงจากใหม่ -> เก่า

console.log(steps); // Debug ดูว่าข้อมูลเรียงถูกต้องไหม


export default function ProgressTimeline() {
  const [currentStep, setCurrentStep] = useState(2);

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
            <table>
              <thead>
                <tr>
                  <th>Topics</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((step, index) => (
                  <tr key={index}>
                    <td>{step.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ปุ่มลิงก์ไปหน้าประกาศ */}
          <div className="text-right mt-4">
            <Link to="/announcement" className="text-blue-500 hover:underline text-sm md:text-base">
              &lt;&lt; Detail &gt;&gt;
            </Link>
          </div>
        </div>

      </div>
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>
    </div>
  );
}
