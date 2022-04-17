/** @format */

import React from "react";
import "../../App.css";

const GeneralInfo = () => {
  return (
    <div className="container">
      <div className="info-div">
        <div id="line"></div>
        <h5>General Info</h5>
        <div id="line"></div>
      </div>
      <form className="form-container">
        <div className="label-div">
          <label htmlFor="name">Name</label>
          <input id="name" type="text"></input>
        </div>
        <div className="label-div">
          <label htmlFor="email">Email</label>
          <input id="email" type="text"></input>
        </div>
        <div className="label-div">
          <label htmlFor="number">Phone Number</label>
          <input id="number" type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
