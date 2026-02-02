// Import React
import React from "react";

// Define Skills component
function Skills() {
  return (
    <section
      on
  id="skills"
  className="pt-24 pb-16 bg-white text-center min-h-screen">
    
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        My Skills
      </h2>

      {/* Skills grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        
        {/* Each skill card */}
        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">React.js</span>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">Tailwind CSS</span>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">JavaScript</span>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">Node.js</span>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">Express.js</span>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">MongoDB</span>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">Git & GitHub</span>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <span className="text-lg font-semibold text-gray-800">REST APIs</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;