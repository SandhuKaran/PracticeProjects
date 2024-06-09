import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AnimatedBackground from "./components/AnimatedBackground";
import OriginInput from "./components/OriginInput";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [addresses, setAddresses] = useState([]);

  const handleSubmit = (newAddresses) => {
    setAddresses(newAddresses);
    const element = document.getElementById("section-results");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <section id="section-welcome">
        <AnimatedBackground />
      </section>
      <section id="section-origin" className="section-origin">
        <OriginInput onSubmit={handleSubmit} />
      </section>
      <section id="section-results" className="section-results">
        <Results addresses={addresses} />
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Render App component */}
  </React.StrictMode>
);
