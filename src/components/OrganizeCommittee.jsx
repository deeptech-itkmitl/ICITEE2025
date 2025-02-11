import React from "react";

export const OrganizeCommittee = () => {
  const committeeSections = [
    {
      title: "Advisory Boards",
      members: [
        "Komsan Maleesee (KMITL, Thailand) | Worapoj Kreesuradej (KMITL, Thailand) "
      ],
    },
    {
      title: "General Chair",
      members: ["Kuntpong Woraratpanya (KMITL, CIS Thailand Chapter)"],
    },
    {
      title: "Technical Program Chair",
      members: ["Praphan Pavarangkoon (KMITL, Thailand)"],
    },
    {
      title: "Organizing Committees",
      members: [
        "Chanboon Sathitwiriyawong (KMITL, CIS Thailand Chapter)",
        "Issarapong Khuankrue (KMITL, Thailand)",
        "Kitsuchart Pasupa (KMITL, CIS Thailand Chapter)",
        "Nat Dilokthanakul (KMITL, CIS Thailand Chapter)",
        "Olarn Wongwirat (KMITL, Thailand)",
        "Pornsuree Jamsri (KMITL, Thailand)",
        "Samart Moodleah (KMITL, Thailand)",
        "Sirion Vittayakorn (KMITL, Thailand)",
        "Taravichit Titijaroenroj (KMITL, Thailand)",
        "Tuchsanai Ploysuwan (KMITL, Thailand)",
        "Warune Buavirat (KMITL, Thailand)",
      ],
    },
  ];

  return (
    <div className="page-topics-background mb-5"> {/* 🔹 เพิ่ม margin-top */}
      {/* 🔹 เพิ่มรูปภาพหัวข้อ */}
      <div className="header-container text-center mb-5">                  
      </div>
      <div className="topics-container">
        <div className="topic-description">
          <div className="topic-description max-w-3xl w-full text-center">
            {committeeSections.map((section, index) => (
              <div key={index} className="mb-10">
                <h1 className="committee-title">{section.title}</h1>
                {section.title === "Advisory Boards" ? (
                  <div className="flex justify-between mb-4">
                    {section.members.map((member, idx) => (
                      <p key={idx} className="w-[20%]">{member}</p>
                    ))}
                  </div>
                ) : section.members.length > 1 ? (
                  <div className="grid grid-cols-2 gap-y-4">
                    {section.members.map((member, idx) => (
                      <p key={idx}>{member}</p>
                    ))}
                  </div>
                ) : (
                  <p>{section.members[0]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
