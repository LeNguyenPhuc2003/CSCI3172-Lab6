import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="row">
        <div className="col-md-6 text-section">
          <h1 className="mt-5">Welcome to My Portfolio</h1>
          <p>This is the home page of my personal portfolio site.</p>
          <div className="button-group">
            <a href="/about" className="btn btn-primary">About Me</a>
            <a href="/projects" className="btn btn-secondary">Projects</a>
          </div>
        </div>
        <div className="col-md-6 image-section">
          <img src="./Face.jpg" alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;