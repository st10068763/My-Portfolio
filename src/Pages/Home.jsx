import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Kalamu Verein Website',
      description:
        'A dynamic WordPress website for a Germany-based NGO to support educational initiatives in African countries.',
      image: require('../Assets/images/Kalamu_Logo.png'),
      link: 'https://www.kalamu-verein.de/',
    },
    {
      title: 'Materfamilia Web App',
      description:
        'A full-stack application with responsive design and robust backend integration for smooth user experience.',
      image: require('../Assets/images/Materfamilia Logo Png.png'),
      link: 'https://essmaterwebapp20241219165119.azurewebsites.net/',
    },
    {
      title: 'MedCheck Mobile App',
      description:
        'A mobile application that allows users to set notification reminders, view medical records, search for nearby pharmacies and hospitals, and research medications with warnings and dosages.',
      image: require('../Assets/images/MedCheckIcon.png'),
      link: 'https://appgallery.cloud.huawei.com/app/C113913581',
    },
  ];

  const workExperience = [
    {
      company: 'Kalamu Verein',
      role: 'Web Developer',
      description:
        'Developed and maintained a dynamic WordPress website for a Germany-based NGO, enhancing user experience and increasing outreach.',
      duration: 'July 2024 - Present',
    },
    {
      company: 'Materfamilia',
      role: 'Full-Stack Developer',
      description:
        'Led the development of a full-stack web app, focusing on responsive frontend design and robust backend integration.',
      duration: 'July 2024 - Present',
    },
    {
      company: 'M&G Investment',
      role: 'Data Clerk',
      description:
        'Digitized historical documents, improving data accessibility and streamlining archiving processes.',
      duration: 'November 2022 - December 2022',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="bg-dark-background text-dark-text min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <img
              src={require('../Assets/images/IMG_2262 - Copy.JPG')}
              alt="Zacarias Antero"
              className="mx-auto rounded-full w-40 h-40 md:w-48 md:h-48 mb-8 border-4 border-dark-accent shadow-lg object-cover"
            />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Zacarias Pinto Joao Antero
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Passionate Software Developer specializing in full-stack development, creating seamless user experiences and scalable backend solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/about"
              className="mt-6 inline-block bg-dark-accent text-dark-text px-8 py-3 rounded-lg shadow-lg font-semibold hover:bg-dark-accentHover transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-dark-card">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-dark-background rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex flex-col h-full"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="overflow-hidden rounded-lg mb-5 h-48 flex items-center justify-center bg-dark-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-dark-textSecondary mb-5 flex-grow">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-dark-accent text-dark-text px-4 py-2 rounded-lg shadow hover:bg-dark-accentHover transition duration-300 ease-in-out"
                >
                  View Project <FaExternalLinkAlt className="ml-2" size={12} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute h-full border-l-2 border-dark-accent left-5 md:left-6 top-0"></div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workExperience.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="mb-10 flex items-start"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 bg-dark-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <FaBriefcase />
                  </div>
                  <div className="ml-8 bg-dark-card p-6 rounded-xl shadow-lg w-full hover:shadow-xl transition duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                      <h3 className="font-bold text-xl">{job.company}</h3>
                      <p className="text-dark-textSecondary text-sm mt-1 md:mt-0">{job.duration}</p>
                    </div>
                    <p className="text-dark-accent font-semibold mb-2">{job.role}</p>
                    <p className="text-sm">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div 
            className="text-center mt-16 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={require('../Assets/resumes/Zacarias Antero.pdf')}
              download="Zacarias_Antero_Resume_ENG.pdf"
              className="inline-flex items-center justify-center bg-dark-accent text-dark-text px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-dark-accentHover transition duration-300 transform hover:-translate-y-1"
            >
              <FaFileDownload size={18} className="mr-3" />
              Download Resume (English)
            </a>
            <a
              href={require('../Assets/resumes/Zacarias Antero Software Developer PT.pdf')}
              download="Zacarias_Antero_Resume_PT.pdf"
              className="inline-flex items-center justify-center bg-dark-accent text-dark-text px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-dark-accentHover transition duration-300 transform hover:-translate-y-1"
            >
              <FaFileDownload size={18} className="mr-3" />
              Download Resume (Portuguese)
            </a>
          </motion.div>
        </div>
      </section>

       {/* Footer */}
            <Footer />
    </div>
  );
};

export default Home;