
import React from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaDatabase, FaCloudUploadAlt, FaGitAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={30} className="text-indigo-600" />,
    title: "Responsive Design",
    description: "Creating user interfaces that work on all devices using modern CSS frameworks.",
  },
  {
    icon: <FaCode size={30} className="text-indigo-600" />,
    title: "Frontend Development",
    description: "Building dynamic and performant user interfaces using React, Tailwind CSS, and Bootstrap.",
  },
  {
    icon: <FaDatabase size={30} className="text-indigo-600" />,
    title: "Firebase Integration",
    description: "Implementing authentication, Firestore database, and hosting using Firebase.",
  },
  {
    icon: <FaCloudUploadAlt size={30} className="text-indigo-600" />,
    title: "Appwrite Integration",
    description: "Setting up authentication, databases, and file storage using Appwrite.",
  },
  {
    icon: <FaGitAlt size={30} className="text-indigo-600" />,
    title: "Version Control",
    description: "Using Git and GitHub for efficient code versioning and project collaboration.",
  },
  {
    icon: <FaMobileAlt size={30} className="text-indigo-600" />,
    title: "Deployment",
    description: "Deploying applications to the web using platforms like Vercel and Netlify.",
  },
];

const Services = () => {
  return (
    <div className="px-4 py-12 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-transform duration-200 hover:scale-105 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
