import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Kalamu Verein Website',
      description: 'A dynamic WordPress website for a Germany-based NGO to support educational initiatives in African countries.',
      image: 'https://via.placeholder.com/300', // Replace with actual project image
      link: 'https://www.kalamu-verein.de/',
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
      image: 'https://via.placeholder.com/300', // Replace with actual project image
      link: '#',
    },
  ];

  return (
    <div className="bg-dark-background text-dark-text min-h-screen">
      {/* Hero Section */}
        <section className="text-center py-16">
    <div className="container mx-auto px-6">
        <img
        src={require('../Assets/images/IMG_2262 - Copy.JPG')}
        alt="Zacarias Antero"
        className="mx-auto rounded-full w-40 h-40 mb-6 border-4 border-dark-accent shadow-lg animate-bounce"
        />
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Zacarias Pinto Joao Antero</h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in">
        Passionate Software Developer specializing in full-stack development, creating seamless user experiences and scalable backend solutions.
        </p>
        <Link
        to="/about"
        className="mt-6 inline-block bg-dark-accent text-dark-text px-6 py-2 rounded shadow-lg font-semibold hover:bg-dark-accentHover transition duration-300 ease-in-out"
        >
        Learn More About Me
        </Link>
    </div>
    </section>


      {/* Featured Projects Section */}
        <section className="py-16 bg-dark-card">
            <div className="container mx-auto px-6">
             <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
                <div
                key={index}
                className="relative p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-dark-card rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                >
                {/* Images */}
                <div className="relative overflow-hidden rounded-lg">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transform transition hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 rounded-lg"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-dark-text mb-2">{project.title}</h3>
                    <p className="text-dark-textSecondary mb-4">{project.description}</p>
                    <Link
                    to={project.link}
                    className="bg-dark-accent text-dark-text px-4 py-2 rounded hover:bg-dark-accentHover transition duration-300 ease-in-out"
                    >
                    View Project
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
