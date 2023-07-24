import React from "react";
import { funding_content, funding_heading, technology } from "../utils/constants";

const Funding = () => {
  return (
    <div className="publications-wrapper">
      <div className="container">
        <div className="publications">
          <header>
            <h3>Funding</h3>
          </header>
          <div className="publications-content">
          <table class="styled-table">
            <thead>
            {funding_heading.map((item, index) => (
            <tr key={index} >
                <td>{item.s_no}</td>
                <td>{item.title}</td>
                <td>{item.period}</td>
            </tr>
            ))}
            </thead>
            <tbody>
            {funding_content.map((item, index) => (
            <tr key={index} >
                <td>{item.s_no}</td>
                <td>{item.title}</td>
                <td>{item.period}</td>
            </tr>
            ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;

            // <ul>
            //   {funding.map((item, index) => (
            //     <li key={index} className="publications-list">
            //         <td>{item.s_no}</td>
            //         <td>{item.title}</td>
            //         <td>{item.period}</td>
            //     </li>
            //   ))}
            // </ul>
    