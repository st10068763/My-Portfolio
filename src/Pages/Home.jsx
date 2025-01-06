import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaFileDownload } from 'react-icons/fa';


const Home = () => {
  const featuredProjects = [
    {
      title: 'Kalamu Verein Website',
      description: 'A dynamic WordPress website for a Germany-based NGO to support educational initiatives in African countries.',
      image: require('../Assets/images/Kalamu_Logo.png'),
      link: 'https://www.kalamu-verein.de/',
    },
    {
      title: 'Materfamilia Web App',
      description: 'A full-stack application with responsive design and robust backend integration for smooth user experience.',
      image: require('../Assets/images/Materfamilia Logo Png.png'),
      link: 'https://essmaterwebapp20241219165119.azurewebsites.net/',
    },
    {
      title: 'MedCheck Mobile App',
      description: 'A mobile application that allows users set notification reminders, view medical records, search for nearby pharmacies and hospitals, and also allows the user to research about any medication with its warnings, usages and dosages.',
      image: require('../Assets/images/medcheck_logo.png'),
      link: '#',
    },
  ];
  //------------------------------ Resume Section ------------------------------
  const workExperience = [
    {
      company: 'Kalamu Verein',
      role: 'Web Developer',
      description: 'Develop and maintain a dynamic WordPress website for a Germany-based NGO, enhancing user experience and increasing outreach.',
      duration: 'July 2024 - Present',
    },
    {
      company: 'Materfamilia',
      role: 'Full-Stack Developer',
      description: 'Led the development of a full-stack web app, focusing on responsive frontend design and robust backend integration.',
      duration: 'July 2024 - Present',
    },
    {
      company: 'M&G Investment',
      role: 'Data Clerk',
      description: 'Digitized historical documents, improving data accessibility and streamlining archiving processes.',
      duration: 'November 2022 - December 2022',
    },
  ];
  //------------------------------ Education Section ------------------------------
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

    {/* Work Experience Section */}
    <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="grid gap-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="bg-dark-card p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <FaBriefcase size={24} className="text-dark-accent mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">{job.company}</h3>
                    <p className="text-dark-accent font-semibold">{job.role}</p>
                    <p className="text-dark-textSecondary text-sm">{job.duration}</p>
                  </div>
                </div>
                <p className="text-dark-text">{job.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
          <a
              href={require('../Assets/resumes/Zacarias Antero Software Developer ENG.pdf')}
              download="Zacarias_Antero_Resume_ENG.pdf"
              className="inline-flex items-center bg-dark-accent text-dark-text px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-dark-accentHover transition duration-300"
            >
              <FaFileDownload size={20} className="mr-2" />
              Download Resume (English)
            </a>
            <a
              href={('../Assets/resumes/Zacarias Antero Software Developer PT.pdf')}
              download="Zacarias_Antero_Resume_PT.pdf"
              className="ml-4 inline-flex items-center bg-dark-accent text-dark-text px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-dark-accentHover transition duration-300"
            >
              <FaFileDownload size={20} className="mr-2" />
              Download Resume (Portuguese)
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
