import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';
import Footer from '../Components/Footer';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaFilter, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

Modal.setAppElement('#root');

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

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
      description: `MedCheck is your smart medical assistant, built to help you easily search for medications and access detailed drug information like dosage, usage, warnings, and more. With built-in biometric security and real-time updates, MedCheck is designed to keep you informed and safe—anytime, anywhere.
      Key Features:
     🔍 Medication Lookup
     Quickly search for any medication and view important information such as dosage, side effects, and usage guidelines.
     🗺️ Nearby Hospitals Map
     Locate the nearest hospitals using an integrated Google Map with real-time highlights and directions.
     🔔 Real-Time Notifications
     Stay updated with alerts and reminders relevant to your health and medications.
     🔒 Biometric Security
     Secure your data with fingerprint or facial recognition for faster, safer logins.
     🌐 Multi-Language Support
     Choose your preferred language for a personalized experience.
     🌙 Night Mode
     Comfortable browsing in low light with dark theme support.
     🔐 SSO Sign-In
     Use Google or other single sign-on options for quick access.
     `,
      images: [
        require('../Assets/images/welcome.jpg'),
        require('../Assets/images/languages.jpg'),
        require('../Assets/images/Map.jpg'),
        require('../Assets/images/Medications.jpg'),
        require('../Assets/images/medinfo.jpg'),
        require('../Assets/images/step1.jpg'),
        require('../Assets/images/step2.jpg'),
        require('../Assets/images/Settings.jpg'),
        require('../Assets/images/MedCheckIcon.png'),
      ],
      technologies: ['Kotlin', 'Firebase', 'RESTful APIs', 'Google Console'],
      features: ['Real-time notification', 'Google map', 'Biometric security', 'Multi Language', 'Night mode', 'SSO sign in'],
      link: 'https://appgallery.cloud.huawei.com/app/C113913581',
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


  // Get all unique technologies from projects
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort();
  const filters = ['All', ...allTechnologies];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || 
      project.technologies.some(tech => 
        tech.toLowerCase() === filter.toLowerCase()
      );
    
    const matchesSearch = searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-dark-background text-dark-text min-h-screen flex flex-col">
      <div className="flex-grow p-4 md:p-6">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10"
          >
            My Projects
          </motion.h1>

          {/* Search and Filter Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-3 md:gap-4"
          >
            <div className="relative w-full md:w-1/2">
              <div className="flex items-center">
                <FaSearch className="absolute left-3 text-dark-textSecondary" />
                <input
                  type="text"
                  placeholder="Search projects by name, tech, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-dark-card text-dark-text pl-10 pr-4 py-2 md:py-3 rounded-xl w-full shadow-lg focus:outline-none focus:ring-2 focus:ring-dark-accent"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 text-dark-textSecondary hover:text-dark-accent"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>
            
            <div className="relative w-full md:w-auto">
              <div className="flex items-center">
                <FaFilter className="absolute left-3 text-dark-textSecondary" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-dark-card text-dark-text pl-10 pr-8 py-2 md:py-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-dark-accent appearance-none cursor-pointer"
                >
                  {filters.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 pointer-events-none">
                  <FaChevronDown className="text-dark-textSecondary text-sm" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Active filters display */}
          {(searchTerm || filter !== 'All') && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mb-4 flex-wrap gap-2"
            >
              <span className="text-sm text-dark-textSecondary">Active filters:</span>
              {searchTerm && (
                <span className="bg-dark-card px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  Search: "{searchTerm}"
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="text-dark-textSecondary hover:text-dark-accent ml-1"
                  >
                    <FaTimes size={12} />
                  </button>
                </span>
              )}
              {filter !== 'All' && (
                <span className="bg-dark-card px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  Technology: {filter}
                  <button 
                    onClick={() => setFilter('All')}
                    className="text-dark-textSecondary hover:text-dark-accent ml-1"
                  >
                    <FaTimes size={12} />
                  </button>
                </span>
              )}
            </motion.div>
          )}

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-dark-card rounded-xl shadow-lg overflow-hidden border border-dark-card hover:border-dark-accent transition-all duration-300 cursor-pointer flex flex-col"
                  style={{ minHeight: '500px' }}
                  onClick={() => openModal(project)}
                >
                  <div className="h-56 md:h-64 overflow-hidden relative">
                    <Carousel
                      showThumbs={false}
                      infiniteLoop
                      useKeyboardArrows
                      autoPlay
                      interval={5000}
                      className="h-full"
                      showStatus={false}
                      showIndicators={project.images.length > 1}
                    >
                      {project.images.map((image, i) => (
                        <div key={i} className="h-full flex items-center justify-center bg-black">
                          <img
                            src={image}
                            alt={`Screenshot of ${project.title}`}
                            className="object-contain max-h-full max-w-full"
                            loading="lazy"
                            style={{ maxHeight: '100%', width: 'auto' }}
                          />
                        </div>
                      ))}
                    </Carousel>
                    <div className="absolute bottom-2 right-2 bg-dark-background/80 text-white text-xs px-2 py-1 rounded">
                      {project.images.length} images
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h2 className="text-xl md:text-2xl font-bold text-dark-accent mb-2">{project.title}</h2>
                    
                    <div className="mb-3 relative">
                      <p className={`text-dark-textSecondary ${expandedDescriptions[index] ? '' : 'line-clamp-3'}`}>
                        {project.description.split('\n')[0]} {/* Show only first paragraph in card */}
                      </p>
                      {project.description.split('\n').length > 1 && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription(index);
                          }}
                          className="text-dark-accent text-sm mt-1 flex items-center"
                        >
                          {expandedDescriptions[index] ? (
                            <>
                              <span>Show less</span>
                              <FaChevronUp className="ml-1" size={12} />
                            </>
                          ) : (
                            <>
                              <span>Read more</span>
                              <FaChevronDown className="ml-1" size={12} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-md font-semibold text-dark-accent mb-1">Technologies</h3>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="bg-dark-background text-dark-accent px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="bg-dark-background text-dark-accent px-2 py-1 rounded-full text-xs font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-dark-accent text-dark-text px-3 py-2 rounded-lg hover:bg-dark-accentHover transition text-sm md:text-base"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={14} /> View Live
                      </a>
                      {project.link.includes('github') && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-dark-background border border-dark-accent text-dark-accent px-3 py-2 rounded-lg hover:bg-dark-accent/10 transition text-sm md:text-base"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 md:py-16"
            >
              <h3 className="text-xl md:text-2xl text-dark-textSecondary mb-4">No projects found matching your criteria</h3>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilter('All');
                }}
                className="mt-2 text-dark-accent hover:underline flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-dark-card rounded-lg"
              >
                <FaTimes size={14} /> Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal bg-transparent border-none shadow-none overflow-y-auto"
        overlayClassName="fixed inset-0 bg-dark-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        closeTimeoutMS={300}
      >
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-dark-card rounded-xl shadow-2xl max-w-4xl w-full mx-auto my-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-dark-text hover:text-dark-accent text-2xl bg-dark-background/50 rounded-full p-2"
              >
                <FaTimes />
              </button>
              
              <h2 className="text-2xl md:text-3xl font-bold text-dark-accent mb-4 pr-8">{selectedProject.title}</h2>
              
              <div className="mb-6">
                <Carousel
                  showThumbs={true}
                  infiniteLoop
                  useKeyboardArrows
                  showStatus={false}
                  dynamicHeight={false}
                  className="rounded-lg overflow-hidden"
                >
                  {selectedProject.images.map((image, i) => (
                    <div key={i} className="flex items-center justify-center bg-black">
                      <img
                        src={image}
                        alt={`Screenshot of ${selectedProject.title}`}
                        className="object-contain max-h-80 md:max-h-96 w-full"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-dark-accent mb-2">Description</h3>
                  <p className="text-dark-textSecondary whitespace-pre-line">{selectedProject.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-dark-accent mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="bg-dark-background text-dark-accent px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-dark-accent mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="text-dark-textSecondary">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-dark-accent text-dark-text px-5 py-2 rounded-lg hover:bg-dark-accentHover transition flex-1 md:flex-none justify-center"
                  >
                    <FaExternalLinkAlt /> View Project
                  </a>
                  {selectedProject.link.includes('github') && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-dark-background border border-dark-accent text-dark-accent px-5 py-2 rounded-lg hover:bg-dark-accent/10 transition flex-1 md:flex-none justify-center"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Modal>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;