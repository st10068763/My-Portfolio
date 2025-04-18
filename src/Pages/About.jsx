import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCloud,
  FaBriefcase,
  FaGraduationCap,
  FaLanguage,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import Footer from '../Components/Footer';

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const About = () => {
  const skills = [
    {
      category: 'Development',
      items: ['Full-Stack Development', 'Node.js', 'React', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Kotlin', 'Java', 'C#', 'Python', 'HTML', 'CSS', 'JavaScript'],
      icons: [<FaNodeJs className="text-2xl" />, <FaReact className="text-2xl" />, <SiTailwindcss className="text-2xl" />],
    },
    {
      category: 'Databases',
      items: ['SQL Server', 'MongoDB', 'Firebase', 'MySQL', 'SQLite', 'Oracle Database'],
      icons: [<FaDatabase className="text-2xl" />, <SiMongodb className="text-2xl" />],
    },
    {
      category: 'Cloud & DevOps',
      items: ['Microsoft Azure', 'GitHub Pipelines'],
      icons: [<FaCloud className="text-2xl" />, <FaGithub className="text-2xl" />],
    },
  ];

  const education = [
    {
      title: "Bachelor's Degree",
      institution: 'The IIE’s Varsity College, Cape Town',
      description: 'Computer Science and Information in Application Development',
      duration: '2022 - 2024',
    },
    {
      title: 'Certificate',
      institution: 'University of Cape Town',
      description: 'Data Analyst',
      duration: 'June 2024 - August 2024',
    },
  ];

  const workExperience = [
    {
      company: 'Kalamu Verein',
      role: 'Web Developer',
      description: `Designed and maintained a dynamic WordPress website for an NGO dedicated to educational support for 
     African countries. 
     Implemented user-friendly features to enhance engagement and drive awareness of organizational 
     initiatives. 
     Collaborated with cross-functional teams to align website content and design with organizational goals and 
     branding.`,
      duration: 'July 2024 - Present',
    },
    {
      company: 'Materfamilia',
      role: 'Full-Stack Developer',
      description: `Led frontend and backend development to ensure seamless application functionality and a superior user 
      experience. 
      Developed intuitive, responsive interfaces, incorporating modern UI frameworks to enhance usability and 
      accessibility. 
      Built and maintained a robust backend architecture to support complex workflows and ensure efficient 
      system operations.`,
      duration: 'July 2024 - Present',
    },
    {
      company: 'M&G Investment',
      role: 'Data Clerk',
      description: `Contributed to the company’s digital transformation by digitizing historical records and converting them into 
        a secure and accessible digital format. Improved data accessibility and streamlined archiving processes to ensure efficient retrieval and storage of critical records.`,
      duration: 'November 2022 - December 2022',
    },
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Portuguese', level: 'Native' },
    { name: 'German', level: 'Basic' },
    { name: 'Afrikaans', level: 'medium'}
  ];

  return (
    <div className="bg-dark-background text-dark-text min-h-screen p-6">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-dark-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="w-48 h-48 flex-shrink-0"
          >
            <img
              src={require('../Assets/images/IMG_2262 - Copy.JPG')}
              alt="Zacarias Antero"
              className="w-full h-full object-cover rounded-full border-4 border-dark-accent"
            />
          </motion.div>
          <div className="text-center md:text-left space-y-4">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-dark-accent"
            >
              About Me
            </motion.h1>
            <motion.blockquote 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="border-l-4 border-dark-accent pl-4"
            >
              <p className="text-lg font-medium leading-relaxed italic">
                "Highly skilled and versatile software developer with a strong foundation in full-stack development, web design, and 
               data management. Proven experience in developing and maintaining dynamic web applications, digitizing historical 
               records for enhanced accessibility, and implementing robust frontend and backend architectures. Adept at 
               collaborating with cross-functional teams and aligning technology solutions with business goals to deliver high
               quality, user-centric products. Fluent in English and Portuguese, with a passion for innovation and continuous 
               learning. "
              </p>
            </motion.blockquote>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 3 }}
              transition={{ delay: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-2xl font-semibold">Zacarias Pinto Joao Antero</h2>
              <p className="text-dark-textSecondary flex items-center justify-center md:justify-start gap-2">
                <span className="bg-dark-accent/10 px-3 py-1 rounded-full">Full-Stack Developer</span>
                <span className="bg-dark-accent/10 px-3 py-1 rounded-full">Cloud Enthusiast</span>
                <span className="bg-dark-accent/10 px-3 py-1 rounded-full">Data Analyst</span>
                <span className="bg-dark-accent/10 px-3 py-1 rounded-full">Software Developer</span>
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-10 bg-dark-card rounded-xl shadow-lg px-6 mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 pb-2 border-b-2 border-dark-accent inline-block"
          >
            Skills
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-dark-background p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex gap-3 text-dark-accent">
                    {skill.icons.map((icon, i) => (
                      <div key={i}>{icon}</div>
                    ))}
                  </div>
                  <h3 className="font-bold text-xl group-hover:text-dark-accent transition-colors">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start before:content-['•'] before:text-dark-accent before:mr-2 before:text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-10 mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 pb-2 border-b-2 border-dark-accent inline-block"
          >
            Work Experience
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="relative pl-8"
          >
            <div className="absolute h-full border-l-2 border-dark-accent left-0 top-0"></div>
            {workExperience.map((job, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="mb-8 relative group"
              >
                <div className="absolute -left-8 top-0 w-8 h-8 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-dark-accent rounded-full flex items-center justify-center text-white"
                  >
                    <FaBriefcase />
                  </motion.div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ml-4"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                    <h3 className="font-bold text-xl">{job.company}</h3>
                    <span className="text-dark-textSecondary text-sm bg-dark-background px-3 py-1 rounded-full">{job.duration}</span>
                  </div>
                  <p className="text-dark-accent font-medium mb-3">{job.role}</p>
                  <p className="text-sm">{job.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-10 mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 pb-2 border-b-2 border-dark-accent inline-block"
          >
            Education
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="relative pl-8"
          >
            <div className="absolute h-full border-l-2 border-dark-accent left-0 top-0"></div>
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="mb-8 relative group"
              >
                <div className="absolute -left-8 top-0 w-8 h-8 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-dark-accent rounded-full flex items-center justify-center text-white"
                  >
                    <FaGraduationCap />
                  </motion.div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ml-4"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                    <h3 className="font-bold text-xl">{edu.title}</h3>
                    <span className="text-dark-textSecondary text-sm bg-dark-background px-3 py-1 rounded-full">{edu.duration}</span>
                  </div>
                  <p className="text-dark-accent font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Languages Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-10 bg-dark-card rounded-xl shadow-lg px-6 mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-6 flex items-center gap-3"
          >
            <FaLanguage className="text-dark-accent" />
            Languages
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {languages.map((lang, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-dark-background p-4 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold">{lang.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-dark-card rounded-full h-2.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.level === 'Native' ? '100%' : '33%' }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-dark-accent h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="ml-2 text-sm text-dark-textSecondary">{lang.level}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

       {/* Footer */}
            <Footer />
    </div>
  );
};

export default About;