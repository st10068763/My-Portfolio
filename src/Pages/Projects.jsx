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
        require('../Assets/images/med.PNG'),
        require('../Assets/images/med1.PNG'),
        require('../Assets/images/med2.PNG'),
        require('../Assets/images/med3.PNG'),
        require('../Assets/images/med4.PNG'),
        require('../Assets/images/med5.PNG'),
        require('../Assets/images/med6.PNG'),
        require('../Assets/images/med7.PNG'),
        require('../Assets/images/med8.PNG'),
        require('../Assets/images/med9.PNG'),
        require('../Assets/images/med10.PNG'),
        require('../Assets/images/med11.PNG'),
        require('../Assets/images/med12.PNG'),
        require('../Assets/images/med13.PNG'),
      ],
      technologies: ['Kotlin', 'Firebase', 'RESTful APIs', 'Google Console'],
      features: ['Real-time notification', 'Google map', 'Biometric security', 'Multi Language', 'Night mode', 'SSO sign in'],
      link: 'https://youtu.be/iI5J8RnXB14',
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
          require('../Assets/images/Bank.png'),
          require('../Assets/images/Bank1.png'),
          require('../Assets/images/Bank2.png'),
          require('../Assets/images/Bank3.png'),
          require('../Assets/images/Bank4.png'),
          require('../Assets/images/Bank5.png'),
          require('../Assets/images/Bank6.png'),
          require('../Assets/images/Bank7.png'),
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'SSL', 'PHP'],
        features: ['Create an account', 'Deposit money', 'Transfer money', 'Check balance', 'Employee section', 'Approve or deny transaction'],
        link: 'https://github.com/st10068763/Weather-app.git',
    },

    { title: 'Urban Dream',
      description: 'Urban Dream is a real estate platform designed for users in Angola to list houses for sale, rent, and hotel rooms or guest houses. The platform prioritizes security and fraud prevention while providing a seamless experience for both property owners and potential buyers or renters. A listing fee model is implemented to generate income for the platform.',
      images: [
        require('../Assets/images/register.png'),
        require('../Assets/images/password.png'),
        require('../Assets/images/login.png'),
        require('../Assets/images/account.png'),
        require('../Assets/images/account2.png'),
        require('../Assets/images/host.png'),
        require('../Assets/images/home.png'),
        require('../Assets/images/createListing.png'),
        require('../Assets/images/createListing2.png'),
        require('../Assets/images/createListing3.png'),
        require('../Assets/images/createListing4.png'),
        require('../Assets/images/createListing5.png'),
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'tailwindcss', 'Stripe'],
      features: ['User authentication', 'Listing creation', 'Listing management', 'Messaging system', 'Payment gateway integration', 'User roles', 'User profile', 'Search and filter', 'Responsive design'],
      link: 'https://github.com/st10068763/',
    },
    {
      title: 'Cash Flow',
      description: `Cashflow is a financial management application designed to help businesses and individuals track their income and expenses efficiently. It provides real-time analytics, cash flow projections, and automated reporting to help users make informed financial decisions with real time notifications to help users keep track of their payments.`,
      images: [
        require('../Assets/images/start.png'),
        require('../Assets/images/cashflow0.png'),
        require('../Assets/images/cashflow_Register.png'),
        require('../Assets/images/cashflow2.png'),
        require('../Assets/images/cashflow3.png'),
        require('../Assets/images/cashflow4.png'),
        require('../Assets/images/cashflow5.png'),
        require('../Assets/images/cashflow6.png'),
        require('../Assets/images/cashflow7.png'),
        require('../Assets/images/cashflow8.png'),
        require('../Assets/images/cashflow9.png'),
        require('../Assets/images/cashflow10.png'),
      ],
      technologies: ['Kotlin', 'Android studio', 'GitHub', 'Firebase', 'Restful API','Realtimedatabase'],
      features: ['Real-time analytics', 'Cash flow projections', 'Automated reporting', 'Real time notifications', 'User authentication', 'User profile', 'Search and filter', 'Responsive design'],
      link: 'https://github.com/st10068763/CashFlow.git',
    },

    {
      title: 'Municipal Services Community App',
      description: 'The Municipal Services Community App is a C# .NET Framework application designed to streamline municipal services and improve citizen engagement in South Africa. The application enables residents to report local issues, access community events and announcements, and track service request statuses efficiently.',
      images: [
        require('../Assets/images/community.png'),
        require('../Assets/images/community1.png'),
        require('../Assets/images/community2.png'),
        require('../Assets/images/community3.png'),
         require('../Assets/images/community4.png'),
        require('../Assets/images/community5.png'),
         require('../Assets/images/community6.png'),
      ],
      technologies: [ "C#", ".NET Framework","Visual Studio","GitHub","Sorted Queues","Graph Traversal Algorithms", 'Sorted Arrays'],
      "features": [
      "Report Issues - Allow residents to report municipal issues with descriptions, locations, and images.",
      "Create Announcements - Municipal authorities can post local events and important notices.",
      "Manage Services - Track and update the status of reported issues efficiently.",
      "Real-time Issue Tracking - Users can monitor the progress of their reports.",
      "Optimized Service Handling - Uses sorted queues and graph algorithms for issue prioritization."
      ],
      link: 'https://github.com/st10068763/Community_Service_App'
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'All' || project.technologies.includes(filter);
    const matchesSearch =
      searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const filters = ['All', 'React', 'Node.js', 'MongoDB', 'Kotlin', 'Firebase', 'PHP', 'Express', 'JWT', 'Tailwind CSS', 'Stripe'];

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
