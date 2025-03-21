import React from "react";

export const OrganizeCommittee = () => {
  const committeeSections = [
    {
      title: "Advisory Boards",
      members: [
        "Hanung Adi Nugroho (UGM, Indonesia)",
        "Jonathan Hoyin Chan (KMUTT, IEEE CIS Thailand Chapter, Thailand)",
        "Loo Chu Kiong (UM, Malasia)",
        "Lukito Edi (UGM, Indonesia)",
        "Masanori Sugimoto (HU, Japan)",
        "Ruttikorn Varakulsiripunth (Thailand)",
        "Sarjiya (UGM, Indonesia)",
        "Supavadee Aramvith (IEEE Thailand Section)",
        "Virach Sornlertlamvanich (MU, Japan)",
        "Worapoj Kreesuradej (KMITL, Thailand)",
        "Yasushi Kiyoki (MU, Japan)"
      ],
    },
    {
      title: "Steering Committee",
      members: [
        "Asako Uraki (MU, Japan)",
        "Chayanon Sub-r-pa (CYUT, Taiwan)",
        "I Wayan Mustika (UGM, Indonesia)",
        "Phayung Meesad (KMUTNB, IEEE CIS Thailand Chapter, Thailand)",
        "Pornchai Mongkolnam (KMUTT, IEEE CIS Thailand Chapter, Thailand)",
        "Shiori Sasaki (MU, Japan)",
        "Sigit B. Wibowo (UGM, Indonesia)",
        "Syukron Abu Ishaq Alfarozi (UGM, Indonesia)",
        "Thatsanee Charoenporn (MU, Japan)",
        "Teerapong Leelanupab (UQ, Australia)",
        "Ungsumalee Suttapakti (BUU, Thailand)",
        "Wanthanee Rathasamuth (UDRU, Thailand)",
        "Yasuhiro Hayashi (MU, Japan)",
        "Yoshimitsu Kuroki (NIT, Kurume College, Japan)"
      ],
    },
    {
      title: "Local Organizing Committee",
      members: [" "],
    },
    {
      title: "Conference Chair",
      members: [
        "Kuntpong Woraratpanya (KMITL, IEEE CIS Thailand Chapter, Thailand)"
      ],
    },
    {
      title: "Conference Co-chair",
      members: [
        "Guntur Dharma Putra (UGM, Indonesia)"
      ],
    },
    {
      title: "Technical Program Chair",
      members: [
        "Praphan Pavarangkoon (KMITL, Thailand)"
      ],
    },
    {
      title: "Technical Program Co-chair",
      members: [
        "Ahmad Ataka Awwalur Rizqi (UGM, Indonesia)"
      ],
    },
    {
      title: "Technical Program Team Leaders",
      members: [
        "Annop Monsakul (PIM, Thailand)",
        "Chanboon Sathitwiriyawong (KMITL, CIS Thailand Chapter)",
        "Chotipat Pornavalai (KMITL, Thailand)",
        "Kanokwan Atchariyachanvanich (KMITL, Thailand)",
        "Maleerat Sodanil (KMUTNB, IEEE CIS Thailand Chapter, Thailand)",
        "Nat Dilokthanakul (KMITL, Thailand)",
        "Nont Kanungsukkasem (KMITL, Thailand)",
        "Olarn Wongwirat (KMITL, Thailand)",
        "Olarik Surinta (MSU, Thailand)",
        "Pornsuree Jamsri (KMITL, Thailand)",
        "Sarayut Nonsiri (TNI, IEEE CIS Thailand Chapter, Thailand)",
        "Sirion Vittayakorn (KMITL, Thailand)",
        "Soradech Krootjohn (KMUTNB, IEEE CIS Thailand Chapter, Thailand)",
        "Sudchai Boonto (KMUTT, IEEE CSS Thailand Chapter, Thailand)",
        "Sudiro (UGM, Indonesia)",
        "Sumet Prabhavat (KMITL, Thailand)",
        "Suvit Poomrittigul (KMITL, Thailand)",
        "Taravichet Titijaroenroj (KMITL, Thailand)",
        "Thitiporn Lertrusdachakul (TNI, Thailand)",
        "Tuchsanai Ploysuwan (KMITL, Thailand)",
        "Wijaya Yudha Atmaja (UGM, Indonesia)",
        "Ridwan Wicaksono (UGM, Indonesia)"
      ],
    },
    {
      title: "Publication Chair",
      members: [
        "Samart Moodleah (KMITL, Thailand)"
      ],
    },
    {
      title: "Registration Chair",
      members: [
        "Issarapong Khuankrue (KMITL, Thailand)"
      ],
    },
    {
      title: "Financial Chair",
      members: [
        "Warune Buavirat (KMITL, Thailand)"
      ],
    },
    {
      title: "Conference Secretariat",
      members: [
        "Kitsuchart Pasupa (KMITL, IEEE CIS Thailand Chapter)"
      ],
    }
  ];

  return (
    <div className="page-topics-background mb-5 flex justify-center">
      <div className="topics-container w-full max-w-4xl px-4">
        <div className="topic-description text-center">
          {committeeSections.map((section, index) => (
            <div key={index} className="mb-10">
              <h1 className="committee-title text-xl font-bold mb-4">{section.title}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                {section.members.map((member, idx) => (
                  <p key={idx} className="text-base">{member}</p>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <img
                  src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                  alt="Line"
                  className="w-1/3 h-px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};