import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
        
        <span className="navbar-brand"><img id="display-pic" src={process.env.PUBLIC_URL + '/assets/images/selfie.jpg'} alt="displaypic"/>Joshua Stubbington</span>
        
        <div className= "d-flex ms-2">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <Link className="nav-link active" to="/">
                    <li className="nav-item">About Me</li>
                  </Link>
                  <Link className="nav-link" to="/projects">
                    <li className="nav-item">Projects</li>
                  </Link>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume">Resume</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
