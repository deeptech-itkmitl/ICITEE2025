import React from 'react';
import { Award, User2 } from 'lucide-react';
import "../css/globaledit.css";

const MessageFrom = ({data}) => {
  return (
    <div className='globaledit'>
      <div className="py-20 px-20">
        <div className="w-full mx-auto">
          {/* Header Section */}
          {/* <div className="text-center mb-16 border-b-2 pb-8">
            <h2 className="text-4xl font-bold mb-3 tracking-wide">
              CONFERENCE PROCEEDINGS
            </h2>
            <p className="text-lg uppercase tracking-widest">
              Topics of Interest & Committee
            </p>
          </div> */}

          {/* Topics */}
          <div className="space-y-12">
            {data.map((topic, index) => (
            <div key={index} className="topic-wrapper">
                <div className="topic-grid border-2">
                {/* LEFT SIDE */}
                <div className="topic-left">
                    <h3>{topic.title}</h3>
                </div>

                {/* RIGHT SIDE */}
                <div className="topic-right">
                    {/* Message Section */}
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-4 pb-2 border-b">
                            <Award size={24} strokeWidth={2} />
                            <h4>Message from the Conference Chair</h4>
                        </div>
                        {/* <p className="leading-relaxed text-justify">
                            {topic.ConferenceChairMassage}
                        </p> */}
                        <div className="border-l-4 pl-6 py-2">
                            <p 
                                className="leading-relaxed text-justify"
                                dangerouslySetInnerHTML={{ __html: topic.ConferenceChairMassage }}
                            />
                            <br/>
                            <p className="leading-relaxed text-justify">
                                <strong>{topic.footer}</strong>
                            </p>
                            <br/>
                        </div>
                    </div>

                    {/* Committee */}
                    <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b">
                        <User2 size={22} strokeWidth={2} />
                        <h4>Conference Committee</h4>
                    </div>
                    <div className="space-y-6">
                        {topic.ConferenceChair.map((chair, chairIndex) => (
                        <div key={chairIndex} className="border-l-4 pl-6 py-2">
                            <p className="font-semibold text-xl mb-1">{chair.name}</p>
                            <p className="font-medium uppercase text-xl tracking-wide">{chair.title}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>

                {/* Footer Divider (ด้านนอก grid) */}
                <div className="footer-divider"></div>
            </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFrom;
