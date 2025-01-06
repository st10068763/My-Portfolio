import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
    const projects = [
        {
            title: 'Materfamilia Web App',
            description: `Materfamilia is a full-stack application designed to support families by providing
                tools for organization, scheduling, and communication. My role included creating a responsive
                frontend with React and integrating a robust backend using Node.js. The project also involved
                seamless deployment pipelines via GitHub Actions to ensure a synchronized development environment.`,
            images: [
                'https://via.placeholder.com/400x300', // Replace with actual images
                'https://via.placeholder.com/400x300',
            ],
            technologies: [
                'React', 'Node.js', 'MongoDB', 'GitHub Actions', 'Azure', 'RESTful APIs',
            ],
            features: [
                'User authentication and role-based access',
                'Dynamic scheduling and reminders',
                'Integrated messaging system',
            ],
            link: 'https://essmaterwebapp20241219165119.azurewebsites.net',
        },
        {
            title: 'MedCheck App',
            description: `MedCheck is a healthcare app designed to improve patient-doctor communication.
                It features tools for appointment scheduling, health monitoring, and prescription tracking.
                My contributions included implementing real-time notifications and integrating a health data
                API to enhance user experience.`,
            images: [
                'https://via.placeholder.com/400x300', // Replace with actual images
                'https://via.placeholder.com/400x300',
            ],
            technologies: [
                'Android studio', 'Kotlin', 'firebase', 'RESTful APIs', 'google console', 'Notifications',
            ],
            features: [
                'Real-time health data monitoring',
                'Appointment scheduling with reminders',
                'Secure patient-doctor messaging',
            ],
            link: 'https://example.com/medcheck', // Replace with actual link
        },
    ];

    return (
        <div className="p-4">
            {projects.map((project, index) => (
                <div key={index} className="bg-white rounded shadow p-4 mb-8">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <h3 className="text-lg font-bold mb-2">Technologies Used:</h3>
                    <ul className="list-disc list-inside mb-4">
                        {project.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                    <h3 className="text-lg font-bold mb-2">Features:</h3>
                    <ul className="list-disc list-inside mb-4">
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <h3 className="text-lg font-bold mb-2">Screenshots:</h3>
                    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                        {project.images.map((image, i) => (
                            <div key={i}>
                                <img src={image} alt={`Screenshot of ${project.title}`} className="rounded" />
                            </div>
                        ))}
                    </Carousel>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 inline-block"
                    >
                        View Project
                    </a>
                </div>
            ))}
        </div>
    );
    
};

export default Projects;