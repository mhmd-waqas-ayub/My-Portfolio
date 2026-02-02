// import React, { useState } from "react";

// function Contact() {
//   // ✅ State to track submission
//   const [status, setStatus] = useState("idle");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const form = e.target;
//     const data = new FormData(form);

//     const response = await fetch("https://formspree.io/f/mrekvzyp", {
//       method: "POST",
//       body: data,
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     if (response.ok) {
//       setStatus("success");
//       form.reset(); // clear form after success
//     } else {
//       setStatus("error");
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="pt-24 pb-16 bg-gray-100 text-center min-h-screen"
//     >
//       <h2 className="text-3xl font-bold text-blue-600 mb-8">Contact Me</h2>

//       <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
//         I’d love to hear from you! Whether you have a project idea, a question,
//         or just want to connect, feel free to reach out.
//       </p>

//       {/* ✅ Contact form */}
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-lg mx-auto space-y-4 text-left"
//       >
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Message</label>
//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           disabled={status === "sending"}
//           className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           {status === "sending" ? "Sending..." : "Send Message"}
//         </button>
//       </form>

//       {/* ✅ Success / Error messages */}
//       {status === "success" && (
//         <p className="mt-6 text-green-600 font-semibold">
//           ✅ Thanks! Your message has been sent.
//         </p>
//       )}
//       {status === "error" && (
//         <p className="mt-6 text-red-600 font-semibold">
//           ❌ Oops! Something went wrong. Please try again.
//         </p>
//       )}

//       {/* Social links */}
//       <div className="flex justify-center space-x-6 mt-8">
//         <a
//           href="https://github.com/mhmd-waqas-ayub"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-700 hover:text-blue-600 font-semibold"
//         >
//           GitHub
//         </a>
//         <a
//           href="https://www.linkedin.com/in/muhammad-waqas-ayub-a965423a5"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-700 hover:text-blue-600 font-semibold"
//         >
//           LinkedIn
//         </a>
//         <a
//           href="mailto:waqasayub7951352@gmail.com"
//           className="text-gray-700 hover:text-blue-600 font-semibold"
//         >
//           Gmail
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Contact;
// Import React and useState hook
import React, { useState } from "react";

function Contact() {
  // State variable to track form submission status: "idle", "sending", "success", "error"
  const [status, setStatus] = useState("idle");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission
    setStatus("sending"); // Set status to "sending" while request is in progress

    const form = e.target; // Get the form element
    const data = new FormData(form); // Collect form data into FormData object

    // Send form data to Formspree endpoint
    const response = await fetch("https://formspree.io/f/mrekvzyp", {
      method: "POST", // Use POST request
      body: data, // Attach form data
      headers: {
        Accept: "application/json", // Expect JSON response
      },
    });

    // If submission is successful
    if (response.ok) {
      setStatus("success"); // Update status to success
      form.reset(); // Clear the form fields
    } else {
      setStatus("error"); // Update status to error if something goes wrong
    }
  };

  return (
    // Contact section wrapper with padding and background
    <section
      id="contact" // Section ID for navigation
      className="pt-24 pb-16 bg-gray-100 text-center min-h-screen" // Tailwind classes for spacing, background, alignment
    >
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Contact Me</h2>

      {/* Introductory text */}
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
        I’d love to hear from you! Whether you have a project idea, a question,
        or just want to connect, feel free to reach out.
      </p>

      {/* Contact form */}
      <form
        onSubmit={handleSubmit} // Attach custom submit handler
        className="max-w-lg mx-auto space-y-4 text-left" // Tailwind classes for width, spacing, alignment
      >
        {/* Name field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text" // Input type text
            name="name" // Field name
            placeholder="Your Name" // Placeholder text
            required // Make field required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" // Tailwind styling
          />
        </div>

        {/* Email field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email" // Input type email
            name="email" // Field name
            placeholder="Your Email" // Placeholder text
            required // Make field required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" // Tailwind styling
          />
        </div>

        {/* Message field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message" // Field name
            rows="5" // Height of textarea
            placeholder="Your Message" // Placeholder text
            required // Make field required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" // Tailwind styling
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit" // Button type submit
          disabled={status === "sending"} // Disable button while sending
          className="w-full flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" // Tailwind styling
        >
          {/* Show spinner + text while sending */}
          {status === "sending" ? (
            <>
              {/* Spinner icon */}
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white" // Tailwind animation + size
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message" // Default button text
          )}
        </button>
      </form>

      {/* Success message */}
      {status === "success" && (
        <p className="mt-6 text-green-600 font-semibold">
          ✅ Thanks! Your message has been sent.
        </p>
      )}

      {/* Error message */}
      {status === "error" && (
        <p className="mt-6 text-red-600 font-semibold">
          ❌ Oops! Something went wrong. Please try again.
        </p>
      )}

      {/* Social links */}
      <div className="flex justify-center space-x-6 mt-8">
        {/* GitHub link */}
        <a
          href="https://github.com/mhmd-waqas-ayub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 font-semibold"
        >
          GitHub
        </a>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/muhammad-waqas-ayub-a965423a5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 font-semibold"
        >
          LinkedIn
        </a>

        {/* Gmail link */}
        <a
          href="mailto:waqasayub7951352@gmail.com"
          className="text-gray-700 hover:text-blue-600 font-semibold"
        >
          Gmail
        </a>
      </div>
    </section>
  );
}

// Export Contact component so it can be used in App.js
export default Contact;