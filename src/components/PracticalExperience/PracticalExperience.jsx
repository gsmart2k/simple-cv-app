/** @format */

import React from "react";
import "../../App.css";

function PracticalExperience() {
  return (
    <div className="practical-container">
      <div className="info-div">
        <div id="line"></div>
        <h5>Practical Experience</h5>
        <div id="line"></div>
      </div>
      <div className="form-container-practicalexp">
        <form className="form-container">
          <div className="label-div">
            <label htmlFor="name">Company Name</label>
            <input type="text"></input>
          </div>
          <div className="label-div">
            <label htmlFor="email">Position Title</label>
            <input type="text"></input>
          </div>
          <div className="label-div">
            <label htmlFor="number">Main Tasks (Jobs)</label>
            <input type="text"></input>
          </div>
          <div className="label-div">
            <label htmlFor="number">Start Date</label>
            <input id="date-start" type="date"></input>
          </div>
          <div className="label-div">
            <label htmlFor="date-end">
              End Date (If you still work, leave blank)
            </label>
            <input id="date-end" type="date"></input>
          </div>
        </form>
        <button id="saveBtn">Save</button>
        <div className="new-section">
          <h3 id="add-btn">+</h3>
          <p> Add New Practical Experience</p>
        </div>
      </div>
    </div>
  );
}

export default PracticalExperience;
