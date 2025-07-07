import React, { useState, useRef } from 'react';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";

const translations = {
    en: {
      title: 'Keynote Speaker',
      conferenceInfo: '',
      conferenceDetails:
        'Title: Emerging Trends and Future Perspectives on Indoor Positioning Technologies',
      hotelInfo: 'Hotel Information',
      hotelName: 'The Berkeley Hotel Pratunam',

      content1:
        'Technologies for accurately recognizing the positions of people and objects are essential for realizing applications such as the Internet of Things (IoT), cyber-physical systems (CPS), augmented reality (AR), and digital twins. While Global Navigation Satellite System (GNSS) is the standard positioning technology in outdoor environments, there is still no such universally accepted technology for indoor settings, and various approaches have been proposed so far. Some market research reports predict that, the market related to indoor positioning technologies is expected to grow at a compound annual growth rate (CAGR.) exceeding 40%, reaching USD 150 billion by 2030. In light of the social background, this talk will first introduce recent research trends in indoor positioning technologies. Then some of the research achievements from the speaker group s indoor positioning research project will be presented. The talk will describe indoor positioning systems realized using smartphone built-in sensors and provide examples of their applications. Finally, future prospects for research in indoor positioning will be discussed',
      content2:
        'Masanori Sugimoto received the B.E., M.E., and D.E. degrees in aeronautics and astronautics from the University of Tokyo, Tokyo, Japan, in 1990, 1992 and 1995, respectively. He is currently a Professor with the Graduate School of Information Science and Technology, Hokkaido University, Sapporo, Japan. His research interests include acoustic engineering, signal processing, artificial intelligence, and human-computer interaction technologies for designing smart systems and environments.',
      content3:
        'Pratunam Market is a treasure trove of clothes, textiles, fashion accessories, and handmade crafts at cheap, wholesale prices, making this very busy market popular with locals and bargain shoppers.',
     content4:
        'Bangkok offers visitors the opportunity to experience fascinating glimpses of Thailand’s unique culture, amidst the bustle of a great and dynamic metropolis. Become increasingly more popular for people to try and visit nine sacred temples in Bangkok in order to bring themselves good luck for the New Year. Below are some of the temple for tourists to visit.', 
     content5:
        'Bangkok offers visitors the opportunity to experience fascinating glimpses of Thailand’s unique culture, amidst the bustle of a great and dynamic metropolis. Become increasingly more popular for people to try and visit nine sacred temples in Bangkok in order to bring themselves good luck for the New Year. Below are some of the temple for tourists to visit.', 
     content6:
        'Wat Phra Kaew or the temple of the Emerald Buddha, and adjoining the Grand Palace, the former royal residence, together from the greatest spectacle for the visitor to Bangkok. One of the most significant features of this temple is the Emerald Buddha, carved into a 66 m tall block of Jade. Beside, visitors can explore the 2 km long gallery covered with incredibly detailed mural paintings depicting 178 scenes of the epic story of Ramaya. The temple can be visited daily from 8.00 until 15.00 , plus with the entrance free around 400 – 500 baht per person.',
                
      hotelAddress : 'Hotel Address : 991 Rama I Rd, Pathumwan, Bangkok 10330', 
      howgetAddress : 'How to get there: A few steps walk from Siam BTS station.', 
      phone: 'Phone: 66 2 610 8000',
      email: 'Website: http://www.siamparagon.co.th',

      hotelAddress1 : 'Hotel Address : 999/9 Rama1 Rd, Pathumwan, Bangkok 10330',
      howgetAddress1 : 'How to get there: A few steps walk from Siam BTS station.', 
      phone1: 'Phone: 66 2 610 8000',
      email1: 'Website: https://www.centralworld.co.th',
      
      hotelAddress3 : '115/4 Phayathai Rd, Thanon Phaya Thai, Ratchathewi, Bangkok 10400', 
      howgetAddress3 : '9 min (700 m) walk from hotel.', 
      phone3: 'Phone: 66 2 610 8000',
      email3: 'Website: http://www.siamparagon.co.th',

      hotelAddress5 : '', 
      howgetAddress5 : 'How to get there: You can take the boat at the Khlong Saen Saep near the Berkeley Pratunam Hotel and transit to Tan Tien Pier and get to the temple.', 
      phone5: '',
      email5: '',

      mapTitle: 'Hotel Map',
      qrTitle: 'Scan to open map',
      qrNote: 'Scan this QR code to open the map of The Berkeley Hotel on your phone.',
      travelTips: 'Siam Paragon',
      tips: [
        'You can take a taxi or Airport Rail Link (Ratchaprarop Station) from Suvarnabhumi Airport.',
        'BTS/MRT, bus, or Grab service is available around Bangkok.',
        'The hotel is close to Platinum Fashion Mall, Central World, and Siam Paragon.',
        'It is recommended to book the hotel in advance as there may be many attendees.',
      ],

      mapTitle1: 'Hotel Map',
      qrTitle1: 'Scan to open map',
      qrNote1: 'Scan this QR code to open the map of The Berkeley Hotel on your phone.',
      travelTips1: 'Abstract:',
      tips1: [
        'Heart rate variability (HRV) has long been used as a non-invasive indicator of autonomic nervous system activity, ',
        'and it has become widely adopted in fields ranging from human interface design to human-robot interaction. However, ',
        'misinterpretations and methodological pitfalls in HRV analysis remain widespread, often leading to erroneous conclusions ',
        'about autonomic function. Our landmark paper, “Pitfalls of assessment of autonomic function by heart rate variability” (2019),',
        'has been cited more than 370 times in just five years, reflecting the growing concern and interest in improving the scientific ',
        'rigor of HRV-based assessments.',
        ' ',
      ],

      mapTitle2: 'Hotel Map',
      qrTitle2: 'Scan to open map',
      qrNote2: 'Scan this QR code to open the map of The Berkeley Hotel on your phone.',
      travelTips2: 'Bio:',
      tips2: [
        'Prof. Dr. Emi Yuda is a professor specializing in biomedical signal processing and bio-medical big data analysis.Her obtained ',
        'her PhD in Engineering from Niigata University, and served as an assistant professor and associate professor at Tohoku University, ',
        'before becoming a professor at Mie University in 2024. Her research interests span a wide range of fields, from biomedical engineering to health sciences,',
        'including autonomic nerve interpretation using heart rate variability (HRV) analysis extracted from electrocardiograms (ECGs), ',
        'as well as multimodal analysis centered on time series data from wearable sensors. She has contributed to the development of advanced algorithms',
        'for detecting human cardiac diseases, sleep apnea, fatigue, drowsiness, and posture changes. Recent research has utilized bio-signal analysis',
        'for ensuring the safety of elderly people and drivers. In biomedical big data analysis, she integrates the analysis using machine learning.',
        'She has published numerous papers in peer-reviewed journals and international conferences, and is actively engaged in collaborative research',
        'with industry and medical institutions.',
        ' ',
      ],

      mapTitle3: 'Hotel Map',
      qrTitle3: 'Scan to open map',
      qrNote3: 'Scan this QR code to open the map of The Berkeley Hotel on your phone.',
      travelTips3: 'Pratunam Market',
      tips5: [
        'Pratunam Market is a treasure trove of clothes, textiles, fashion accessories, and handmade crafts at',
        'cheap, wholesale prices, making this very busy market popular with locals and bargain shoppers.',
      ],


      mapTitle5: 'Hotel Map',
      qrTitle5: 'Scan to open map',
      qrNote5: 'Scan this QR code to open the map of The Berkeley Hotel on your phone.',
      travelTips5: 'Wat Arun',
      tips5: [
        'Pratunam Market is a treasure trove of clothes, textiles, fashion accessories, and handmade crafts at',
        'cheap, wholesale prices, making this very busy market popular with locals and bargain shoppers.',
      ],      

      mapTitle6: 'Hotel Map',
      qrTitle6: 'Scan to open map',
      qrNote6: 'Scan this QR code to open the map of The Berkeley Hotel on your phone.',
      travelTips6: 'Wat Phra Kaew',
      tips6: [
        'Pratunam Market is a treasure trove of clothes, textiles, fashion accessories, and handmade crafts at',
        'cheap, wholesale prices, making this very busy market popular with locals and bargain shoppers.',
      ],            

      hotelWebsite: 'Visit Hotel Website',
      selectLang: 'Select Language',
      scrollToMap: 'Jump to Hotel Map',      
    },

  };
  
