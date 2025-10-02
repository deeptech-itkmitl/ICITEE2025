import React, { useState, useEffect } from 'react';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";
import 'font-awesome/css/font-awesome.min.css';

const HeaderSub15 = () => {
 
  const keynoteData = [
    {
      name: "Prof. Jaime Lloret",
      affiliation: "Polytechnic University of Valencia",
      summary: "Intelligent Collaborative Sensor Networks for Precision Agriculture advanced sensor networks and sustainability.",
      photo: `${process.env.PUBLIC_URL}/img/jaime-lloret.jpg`,
      link: "/keynote-speaker-JaimeLloret",
    },
    {
      name: "Adhistya Erna Permanasari",
      affiliation: "Universitas Gadjah Mada (UGM)",
      summary: "Beyond the Screen: Unlocking Immersive Tech for Effective Learning Media.",
      photo: `${process.env.PUBLIC_URL}/img/permanasari.jpg`,
      link: "/keynote-speaker-permanasari",
    },
    {
      name: "Prof. Masanori Sugimoto",
      affiliation: "Hokkaido University",
      summary: "Emerging Trends and Future Perspectives on Indoor Positioning Technologies.",
      photo: `${process.env.PUBLIC_URL}/img/masanori-sugimoto.jpg`,
      link: "/keynote-speaker-MasanoriSugimoto",
    },
  ];

  const keynoteData2 = [
    {
      name: "Prof. Dr. Emi Yuda",
      affiliation: "Mie University",
      summary: "Biomedical signal processing and bio-medical big data analysis.",
      photo: `${process.env.PUBLIC_URL}/img/emi-yuda.jpg`,
      link: "/keynote-speaker-EmiYuda",
    },
  ]; 

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // If the window width is less than or equal to 768px, it's considered mobile
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Run the resize handler initially to check the screen size on load
    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
  }, []);

  return (
    <header id="headersub15">
      <div className="intro slideshow1">
        <div className="overlay">
          <div className="container" style={ isMobile ? { paddingRight: "15px", marginBottom: "40px" } : {marginBottom: "40px"} }>
            
            {/* ส่วนหัวข้อหลัก */}
            {/* <div className="row">
              <div className="col-md-8 col-md-offset-0.5 intro-text">
                <h1 className="conference-title">
                  <div className="typotitle2">
                    Emerging Trends and Future Perspectives on Indoor Positioning Technologies
                  </div>
                </h1>
              </div>
            </div> */}

            {/* ส่วน Keynote Speakers */}
            <div className="text-center" style={{ marginTop: "40px"}}>
              <p className="text-justify-center">
                Meet our distinguished keynote speakers from leading universities and organizations.
              </p>
            </div>

            <div className={`mb-4 ${!isMobile ? "row" : "grid grid-cols-1 md:grid-cols-2 gap-6"}`}>
              {keynoteData.map((speaker, i) => (
                <div key={`${speaker.name}-${i}`} className="col-6 mb-4">
                  <div className="text-center p-3 shadow-sm h-100" style={ isMobile ? { paddingBottom: "50px" } : {} }>
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="img-fluid mb-3"
                      style={{ borderRadius: "12px", width:"160px", height: "200px", objectFit: "cover" }}
                    />
                    <h4>{speaker.name}</h4>
                    <p className="text-muted">{speaker.affiliation}</p>
                    <p>{speaker.summary}</p>
                    <a
                      href={speaker.link}
                      target="_parent"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}

            </div>

            <div className="text-center" style={{ marginTop: "80px"}}>
              <p className="text-justify-center"  style={{ fontSize: "30px"}}>
                Invited Speaker
              </p>
            </div>

            <div className="row">
              {keynoteData2.map((speaker, i) => (
                <div key={`${speaker.name}-${i}`} className="col-6 mb-4">
                  <div className="text-center p-3 shadow-sm h-100">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="img-fluid mb-3"
                      style={{ borderRadius: "12px", width:"160px", height: "200px", objectFit: "cover" }}
                    />
                    <h4>{speaker.name}</h4>
                    <p className="text-muted">{speaker.affiliation}</p>
                    <p>{speaker.summary}</p>
                    <a
                      href={speaker.link}
                      target="_parent"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2"
                    >
                      View Details
                    </a>
                  </div>
                </div>

              ))}
            </div>            
            
          </div>
        </div>
      </div>

      {/* CSS เฉพาะ */}
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

export default HeaderSub15;
