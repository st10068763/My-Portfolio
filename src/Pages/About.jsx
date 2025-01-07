import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCloud,
  FaServer,
  FaBriefcase,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    {
      category: 'Development',
      items: ['Full-Stack Development', 'Node.js', 'React', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Kotlin', 'Java', 'C#', 'Python', 'HTML', 'CSS', 'JavaScript'],
      icons: [<FaNodeJs />, <FaReact />, <SiTailwindcss />],
    },
    {
      category: 'Databases',
      items: ['SQL Server', 'MongoDB', 'Firebase', 'MySQL', 'SQLite', 'Oracle Database'],
      icons: [<FaDatabase />, <SiMongodb />],
    },
    {
      category: 'Cloud & DevOps',
      items: ['Microsoft Azure', 'GitHub Pipelines'],
      icons: [<FaCloud />, <FaGithub />],
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
      description: 'Developed and maintained a dynamic WordPress website for a Germany-based NGO, enhancing user experience and increasing outreach.',
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

  return (
    <div className="bg-dark-background text-dark-text min-h-screen p-6">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="bg-dark-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <img
            src={require('../Assets/images/IMG_2262 - Copy.JPG')}
            alt="Zacarias Antero"
            className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto md:mx-0 md:rounded-lg"
          />
          <div className="text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium leading-relaxed">
                "I am a passionate Software Developer, creating seamless user experiences and scalable backend solutions through full-stack development and cloud services."
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-dark-accent text-2xl">Zacarias Pinto Joao Antero</div>
              <div className="text-dark-textSecondary">Full-Stack Developer | Cloud Enthusiast</div>
            </figcaption>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-10 bg-dark-card rounded-lg shadow-lg px-6 mt-10">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-dark-background p-4 rounded-lg shadow-md hover:scale-105 transition"
              >
                <h3 className="font-bold text-dark-accent text-xl mb-2">{skill.category}</h3>
                <div className="flex space-x-3 mb-4">
                  {skill.icons.map((icon, i) => (
                    <div key={i} className="text-dark-accent text-2xl">
                      {icon}
                    </div>
                  ))}
                </div>
                <ul className="list-disc list-inside text-sm">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-10">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-dark-accent inline-block">Work Experience</h2>
          <div className="relative">
            <div className="absolute h-full border-l-2 border-dark-accent left-4 top-0"></div>
            {workExperience.map((job, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div className="w-8 h-8 bg-dark-accent rounded-full flex items-center justify-center text-white">
                  <FaBriefcase />
                </div>
                <div className="ml-8 bg-dark-card p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl">{job.company}</h3>
                  <p className="text-dark-textSecondary text-sm">{job.role}</p>
                  <p className="text-sm">{job.description}</p>
                  <p className="text-sm text-dark-textSecondary">{job.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-10">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-dark-accent inline-block">Education</h2>
          <div className="relative">
            <div className="absolute h-full border-l-2 border-dark-accent left-4 top-0"></div>
            {education.map((edu, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div className="w-8 h-8 bg-dark-accent rounded-full flex items-center justify-center text-white">
                  <FaServer />
                </div>
                <div className="ml-8 bg-dark-card p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl">{edu.title}</h3>
                  <p className="text-dark-textSecondary text-sm">{edu.institution}</p>
                  <p className="text-sm">{edu.description}</p>
                  <p className="text-sm text-dark-textSecondary">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-10 bg-dark-card rounded-lg shadow-lg px-6">
          <h2 className="text-3xl font-bold mb-6">Languages</h2>
          <ul className="list-disc list-inside">
            <li>English (Native)</li>
            <li>Portuguese (Native)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
