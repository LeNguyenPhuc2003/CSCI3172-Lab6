import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="container" id='notFound'>
      <div className="row">
        <div className="col-md-12 text-section">
          <h1 className="mt-5">404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="btn btn-primary">Go to Home</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;