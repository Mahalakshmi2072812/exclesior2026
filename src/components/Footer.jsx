/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  const events = [
    { event: "Registration", from: "8:30 AM", to: "9:30 AM", venue: "Seminar Hall" },
    { event: "Inauguration", from: "9:30 AM", to: "11:00 AM", venue: "Seminar Hall" },
    { event: "EUREKA (Paper Presentation)", from: "11:00 AM", to: "12:30 PM", venue: "Seminar Hall" },
    { event: "TRIVIA (Quiz Prelims)", from: "11:45 AM", to: "01.00 AM", venue: "Seminar Hall" },
    { event: "TECHARTIX (Web Design)", from: "11:00 AM", to: "12:00 PM", venue: "PG Lab" },
    { event: "FIXORA (Debugging)", from: "12:00 PM", to: "1:00 PM", venue: "PG Lab" },
    { event: "LUNCH BREAK", from: "1:00 PM", to: "2:00 PM", venue: "College Campus" },
    { event: "TECHTRADE (Software Marketing)", from: "2:00 PM", to: "3:30 PM", venue: "Seminar Hall" },
    { event: "BRANDIFY (Logo Design)", from: "2:00 PM", to: "3:00 PM", venue: "PG Lab" },
    { event: "TREND TECH (Reels)", from: "2:30 PM", to: "3:00 PM", venue: "College Campus" },
    { event: "INNOVEX (E-Waste)", from: "2:00 PM", to: "3:30 PM", venue: "Seminar Hall No. 2" },
    { event: "VALEDICTORY", from: "3:45 PM", to: "4:45 PM", venue: "Seminar Hall" },
  ];

  return (
    <div className="footer-container">
      <footer className="text-white text-lg-start bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container-fluid p-4">
          <div className="row mt-4">
            {/* LEFT SECTION */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="bg-light text-center">
                <h5
                  className="text-uppercase p-3 mb-4"
                  style={{ color: "#333", fontWeight: "bold" }}
                >
                  EXCELSIOR 2026
                </h5>
              </div>

              <p>
                Sadakathullah Appa College provides quality education with
                excellence and strong values.
              </p>
              <p>
                Excelsior 2026 brings together talent, innovation, competitions,
                and academic celebrations.
              </p>

              <h5 className="text-uppercase mb-3 text-warning text-center">
                For Guidance
              </h5>
              <ul className="fa-ul">
                <li className="mb-3 d-flex align-items-center">
                  <span className="fa-li me-3">
                    <i className="fas fa-envelope" />
                  </span>
                  <a
                    href="mailto:sacexcelsior2026@gmail.com"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    sacexcelsior2026@gmail.com
                  </a>
                </li>

                <li className="mb-3">
                  <i className="fas fa-phone me-2" /> Staff Coordinator<br />
                  Mr. K. Ganeshkumar<br />
                  +91 99521 03277
                </li>

                <li>
                  <i className="fas fa-phone me-2" /> Student Coordinator<br />
                  Mr. S. Mohamed Yunus<br />
                  +91 82485 74637
                </li>
              </ul>
            </div>

            {/* RIGHT SECTION */}
            <div className="col-lg-8 col-md-12">
              <div className="bg-light text-center">
                <h5
                  className="text-uppercase p-3 mb-4"
                  style={{ color: "#333", fontWeight: "bold" }}
                >
                  Timeframe
                </h5>
              </div>

              <table className="table table-striped table-warning shadow-lg">
                <thead className="text-center">
                  <tr>
                    <th>Event</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((e, index) => (
                    <tr key={index}>
                      <td>{e.event}</td>
                      <td>{e.from}</td>
                      <td>{e.to}</td>
                      <td>{e.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="social-icons text-center mb-4">
          <a href="https://www.sadakath.ac.in/" target="_blank" className="btn btn-light btn-lg me-2">
            <i className="fas fa-globe"></i>
          </a>
          <a href="https://www.instagram.com/sadakathullahappacollege/" target="_blank" className="btn btn-light btn-lg me-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@sadakathullahappacollegeti2544" target="_blank" className="btn btn-light btn-lg">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
          © 2026 Excelsior | Made with ❤️ by our students
        </div>
      </footer>
    </div>
  );
}

export default Footer;