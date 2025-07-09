import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-6 py-12 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Left Info Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-600">Let’s work together</h2>
          <p className="text-gray-600">
            Whether you have a question, project idea, or just want to say hi — my inbox is open.
            I’ll try to get back to you within a day or two.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-indigo-500" />
              <span>youremail@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaGithub className="text-indigo-500" />
              <span>github.com/yourusername</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaLinkedin className="text-indigo-500" />
              <span>linkedin.com/in/yourusername</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form
          action="https://formsubmit.co/your-email@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
