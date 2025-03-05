import { useState } from "react";
import { CheckCircle, Clock, Circle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { title: "Planning and Topic Selection", date: "March 1, 2025" },
  { title: "Contacting Speakers and Venue", date: "March 5, 2025" },
  { title: "Promotion and Registration", date: "March 10, 2025" },
  { title: "Conference Execution", date: "March 20, 2025" },
  { title: "Evaluation and Summary", date: "March 25, 2025" }
];

export default function ProgressTimeline() {
  const [currentStep, setCurrentStep] = useState(2); // Set current step

  return (   
    <div className=""> 
     <div className="container">     
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="content-layout">

      {/* ส่วนหัวข้อซ้าย */}
      <div className="about-section">
        <div className="about-title-container">
          <h1 className="about-text topic-title"></h1>
          <h6 className="about-text topic-title"></h6>
        </div>
      </div>
      
      {/* ส่วนข้อความขวา */}
      <div className="about-content">
      <div className="important-dates-container">
        <table>
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Task</th>
              {/* <th className="border p-2 text-left">Date</th> */}
            </tr>
          </thead>
          <tbody>
            {steps.map((step, index) => (
              <tr key={index} className="border">                
                <td className="border p-2">{step.title}</td>
                {/* <td className="border p-2">{step.date}</td> */}
              </tr>
            ))}
          </tbody>
          <td colSpan="100%" className="text-right mt-4">
            <Link to="/announcement" className="text-blue-500 hover:underline">
              &lt;&lt; Detail &gt;&gt;
            </Link>
          </td>
        </table>
      </div>
      </div>
      </div>
      </div>
      <h1></h1>
    </div>
  );
}
