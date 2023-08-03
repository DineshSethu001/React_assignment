import React, { useState, useEffect } from "react";
import './Dashboard.css'


const bannersData = [{
                      id: "banner1",
                      id_no: 1,
                      text: "This is the first banner area",
                      button: true,
                      btn_typ: "redirect",
                      btn_name: "Banner",
                      link: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                      },
                      {
                      id: "banner2",
                      id_no: 2,
                      text: "This is the second banner area",
                      button: true,
                      btn_typ: "redirect",
                      btn_name: "Banner",
                      link: "/redirect2",
                      },
                      {
                      id: "banner3",
                      id_no: 3,
                      text: "This is the third banner area",
                      button: false,
                      }];

const sectionsData = [{
                      id: "section1",
                      sec_no: 1,
                      title: "Profile Activity",
                      cN: "profile-section",
                      },
                      {
                      id: "section2",
                      sec_no: 2,
                      title: "Profile Analysis Overview",
                      cN: "resume-builder-section",
                      },
                      {
                      id: "section3",
                      sec_no: 3,
                      title: "Resume Builder",
                      cN: "resume-builder-section",
                      },
                      ];

const cardsData = [{
    id: "card1",
    cursor: false,
    parent_sec_no: 1,
    card_no: 1,
    parent_sec: "section1",
    card_title: "Title AA",
    data: true,
    data_type: "progress",
    data_value: 65,
    button: false,
    link: true,
    link_name: "google",
    redirect: "https://www.google.com/",
    },
    {
    id: "card2",
    cursor: true,
    permeant: true,
    parent_sec: "section1",
    parent_sec_no: 1,
    card_no: 2,
    card_title: "Title AB",
    data: true,
    data_type: "number",
    data_value: 10,
    button: true,
    button_name: "Button AB",
    link: false,
    redirect: "google",
    note: "Note added here",
    },
    {
    id: "card3",
    cursor: true,
    permeant: true,
    parent_sec: "section1",
    parent_sec_no: 1,
    card_no: 3,
    card_title: "Title AC",
    data: true,
    data_type: "number",
    data_value: 17,
    button: true,
    button_name: "Button AC",
    link: false,
    redirect: "google",
    note: "Note added here",
    },
    {
    id: "card4",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 4,
    card_title: "Title BA",
    data: true,
    data_type: "number",
    data_value: 5,
    button: true,
    button_name: "Button BA",
    link: false,
    redirect: "google",
    },
    {
    id: "card5",
    cursor: false,
    parent_sec_no: 2,
    card_no: 5,
    parent_sec: "section2",
    card_title: "Title BB",
    data: true,
    data_type: "number",
    data_value: 8,
    button: false,
    link: true,
    link_name: "google",
    redirect: "https://www.google.com/",
    },
  
];

const Dashboard = () => {
  const [banners, setBanners] = useState([]);
  const [showAllCards, setShowAllCards] = useState({});

  useEffect(() => {
 
    setBanners(bannersData.map((banner, index) => ({
      ...banner,
      visible: index === 0
    })));

 
    const interval = setInterval(() => {
      setBanners(prevBanners => {
        const nextIndex = (prevBanners.findIndex(banner => banner.visible) + 1) % prevBanners.length;
        return prevBanners.map((banner, index) => ({
          ...banner,
          visible: index === nextIndex
        }));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const toggleShowAllCards = (sectionId) => {
    setShowAllCards((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  return (
    <div className="dashboard">
      <div className="banners">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`banner ${banner.visible ? "visible" : ""}`}
          >
            <p>{banner.text}</p>
            {banner.button && (
              <a href={banner.link} className="banner-button">
                   {banner.btn_name}
              </a>
            )}
          </div>
        ))}
      </div>
      <h2 className="section_heading">SECTION</h2>
      <div className="sections">
        {sectionsData.map((section) => (
          <div key={section.id} className={`section ${section.cN}`}>
            <h2>{section.title}</h2>
            <div className="cards">
             
              {cardsData
                .filter((card) => card.parent_sec_no === section.sec_no)
                .slice(0, showAllCards[section.id] ? cardsData.length : 3)
                .map((card) => (
                  <div className="single_card">
                    <div key={card.id} className={`card ${card.data_type}`}>
                    <h3>{card.card_title}</h3>
                    {card.data && <p>Data: {card.data_value}</p>}
                    {card.button && <button>{card.button_name}</button>}
                    {card.link && (
                      <a href={card.redirect}>{card.link_name}</a>
                    )}
                    {card.note && <p>Note: {card.note}</p>}
                  </div>
                  </div>
                ))}
              {cardsData.filter((card) => card.parent_sec_no === section.sec_no)
                .length > 3 && (
                <button onClick={() => toggleShowAllCards(section.id)}>
                  {showAllCards[section.id] ? "See Less" : "See More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
