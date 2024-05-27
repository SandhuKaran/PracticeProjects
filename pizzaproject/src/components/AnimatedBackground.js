import React, { useState, useEffect } from "react";
import Car from "./Car";
import { moveCar } from "../utils/moveCars";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const [car, setCar] = useState({
    id: Math.random(),
    position: { x: 0, y: window.innerHeight / 2 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCar((prevCar) => moveCar(prevCar, window.innerWidth));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-background">
      <Car position={car.position} />
    </div>
  );
};

export default AnimatedBackground;
