export const moveCar = (car, width) => {
  const newPosition = { ...car.position };
  newPosition.x += 10; // Move 10 pixels to the right each interval

  return { ...car, position: newPosition };
};
