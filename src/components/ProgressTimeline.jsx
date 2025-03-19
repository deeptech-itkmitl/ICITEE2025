import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  { title: "Quality Control and management update ICITEE2025 adopts a Rolling Review Process with and Open Review Policy.", date: "Mar-03, 2025" },
  { title: "Topics of Interest and Committee update Topics of Interest and Organizing Committee has been announced.", date: "Feb-15, 2025" },
  { title: "Website launched ICITEE2025 Website has launched.", date: "Feb-10, 2025" }
].sort((a, b) => new Date(b.date) - new Date(a.date)); // เรียงจากใหม่ -> เก่า

export default function ProgressTimeline() {
  const [] = useState(2);

  return (   
    <div className="container"> 
    <h1 className="topic-title"></h1>
    <h4 className="text-2xl font-bold mb-4 text-center"><p2></p2></h4>
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
            {/* <table> */}
              {/* <thead>
                <tr >
                  <th>Date</th>
                  <th>Details</th>
                </tr>
              </thead> */}
<div style={{ overflowX: "auto" }}>
  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "300px" }}>
    <tbody>
      {steps.map((step, index) => (
        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
          <td style={{ padding: "8px", whiteSpace: "nowrap" }}>{step.date}</td>
          <td style={{ padding: "8px" }}>{step.title}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            {/* </table> */}
          </div>
        </div>
        
      </div>    
      <h4>
      <p2>
          <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "100%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
                </h4>
                  
          </p2></h4>  
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>
    </div>
  );
}
