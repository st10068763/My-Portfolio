import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaCloud,
  FaServer,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    {
      category: 'Development',
      items: ['Full-Stack Development', 'Node.js', 'React', 'React Native', 'Tailwind CSS', 'Bootstrap','Kotlin', 'Java', 'C#', 'Python', 'HTML', 'CSS', 'JavaScript'],
      icons: [<FaNodeJs />, <FaReact />, <SiTailwindcss />],
    },
    {
      category: 'Databases',
      items: ['SQL Server', 'MongoDB','Firebase', 'MySQL', 'SQLite', 'Oracle Database'],
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

  return (
    <div className="bg-dark-background text-dark-text min-h-screen p-6">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">About Me</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in">
            I'm Zacarias Pinto Joao Antero, a passionate software developer with expertise in full-stack development,
            cloud services, and creating dynamic, user-friendly applications.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-10 bg-dark-card rounded-lg shadow-lg px-6">
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

        {/* Contact Section */}
        <section className="py-10">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-dark-accent inline-block">Get in Touch</h2>
          <div className="flex flex-col items-center space-y-4">
           
            <a
              href="https://github.com/st10068763"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-dark-accent hover:underline"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub: st10068763</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zacarias-antero/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-dark-accent hover:underline"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn: Zacarias Antero</span>
            </a>
            <a
              href="mailto:anterozacarias007@gmail.com"
              className="flex items-center space-x-2 text-dark-accent hover:underline"
            >
              <FaEnvelope className="text-2xl" />
              <span>Email: anterozacarias007@gmail.com</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