const TravelGuidance1 = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations['en'];
  const mapRef = useRef(null);

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="quality-container">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Language Selector */}
        {/* <div className="mb-6 text-right">
          <i><label className="font-semibold mr-2">{t.selectLang || 'Language'}:</label></i>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
            <option value="vi">Tiếng Việt</option>
            <option value="he">עברית</option>
            <option value="hi">हिंदी</option>
            <option value="fr">Français</option>
            <option value="it">Italiano</option>
          </select>
        </div> */}
        <div className="mb-6 text-right">
        {/* <i><label className="font-semibold mr-2 text-black">{t.selectLang || 'Language'}:</label></i> */}
        {/* <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border px-2 py-1 rounded text-black"
        >
          <option value="en">English</option>
          <option value="th">ไทย</option>
          <option value="zh">中文</option>
          <option value="ko">한국어</option>
          <option value="vi">Tiếng Việt</option>
          <option value="he">עברית</option>
          <option value="hi">हिंदी</option>
          <option value="fr">Français</option>
          <option value="it">Italiano</option>
        </select> */}
      </div>


        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">{}</h1>

        {/* <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2"><center>{t.conferenceInfo}</center></h2>
          <p>{t.conferenceDetails}</p>
        </section> */}

        <section className="mb-8">
          {/* <h2 className="text-xl font-semibold mb-2">{t.hotelInfo}</h2> */}
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {/* {t.hotelAddress} */}            
          </p>
          <p>
            {/* <strong>{t.phone}:</strong> (662) 309-9999<br /> */}
            {/* <strong>{t.email}:</strong>{' '} */}
            {/* <a href="mailto:rsvn@berkeleyhotel.co.th" className="text-blue-600 underline"></a>{' '} */}
            {/* <a href="mailto:info@berkeleyhotel.co.th" className="text-blue-600 underline"></a> */}
          </p>
          <h1></h1>
        </section>

        {/* 🔖 Jump Button
        <div className="text-center mb-6">
          <button
            onClick={scrollToMap}
            className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition"
          >
            🔖 {t.scrollToMap}
          </button>
          <h1></h1>
        </div> */}

        <section className="mb-8" ref={mapRef}>
          {/* <h2 className="text-xl font-semibold mb-2">{t.mapTitle}</h2> */}
          <div className="aspect-w-16 aspect-h-9">
            {/* <iframe
              // title="Hotel Map"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7180590762127!2d100.5399155!3d13.7513468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed8d1a16175%3A0x620f4d61dc9e9fd5!2sThe%20Berkeley%20Hotel%20Pratunam!5e0!3m2!1sen!2sth!4v1680093276889!5m2!1sen!2sth"
              // width="100%"
              // height="400"
              // style={{ border: 0 }}
              // allowFullScreen
              // loading="lazy"
            ></iframe> */}

            {/* <div style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",            // เพื่อให้ responsive บนจอเล็ก
              gap: "20px",                 // เว้นระยะห่างรูปกับข้อความ
              marginBottom: "1rem"
            }}>
              <img
                src={`${process.env.PUBLIC_URL}/img/image0.jpg`}
                alt="Profile"
                style={{
                  width: "100%",
                  maxWidth: "150px",
                  height: "auto",
                  borderRadius: "12px",     // ขอบมน
                  display: "block"
                }}
              />
              <div>
                <h4 style={{ margin: 0 }}>นายสมชาย ใจดี</h4>
                <p style={{ margin: 0 }}>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
              </div>
            </div> */}
            <div style={{
              display: "flex",
              justifyContent: "center",     // จัด content ให้อยู่ตรงกลางแนวนอน
              marginTop: "2rem"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",           // Responsive บนอุปกรณ์เล็ก
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
                  <h4 style={{ margin: 0 }}> Prof. Dr. Emi Yuda </h4>
                  <p style={{ margin: 0 }}> Mie University in 2024 </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2"><center>{t.conferenceInfo}</center></h2>
          {/* <p>{t.conferenceDetails}</p> */}
        </section>

        <section className="mb-8 text-center">
          <h1></h1>
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {/* {t.content1}             */}
          </p>         
          {/* <h2 className="text-xl font-semibold mb-2">{t.qrTitle}</h2> */}
          {/* <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://goo.gl/maps/wYh1jBuJPhR2"
            alt="QR Code Map"
            className="mx-auto"
          /> */}        
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}            
            {/* {t.hotelAddress} */}
          </p>
          <h1></h1>
          {/* <p className="text-gray-600 mt-2">{t.qrNote}</p> */}

        </section>
 
        <section className="mb-8">
            {/* <h2 className="text-xl font-semibold mb-2">{t.hotelInfo}</h2>
            <p>
              {/* <strong>{t.hotelName}</strong><br /> */}
              {/* {t.hotelAddress}             */}
            <p></p>
            <p>
              {/* <strong>{t.phone}:</strong> (662) 309-9999<br /> */}
              {/* <strong>{t.email}:</strong>{' '} */}
              {/* <a href="mailto:rsvn@berkeleyhotel.co.th" className="text-blue-600 underline"></a>{' '} */}
              {/* <a href="mailto:info@berkeleyhotel.co.th" className="text-blue-600 underline"></a> */}
            </p>
          <h1></h1>
        </section> 

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips1}</h2>
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {t.content1}            
          </p> 
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {/* {t.content3}             */}
          </p> 
            {/* <h2 className="text-xl font-semibold mb-2">{t.hotelInfo}</h2>
            
              {/* <strong>{t.hotelName}</strong><br /> */}
              <p>
              {/* {t.hotelAddress}                     */}
              <p>
              {/* {t.hotelAddress}         */}
              </p>           
              {/* <p>{t.hotelAddress}</p> */}
              {/* <p>{t.howgetAddress}</p> */}
              {/* <p><strong>{t.phone}:</strong></p> */}
              {/* <br /><strong>{t.email}:</strong>{' '} */}
              {/* <a
                href="http://www.siamparagon.co.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition"
              >http://www.siamparagon.co.th/</a> */}
              {/* <a href="mailto:rsvn@berkeleyhotel.co.th" className="text-blue-600 underline"></a>{' '} */}
              {/* <a href="mailto:info@berkeleyhotel.co.th" className="text-blue-600 underline"></a> */}
            </p>
          <h3></h3>
          {/* <ul className="list-disc pl-6">
            {t.tips.map((tip, index) => (
              <li key={index} className="mb-1">{tip}</li>
            ))}
          </ul> */}

           {/* {t.hotelAddress} */}

           <h3></h3>
          {/* <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/wat-arun-temple-bangkok-thailand 3.jpg`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "100%", height: "60%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
            </h4> */}
        </section>

        <section className="mb-8">
          {/* <h2 className="text-xl font-semibold mb-2">{t.travelTips1}</h2> */}
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {/* {t.content1}             */}
          </p> 
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {/* {t.content1}             */}
          </p> 
            {/* <h2 className="text-xl font-semibold mb-2">{t.hotelInfo}</h2>
            
              {/* <strong>{t.hotelName}</strong><br /> */}
              <p>
              {/* {t.hotelAddress}                     */}
              <p>
              {/* {t.hotelAddress}         */}
              </p>           
              {/* <p>{t.hotelAddress1}</p> */}
              {/* <p>{t.howgetAddress1}</p> */}
              {/* <p><strong>{t.phone1}:</strong></p> */}
              {/* <br /><strong>{t.email}:</strong>{' '} */}
              {/* <a
                href="https://www.centralworld.co.th"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition"
              >https://www.centralworld.co.th</a> */}
              {/* <a href="mailto:rsvn@berkeleyhotel.co.th" className="text-blue-600 underline"></a>{' '} */}
              {/* <a href="mailto:info@berkeleyhotel.co.th" className="text-blue-600 underline"></a> */}
            </p>
          <h3></h3>
          {/* <ul className="list-disc pl-6">
            {t.tips.map((tip, index) => (
              <li key={index} className="mb-1">{tip}</li>
            ))}
          </ul> */}

           {/* {t.hotelAddress} */}

           <h3></h3>
          {/* <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/wat-arun-temple-bangkok-thailand 3.jpg`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "100%", height: "60%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
            </h4> */}
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips2}</h2>
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {t.content2}            
          </p> 
          <p className="mb-2">
            {/* <strong>{t.hotelName}</strong><br /> */}
            {/* {t.content3}             */}
          </p> 
            {/* <h2 className="text-xl font-semibold mb-2">{t.hotelInfo}</h2>
            
              {/* <strong>{t.hotelName}</strong><br /> */}
              <p>
              {/* {t.hotelAddress}                     */}
              <p>
              {/* {t.hotelAddress}         */}
              </p>           
              {/* <p>{t.hotelAddres3}</p> */}
              {/* <p>{t.howgetAddress3}</p> */}
              {/* <p><strong>{t.phone3}:</strong></p> */}
              {/* <br /><strong>{t.email}:</strong>{' '} */}
              {/* <a
                href="http://www.siamparagon.co.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition"
              >http://www.siamparagon.co.th/</a> */}
              {/* <a href="mailto:rsvn@berkeleyhotel.co.th" className="text-blue-600 underline"></a>{' '} */}
              {/* <a href="mailto:info@berkeleyhotel.co.th" className="text-blue-600 underline"></a> */}
            </p>
          <h3></h3>
          {/* <ul className="list-disc pl-6">
            {t.tips.map((tip, index) => (
              <li key={index} className="mb-1">{tip}</li>
            ))}
          </ul> */}

           {/* {t.hotelAddress} */}

           <h3></h3>
          {/* <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/wat-arun-temple-bangkok-thailand 3.jpg`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "100%", height: "60%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
            </h4> */}
        </section>

        <div className="text-center mt-10">
          <h1></h1>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition"
          > */}
            <h1></h1>
            <div>
             <h4 className="title">
            {/*center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/wat-arun-temple-bangkok-thailand 3.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "100%", height: "60%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center> */}
            </h4>
                </div>
                <h1></h1>
            {/* <u><i><b>{t.hotelWebsite}</b></i></u> */}
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default TravelGuidance1;
