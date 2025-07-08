import React, { useRef } from 'react';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";
import 'font-awesome/css/font-awesome.min.css';

const translations = {
  en: {
    conferenceInfo: 'Keynote Speaker',
    content1:
      'Technologies for accurately recognizing the positions of people and objects are essential for realizing applications such as the Internet of Things (IoT), cyber-physical systems (CPS), augmented reality (AR), and digital twins. While Global Navigation Satellite System (GNSS) is the standard positioning technology in outdoor environments, there is still no such universally accepted technology for indoor settings, and various approaches have been proposed so far...',
    content2:
      'Masanori Sugimoto received the B.E., M.E., and D.E. degrees in aeronautics and astronautics from the University of Tokyo, Tokyo, Japan, in 1990, 1992 and 1995, respectively. He is currently a Professor with the Graduate School of Information Science and Technology, Hokkaido University, Sapporo, Japan...',
  },
};

const TravelGuidance = () => {
  const t = translations['en'];
  const mapRef = useRef(null);

  return (
    <div className="quality-container">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          {t.conferenceInfo}
        </h1>

        {/* Speaker Info */}
        <section className="mb-8" ref={mapRef}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
              <img
                src={`${process.env.PUBLIC_URL}/img/masanori-sugimoto.jpg`}
                alt="Profile"
                style={{
                  width: "100%",
                  maxWidth: "150px",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block"
                }}
              />
              <div>
                <h4 style={{ margin: 0 }}>Masanori Sugimoto</h4>
                <p style={{ margin: 0 }}>Hokkaido University</p>
              </div>
            </div>
          </div>
        </section>

        {/* Abstract */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Abstract:</h2>
          <p>{t.content1}</p>
        </section>

        {/* Bio */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Bio:</h2>
          <p>{t.content2}</p>
        </section>
      </div>
    </div>
  );
};

export default TravelGuidance;
