import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      {/* Your other components go here */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
