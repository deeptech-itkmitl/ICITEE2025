import React from "react";
import CountDownTimer from "../components/CountDownTimer";
//import SlideshowHeader from "../components/SlideshowHeader";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro slideshow2">
        
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
                <p><div class="typotitle">20 - 22 October 2025 | Bangkok, Thailand</div></p>
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

        .intro1 {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slideshow-container3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .overlay3 {
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

        .conference-title3 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .conference-logo22 {
          max-width: 80%;
          margin: 0 auto;
          display: block;
        }

      `}</style>
    </header>
  );
};
