import React from 'react';

const About = () => {
  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hello! I'm Zacarias Pinto Joao Antero, a passionate and versatile software developer with expertise in full-stack development and a keen eye for building dynamic and user-friendly applications. I am currently pursuing a Bachelor's degree in Computer Science and Information in Application Development at The IIE’s Varsity College, Cape Town.
      </p>
      <p className="mb-4">
        Over the years, I have gained hands-on experience through various roles, such as a Web Developer at Kalamu Verein in Germany, a Full-Stack Developer at Materfamilia in Cape Town, and a Data Assistant at M&G Investments. These experiences have honed my skills in creating responsive user interfaces, building robust backend systems, and ensuring smooth DevOps practices with GitHub pipelines.
      </p>
      <p className="mb-4">
        I am proficient in technologies like Node.js, React, React Native, MongoDB, SQL Server, and Azure, among others. My projects include creating dynamic websites, optimizing application performance, and contributing to digital transformation initiatives.
      </p>
      <h2 className="text-3xl font-bold mt-6 mb-4">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Full-Stack Development</li>
        <li>Node.js, React, React Native</li>
        <li>SQL Server, MongoDB</li>
        <li>DevOps with GitHub Pipelines</li>
        <li>UI/UX Design</li>
        <li>Cloud Services (Microsoft Azure)</li>
        <li>RESTful API Development</li>
      </ul>
      <h2 className="text-3xl font-bold mt-6 mb-4">Education</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Bachelor's Degree:</strong> Computer Science and Information in Application Development, 
          The IIE’s Varsity College, Cape Town (2022 - 2024)
        </li>
        <li>
          <strong>Certificate:</strong> Data Analyst, University of Cape Town (June 2024 - August 2024)
        </li>
      </ul>
      <h2 className="text-3xl font-bold mt-6 mb-4">Languages</h2>
      <ul className="list-disc list-inside mb-4">
        <li>English (Native)</li>
        <li>Portuguese (Native)</li>
      </ul>
      <h2 className="text-3xl font-bold mt-6 mb-4">Contact</h2>
      <p>
        Feel free to reach out via email at <a href="mailto:anterozacarias007@gmail.com" className="text-blue-600">anterozacarias007@gmail.com</a> or connect with me on 
        <a href="https://www.linkedin.com/in/zacarias-antero/" target="_blank" rel="noopener noreferrer" className="text-blue-600"> LinkedIn</a>.
      </p>
    </div>
  );
};

export default About;
