function AboutUs() {
  const milestones = [
    { year: 1999, event: "Silver Jubilee celebration" },
    { year: 2004, event: "ISO 9001:2000 Certification on 9th Nov" },
    { year: "2003-04", event: "NAAC Accreditation (Score B+)" },
    { year: 2007, event: "Autonomous status conferred" },
    { year: "2008-09", event: "NAAC Reaccreditation (II Cycle) (Score 3.11)" },
    { year: 2009, event: "ISO 9001:2008 Certification" },
    { year: "2012-13", event: "Autonomy 1st Extension" },
    {
      year: "Nov. 2015",
      event: "NAAC Reaccreditation (III Cycle) (Score 3.40)",
    },
    { year: 2018, event: "ISO 9001:2015 Certification" },
    { year: "2018-19", event: "Autonomy 2nd Extension" },
    { year: "17th June 2021", event: "ISO 9001:2015 Re-Certification" },
    { year: "1971-2021", event: "Golden Jubilee" },
    {
      year: "March 2023",
      event: "Autonomy 3ʳᵈ extension for 10 years",
    },
    {
      year: "August 2024",
      event: "Secured the  98ᵗʰ Rank in the NIRF INDIA Rankings 2024",
    },
  ];
  return (
    <div className="aboutUs p-4">
      <div className="">
        <h1 className="display-6 text-center py-4">Our College</h1>
        <p>
          Sadakathullah Appa College, established in 1971, has experienced
          exponential growth in infrastructure, academic courses, faculty, and
          student strength. Over the years, the college has expanded its
          facilities and academic offerings, fostering excellence in education
          and research while maintaining its commitment to quality learning and
          student development.
        </p>
        <img src="/clg.png" className="img-fluid mt-4 rounded" alt="..." />
        <div className="milestones-container  col-12 col-md-12 col-lg-8">
          <h1 className="display-6 text-center my-3 ">Our Milestones</h1>
          <ul className="milestones-list">
            {milestones.map((milestone, index) => (
              <li key={index} className="milestone-item">
                <h4>
                  <i className="bi bi bi-trophy-fill text-warning mx-3"></i>
                </h4>
                <span className="milestone-year  text-info">
                  {milestone.year}
                </span>
                <span className="milestone-event text-light ">
                  {milestone.event}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="display-6 text-center mb-3 ">Our Department</h1>
        <div className="row g-5 align-items-center">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <img
              src="/cs_pg_and_aids_department_2026.jpeg"
              className="img-fluid rounded"
              alt="PG Department of Computer Science"
              style={{ transform: "scaleY(1.4)", transformOrigin: "center" }}
            />
          </div>

          <div className="col-12 col-md-8">
            <p>
              The PG Department of Computer Science at Sadakathullah Appa College,
              established in 2006, serves as a vibrant center of academic excellence
              and innovation. The department offers M.Sc. Computer Science (Unaided)
              from 2006, Ph.D. Computer Science (Unaided) from 2013, and
              M.Phil. Computer Science (Unaided) from 2015, aligning its curriculum
              with global educational standards.
            </p>

            <p>
              The department is supported by highly experienced and Ph.D / NET / SET
              qualified faculty members who nurture students with innovative,
              analytical, and out-of-the-box thinking. Individual attention is given
              to ensure excellence in both curricular and extracurricular activities.
            </p>

            <p>
              Major research areas include Image Processing, Virtual Reality,
              Cyber Security, Deep Learning, Data Mining, and Internet of Things.
              The department maintains active industry collaboration through MoUs
              with IIT Madras (SWAYAM NPTEL Local Chapter) and Brunel University, London,
              facilitating research projects and internships.
            </p>

            <p>
              Well-equipped, fully air-conditioned laboratories, enriched software
              resources, regular workshops, seminars, and conferences with eminent
              speakers enhance the learning ecosystem. Campus placements, personality
              development, and stress management programs further prepare students
              for professional success with strong ethical values.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
