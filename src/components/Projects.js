// Import React so we can use JSX syntax
import React from "react";

// Define the Projects component
function Projects() {
  return (
    // Section wrapper for the Projects part of your portfolio
    <section
      id="projects" // This allows navigation links to scroll to this section
      className="pt-24 pb-16 bg-gray-50 text-center min-h-screen"
    >
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-blue-600 mb-8">My Projects</h2>

      {/* Grid layout: 2 columns on medium screens, gap between cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* ================= JWT Backend ================= */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
          {/* Project title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            JWT Backend (Node.js)
          </h3>
          {/* Short description */}
          <p className="text-gray-600 mb-4">
            Secure backend with JWT authentication built using Node.js and Express.
          </p>
          {/* Buttons row (only GitHub for backend) */}
          <div className="flex justify-center">
            <a
              href="https://github.com/mhmd-waqas-ayub/JWT-Node"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* ================= JWT Frontend ================= */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            JWT Frontend (React)
          </h3>
          <p className="text-gray-600 mb-4">
            React frontend with JWT login and protected routes.
          </p>
          {/* Buttons row (GitHub + Live Demo for frontend) */}
          <div className="flex justify-center space-x-4">
            {/* GitHub button */}
            <a
              href="https://github.com/mhmd-waqas-ayub/JWT-React"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              GitHub
            </a>
            {/* Live Demo button */}
            <a
              href="https://incredible-duckanoo-6845e5.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* ================= CRUD + File Upload ================= */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            CRUD + File Upload
          </h3>
          <p className="text-gray-600 mb-4">
            Full CRUD operations with file upload functionality.
          </p>
          {/* Buttons row (only GitHub for this project) */}
          <div className="flex justify-center">
            <a
              href="https://github.com/mhmd-waqas-ayub/CRUD-and-Upload-file"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* ================= APIs CRUD ================= */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            APIs CRUD
          </h3>
          <p className="text-gray-600 mb-4">
            REST API project with CRUD functionality.
          </p>
          {/* Buttons row (only GitHub for this project) */}
          <div className="flex justify-center">
            <a
              href="https://github.com/mhmd-waqas-ayub/Apis-CRUD"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// Export the component so it can be imported in App.js
export default Projects;