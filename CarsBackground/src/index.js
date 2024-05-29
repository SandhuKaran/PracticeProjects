import React, { StrictMode } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import AnimatedBackground from "./components/AnimatedBackground";
import OriginInput from "./components/OriginInput";
import "./App.css";

function App() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <section>
        <AnimatedBackground />
      </section>
      <section id="section-origin" className="section-origin">
        <OriginInput />
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
