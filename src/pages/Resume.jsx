

import React from 'react';

const Resume = () => {
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
- Tailwind CSS Full Course

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
    <div className="px-4 sm:px-6 md:px-12 py-10 text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-indigo-700">Resume</h1>

      {/* Intro */}
      <p className="text-base sm:text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
        I am a dedicated frontend developer who has built and deployed 5+ personal projects using React, JavaScript, HTML, and CSS. While I don't have professional experience yet, I have been independently creating, deploying, and learning modern frontend tools with passion and discipline.
      </p>

      {/* Project Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Project Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-xl font-semibold">Self-Built React Projects</h3>
            <p className="text-gray-700">
              Created and deployed over 5 frontend applications using React, JavaScript, HTML, and CSS. Some of these include a portfolio website, todo app, and e-commerce frontend, all hosted on Vercel and styled with Tailwind/Bootstrap.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Bachelor of Commerce (B.Com) – Cluster University, Srinagar</h3>
            <p className="text-gray-700 italic">Currently pursuing – 2nd Year</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Class 12th – CBSE</h3>
            <p className="text-gray-700">Completed under CBSE board</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Class 10th – CBSE</h3>
            <p className="text-gray-700">Completed under CBSE board</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Courses Completed</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base">
          <li>JavaScript Full Course</li>
          <li>React.js Full Course</li>
          <li>HTML & CSS Full Course</li>
          <li>Tailwind CSS Full Course</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 text-sm text-white">
          <span className="bg-yellow-500 px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-blue-600 px-3 py-1 rounded-full">React</span>
          <span className="bg-sky-500 px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="bg-purple-600 px-3 py-1 rounded-full">Bootstrap</span>
          <span className="bg-green-600 px-3 py-1 rounded-full">Firebase</span>
          <span className="bg-gray-700 px-3 py-1 rounded-full">Git & GitHub</span>
          <span className="bg-black px-3 py-1 rounded-full">Vercel</span>
          <span className="bg-pink-500 px-3 py-1 rounded-full">Appwrite</span>
        </div>
      </section>

      {/* Download Button */}
      <div className="text-center mt-10">
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

export default Resume;
