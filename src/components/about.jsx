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
          <div className="content-layout">
            <div className="important-section">
              <div className="about-title-container">
                <h1 className="topic-title">Important Dates</h1>
                <h6 className="topic-title"></h6>
              </div>
            </div>

            {/* <div className="important-dates-container">          
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>                 
                  <tr>
                    <td>20 - 22 October 2025</td>
                    <td>Conference Date</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <div className="important-dates-container">          
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Event</th>
      </tr>
    </thead>
    <tbody>                 
      <tr>
        <td>28 May 2025</td>
        <td>Extra Early Bird Registration</td>
      </tr>
      <tr>
        <td>23 July 2025</td>
        <td>Early Bird Registration</td>
      </tr>
      <tr>
        <td>20 August 2025</td>
        <td>Final Paper Submission Deadline (Rolling Review Ends)</td>
      </tr>
      <tr>
        <td>5 September 2025</td>
        <td>Final Notification of Acceptance (Latest Possible Decision Date)</td>
      </tr>
      <tr>
        <td>10 September 2025</td>
        <td>Camera-Ready Submission Deadline</td>
      </tr>
      <tr>
        <td>10 September 2025</td>
        <td>Final Registration Deadline</td>
      </tr>
      <tr>
        <td>20 - 22 October 2025</td>
        <td>Conference Date</td>
      </tr>
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
