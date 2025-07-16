import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HealthWellnessSection from "./components/HealthWellnessSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigate} />

    
      {activeSection === "home" && (
        <section className="py-20 text-center text-3xl font-semibold text-teal-700">
          Welcome to the Wellness App Homepage!
        </section>
      )}

    
      {activeSection === "health" && <HealthWellnessSection />}
    </div>
  );
}

export default App;
