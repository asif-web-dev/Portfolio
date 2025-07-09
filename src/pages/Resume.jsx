// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <div className="text-gray-900 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Resume</h1>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Frontend Developer — Freelance</h3>
          <p className="text-gray-700 italic">Jan 2024 – Present</p>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
            <li>Built responsive websites using React and Tailwind CSS</li>
            <li>Deployed projects to Vercel and Netlify</li>
            <li>Integrated Firebase for authentication and data storage</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-gray-700 italic">XYZ University — 2021–2024</p>
        </div>
      </section>

      {/* Certifications or Courses */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Certifications</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>React Frontend Developer Course – Udemy</li>
          <li>JavaScript Mastery – YouTube Projects</li>
        </ul>
      </section>

      {/* Resume Button */}
      <div className="mt-8">
        <a
          href="/Asif_Resume.pdf"
          download
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          Download Full Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
