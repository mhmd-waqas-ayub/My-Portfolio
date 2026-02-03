import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import { ArrowDownCircle } from "lucide-react"; // download arrow icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">My Portfolio</div>

        {/* Right side: Download CV + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* ✅ Download CV Arrow (always visible) */}
          <a
            href="https://www.overleaf.com/download/project/6960ac514ce186cb1df03fe0/build/19c21dee194-67a3739c6155f757/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-c3d-b-f-6ltk&enable_pdf_caching=true&popupDownload=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            title="Download CV"
          >
            <ArrowDownCircle size={28} />
            <span>Download CV</span>
          </a>

          {/* Hamburger button */}
          <button
            className="text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Projects</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Experience</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;