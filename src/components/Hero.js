// Import React so we can use JSX
import React from "react";

// Import the ReactTyped component for typewriter animation effect
import { ReactTyped } from "react-typed";

// Import your profile picture from the assets folder
import profilePic from "../assets/profile.jpg";

// Define the Hero component
function Hero() {
  return (
    // Hero section: full screen height, centered content, light gray background
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center"
    >
      {/* Profile image wrapper */}
      <div className="flex justify-center mb-6">
        <img
          src={profilePic} // image source from assets folder
          alt="Profile" // alt text for accessibility
          className="w-56 h-56 rounded-full shadow-xl object-cover object-top" 
          // w-56 h-56 → makes the image bigger (224px x 224px)
          // rounded-full → ensures a perfect circle
          // shadow-xl → adds a professional shadow
          // object-cover → scales the image to fill the circle without distortion
          // object-top → aligns the image so your head is centered instead of cut off
        />
      </div>

      {/* Greeting heading */}
      <h1 className="text-4xl font-bold text-slate-600 mb-2">
        Hi, I'm Waqas Ayub
      </h1>

      {/* Typing animation */}
      <p className="text-lg font-semibold text-gray-800 mb-6">
        <ReactTyped
          strings={[
            "A Passionate MERN Stack Developer",
            "Building stylish and responsive UIs",
            "Always learning and improving"
          ]}
          typeSpeed={50}
          backSpeed={35}
          loop
        />
      </p>

      {/* Call-to-action buttons */}
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;