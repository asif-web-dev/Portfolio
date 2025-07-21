// src/pages/Portfolio.jsx
const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A responsive online store built using React and Firebase.",
      tech: ["React", "Firebase", "Tailwind"],
      liveLink: "https://e-commerce-website-asif-web.vercel.app/",
      codeLink: "https://github.com/asif-web-dev/ECommerce-Website",
    },
    {
      title: "Todo App",
      description: "A simple and clean todo list app with Sessionstorage",
      tech: ["React", "JavaScript"],
      liveLink: "https://todo-app-asif-web.vercel.app/",
      codeLink: "https://github.com/asif-web-dev/Todo-App",
    },
    {
      title : "Blog app",
      description: "A modern blog platform to create, edit, and share posts with a sleek and responsive UI.",
      tech: ["React","Firebase", "Tailwind"],
      liveLink :"https://blog-app-asif-web.vercel.app/",
      codeLink: "https://github.com/asif-web-dev/blog-app"
    }
  ];

  return (
    <div className="px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold mb-6  text-center text-gray-900 ">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm px-2 py-1 rounded "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex  flex-col sm: flex-row gap-3 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                className="text-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 w-full sm:w-auto"
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




