import { useState } from "react";

const steps = [
  { title: "Bali, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/10808184/proceeding", date: "ICITEE2024" },
  { title: "Chaingmai, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/10317623/proceeding", date: "ICITEE2023" },
  { title: "Online Virtual Conference", link: "https://ieeexplore.ieee.org/xpl/conhome/9954039/proceeding", date: "ICITEE2022" },
  { title: "Online Virtual Conference", link: "https://ieeexplore.ieee.org/xpl/conhome/9611817/proceeding", date: "ICITEE2021" },
  { title: "Yogyakarta, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/9271662/proceeding", date: "ICITEE2020" },
  { title: "Pattaya, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/8922635/proceeding", date: "ICITEE2019" },
  { title: "Bali, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/8510538/proceeding", date: "ICITEE2018" },
  { title: "Phuket, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/8241061/proceeding", date: "ICITEE2017" },
  { title: "Yogyakarta, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/7839735/proceeding", date: "ICITEE2016" },
  { title: "Chiang Mai, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/7397554/proceeding", date: "ICITEE2015" }
].sort((a, b) => parseInt(b.date.replace("ICITEE", "")) - parseInt(a.date.replace("ICITEE", ""))); // เรียงจากใหม่ -> เก่า

export default function PastConferences() {
  return (   
    <div className="container mx-auto p-4"> 
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>

      <div className="content-layout flex flex-col md:flex-row gap-6">
        <div className="about-content flex-2">
          <div className="important-dates-container">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Proceedings</th>
                  <th className="border border-gray-300 p-2">Location</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((step, index) => (
                  <tr key={index} className="hover:bg-gray-200 transition duration-200">
                    <td className="border border-gray-300 p-2">
                      <a 
                        href={step.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        {step.date}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">{step.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
