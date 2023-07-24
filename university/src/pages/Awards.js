import React from "react";
import { conferences, publications, awards } from "../utils/constants";

const Awards = () => {
  return (
    <div className="publications-wrapper">
      <div className="container">
        <div className="publications">
          <header>
            <h3>Awards</h3>
            <h6>Awards & Fellowships</h6>
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
              {awards.map((item, index) => (
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

export default Awards;
