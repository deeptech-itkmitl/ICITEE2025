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
                <p><div class="typotitle">20 - 21 October 2025 | Bangkok, Thailand</div></p>
                <div className="conference-timer">The Conference starts in</div>
                <div>
                  <CountDownTimer />                  
                </div>
                <div><p></p></div>
                <div>
                <a href={`${process.env.PUBLIC_URL}/pdf/A4-21x29.7_ICITEE2025_CFP_03-4.pdf`} 
                  className="btn btn-custom btn-lg page-scroll" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  CALL FOR PAPERS
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </header>
  );
};
