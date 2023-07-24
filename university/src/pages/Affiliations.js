import React from "react";
import { affiliations, awards } from "../utils/constants";

const Affiliations = () => {
  return (
    <div className="publications-wrapper">
      <div className="container">
        <div className="publications">
          <header>
            <h3>Professional affiliations</h3>
            <h6></h6>
            <p>
              Full information also available at{" "}
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </p>
          </header>
          <div className="publications-content">
            <ul>
              {affiliations.map((item, index) => (
                <li key={index} className="publications-list">
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
