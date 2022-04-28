/* eslint-disable no-restricted-globals */
import React from "react";
import "../Animation/Animation1.css";

const Animation1 = () => {
  let count = 0;
  setInterval(() => {
    count++;
    if (count == 3) {
      location.replace("/landpage");
    }
  }, 1000);
  return (
    <div>
      <div className="a1body">
        <div className="a1txt">NPA</div>
      </div>
    </div>
  );
};

export default Animation1;
