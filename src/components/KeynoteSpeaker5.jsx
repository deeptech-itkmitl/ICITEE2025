import React, { useState, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";

const translations = {
  en: {
    travelTips1: 'Bio',
    content1:
      'Prof. Lloret has extensive professional certifications, including Cisco Certified Network Professional Instructor and Hewlett-Packard IT Architect Certification. With an extensive career, he has led numerous national and European projects, authored 15 books, over 800 research papers, and 4 patents.',
    content12:
      'He has chaired some working groups of IEEE Standard and played leadership roles in international committees. His editorial contributions include being Editor-in-Chief of renowned journals such as Ad Hoc and Sensor Wireless Networks and advisory roles for prestigious publications. Prof. Lloret is also an IEEE Senior Member, ACM Senior Member, IARIA Fellow, and EAI Fellow.',
    travelTips2: '',
    content2:
      'Prof. Jaime Lloret is a distinguished academic and researcher in telecommunications, currently serving as full Professor at the Polytechnic University of Valencia. He is the Chair of the Integrated Management Coastal Research Institute (IGIC). He holds a Ph.D. in Telecommunication Engineering. Recognized for his significant research impact, he is ranked among the top 2% of scientists world wide and is the Spanish researcher with the highest h-index in telecommunications since 2016.',
  },
};

const TravelGuidance1 = () => {
  const [lang] = useState('en');
  const t = translations[lang] || translations['en'];
  const mapRef = useRef(null);

  return (
    <div className="quality-container">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Speaker Info */}
        <div className="text-center md:text-left">
          <img
            src={`${process.env.PUBLIC_URL}/img/jaime-lloret.jpg`}
            alt="Prof. Dr. Adhistya Erna Permanasari"
            className="img-fluid mb-3"
            style={{ borderRadius: "12px", height: "200px", objectFit: "cover" }}
          />
          <h1></h1>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold m-0">Prof. Jaime Lloret</h2>
            <h2 className="text-lg font-semibold m-0">Polytechnic University of Valencia</h2>            
          </div>
        </div>

        {/* Abstract */}
        <section className="mt-8 mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips1}</h2>
          <p className="mb-4 text-justify">{t.content1}</p>
          <p className="mb-2 text-justify">{t.content12}</p>
        </section>

        {/* Bio */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips2}</h2>
          <p className="mb-2 text-justify">{t.content2}</p>
        </section>

      </div>
    </div>
  );
};

export default TravelGuidance1;
