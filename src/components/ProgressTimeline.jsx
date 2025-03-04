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
    <div className="container">
      <h1></h1>
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Task</th>
              <th className="border p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((step, index) => (
              <tr key={index} className="border">
                <td className="border p-2 text-center">
                  {index < currentStep ? (
                    <CheckCircle className="text-green-500 inline" />
                  ) : index === currentStep ? (
                    <Clock className="text-yellow-500 inline" />
                  ) : (
                    <Circle className="text-gray-400 inline" />
                  )}
                </td>
                <td className="border p-2">{step.title}</td>
                <td className="border p-2">{step.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1></h1>
      <div className="text-center mt-4">
        <Link to="/announcement" className="text-blue-500 hover:underline">&gt;&gt; Details &gt;&gt;</Link>
      </div>
    </div>
  );
}
