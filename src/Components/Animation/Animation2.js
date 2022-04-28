/* eslint-disable no-restricted-globals */
import React from "react";
import "./Animation2.css";

const Animation2 = () => {
  let count = 0;
  setInterval(() => {
    count++;
    if (count == 2) {
      location.replace("/homepage");
    }
  }, 1000);
  return (
    <div className="a2body">
      <div className="a2nlogo">
        <div className="a2npa">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="a2heading">News Portal Application</h3>
      </div>
    </div>
  );
};

export default Animation2;
