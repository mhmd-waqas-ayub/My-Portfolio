// Import React and the useEffect hook
import React, { useEffect } from "react";

// Import your custom components
import Hero from "./components/Hero";       // Hero section (profile + intro)
import Skills from "./components/Skills";   // Skills section (MERN stack)
import Projects from "./components/Projects"; // Projects section (GitHub + Live Demo)
import Contact from "./components/Contact"; // Contact section (form)
import Footer from "./components/Footer";   // Footer section (social links)

// Define the App component
function App() {
  // useEffect runs after the component mounts
  useEffect(() => {
    // Always scroll to the top when the page loads or refreshes
    window.scrollTo(0, 0);
  }, []); // empty dependency array → runs only once on mount

  return (
    // Main wrapper for your portfolio
    <div>
      {/* Hero section at the top */}
      <Hero />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

// Export App so it can be rendered in index.js
export default App;