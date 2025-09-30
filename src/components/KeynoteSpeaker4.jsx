import React, { useState, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";

const translations = {
  en: {
    travelTips1: 'Abstract:',
    content1:
      'The recent trends of information technology and immersive media is reshaping the educational landscape, with Virtual Reality (VR) and Augmented Reality (AR) emerging as transformative tools in higher education.',
    content12:
      'These technologies offer interactive, engaging, and highly visual learning experiences that significantly enhance the delivery and comprehension of complex subject matter. Moreover, they provide safe, cost-effective, and widely accessible alternatives to traditional learning environments, such as physical laboratories. Our research has explored the use of immersive technologies across diverse fields, including medical, biomedical, and accounting study programs, to support deeper understanding and active learning. In anatomy education, for example, Hanamy (Heart Anatomy) and Gama Cardiac AR, which use augmented reality and 3D visuals to focus on the heart’s anatomy. Anaries (Anatomy Stories) application, leverages VR and AR to simulate cranial anatomy and includes a mini quiz designed to boost learning interactivity. Whilst, Kadavee models the human skeleton, including the head, torso, arms, and legs, in 3D visualization and virtual reality. This application enhances spatial awareness beyond what traditional cadaver-based methods typically offer. Augmented reality further enriches learning by overlaying digital content on physical models, creating interactive, and hands-on experiences.',
    travelTips2: 'Bio:',
    content2:
      'Adhistya Erna Permanasari is an Associate Professor in the Department of Electrical and Information Engineering at Universitas Gadjah Mada (UGM) in Yogyakarta, Indonesia. She earned her B.S. in Electrical Engineering at UGM in 2002 and her M.Tech in Electrical Engineering from the same university in 2006, before completing her Ph.D. in Computer and Information Science at Universiti Teknologi PETRONAS, Malaysia, in 2010. Her research interests encompass decision support systems, forecasting, health informatics, educational informatics, artificial intelligence, and immersive technologies. She has published extensively over 160 works on topics ranging from forecasting disease incidence and network management to AR based learning tools and healthcare information systems. She has led and co-led several interdisciplinary projects, particularly on immersive technology initiatives. At UGM, she is an active member of the Intelligent Systems Research Group. She supervises graduate students working on projects in health informatics, immersive learning environments, decision-support systems, and more.',
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
            src={`${process.env.PUBLIC_URL}/img/permanasari.jpg`}
            alt="Prof. Dr. Adhistya Erna Permanasari"
            className="img-fluid mb-3"
            style={{ borderRadius: "12px", height: "200px", objectFit: "cover" }}
          />
          <h1></h1>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold m-0">Associate Professor Dr. Adhistya Erna Permanasari</h2>
            <h2 className="text-lg font-semibold m-0">Universitas Gadjah Mada (UGM)</h2>            
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
