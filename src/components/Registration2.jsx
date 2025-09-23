import React from "react";
import "../css/QualityControl.css";

const Registration2 = () => {
  return (
    <div className="quality-container">
      <div className="card">      
      <h4>
        <a href={`${process.env.PUBLIC_URL}/pdf/ICITEE 2025 - Presentation template.pdf`} 
          className="btn btn-custom btn-lg page-scroll" 
          target="_blank" 
          rel="noopener noreferrer">
          ** ICITEE 2025 - Presentation template **
        </a> 
      </h4>
      </div>

      <h1 className="title"><center>ICITEE Conference: Day 1 (20 October 2025)</center></h1>
      
      <div className="card">
        <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th></th>
              <th>Vanue</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>08:30-09:00</td><td>Registration</td><td></td><td></td><td></td></tr>
            <tr><td>09:00-09:10</td><td>Opening Ceremony</td><td>Conference Hall</td><td></td><td></td></tr>
            <tr><td>09:10-10:00</td><td>Keynote #1: Prof. Dr. Jaime Lloret</td><td>Conference Hall</td><td></td><td></td></tr>

            {/* Final Notification of Acceptance */}
            <tr>
              {/* <td><span>Sep-10, 2025</span></td>              */}
                <td><span >10:00-10:50</span><br></br><span></span></td>   
              <td>Keynote #2: Dr. Adhistya Erna Permanasari</td>
              <td>Conference Hall</td><td></td><td></td>
            </tr>
            {/* <tr><td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td><td>Final Notification of Acceptance (Extended).</td></tr> */}
            
            {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-5, 2025</span><br></br><span>Sep-10, 2025</span></td>   
            <td>Final Notification of Acceptance (Extended).</td> */}
            {/* Camera-Ready Submission Deadline */}
            
            <tr>
              {/* <td><span>Sep-10, 2025</span></td> */}
              <td><span >10:50-11:10</span><br></br><span></span></td> 
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Coffee Break</span></td>
              <td></td><td></td><td></td>
            </tr>

            <tr>
              {/* <td>Sep-15, 2025</td>                    <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span><br></br><span>Sep-15, 2025</span></td>        
              <td>Camera-Ready Submission Deadline (Extended).
              </td>*/}
            </tr>

            {/* Final Registration Deadline */}
            <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span>11:10-12:00</span><br></br><span></span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Keynote #3: Prof. Dr. Masanori Sugimoto </span></td>
            <td>Conference Hall</td><td></td><td></td>
            
            </tr>
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            <tr><td>12:00-13:00</td><td>Lunch</td><td>Hotel</td><td></td><td></td></tr>
            {/* Final Registration Deadline */}
            {/* <td>Registration</td><td>Registration</td><td>Registration</td> */}
            <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span>13:00-14:40</span><br></br><span></span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Parallel Session</span></td>
              <td>Room 1 (5 papers)</td><td>Room 2 (5 papers)</td><td>Room 3 (5 papers)</td>
            </tr>
            
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            <tr><td>14:40-15:00</td><td>Coffee Break</td><td></td><td></td><td></td></tr>
            {/* Final Registration Deadline */}
            <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span>15:00-16:40</span><br></br><span></span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Parallel Session</span></td>
              <td>Room 1 (5 papers)</td><td>Room 2 (5 papers)</td><td>Room 3 (5 papers)</td>
            </tr>        
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            {/* <tr><td>16:40-18:00</td>
            <td></td><td>Registration</td><td>Registration</td><td>Registration</td>
            </tr> */}
            
            {/* <td>Registration</td><td>Registration</td><td>Registration</td> */}
             <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span>16:40-18:00</span><br></br><span></span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Free Time</span></td>
              <td></td><td></td><td></td>
            </tr>        
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            <tr><td>18:00-22:00</td><td>Banquet/Best Paper Award</td><td>Grand Ballroom</td><td></td><td></td></tr>


          </tbody>
        </table>

        <div className="card">
          <div className="">
          <h1></h1>
          <p>Note: Each paper presentation is scheduled for 15 minutes, followed by 5 minutes for Q&A.</p>
          <h1></h1>
          </div>
        </div>
        
        </div>
      </div>
      
      <h1 className="title"><center>ICITEE Conference: Day 2 (21 October 2025)</center></h1>
            <div className="card">
        <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activities</th>
              <th>Room #1</th>
              <th>Room #2</th>
              <th>Room #3</th>
              <th>Room #4</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>08:30-09:00</td><td>Registration</td><td></td><td></td><td></td><td></td></tr>
            <tr><td>09:00-10:40</td><td>Parallel Session</td><td>5 papers</td><td>5 papers</td><td>5 papers</td><td>5 papers</td></tr>
            <tr><td>10:40-11:00</td><td>Coffee Break #1</td><td></td><td></td><td></td><td></td></tr>

            {/* Final Notification of Acceptance */}
            <tr>
              {/* <td><span>Sep-10, 2025</span></td>              */}
                <td><span >11:00-12:20</span><br></br><span></span></td>                 
              <td>Parallel Session</td><td>4 papers</td><td>4 papers</td><td>4 papers</td><td>4 papers</td>
            </tr>
            {/* <tr><td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td><td>Final Notification of Acceptance (Extended).</td></tr> */}
            
            {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-5, 2025</span><br></br><span>Sep-10, 2025</span></td>   
            <td>Final Notification of Acceptance (Extended).</td> */}
            {/* Camera-Ready Submission Deadline */}
            
            <tr>
              {/* <td><span>Sep-10, 2025</span></td> */}
              <td><span >12:20-13:20</span><br></br><span></span></td> 
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Lunch</span></td>
              <td>Hotel</td><td></td><td></td><td></td>
            </tr>

            <tr>
              {/* <td>Sep-15, 2025</td>                    <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span><br></br><span>Sep-15, 2025</span></td>        
              <td>Camera-Ready Submission Deadline (Extended).
              </td>*/}
            </tr>

            {/* Final Registration Deadline */}
            <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span>13:20-15:00</span><br></br><span></span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Parallel Session</span></td>
            <td>5 papers</td><td>5 papers</td><td>5 papers</td><td>5 papers</td>
            
            </tr>
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            <tr><td>15:00-15:20</td><td>Coffee Break #2</td><td></td><td></td><td></td><td></td></tr>
            {/* Final Registration Deadline */}
            {/* <td>Registration</td><td>Registration</td><td>Registration</td> */}
            <tr>
              {/* <td><span >Sep-15, 2025</span></td> */}
               <td><span>15:20-16:40</span><br></br><span></span></td>        
              {/* <td><span style={{ color: "red", textDecoration: "line-through" }}>Sep-10, 2025</span></td> */}
              <td><span>Parallel Session</span></td>
              <td>4 papers</td><td>4 papers</td><td>4 papers</td><td>4 papers</td>
            </tr>
          
    
            {/* <tr><td>Sep-15, 2025</td><td>Final Registration Deadline (Extended).</td></tr> */}
            <tr><td>15:00-15:20</td><td>Dinner Cruise</td><td></td><td></td><td></td><td></td></tr>
            {/* Final Registration Deadline */}
            {/* <td>Registration</td><td>Registration</td><td>Registration</td> */}
            
            
          </tbody>
        </table>

        {/* <div className="card">
          <div className="">
          <h1></h1>
          <p>Note: Each paper presentation is scheduled for 15 minutes, followed by 5 minutes for Q&A.</p>
          <h1></h1>
          </div>
        </div>
         */}

        </div>
      </div>
      {/* <div className="card">
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
        <p></p>
        <p></p>
      </div> */}
      
      {/* <div className="card">      
      <h4>
        <a href={`${process.env.PUBLIC_URL}/pdf/Registration Instructions for ICITEE 2025.pdf`} 
          className="btn btn-custom btn-lg page-scroll" 
          target="_blank" 
          rel="noopener noreferrer">
          ** Registration Instructions for ICITEE 2025 **
        </a> 
      </h4>
      </div> */}

      {/* <div className="card">      
      <h4>
        <a href='https://events.it.kmitl.ac.th/' 
          className="btn btn-custom btn-lg page-scroll" 
          target="_blank" 
          rel="noopener noreferrer">
          ** Online Registration **
        </a> 
      </h4>
      </div> */}

      {/* <div className="card">
        <h4>The registration fee for ICITEE 2025 includes:</h4>
        <ul>
          <li>Conference kit</li>
          <li>Two lunches and four coffee breaks (over two days)</li>
          <li>Banquet dinner on Day 1</li>
          <li>Cruise dinner on Day 2</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Registration2;
