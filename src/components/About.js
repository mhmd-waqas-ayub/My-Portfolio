import React from "react";

function About() {
  return (
    <section
      id="about"
      className="pt-24 pb-16 bg-white text-center min-h-screen"
    >
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        About Me
      </h2>

      {/* About paragraph */}
      <p className="max-w-3xl mx-auto text-lg font-semibold text-gray-800 leading-relaxed">
        I am a passionate <span className="text-blue-600">MERN Stack Developer</span> 
        with experience building modern web applications using 
        <span className="font-bold"> MongoDB, Express.js, React.js, and Node.js</span>. 
        My focus is on creating responsive, user-friendly interfaces and 
        efficient back-end systems. I enjoy solving problems, learning new 
        technologies, and continuously improving my skills to deliver 
        high-quality projects.
      </p>
    </section>
  );
}

export default About;