import { Link } from "react-router-dom";

function NavigationBar() {
  
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#ffffff77" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Left Navigation Links (Collapsible) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="linktag">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rules" className="linktag">
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="linktag">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="btn btn-sm btn-outline-warning">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Center Logo */}
        <a className="navbar-brand " href="#logo">
          <img
            src="/logo.png" // Image in public folder
            alt="Logo"
          />
        </a>
        {/* Right Application Button */}
        {/* TODO: add route to button */}
        <div className="d-flex flex-grow-1 justify-content-end">
          
            <Link to="/application" className="btn btn-outline-warning">
              Get Enrolled
            </Link>

            {/* <Link to="/" className="btn btn-warning ">
                Registration Closed 
            </Link> */}

        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
