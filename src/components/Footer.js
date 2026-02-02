// Import React so we can use JSX
import React from "react";

// Define the Footer component
function Footer() {
  return (
    // Footer section: fixed at the bottom, light background, centered text
    <footer className="bg-gray-200 text-gray-700 py-6 text-center">
      
      {/* Copyright text */}
      <p className="mb-4">
        © {new Date().getFullYear()} Waqas Ayub. All rights reserved.
      </p>

      
    </footer>
  );
}

// Export Footer so it can be imported in App.js
export default Footer;