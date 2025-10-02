import React from "react";
import "../css/QualityControl.css";

const Registration = () => {
  return (
    <div className="quality-container">
      <h1 className="title"><center>Important Dates</center></h1>
      
      <div className="card">
        <div className="">
         <h1></h1>
         <p><b>ICITEE 2025 offers two rounds of early-bird registration to align with our Rolling Review Process</b>, ensuring authors who submit early receive timely decisions. Papers that meet the quality criteria can be accepted as-is, allowing authors to secure the lowest registration fee in the first early-bird round. <b>This system encourages high-quality submissions</b> while giving authors ample time for revisions if needed.</p>
        <h1></h1>
        </div>
      </div>

      <div className="card">
        <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>May-28, 2025</td><td>Extra Early Bird Registration Deadline.</td></tr>
            <tr><td>Jul-23, 2025</td><td>Early Bird Registration Deadline.</td></tr>
            <tr><td>Aug-20, 2025</td><td>Final Paper Submission Deadline (Rolling Review Ends).</td></tr>

            {/* Final Notification of Acceptance */}
            <tr>
              {/* <td><span>Sep-10, 2025</span></td>              */}
                <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-5, 2025</span><br></br><span>Sep-10, 2025</span></td>   
              <td>Final Notification of Acceptance (Latest Possible Decision Date).</td>
            </tr>
            {/* <tr><td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td><td>Final Notification of Acceptance (Extended).</td></tr> */}
            
            {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-5, 2025</span><br></br><span>Sep-10, 2025</span></td>   
            <td>Final Notification of Acceptance (Extended).</td> */}
            {/* Camera-Ready Submission Deadline */}
            
            <tr>
              {/* <td><span>Sep-10, 2025</span></td> */}
              <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025 / Sep-15, 2025</span><br></br><span>Sep-17, 2025</span></td> 
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Camera-Ready Submission Deadline.</span></td>
            </tr>

            <tr>
              {/* <td>Sep-15, 2025</td>                    <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span><br></br><span>Sep-15, 2025</span></td>        
              <td>Camera-Ready Submission Deadline (Extended).
              </td>*/}
            </tr>

            {/* Final Registration Deadline */}
            <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025 / Sep-15, 2025</span><br></br><span>Sep-19, 2025</span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Final Registration Deadline.</span></td>
            </tr>
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            <tr><td>Oct-20,21, 2025</td><td>Conference Date.</td></tr>

          </tbody>
        </table>
        
        </div>
      </div>
      
      <h1 className="title"><center>Registration Fees</center></h1>
      <div className="card">
        <div className="table-responsive">

          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Extra Early Bird (by 28 May 2025)*</th>
                <th>Early Bird (by 23 July 2025)*</th>
                <th>Regular</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Non-IEEE Member</td><td>12,000 THB</td><td>13,500 THB</td><td>15,000 THB</td></tr>
              <tr><td>IEEE Member</td><td>11,500 THB</td><td>13,000 THB</td><td>14,500 THB</td></tr>
              <tr><td>Non-IEEE Student Member</td><td>10,000 THB</td><td>11,500 THB</td><td>12,500 THB</td></tr>
              <tr><td>IEEE Student Member</td><td>9,500 THB</td><td>11,000 THB</td><td>12,000 THB</td></tr>
              <tr><td>Accompanying Person</td><td colSpan="3">9,000 THB/Person</td></tr>
            </tbody>
          </table>
          
        </div>
        <h1></h1>
        <p>* All the registration fees should be paid by <b>THBs.(Thai Baht)</b> Authors are required to pay publication fees, which may vary depending on the exchange rate. Additionally, financial transaction charges may apply, affecting the total payment amount. Authors are advised to check with their financial institutions for applicable exchange rates and transaction fees before making payments.</p>
        <p>Each accepted paper should have at least one author making registration to publish the paper in the proceedings. <b>(ONE author registration will cover only ONE paper)</b> After July 23, please use the Regular registration rate. Other co-authors of the accepted papers can participate in the conference by making the registration as other participants. <b>Registration fees are non-refundable and non-transferable.</b></p>
      </div>
      
      <div className="card">      
      <h4>
        <a href={`${process.env.PUBLIC_URL}/pdf/Registration Instructions for ICITEE 2025.pdf`} 
          className="btn btn-custom btn-lg page-scroll" 
          target="_blank" 
          rel="noopener noreferrer">
          ** Registration Instructions for ICITEE 2025 **
        </a> 
      </h4>
      </div>

      <div className="card">      
      <h4>
        <a href='https://events.it.kmitl.ac.th/' 
          className="btn btn-custom btn-lg page-scroll" 
          target="_blank" 
          rel="noopener noreferrer">
          ** Online Registration **
        </a> 
      </h4>
      </div>

      <div className="card">
        <h4>The registration fee for ICITEE 2025 includes:</h4>
        <ul>
          <li>Conference kit</li>
          <li>Two lunches and four coffee breaks (over two days)</li>
          <li>Banquet dinner on Day 1</li>
          <li>Cruise dinner on Day 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Registration;

import React from "react";

export const About = (props) => {
  return (
    <div className="container"> 
    <h1 className="topic-title"></h1>
      <div>
        <div className="container">  
          <div className="content-layout">
            {/* ส่วนหัวข้อซ้าย */}
            <div className="about-section">
              <div className="about-title-container">
                <h1 className="about-text topic-title">About Conference</h1>
                <h6 className="about-text topic-title"></h6>
              </div>
            </div>

            {/* ส่วนข้อความขวา */}
            <div className="about-content">
              <p className="about-text text-justify">
                The annual ICITEE conference is an international forum for the presentation
                of new research results, innovative ideas, and experiences in the broad field
                of advanced and synergistic technologies.
              </p>
              <p className="about-text text-justify">
                The 17th International Conference on Information Technology and Electrical
                Engineering (ICITEE 2025) is organized by IEEE CIS Thailand Chapter and
                co-organized by King Mongkut's Institute of Technology Ladkrabang (KMITL),
                Bangkok, Thailand, and Universitas Gadjah Mada (UGM), Yogyakarta, Indonesia.
              </p>
            </div>
          </div>

          {/* ส่วนตารางวันที่สำคัญ */}
          <div className="content-layout flex flex-col md:flex-row gap-6">
           {/* ส่วนตารางวันที่สำคัญ */}
            
            {/* ส่วนซ้าย */}
            <div className="about-section text-center md:text-left flex-1">
              <h1 className="topic-title">Important Dates</h1>
              <h6 className="text-gray-400"></h6>
            </div>

              <div class="about-content flex-2">

                        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>May-28, 2025</td><td>Extra Early Bird Registration Deadline.</td></tr>
            <tr><td>Jul-23, 2025</td><td>Early Bird Registration Deadline.</td></tr>
            <tr><td>Aug-20, 2025</td><td>Final Paper Submission Deadline (Rolling Review Ends).</td></tr>

            {/* Final Notification of Acceptance */}
            <tr>
              {/* <td><span>Sep-10, 2025</span></td>              */}
                <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-5, 2025</span><br></br><span>Sep-10, 2025</span></td>   
              <td>Final Notification of Acceptance (Latest Possible Decision Date).</td>
            </tr>
            {/* <tr><td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td><td>Final Notification of Acceptance (Extended).</td></tr> */}
            
            {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-5, 2025</span><br></br><span>Sep-10, 2025</span></td>   
            <td>Final Notification of Acceptance (Extended).</td> */}
            {/* Camera-Ready Submission Deadline */}
            
            <tr>
              {/* <td><span>Sep-10, 2025</span></td> */}
              <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025 / Sep-15, 2025</span><br></br><span>Sep-17, 2025</span></td> 
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Camera-Ready Submission Deadline.</span></td>
            </tr>

            <tr>
              {/* <td>Sep-15, 2025</td>                    <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span><br></br><span>Sep-15, 2025</span></td>        
              <td>Camera-Ready Submission Deadline (Extended).
              </td>*/}
            </tr>

            {/* Final Registration Deadline */}
            <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025 / Sep-15, 2025</span><br></br><span>Sep-19, 2025</span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Final Registration Deadline.</span></td>
            </tr>
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            <tr><td>Oct-20,21, 2025</td><td>Conference Date.</td></tr>

          </tbody>
        </table>




              </div>
           


          </div>
          <p2>
          <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "100%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
                </h4>
                  
          </p2>

        

        </div>
        
      </div>

      <style jsx>{`
        .container {
         color: #FFFFFF;
          max-width: 0 auto;
          margin: 0 auto;
          padding: 0px;
        }

        .content-layout {
         color: #FFFFFF;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 20px;
          padding: 0px;
        }

        .about-section, .important-section {
          color: #FFFFFF;
          flex: 1;
          min-width: 300px;
          text-align: center;
        }

        .about-content, .important-dates-container {
          color: #FFFFFF; 
          flex: 2;
          min-width: 300px;
          padding: 0px;
        }

        /* ตารางปรับปรุงใหม่ */
            .important-dates {
                width: 100%;
                border-collapse: collapse;
                overflow-x: auto;
                display: block;
            }

            .important-dates th, .important-dates td {
                color: #FFFFFF;
                border: 1px solid rgba(255, 255, 255, 0.3); /* ลดความเข้มของเส้นขอบ */
                padding: 8px;
                text-align: left;
            }

            .important-dates th {
                border: 1px solid rgba(255, 255, 255, 0.3); /* ลดความเข้มของเส้นขอบ */
                font-weight: bold;
            }

            .important-dates tr:hover {
                background-color: rgba(245, 244, 244, 0.19); /* เปลี่ยนสีพื้นหลังเมื่อวางเมาส์ */
                transition: background-color 0.3s ease-in-out; /* เพิ่มเอฟเฟกต์ลื่นไหล */
            }


        @media (max-width: 768px) {
          .content-layout {           
            text-align: center;
          }
        }
      `}</style>
    </div>    
  );
  
};
