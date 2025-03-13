import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Scheme Interpreter',
    type: 'Personal Assignment',
    duration: 'May 2024 - July 2024',
    description: [
      '• Designed and implemented a Scheme interpreter in Java, demonstrating proficiency in functional programming and language design.',
      '• Integrated features like lexical scoping and optimizations like tail-call and short-circuit evaluation while ensuring compliance with Scheme language specifications.',
      '• Documented the project\'s architecture and implementation, enhancing clarity and maintainability.',
      '• The project got an A+ with commendations from the professor.'
    ],
    technologies: ['Java', 'Functional Programming'],
    link: '#'
  },
  {
    title: 'WEB APPLICATION DEVELOPMENT',
    type: 'Group Assignment',
    duration: 'May 2023 - July 2023',
    description: [
      '• Collaborated with a team of 7 students in an Agile environment to create a web application for project management.',
      '• Identified the client\'s wanted features and business requirements for the database\'s basis.',
      '• Used a variety of tools such as Git, Spring Boot, React, Postman, MySQL, etc to manage, develop, test, and deploy the application.',
      '• The project got an A+ with commendations from the professor.'
    ],
    technologies: ['Git', 'Java Spring Boot', 'React', 'Postman', 'MySQL'],
    link: '#'
  },
  {
    title: 'GAME OF LIFE',
    type: 'Personal Project',
    duration: 'May 2023 - July 2023',
    description: [
      '• Developed a simulation of Conway\'s Game of Life using Unity and C#, demonstrating proficiency in game development and object-oriented programming.',
      '• Implemented core game mechanics including cell generation, evolution rules, and grid management.',
      '• Added features such as adjustable grid size, customizable initial states, and real-time simulation controls.',
      '• Conducted thorough testing to ensure accuracy and performance, and documented the project for future enhancements.',
    ],
    technologies: ['Unity', 'C#', 'Object-Oriented Programming', 'Game Development'],
    link: '#'
  },
];

function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-section">
          <h1 className="mt-5">Projects</h1>
          <p>Here are some of the projects I have worked on:</p>
        </div>
      </div>

      {projects.map((project, index) => (
        <div key={index} className='projects-section'>
          <div className="row mt-5">
            <div className="col-md-12">
              <h2>{project.title}</h2>
              <h5>{project.duration} | {project.type}</h5>
              <ul>
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;