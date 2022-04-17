/** @format */

import React from "react";
import "../../App.css";

const EducationalExperience = () => {
  return (
    <div className="container">
      <div className="info-div">
        <div id="line"></div>
        <h5>Educational Experience</h5>
        <div id="line"></div>
      </div>
      <form className="form-container">
        <div className="label-div">
          <label htmlFor="name">School Name</label>
          <input type="text"></input>
        </div>
        <div className="label-div">
          <label htmlFor="email">Title of Study</label>
          <input type="text"></input>
        </div>
        <div className="label-div">
          <label htmlFor="number">Date Of Study</label>
          <input type="date"></input>
        </div>
      </form>
    </div>
  );
};

export default EducationalExperience;
