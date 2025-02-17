import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isSubmissionOpen, setSubmissionOpen] = useState(false);
  const [isProgramOpen, setProgramOpen] = useState(false);
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const [isVenueOpen, setVenueOpen] = useState(false);
  const [isPolicyOpen, setPolicyOpen] = useState(false);

  const toggleDropdown = (setFunction) => {
    setFunction(prev => !prev);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid nav-head">
        <div className="navbar-header">
        <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src={`${process.env.PUBLIC_URL}/img/ICITEE2025.png`}
              alt="ICITEE 2025 Logo"
              className="conference-logo"
            />
          </a>
        </div>

        <div className="collapse navbar-collapse col-md-6" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="/" className="page-scroll">Home</a></li>
            
            <li className="dropdown">
              <a href="#about" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setAboutOpen); }}>
                About <i className="fa fa-caret-down"></i>
              </a>
              {isAboutOpen && (
                <ul className="dropdown-menu">
                  
                  <li><a href="/organizing-committee" className="page-scroll">Organizing Committee</a></li>
                  
                  
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#submission" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setSubmissionOpen); }}>
                Submission <i className="fa fa-caret-down"></i>
              </a>
              {isSubmissionOpen && (
                <ul className="dropdown-menu">
                 
                  <li><a href="/topics-of-interest" className="page-scroll">Topics of Interest</a></li>
                  
                  
                  
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#program" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setProgramOpen); }}>
                
              </a>
              {isProgramOpen && (
                <ul className="dropdown-menu">
                  
                  
                  
                  
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#registration" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setRegistrationOpen); }}>
                
              </a>
              {isRegistrationOpen && (
                <ul className="dropdown-menu">
                  
                  
                  
                  
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#venue" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setVenueOpen); }}>
                
              </a>
              {isVenueOpen && (
                <ul className="dropdown-menu">
                  
                  
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#policy" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setPolicyOpen); }}>
                
              </a>
              {isPolicyOpen && (
                <ul className="dropdown-menu">
                  
                  
                  
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
