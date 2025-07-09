// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="text-gray-900 px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <p className="text-lg mb-6 leading-relaxed max-w-3xl">
        Hi! I'm <span className="font-semibold text-indigo-500">Asif</span>, a passionate frontend developer who loves crafting modern, responsive, and user-friendly websites. I specialize in building beautiful interfaces using technologies like <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Tailwind CSS</strong>. I'm currently learning full-stack development to expand my skills.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tech Stack</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-disc pl-5">
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>HTML & CSS</li>
        <li>Firebase</li>  
        <li>Appwrite</li>
        <li>Git & GitHub</li>
      </ul>

      <div className="mt-8">
        <a
          href="/Asif_Resume.pdf"
          download
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
