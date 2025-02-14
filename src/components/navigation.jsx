import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isSubmissionOpen, setSubmissionOpen] = useState(false);
  const [isProgramOpen, setProgramOpen] = useState(false);
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const [isVenueOpen, setVenueOpen] = useState(false);
  const [isPolicyOpen, setPolicyOpen] = useState(false);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src={`${process.env.PUBLIC_URL}/img/ICITEE2025.png`}
              alt="ICITEE 2025 Logo"
              className="conference-logo"
            />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="/" className="page-scroll">Home</a></li>
            
            <li className="dropdown">
              <a href="#about" className="page-scroll" onClick={(e) => { e.preventDefault(); setAboutOpen(!isAboutOpen); }}>About <i className="fa fa-caret-down"></i></a>
              {isAboutOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/about-icitee" className="page-scroll">About ICITEE</a></li>
                  <li><a href="/organizing-committee" className="page-scroll">Organizing Committee</a></li>
                  <li><a href="/past-conferences" className="page-scroll">Past Conferences</a></li>
                  <li><a href="/gallery" className="page-scroll">Gallery</a></li>
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#submission" className="page-scroll" onClick={(e) => { e.preventDefault(); setSubmissionOpen(!isSubmissionOpen); }}>Submission <i className="fa fa-caret-down"></i></a>
              {isSubmissionOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/call-for-papers" className="page-scroll">Call for Papers</a></li>
                  <li><a href="/topics-of-interest" className="page-scroll">Topics of Interest</a></li>
                  <li><a href="/paper-submission-guidelines" className="page-scroll">Paper Submission Guidelines</a></li>
                  <li><a href="/important-dates" className="page-scroll">Important Dates</a></li>
                  <li><a href="/submission-portal" className="page-scroll">Submission Portal Link</a></li>
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#program" className="page-scroll" onClick={(e) => { e.preventDefault(); setProgramOpen(!isProgramOpen); }}>Program <i className="fa fa-caret-down"></i></a>
              {isProgramOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/keynote-speakers" className="page-scroll">Keynote Speakers</a></li>
                  <li><a href="/conference-schedule" className="page-scroll">Conference Schedule</a></li>
                  <li><a href="/accepted-papers" className="page-scroll">Accepted Papers List</a></li>
                  <li><a href="/best-paper-award" className="page-scroll">Best Paper Award</a></li>
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#registration" className="page-scroll" onClick={(e) => { e.preventDefault(); setRegistrationOpen(!isRegistrationOpen); }}>Registration <i className="fa fa-caret-down"></i></a>
              {isRegistrationOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/registration-fees" className="page-scroll">Registration Fees</a></li>
                  <li><a href="/payment-methods" className="page-scroll">Payment Methods</a></li>
                  <li><a href="/registration-portal" className="page-scroll">Registration Portal Link</a></li>
                  <li><a href="/cancellation-policy" className="page-scroll">Cancellation Policy</a></li>
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#venue" className="page-scroll" onClick={(e) => { e.preventDefault(); setVenueOpen(!isVenueOpen); }}>Venue & Travel Information <i className="fa fa-caret-down"></i></a>
              {isVenueOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/conference-venue" className="page-scroll">Conference Venue Details</a></li>
                  <li><a href="/travel-guidance" className="page-scroll">Travel Guidance</a></li>
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a href="#policy" className="page-scroll" onClick={(e) => { e.preventDefault(); setPolicyOpen(!isPolicyOpen); }}>Policy <i className="fa fa-caret-down"></i></a>
              {isPolicyOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/paper-citation" className="page-scroll">Paper Citation</a></li>
                  <li><a href="/ieee-format" className="page-scroll">IEEE Format</a></li>
                  <li><a href="/rolling-review" className="page-scroll">Rolling/Open Review Process</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};