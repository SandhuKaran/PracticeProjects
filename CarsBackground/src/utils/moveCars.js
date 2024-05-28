// src/utils/moveCars.js
export const moveCar = (car, width, height) => {
  const newPosition = { ...car.position };

  // Move horizontally to the right for horizontal cars
  if (car.direction === "horizontal") {
    newPosition.x += 7; // Move 5 pixels to the right each interval
  }
  // Move vertically downwards for vertical cars
  else if (car.direction === "vertical") {
    newPosition.y += 7; // Move 5 pixels down each interval
  }

  return { ...car, position: newPosition };
};
