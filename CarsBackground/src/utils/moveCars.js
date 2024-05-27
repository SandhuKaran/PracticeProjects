export const moveCar = (car, width, height) => {
  const newPosition = { ...car.position };

  // Move horizontally to the right for horizontal cars
  if (car.direction === "horizontal") {
    newPosition.x += 10; // Move 10 pixels to the right each interval
  }
  // Move vertically downwards for vertical cars
  else if (car.direction === "vertical") {
    newPosition.y += 10; // Move 10 pixels down each interval
  }

  return { ...car, position: newPosition };
};
