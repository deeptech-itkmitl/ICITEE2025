import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans flex items-center justify-center p-4">
      {/* Main Canvas */}
      <div className="max-w-6xl w-full px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4"></h1>
        <p className="text-gray-500 mb-8 text-sm md:text-base">
          Review the most influential work around any topic by area, genre & time
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center mb-12 gap-3">
          <select className="border border-gray-300 rounded px-3 py-2 w-full md:w-72">
            <option value="">All Areas</option>
            <optgroup label="Information Technology">
              <option>Distributed Systems</option>
              <option>AI-Driven Knowledge Discovery and Explainable AI</option>
              <option>Big Data, Data Mining, and AI-driven Analytics</option>
              <option>Visualization and Computer Graphics</option>
              <option>Multimedia Computing & Applications</option>
              <option>Human-Computer Interaction (HCI) and Brain-Computer Interfaces (BCI)</option>
              <option>Social Media and Computational Social Science</option>
              <option>Mobile Computing and Edge AI</option>
              <option>Internet of Things (IoT) and Industrial IoT (IIoT)</option>
              <option>AI in Digital Marketing and Personalized Advertising</option>
              <option>Software Engineering and AI-Assisted Development</option>
              <option>AI-Powered Decision Support Systems</option>
              <option>Network and Cyber Security (including AI-driven threats)</option>
              <option>Generative AI and Foundation Models</option>
              <option>Digital Twin Technology</option>
            </optgroup>
          </select>

          <input
            type="text"
            placeholder="Write a review on..."
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-64"
          />

          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Frame with Table */}
        <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-4 md:p-6 overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="border border-gray-300 p-2 md:p-4">Paper Digest</th>
                <th className="border border-gray-300 p-2 md:p-4">Read & Write</th>
                <th className="border border-gray-300 p-2 md:p-4">Research</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Daily Digest</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Academic Reading</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Literature Review</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Conference Digest</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Arxiv Daily</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Question Answering</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Topic Tracking</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Academic Writing</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Research Copilot</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Best Papers</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Text Rewriter</a>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">
                  <a href="#" className="text-blue-700 hover:underline">Deep Research</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
