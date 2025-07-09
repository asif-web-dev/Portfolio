import React from "react";
import { FaCode, FaFigma, FaCloudUploadAlt, FaFire } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={30} className="text-indigo-600" />,
    title: "Website Development",
    description: "Modern and responsive websites using React and Tailwind CSS.",
  },
  {
    icon: <FaFigma size={30} className="text-indigo-600" />,
    title: "UI/UX Conversion",
    description: "Pixel-perfect design to code conversion from Figma or mockups.",
  },
  {
    icon: <FaCloudUploadAlt size={30} className="text-indigo-600" />,
    title: "Website Deployment",
    description: "Deploying websites to Vercel, Netlify, or GitHub Pages.",
  },
  {
    icon: <FaFire size={30} className="text-indigo-600" />,
    title: "Firebase Integration",
    description: "User authentication and database using Firebase.",
  },
];

const Services = () => {
  return (
    <div className="text-gray-900 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Services</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
