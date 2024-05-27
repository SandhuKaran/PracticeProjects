// src/components/Car.js
import React from "react";
import "./Car.css";

const Car = ({ position }) => {
  return (
    <div className="car" style={{ top: position.y, left: position.x }}>
      <div className="car-body">
        <div className="car-headlight car-headlight-left"></div>
        <div className="car-headlight car-headlight-right"></div>
        <div className="car-windshield-rear"></div>
        <div className="car-windshield-front"></div>
      </div>
    </div>
  );
};

export default Car;
