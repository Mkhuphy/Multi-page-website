import React from "react";
import { consultancy_content, consultancy_heading } from "../utils/constants";

const Consultancy = () => {
  return (
    <div className="publications-wrapper">
      <div className="container">
        <div className="publications">
          <header>
            <h3>Consultancy</h3>
          </header>
          <div className="publications-content">
          <table class="styled-table">
            <thead>
            {consultancy_heading.map((item, index) => (
            <tr key={index} >
                <td>{item.s_no}</td>
                <td>{item.title}</td>
                <td>{item.period}</td>
            </tr>
            ))}
            </thead>
            <tbody>
            {consultancy_content.map((item, index) => (
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

export default Consultancy;

            // <ul>
            //   {funding.map((item, index) => (
            //     <li key={index} className="publications-list">
            //         <td>{item.s_no}</td>
            //         <td>{item.title}</td>
            //         <td>{item.period}</td>
            //     </li>
            //   ))}
            // </ul>
    