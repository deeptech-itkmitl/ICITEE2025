import React from "react";

const HeaderName = ({ data }) => {
  return (
<header id="headersub21">
      <div className="intro slideshow1">

        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0.5 intro-text">
                <h1 className="conference-title">
                  <div className="conference-title"></div>
                  <p><div class="typotitle2">{data}</div></p>
                </h1>
                <p><div class="typotitle2"></div></p>
                <div className="conference-timer"></div>
                <div>               
                </div>
                <div><p></p></div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default HeaderName; 


