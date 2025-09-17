// App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans flex items-center justify-center">
      {/* Main Canvas */}
      <div className="max-w-4xl w-full px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4"></h1>
        <p className="text-gray-500 mb-8">
          Review the most influential work around any topic by area, genre & time
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-12 space-x-2 flex-wrap">
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>All Areas</option>
            <option>Computer Science</option>
            <option>Biology</option>
            <option>Physics</option>
          </select>
          <input
            type="text"
            placeholder="Write a review on..."
            className="border border-gray-300 rounded px-3 py-2 w-64"
          />
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* Frame with Table */}
        <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="border border-gray-300 p-4">Paper Digest</th>
                <th className="border border-gray-300 p-4">Read & Write</th>
                <th className="border border-gray-300 p-4">Research</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Daily Digest</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Academic Reading</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Literature Review</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Conference Digest</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Arxiv Daily</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Question Answering</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Topic Tracking</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Academic Writing</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Research Copilot</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Best Papers</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <a href="#" className="text-blue-700 hover:underline">Text Rewriter</a>
                </td>
                <td className="border border-gray-300 p-4">
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
