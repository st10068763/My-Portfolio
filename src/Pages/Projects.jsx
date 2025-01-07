import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  //const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Materfamilia Web App',
      description: `Materfamilia is a full-stack application designed to support families by providing
        tools for organization, scheduling, and communication.`,
      images: [
        require('../Assets/images/materfamilia.png'),
        require('../Assets/images/materfamilia1.png'),
        require('../Assets/images/materfamilia2.png'),
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Azure', 'RESTful APIs'],
      features: ['User authentication', 'Dynamic scheduling', 'Integrated messaging system'],
      link: 'https://essmaterwebapp20241219165119.azurewebsites.net',
    },
    {
      title: 'MedCheck App',
      description: `MedCheck is a healthcare app designed to improve patient-doctor communication.`,
      images: [
        require('../Assets/images/medcheck_logo.png'),
        require('../Assets/images/medcheck.png'),
      ],
      technologies: ['Kotlin', 'Firebase', 'RESTful APIs', 'Google Console'],
      features: ['Real-time health monitoring', 'Appointment scheduling', 'Secure messaging'],
      link: 'https://example.com/medcheck',
    },
    {
      title: 'Kalamu Verein Website',
      description: `Kalamu Verein is a non-profit organization supporting education in Africa.`,
      images: [
        require('../Assets/images/kalamu1.png'),
        require('../Assets/images/kalamu2.png'),
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Elementor'],
      features: ['Custom theme', 'Donation portal', 'SEO optimization'],
      link: 'https://www.kalamu-verein.de',
    },
    {
        title: 'My virtual pet',
        description: `Pluto is a virtual pet that you can feed, play with, and take care of. It's a fun way to learn about responsibility and pet care. This project was built using android studio, kotlin and Java.`,
        images: [
          require('../Assets/images/pluto.png'),
          require('../Assets/images/pluto1.png'),
          require('../Assets/images/pluto2.png'),
          require('../Assets/images/pluto3.png'),
          require('../Assets/images/pluto4.png'),
        ],
        technologies: ['Kotlin', 'Java', 'Android Studio'],
        features: ['Feed Pluto', 'Play with Pluto', 'Take care of Pluto'],
        link: 'https://github.com/st10068763/My_Virtual_Pet_Care.git',
    },
    {
        title: 'My weather app',
        description: `This is a weather app that shows the current weather in your location. It shows the Max and Min temperature for the next 5 days. This project was built using android studio, kotlin, Resful API from Accuweather and Java.`,
        images: [
          require('../Assets/images/MyWeather.png'),
        ],
        technologies: ['Kotlin', 'Java', 'Android Studio, Restful API'],
        features: ['Current weather', 'Max and Min temperature for the next 5 days'],
        link: 'https://github.com/st10068763/Weather-app.git',
    },
    {
        title: 'Bank web app',
        description: `This is a bank web app that allows users to create an account, deposit money, transfer money to another 
        local or international account and check their balance. It has an employee section where the employee can check all the
         transactions made by the users and decide weather to approve the transaction or deny the transaction and pass it to SWIFT.
         This project was built using React, Node.js, MongoDB, Express, and GitHub.`,
        images: [
          require('../Assets/images/MyWeather.png'),
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        features: ['Create an account', 'Deposit money', 'Transfer money', 'Check balance', 'Employee section', 'Approve or deny transaction'],
        link: 'https://github.com/st10068763/Weather-app.git',
    },

  ];

  const filters = ['All', 'React', 'Node.js', 'Kotlin', 'WordPress'];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'All' || project.technologies.includes(filter);
    const matchesSearch =
      searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-dark-background text-dark-text min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 animate-fade-in">Projects</h1>

        {/* Search and Filter Section */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-dark-card text-dark-text px-4 py-2 rounded-lg w-1/2 shadow-lg focus:outline-none focus:ring-2 focus:ring-dark-accent"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-dark-card text-dark-text px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-dark-accent"
          >
            {filters.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-card rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
            >
              <Carousel
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                dynamicHeight={false}
                className="max-h-80"
              >
                {project.images.map((image, i) => (
                  <div key={i}>
                    <img
                      src={image}
                      alt={`Screenshot of ${project.title}`}
                      className="object-contain w-full h-80"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-dark-accent mb-2">{project.title}</h2>
                <p className="text-dark-textSecondary mb-4">{project.description}</p>
                <h3 className="text-lg font-bold text-dark-accent mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-dark-background text-dark-accent px-3 py-1 rounded-full text-sm font-medium transition hover:bg-dark-accent hover:text-dark-text hover:shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-dark-accent mb-2">Features</h3>
                <ul className="list-disc list-inside text-sm mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-dark-accent text-dark-text px-6 py-2 rounded-lg hover:bg-dark-accentHover hover:scale-105 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
