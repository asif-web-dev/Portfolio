
import React from 'react';

const About = () => {
  const handleDownloadText = () => {
    const content = `
Resume of Asif

Intro:
I am a dedicated frontend developer who has built and deployed 5+ personal projects using React, JavaScript, HTML, and CSS. While I don't have professional experience yet, I have been independently creating, deploying, and learning modern frontend tools with passion and discipline.

Projects:
- Self-Built React Projects: Portfolio, Todo App, E-commerce site using React, Tailwind, Firebase

Education:
- B.Com (2nd Year) – Cluster University Srinagar
- Class 12th – CBSE
- Class 10th – CBSE

Courses Completed:
- JavaScript Full Course
- React.js Full Course
- HTML & CSS Full Course

Tech Stack:
JavaScript, React, Tailwind CSS, Bootstrap, Firebase, Git, Vercel, Appwrite
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Asif_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="px-4 sm:px-6 py-10 text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">About Me</h1>

      <p className="text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
        Hi! I'm <span className="font-semibold text-indigo-600">Asif</span>, a passionate frontend developer who loves crafting modern, responsive, and user-friendly websites. I specialize in building beautiful interfaces using technologies like <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Tailwind CSS</strong>. I'm currently learning full-stack development to expand my skills.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Tech Stack</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-disc pl-5 max-w-xl mx-auto sm:mx-0">
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>HTML & CSS</li>
        <li>Firebase</li>  
        <li>Appwrite</li>
        <li>Git & GitHub</li>
      </ul>

      <div className="text-center sm:text-left mt-10">
        <button
          onClick={handleDownloadText}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Download My Resume (TXT)
        </button>
      </div>
    </div>
  );
};

export default About;
