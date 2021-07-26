import picture from '../../assets/images/selfie.jpg';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
        
        <a className="navbar-brand" href="#"><img id="display-pic" src={picture}/>Joshua Stubbington</a>
        
        <div className= "d-flex ms-2">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Resume</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;