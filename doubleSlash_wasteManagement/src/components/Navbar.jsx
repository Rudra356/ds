import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <a className="navbar-brand" href="#!">
          Greenlify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active me-4" aria-current="page" href="#!">
                Home
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link me-4" href="#how-it-works">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#testimonials">
                Why Choose Us?
              </a>
            </li>
             <li className="nav-item">
              <a className="nav-link me-4" href="#query">
                Contact Us
              </a>
            </li> 
            <li className="nav-item">
              <a className="nav-link me-4" href="#features">
                Our Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
