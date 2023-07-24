import React from "react";
import { conferences, technology } from "../utils/constants";

const Technology = () => {
  return (
    <div className="publications-wrapper">
      <div className="container">
        <div className="publications">
          <header>
            <h3>Technology Development/ Implementation</h3>
          </header>
          <div className="publications-content">
            <ul>
              {technology.map((item, index) => (
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

export default Technology;
