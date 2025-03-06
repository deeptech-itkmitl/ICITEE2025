import React from "react";
import "../css/Announcement.css";

const Announcements = () => {
  const announcements = [
    {
      date: "March 03, 2025",
      title: "Quality Control and Management update",
      description: "ICITEE2025 adopts a Rolling Review Process with an Open Review Policy.",
    },
    {
      date: "Feb 15, 2025",
      title: "Topics of Interest and Committee update",
      description: "Topics of Interest and Organizing Committee has been announced.",
    },
    {
      date: "Feb 10, 2025",
      title: "Website Launched",
      description: "ICITEE2025 Website has launched.",
    },
  ];

  return (
    <div className="bg-[#0D1B2A] text-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Announcements</h2>
      <div className="divide-y divide-gray-600">
        {announcements.map((announcement, index) => (
          <div key={index} className="py-4">
            <p className="text-sm text-gray-400">{announcement.date}</p>
            <h3 className="text-lg font-semibold mt-1">{announcement.title}</h3>
            <p className="text-gray-300">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
