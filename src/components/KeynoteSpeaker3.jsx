import React, { useState, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";

const translations = {
  en: {
    travelTips1: 'Abstract:',
    content1:
      'Technologies for accurately recognizing the positions of people and objects are essential for realizing applications such as the Internet of Things (IoT), cyber-physical systems (CPS), augmented reality (AR), and digital twins. While Global Navigation Satellite System (GNSS) is the standard positioning technology in outdoor environments, there is still no such universally accepted technology for indoor settings, and various approaches have been proposed so far. Some market research reports predict that, the market related to indoor positioning technologies is expected to grow at a compound annual growth rate (CAGR.) exceeding 40%, reaching USD 150 billion by 2030. In light of the social background, this talk will first introduce recent research trends in indoor positioning technologies. Then some of the research achievements from the speaker group s indoor positioning research project will be presented. The talk will describe indoor positioning systems realized using smartphone built-in sensors and provide examples of their applications. Finally, future prospects for research in indoor positioning will be discussed',
    
    travelTips2: 'Bio:',
    content2:
      'Prof. Dr. Emi Yuda is a professor specializing in biomedical signal processing and bio-medical big data analysis.Her obtained her PhD in Engineering from Niigata University, and served as an assistant professor and associate professor at Tohoku University, before becoming a professor at Mie University in 2024. Her research interests span a wide range of fields, from biomedical engineering to health sciences, including autonomic nerve interpretation using heart rate variability (HRV) analysis extracted from electrocardiograms (ECGs), as well as multimodal analysis centered on time series data from wearable sensors. She has contributed to the development of advanced algorithms for detecting human cardiac diseases, sleep apnea, fatigue, drowsiness, and posture changes. Recent research has utilized bio-signal analysis for ensuring the safety of elderly people and drivers. In biomedical big data analysis, she integrates the analysis using machine learning. She has published numerous papers in peer-reviewed journals and international conferences, and is actively engaged in collaborative research with industry and medical institutions.',
  },
};

const TravelGuidance1 = () => {
  const [lang] = useState('en');
  const t = translations[lang] || translations['en'];
  const mapRef = useRef(null);

  return (
    <div className="quality-container">
      <div className="max-w-4xl mx-auto px-4 py-8">

        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <img
              src={`${process.env.PUBLIC_URL}/img/emi-yuda.jpg`}
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
              <h4 style={{ margin: 0 }}>Prof. Dr. Emi Yuda</h4>
              <p style={{ margin: 0 }}>Mie University in 2024</p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips1}</h2>
          <p className="mb-2">{t.content1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips2}</h2>
          <p className="mb-2">{t.content2}</p>
        </section>

      </div>
    </div>
  );
};

export default TravelGuidance1;
