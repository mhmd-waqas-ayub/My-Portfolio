// // Import React and useState hook
// import React, { useState } from "react";

// // Import icons from lucide-react (hamburger menu and close icon)
// import { Menu, X } from "lucide-react";

// // Define the Navbar component
// function Navbar() {
//   // State variable to track whether the menu is open (true) or closed (false)
//   const [isOpen, setIsOpen] = useState(false);

//   // Return JSX (UI structure)
//   return (
//     // Main navigation container
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      
//       {/* Inner wrapper: logo + hamburger button */}
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Logo text */}
//         <div className="text-2xl font-bold text-blue-600">My Portfolio</div>

//         {/* Hamburger button (always visible on all screen sizes) */}
//         <button
//           className="text-gray-700"
//           // Toggle menu open/close when clicked
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {/* If menu is open → show X icon, else show Menu icon */}
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Dropdown menu (only renders when isOpen = true) */}
//       {isOpen && (
//         <div className="bg-white shadow-lg">
//           {/* Flex column layout for stacked links */}
//           <div className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            
//             {/* Each link closes the menu when clicked */}
//             <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</a>
//             <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Skills</a>
//             <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Projects</a>
//             <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Experience</a>
//             <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// // Export Navbar so it can be imported in App.js
// export default Navbar;
// Import React and useState hook
import React, { useState } from "react";

// Import icons from lucide-react (hamburger menu and close icon)
import { Menu, X } from "lucide-react";

function Navbar() {
  // State variable to track whether the menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Top row: logo + hamburger */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">My Portfolio</div>

        {/* Hamburger button (always visible) */}
        <button
          className="text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown menu (only shows when isOpen = true) */}
      {isOpen && (
        <div className="bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</a>
           <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;