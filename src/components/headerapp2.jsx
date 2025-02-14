import React from "react";
import CountDownTimer from "../components/CountDownTimer";
//import SlideshowHeader from "../components/SlideshowHeader";

export const Header2 = (props) => {
  return (
    <header id="header2">
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
                </h1>
                <p><div className="typotitle">20 - 22 October 2025 | Bangkok, Thailand</div></p>
                <div className="conference-timer"></div>
                <div>
                 
                </div>
                <div><p></p></div>
                <div>
                  <a 
                    href="https://icitee2025.it.kmitl.ac.th/pdf/A4-21x29.7_ICITEE2025_CFP_03-3.pdf" 
                    className="btn btn-custom btn-lg page-scroll">
                    CALL FOR PAPERS
                  </a>
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

        .slideshow-container2 {
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
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          height: 100%;
        }

        .overlay > * {
          pointer-events: all;
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

        .typotitle {
          font-size: 1.2rem;
          font-weight: normal;
        }

        .conference-timer {
          margin-top: 20px;
          font-size: 1.5rem;
        }
      `}</style>
    </header>
  );
};
