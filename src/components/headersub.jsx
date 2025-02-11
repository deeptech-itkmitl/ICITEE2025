import React from "react";
import CountDownTimer from "./CountDownTimer";
//import SlideshowHeader from "../components/SlideshowHeader";

export const HeaderSub = (props) => {
  return (
    <header id="headersub">
      <div className="intro slideshow1">
        
        {/* Slideshow as Background */}
        {/* <div className="slideshow-container"> */}
          {/*<SlideshowHeader />*/}
        {/* </div> */}

        {/* Overlay Content */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0.5 intro-text">
                <h1 className="conference-title">
                  <div className="conference-title"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/ICITEE2025-C-logo.png`}
                    alt="ICITEE 2025 Logo 2"
                    className="conference-logo2"
                  />
                </h1>
                <p></p>
                <div className="conference-timer">The Conference starts in</div>
                <div>
                  <CountDownTimer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

        .intro {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slideshow-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .overlay {
          position: relative;
          z-index: 2;
          pointer-events: none; /* Allow clicks to pass through */
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          height: 100%;
        }

        .overlay > * {
          pointer-events: all; /* Allow interactions only for overlay content */
        }

        .conference-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .conference-logo2 {
          max-width: 80%;
          margin: 0 auto;
          display: block;
        }

        .conference-timer {
          font-family: 'Poppins';
          margin-top: 1rem; /* ห่างจากบรรทัดบน 1 บรรทัด */
          margin-bottom: 1rem; /* ห่างจากบรรทัดล่าง 1 บรรทัด */
          font-size: 3rem; /* ขนาดตัวอักษรที่เหมาะสม */
          font-weight: bold; /* เน้นตัวหนังสือให้ชัด */
          text-align: center; /* จัดข้อความให้อยู่ตรงกลาง */
          color: #eeecec; /* ปรับสีให้ชัดขึ้น */
        }

      `}</style>
    </header>
  );
};
