/* eslint-disable no-unused-vars */
import React, { forwardRef } from "react";

function Footer() {
  const events = [
    {
      stage: "ON STAGE",
      event: "EUREKA (Paper Presentation)",
      time: "11:00 AM - 12:30 PM",
      staff: "Mrs. Nagoor Meeral",
      student: "Kavya",
    },
    {
      stage: "OFF STAGE",
      event: "TECHARTIX (Web Design)",
      time: "11:00 AM - 12:00 PM",
      staff: "Mrs. Louisa Mary",
      student: "Srinithi",
    },
    {
      stage: "ON STAGE",
      event: "TRIVIA (Quiz Prelims)",
      time: "11:00 AM - 11:20 AM",
      staff: "Mrs. Louisa Mary",
      student: "Karthika",
    },
    {
      stage: "ON STAGE",
      event: "TRIVIA (Quiz Mains)",
      time: "11:45 AM - 1:00 PM",
      staff: "Mrs. Louisa Mary",
      student: "Karthika",
    },
    {
      stage: "OFF STAGE",
      event: "FIXORA (Debugging)",
      time: "12:00 PM - 1:00 PM",
      staff: "Mrs. B.N. Prathibha",
      student: "Sandhiya",
    },
    {
      stage: "LUNCH BREAK",
      event: "LUNCH",
      time: "1:00 PM - 2:00 PM",
      staff: "-",
      student: "-",
    },
    {
      stage: "ON STAGE",
      event: "TECHTRADE (Software Marketing)",
      time: "2:00 PM - 3:30 PM",
      staff: "Mr. Ganesh Kumar",
      student: "Kavya/Yunus",
    },
    {
      stage: "OFF STAGE",
      event: "BRANDIFY (Logo Design)",
      time: "2:00 PM - 3:00 PM",
      staff: "Mrs. Louisa Mary",
      student: "Srinithi",
    },
    {
      stage: "OFF STAGE",
      event: "TREND TECH (Reels)",
      time: "2:30 PM - 3:00 PM",
      staff: "Mrs. Nagoor Meeral",
      student: "Uma Sundari",
    },
    {
      stage: "ON STAGE",
      event: "INNOVEX (E-Waste)",
      time: "2:00 PM - 3:30 PM",
      staff: "Mrs. Louisa Mary",
      student: "Karthika",
    },
    {
      stage: "ON STAGE",
      event: "VALEDICTORY",
      time: "3:45 PM - 4:45 PM",
      staff: "-",
      student: "-",
    },
  ];

  return (
    <div className="footer-container">
      <footer className="text-white bg-gradient-to-r from-blue-500 to-purple-500 text-lg-start">
        <div className="container-fluid p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <div className="bg-light text-center">
                <h5
                  className="text-uppercase p-3 mb-4 text-shadow"
                  style={{
                    color: "#333",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  EXCELSIOR 2026
                </h5>
              </div>
              <p>
                Sadakathullah Appa College provides quality education with excellence and strong values.
              </p>
              <p>
                Excelsior 2026 brings together talent, innovation, competitions, and academic celebrations.
              </p>

              <h5 className="text-uppercase mb-4 pb-1 text-shadow text-center text-warning">
                For Guidance
              </h5>
              <ul className="fa-ul">
                <li className="mb-3 d-flex align-items-center">
                  <span className="fa-li me-3">
                    <i className="fas fa-envelope" />
                  </span>
                  <span>
                    <a
                      style={{ textDecoration: "underline", color: "white" }}
                      href="mailto:sacexcelsior2025@gmail.com"
                      target="_blank"
                    >
                      sacexcelsior2025@gmail.com
                    </a>
                  </span>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <span className="fa-li me-3" style={{ fontSize: "25px" }}>
                      <i className="fas fa-phone" />
                    </span>
                    <span>
                      Coordinator: <br />
                      Mr. K. Ganeshkumar <br />
                      +91 99527-48780
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fa-li me-3" style={{ fontSize: "25px" }}>
                      <i className="fas fa-phone" />
                    </span>
                    <span>
                      Secretary: <br />
                      Mr. K.A. Mohamed Riyazudeen <br />
                      +91 90478-53173
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
              <div className="bg-light text-center">
                <h5
                  className="text-uppercase mb-4 p-3 text-shadow"
                  style={{
                    color: "#333",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Event Schedule
                </h5>
              </div>
              <table className="table table-striped table-warning shadow-lg">
                <thead className="text-center">
                  <tr>
                    <th style={{ color: "#A94A4A", fontSize: "18px" }}>
                      Stage
                    </th>
                    <th style={{ color: "#A94A4A", fontSize: "18px" }}>
                      Event
                    </th>
                    <th style={{ color: "#A94A4A", fontSize: "18px" }}>
                      Time
                    </th>
                    <th style={{ color: "#A94A4A", fontSize: "18px" }}>
                      Staff Incharge
                    </th>
                    <th style={{ color: "#A94A4A", fontSize: "18px" }}>
                      Student Incharge
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((ev, index) => (
                    <tr
                      key={index}
                      style={{ transition: "background-color 0.3s", cursor: "pointer" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#e9ecef")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "")
                      }
                    >
                      <td>{ev.stage}</td>
                      <td>{ev.event}</td>
                      <td>{ev.time}</td>
                      <td>{ev.staff}</td>
                      <td>{ev.student}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="social-icons text-center mb-5">
          <a
            href="https://www.google.com/maps/place/Sadakathullah+Appa+College/"
            target="_blank"
            className="btn btn-floating btn-light btn-lg shadow-lg me-2"
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a
            href="https://www.sadakath.ac.in/"
            target="_blank"
            className="btn btn-floating btn-light btn-lg shadow-lg me-2"
          >
            <i className="fas fa-globe"></i>
          </a>
          <a
            href="https://www.instagram.com/sadakathullahappacollege/"
            target="_blank"
            className="btn btn-floating btn-light btn-lg shadow-lg me-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@sadakathullahappacollegeti2544"
            target="_blank"
            className="btn btn-floating btn-light btn-lg shadow-lg"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2026 Copyright: Excelsior 2026 | Made with love ❤️ by our students
        </div>
      </footer>
    </div>
  );
}


export default Footer;