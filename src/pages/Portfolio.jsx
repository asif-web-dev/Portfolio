// src/pages/Portfolio.jsx
const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A responsive online store built using React and Firebase.",
      tech: ["React", "Firebase", "Tailwind"],
      liveLink: "https://e-commerce-website-alpha-henna.vercel.app/",
      codeLink: "#",
    },
    {
      title: "Todo App",
      description: "A simple and clean todo list app with localStorage.",
      tech: ["React", "JavaScript"],
      liveLink: "https://todo-app-blue-five-22.vercel.app/",
      codeLink: "#",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm px-2 py-1 rounded mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;



