import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = (props) => {
  const [isSubmissionOpen, setSubmissionOpen] = useState(false);
  const [isProgramOpen, setProgramOpen] = useState(false);
  const [isCommitteesOpen, setCommitteesOpen] = useState(false);

  const toggleSubmissionDropdown = () => {
    setSubmissionOpen(!isSubmissionOpen);
  };

  const toggleProgramDropdown = () => {
    setProgramOpen(!isProgramOpen);
  };

  const toggleCommitteesDropdown = () => {
    setCommitteesOpen(!isCommitteesOpen);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" >
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
            <li>
              <a href="/" target="_top" rel="noopener noreferrer" className="page-scroll">
                Home
              </a>
            </li>
            <li className="dropdown">
              <a
                href="/about"
                className="page-scroll"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmissionDropdown();
                }}
              >
                Submission <i className="fa fa-caret-down "></i>
              </a>
              {isSubmissionOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/call-for-papers" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Call for Papers
                    </a>
                  </li>
                  <li>
                    <a href="/topics-of-interest" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Topics of Interest
                    </a>
                  </li>
                  <li>
                    <a href="/important-dates" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Important Dates
                    </a>
                  </li>
                  <li>
                    <a href="/submission-details" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Submission Details
                    </a>
                  </li>
                  <li>
                  {/* ปุ่ม Registration */}
                      <a
                        href="/registration" target="_top" rel="noopener noreferrer"
                        className="text-registryhighlight bg-gradient-to-r from-purple-800 to-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-purple-500 hover:to-purple-800 transition"
                      >
                      Registration
                    </a>
                  </li>
                  <li>
                    <a href="/camera-ready" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Camera-Ready Guideline
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <a
                href="#program"
                className="page-scroll"
                onClick={(e) => {
                  e.preventDefault();
                  toggleProgramDropdown();
                }}
              >
                Program <i className="fa fa-caret-down"></i>
              </a>
              {isProgramOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/program-at-a-glance" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Program at a Glance
                    </a>
                  </li>
                  <li>
                    <a href="/accepted-papers" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Accepted Papers
                    </a>
                  </li>
                  <li>
                    <a href="/final-program" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Final Program
                    </a>
                  </li>
                  <li>
                    <a href="/best-paper-award" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Best Paper Award
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Gallery
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <a
                href="#committees"
                className="page-scroll"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCommitteesDropdown();
                }}
              >
                Committees <i className="fa fa-caret-down"></i>
              </a>
              {isCommitteesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/keynote-speakers" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Keynote Speakers
                    </a>
                  </li>
                  <li>
                    <a href="/organizing-committees" target="_top" rel="noopener noreferrer" className="page-scroll">
                      Organizing Committees
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/testimonials" target="_top" rel="noopener noreferrer" className="page-scroll">
                Venue
              </a>
            </li>
            <li>
                  {/* ปุ่ม Registration */}
                  <a
                        href="/registration" target="_top" rel="noopener noreferrer"
                        className="text-registryhighlight bg-gradient-to-r from-purple-800 to-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-purple-500 hover:to-purple-800 transition"
                      >
                      Registration
                    </a>
            </li>
            <li>
              
                <div className="page-scroll">
                  <span className="page-scroll"></span>
                  <span className="page-scroll"></span>
                </div>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
