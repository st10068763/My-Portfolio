import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="border rounded shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="mt-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">View Project</a>
    </div>
  );
};

export default ProjectCard;
