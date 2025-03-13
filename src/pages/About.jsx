import React from 'react';
import './About.css';

const education = [
  'Bachelor of Computer Science, Dalhousie University (Expected 2026)',
  'Relevant coursework: Data Structures, Algorithms, Network Security, Software Development'
];

const experience = [
  'Software Engineer Co-op Student at HB Studios (Fall 2023)',
  'Process Improvement Co-op Student at Nova Scotia Health Authority (Fall 2024)',
];

const skills = [
  'Programming Languages: Java, JavaScript, Python, C, C#',
  'Web Development: HTML, CSS, JavaScript, React',
  'Game Development: Unity',
  'Cyber Security: Network Security, OSINT reconnaissance, Firewall Implementation, Kali Linux'
];

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-section">
          <h1 className="mt-5">About Me</h1>
          <p>I am a 3rd year Computer Science student at Dalhousie University. I am interested in Software Development, Game Development, and Cyber Security.</p>
        </div>
        <div className="col-md-6 image-section">
          <img src="./Face.jpg" alt="Profile" className="profile-image" />
        </div>
      </div>

      <div className='about-section'>
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Education</h2>
            <ul className='list'>
              {education.map((item, index) => (
                <li key={index} className='list-item'>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='about-section'>
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Experience</h2>
            <ul className='list'>
              {experience.map((item, index) => (
                <li key={index} className='list-item'>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='about-section'>
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Skills</h2>
            <ul className='list'>
              {skills.map((item, index) => (
                <li key={index} className='list-item'>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;