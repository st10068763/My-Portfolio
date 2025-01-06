import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Kalamu Verein Website',
      description: 'A dynamic WordPress website for a Germany-based NGO to support educational initiatives in African countries.',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
      link: 'https://www.kalamu-verein.de/', // Link to the projects page
    },
    {
      title: 'Materfamilia Web App',
      description: 'A full-stack application with responsive design and robust backend integration for smooth user experience.',
      image: require('../Assets/images/Materfamilia Logo Png.png'),
      link: 'https://essmaterwebapp20241219165119.azurewebsites.net/',
    },
    {
      title: 'Portfolio Website',
      description: 'A portfolio showcasing my projects, skills, and experience as a software developer.',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
      link: '#',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <div className="container mx-auto px-6">
          <img
            src={require('../Assets/images/IMG_2262 - Copy.JPG')}
            alt="Zacarias Antero"
            className="mx-auto rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">Zacarias Pinto Joao Antero</h1>
          <p className="text-lg">
            Passionate Software Developer specializing in full-stack development, creating seamless user experiences and scalable backend solutions.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white shadow rounded overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link
                    to={project.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded inline-block hover:bg-blue-700"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
