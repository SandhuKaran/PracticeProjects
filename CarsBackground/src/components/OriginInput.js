import React, { useState, useEffect, useRef } from "react";
import Car from "./Car";
import { moveCar } from "../utils/moveCars";
import "./OriginInput.css";
import "./WelcomeText.css"; // Import the new CSS file

const OriginInput = () => {
  const [cars, setCars] = useState([]);
  const [stops, setStops] = useState([""]);
  const sectionRef = useRef(null);

  // Function to generate a random position for a car outside the screen bounds
  const generateInitialPosition = () => {
    const side = Math.floor(Math.random() * 2); // Randomize which side the car will appear from
    let x, y;

    // Determine initial position based on which side the car appears from
    switch (side) {
      case 0: // Top side
        x = Math.random() * window.innerWidth;
        y = -50; // Car appears just above the screen
        break;
      case 1: // Left side
        x = -50; // Car appears just to the left of the screen
        y = Math.random() * window.innerHeight;
        break;
      default:
        break;
    }

    return { x, y };
  };

  // Function to add a new car to the array of cars
  const addCar = () => {
    const newCar = {
      id: Math.random(),
      position: generateInitialPosition(),
      direction: Math.random() < 0.5 ? "horizontal" : "vertical", // Randomly set direction to horizontal or vertical
    };
    setCars((prevCars) => [...prevCars, newCar]);
  };

  // Add a new car at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      addCar();
    }, Math.random() * 2000 + 1000); // Random interval between 1 and 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Move cars at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCars((prevCars) =>
        prevCars.map((car) =>
          moveCar(car, window.innerWidth, window.innerHeight)
        )
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element in view:", entry.target);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, 1000); // 1 second delay
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".input-section");
    elements.forEach((element) => {
      console.log("Observing element:", element);
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = () => {
    const element = document.getElementById("section-origin");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scrolls to the section smoothly
    }
  };

  const handleStopClick = (index) => {
    if (index === stops.length - 1 && stops.length < 15) {
      setStops([...stops, ""]);
    }
  };

  const handleStopChange = (index, value) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };

  return (
    <div className="animated-background">
      <div className="input-sections poppins-thin" ref={sectionRef}>
        <div className="input-section">
          <h1>Origin</h1>
          <input type="text" placeholder="Enter origin address" />
        </div>
        <div className="input-section">
          <h1>Stops</h1>
          {stops.map((stop, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Enter stop ${index + 1}`}
              value={stop}
              onChange={(e) => handleStopChange(index, e.target.value)}
              onClick={() => handleStopClick(index)}
            />
          ))}
        </div>
        <div className="input-section">
          <h1>Destination</h1>
          <input type="text" placeholder="Enter destination address" />
        </div>
      </div>
      {cars.map((car) => (
        <Car key={car.id} position={car.position} direction={car.direction} />
      ))}
      <div className="scroll-indicator" onClick={scrollToSection}>
        ↓
      </div>
    </div>
  );
};

export default OriginInput;
