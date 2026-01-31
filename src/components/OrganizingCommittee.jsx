/* eslint-disable react/no-unescaped-entities */
// src/components/OrganizingCommittee.jsx

const OrganizingCommittee = () => {
  return (
    <div className="committee pb-5">
      <h2 className="text-center py-4">
        Excelsior <span style={{ fontFamily: "serif" }}>2026 </span> Organizing
        Committee
      </h2>
      <div className=" d-flex justify-content-center ">
        <div>
          <div className="flip-card  ">
            <div className="flip-card-inner">
              <div className="flip-card-front ">
                <img
                  src="/parton.jpg"
                  alt="Team Member"
                  className="profile-img img"
                />
                <p className="name my-0 mt-1">Alhaj.T.E.S. Fathu Rabbani</p>
                <p className="name my-1 fw-bold">(Patron)</p>
                <p className="role">Secretary & Correspondent</p>
              </div>
              <div className="flip-card-back">
                <p className="flip-text">
                  Sadakathullah Appa College named after the renowned Arabic
                  scholar Sadakathullah Appa, was started in 1971. It symbolizes
                  the unflinching and resolute commitment of great visionaries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center text-warning  my-4">
        Excelsior <span style={{fontFamily:"serif"}}> 2026</span> Committee Chairmans
      </h4>
      <div className="row chairmans gy-3">
        <div className="col col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
          {" "}
          <div>
            <div className="flip-card  ">
              <div className="flip-card-inner">
                <div className="flip-card-front ">
                  <img
                    src="/chairman.jpg"
                    alt="Team Member"
                    className="profile-img img"
                  />
                  <p className="name my-0">Dr.S.M.Abdul Kader</p>
                  <p className="name my-1 fw-bold">(Chairman)</p>

                  <p className="role">Principal</p>
                </div>
                <div className="flip-card-back">
                  <p className="flip-text">
                    On behalf of the Management and Staff of Sadakathullah Appa
                    College, I welcome you to our College website. Our College
                    is an extraordinary place where we feel togetherness in
                    working.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-6 d-flex justify-content-md-start justify-content-center">
          {" "}
          <div>
            <div className="flip-card  ">
              <div className="flip-card-inner">
                <div className="flip-card-front ">
                  <img
                    src="/viceprincipal.png"
                    alt="Team Member"
                    className="profile-img img"
                  />
                  <p className="name my-0"> Dr. R. Janet Rani</p>
                  <p className="name my-0 fw-bold">( Vice-Chairman)</p>
                  <p className="role">Vice Principal</p>
                </div>
                <div className="flip-card-back">
                  <p className="flip-text">
                    I am very proud to note that Sadakathullah Appa College is
                    the only Autonomous, Accredited, ISO Certified and
                    Government Aided Muslim Minority College.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <h4 className="text-center text-warning my-4">Committee Convenor</h4>

        <div className="row convenors gy-3 justify-content-center">
          <div className="col col-12 col-md-6 d-flex justify-content-center">
            <div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="/convenor1.jpg"
                      alt="Dr. V. Roseline"
                      className="profile-img img"
                    />
                    <p className="name my-0">Dr. V. Roseline</p>
                    <p className="role">
                     Assistant Professor & Head
                      <br />CS (PG) and AI & DS (UG I/C)
                    </p>
                  </div>

                  <div className="flip-card-back">
                    <p className="flip-text">
                      The PG Department functions under the leadership of Dr. V. Roseline,
                      fostering academic excellence, innovation, and holistic student
                      development, and encouraging meaningful contributions in the field
                      of computer science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row justify-content-center">
        <div className="col col-12 col-md-6">
          <h4 className="text-center text-warning my-4">
            Organizing Secretary
          </h4>

          <div className="row gy-3 justify-content-center">
            <div className="col col-12 d-flex justify-content-center">
              <div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="/Mr.K.Ganeshkumar.jpeg"
                        alt="Mr. K. Ganeshkumar"
                        className="profile-img img"
                      />
                      <p className="name m-0">Mr. K. Ganeshkumar</p>
                      <p className="role m-0">
                        Assistant Professor <br />( PG Unaided )
                      </p>
                    </div>

                    <div className="flip-card-back">
                      <p className="flip-text">
                        Mr. K. Ganeshkumar serves as the Organizing Secretary of
                        Excelsior 2026. He is known for his strong organizational
                        skills, academic dedication, and commitment to coordinating
                        events that encourage student participation, innovation, and
                        academic excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


     <h4 className="text-center text-warning my-4">
        Organizing Members
      </h4>

      <div className="row convenors gy-3 justify-content-center">

        {/* Dr. D. Louisa Mary */}
        <div className="col col-12 col-md-4 d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/Dr.D.LouisaMary.jpg"
                  alt="Dr. D. Louisa Mary"
                  className="profile-img img"
                />
                <p className="name m-0">Dr. D. Louisa Mary</p>
                <p className="role">
                  Assistant Professor <br />
                  ( PG Unaided )
                </p>
              </div>
              <div className="flip-card-back">
                <p className="flip-text">
                  Dr. D. Louisa Mary is an organizing member of Excelsior 2026,
                  recognized for her academic expertise, leadership, and commitment
                  to fostering innovation and student-centric learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. B.N. Prathiba */}
        <div className="col col-12 col-md-4 d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/Dr.B.N.Prathiba.jpg"
                  alt="Dr. B.N. Prathiba"
                  className="profile-img img"
                />
                <p className="name m-0">Dr. B.N. Prathiba</p>
                <p className="role">
                  Assistant Professor <br />
                  ( PG Unaided )
                </p>
              </div>
              <div className="flip-card-back">
                <p className="flip-text">
                  Dr. B.N. Prathiba plays a key role as an organizing member,
                  contributing her academic experience and dedication toward the
                  successful coordination of Excelsior 2026.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. M. Nagoor Meeral */}
        <div className="col col-12 col-md-4 d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="Dr. M. Nagoor Meeral.jpg"
                  alt="Dr. M. Nagoor Meeral"
                  className="profile-img img"
                />
                <p className="name m-0">Dr. M. Nagoor Meeral</p>
                <p className="role">
                  Assistant Professor <br />
                  (AI & DS)
                </p>
              </div>
              <div className="flip-card-back">
                <p className="flip-text">
                  Dr. M. Nagoor Meeral is an organizing member of Excelsior 2026,
                  actively involved in planning and guiding academic and technical
                  events with a focus on excellence and student engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>


      

      <h4 className="text-center text-warning my-4">Student Coordinators</h4>
      <div className="row convenors gy-3">
        <div className="col col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
          {" "}
          <div>
            <div className="flip-card  ">
              <div className="flip-card-inner">
                <div className="flip-card-front ">
                  <img
                    src="/MuthubalaS.png"
                    alt="Team Member"
                    className="profile-img img"
                  />
                  <p className="name m-0 mt-2">Muthu Bala S</p>
                  <p className="role m-0 ">
                MSc (CS)
                  </p>
                </div>
                <div className="flip-card-back">
                  <p className="flip-text">
                    Welcome to our department! Under the leadership of Mr.
                    S.M.A. Khaleelur Rahman, we strive for academic excellence,
                    innovation, and fostering a supportive environment that
                    nurtures students growth and success in their endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-6 d-flex justify-content-md-start justify-content-center">
          {" "}
          <div>
            <div className="flip-card  ">
              <div className="flip-card-inner">
                <div className="flip-card-front ">
                  <img
                    src="/Mohamed Yunus.jpeg"
                    alt="Team Member"
                    className="profile-img img"
                  />
                <p className="name m-0 mt-2">Mohamed Yunus S</p>
                  <p className="role m-0 ">
                MSc (CS)
                  </p>
                </div>
                <div className="flip-card-back">
                  <p className="flip-text">
                    Welcome to our PG Department! Under Dr. V. Roseline’s
                    guidance, we promote academic excellence, innovation, and
                    holistic growth, empowering students to excel in computer
                    science and contribute meaningfully to society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
