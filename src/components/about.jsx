import React from "react";

export const About = (props) => {
  return (
    <div id="features" className="text-center">
      <div>
        <div className="container">  
          <div className="content-layout">

            {/* ส่วนหัวข้อซ้าย */}
            <div className="about-section">
              <div className="about-title-container">
                <h3 className="about-title">About</h3>
                <h3 className="about-title2">Conference</h3>
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
                <h3 className="about-title">Important</h3>
                <h3 className="about-title2">Dates</h3>
              </div>
            </div>

            <div className="important-dates-container">          
              <table className="important-dates">
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>EVENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20 - 22 October 2025</td>
                    <td>Submission Deadline</td>
                  </tr>
                  <tr>
                    <td>20 - 22 October 2025</td>
                    <td>Notification of Acceptance</td>
                  </tr>
                  <tr>
                    <td>20 - 22 October 2025</td>
                    <td>Camera Ready Deadline</td>
                  </tr>
                  <tr>
                    <td>20 - 22 October 2025</td>
                    <td>Early Registration Deadline</td>
                  </tr>
                  <tr>
                    <td>1 October 2025</td>
                    <td>Regular Registration Deadline</td>
                  </tr>
                  <tr>
                    <td>20 - 22 October 2025</td>
                    <td>Conference Date</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
         color: #FFFFFF;
          max-width: 0 auto;
          margin: 0 auto;
          padding: 20px;
        }

        .content-layout {
         color: #FFFFFF;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 20px;
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
        }

        .important-dates {
         color: #FFFFFF;
          width: 100%;
          border-collapse: collapse;
          overflow-x: auto;
          display: block;
        }

        .important-dates th, .important-dates td {
         color: #FFFFFF;
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }

        @media (max-width: 768px) {
          .content-layout {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};
