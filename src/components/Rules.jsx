
import TopicsCard from "./TopicsCard";


const Rules = () => {



  return (
    <div className="accordion mt-5 pt-5" id="rulesAccordion">
      {/* Rule 1 */}
      <div className="accordion-item" id="general">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <i className="fas fa-info-circle me-2"></i> General Guidelines
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#rulesAccordion"
        >
          <div className="accordion-body">
            <ul>
              <li>👥 <strong>Participants:</strong> Maximum of 15 (UG) participants from each department.</li>
              <li>🕒 Participants are encouraged to take part in the events without encountering a time clash.</li>
              <li>💶 <strong>Registration fee:</strong> Rs. 250/- per participant.</li>
              <li>🏫 Participants should bring their college identity card / Bonafide certificate from their respective HOD/Principal.</li>
              <li>📅 The verification of registration will be closed on 9th February 2026 at 9:30 am.</li>
              <li>📋 The selection will be based on prelims if necessary.</li>
              <li>👩‍⚖️ The decision of the judges shall be final.</li>
              <li>🕰️ Participants should be present at the venue 10 minutes before the events.</li>
              <li>📵 Use of mobile phones or other electronic media will not be permitted during the event.</li>
              <li>👔 Formal dress code must be strictly enforced.</li>
              <li>👧🏻🧒🏻 Both genders are allowed.</li>
              <li>🚫 Any kind of malpractice will lead to disqualification of the team.</li>
              <li>🍱 Lunch and snacks will be provided.</li>
            </ul>
          </div>
        </div>
      </div>

     {/* Rule 2 */}
    <div className="accordion-item" id="techform">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-file-alt me-2"></i> TECHARTIX (Web Designing)
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#rulesAccordion"
      >
        <div className="accordion-body">
          <h5>Themes</h5>
          <ul>
            <li>🖥️ <strong>Student Portfolio</strong></li>
            <li>☕ <strong>Café / Restaurant Website</strong></li>
          </ul>

          <h5>Rules</h5>
          <ul>
            <li>👥 <strong>Team:</strong> Individual</li>
            <li>⏰ <strong>Time:</strong> 1 Hour</li>
            <li>💻 <strong>Tech:</strong> HTML, CSS, JavaScript</li>
            <li>❌ <strong>No Frameworks:</strong> Bootstrap or Tailwind not allowed</li>
            <li>🏆 <strong>Judging Criteria:</strong> Creativity | Design | Theme Relevance</li>
          </ul>
        </div>
      </div>
    </div>


     {/* Rule 3 */}
      <div className="accordion-item" id="fixora">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <i className="fas fa-bug me-2"></i> FIXORA (Debugging)
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#rulesAccordion"
        >
          <div className="accordion-body">
            <h5>Rules</h5>
            <ul>
              <li>👥 <strong>Team:</strong> Maximum 2 members</li>
              <li>⏰ <strong>Time:</strong> 1 Hour</li>
              <li>💻 <strong>Language:</strong> C / C++</li>
              <li>⚠️ <strong>Restriction:</strong> Error fixing only (No logic change)</li>
              <li>🏆 <strong>Judging Criteria:</strong> Errors identified & Output correctness</li>
            </ul>
          </div>
        </div>
      </div>


     {/* Rule 4 */}
      <div className="accordion-item" id="brandify">
      <h2 className="accordion-header" id="headingFour">
      <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseFour"
      aria-expanded="false"
      aria-controls="collapseFour"
      >
      <i className="fas fa-pencil-alt me-2"></i> BRANDIFY (Logo Design)
      </button>
      </h2>
      <div
      id="collapseFour"
      className="accordion-collapse collapse"
      aria-labelledby="headingFour"
      data-bs-parent="#rulesAccordion"
      >
      <div className="accordion-body">
      <h5>Rules</h5>
      <ul>
      <li>👤 <strong>Participation:</strong> Individual</li>
      <li>⏰ <strong>Time:</strong> 45 Minutes</li>
      <li>🛠️ <strong>Tool:</strong> Adobe Photoshop only</li>
      <li>🎨 <strong>Requirements:</strong> Logo must be original & scalable</li>
      <li>🏆 <strong>Judging Criteria:</strong> Creativity | Relevance | Colors | Visual Impact</li>
      </ul>
      </div>
      </div>
      </div>


     {/* Rule 5 */}
      <div className="accordion-item" id="techtrade">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            <i className="fas fa-briefcase me-2"></i> TECH TRADE (Software Marketing)
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#rulesAccordion"
        >
          <div className="accordion-body">
            <h5>Rules</h5>
            <ul>
              <li>👥 <strong>Team:</strong> 2–5 members</li>
              <li>⏱️ <strong>Preparation Time:</strong> 20 Minutes</li>
              <li>🎤 <strong>Presentation Time:</strong> 5 Minutes</li>
              <li>❓ <strong>Q&A:</strong> 2 Minutes</li>
              <li>📌 <strong>Theme:</strong> Given on the spot</li>
            </ul>

            <h5>Explanation</h5>
            <ul>
              <li>💡 Explain the problem your solution solves</li>
              <li>👥 Identify target users</li>
              <li>⚙️ Describe key features of your software</li>
              <li>📈 Present your marketing strategy</li>
            </ul>

             <h5>Judging Criteria</h5>
              <p>Creativity |  Strategy |  Communication </p>
         
          </div>
        </div>
      </div>

    {/* Rule 6 */}
    <div className="accordion-item" id="trendtech">
      <h2 className="accordion-header" id="headingSix">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix"
        >
          <i className="fas fa-video me-2"></i> TREND TECH (Reels Creation)
        </button>
      </h2>
      <div
        id="collapseSix"
        className="accordion-collapse collapse"
        aria-labelledby="headingSix"
        data-bs-parent="#rulesAccordion"
      >
        <div className="accordion-body">
          <h5>Rules</h5>
          <ul>
            <li>👥 <strong>Team:</strong> Individual</li>
            <li>⏰ <strong>Duration:</strong> 30–60 seconds</li>
            <li>📱 <strong>Format:</strong> Vertical (9:16), MP4, 720p</li>
            <li>🎨 <strong>Theme:</strong> Given on the spot</li>
            <li>🛠️ <strong>Editing:</strong> Any editing tool allowed</li>
            <li>💻 <strong>Equipment:</strong> Bring your own device</li>
            <li>🏆 <strong>Judging Criteria:</strong> Creativity | Editing & Effects |  Theme Relevance |  Engagement</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Rule 7 */}
    <div className="accordion-item" id="trivia">
      <h2 className="accordion-header" id="headingSeven">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSeven"
          aria-expanded="false"
          aria-controls="collapseSeven"
        >
          <i className="fas fa-question me-2"></i> TRIVIA (Quiz)
        </button>
      </h2>
      <div
        id="collapseSeven"
        className="accordion-collapse collapse"
        aria-labelledby="headingSeven"
        data-bs-parent="#rulesAccordion"
      >
        <div className="accordion-body">
          <h5>Rules</h5>
          <ul>
            <li>👥 <strong>Team:</strong> 2 members</li>
            <li>📋 <strong>Prelims:</strong> Conducted if required</li>
            <li>🏆 <strong>Judging Criteria:</strong> Accuracy |  Speed | Confidence & Clarity</li>
          </ul>
        </div>

      </div>
    </div>

    {/* Rule 8 */}
    <div className="accordion-item" id="innovex">
      <h2 className="accordion-header" id="headingEight">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEight"
          aria-expanded="false"
          aria-controls="collapseEight"
        >
          <i className="fas fa-recycle me-2"></i> INNOVEX (E-Waste Innovation)
        </button>
      </h2>
      <div
        id="collapseEight"
        className="accordion-collapse collapse"
        aria-labelledby="headingEight"
        data-bs-parent="#rulesAccordion"
      >
        <div className="accordion-body">
          <h5>Rules</h5>
          <ul>
            <li>👥 <strong>Team:</strong> 2 members</li>
            <li>♻️ <strong>Materials:</strong> Use only discarded e-waste</li>
            <li>⚠️ <strong>Restriction:</strong> Minimal non e-waste materials</li>
            <li>🛠️ <strong>Requirement:</strong> Self-made & original</li>
            <li>💡 <strong>Presentation:</strong> Explain concept & usage</li>
            <li>🏆 <strong>Judging Criteria:</strong> Creativity |  Usefulness |  Eco-Impact</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Rule 9 */}
    <div className="accordion-item" id="eureka">
      <h2 className="accordion-header" id="headingNine">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNine"
          aria-expanded="false"
          aria-controls="collapseNine"
        >
          <i className="fas fa-lightbulb me-2"></i> EUREKA (Paper Presentation)
        </button>
      </h2>
      <div
        id="collapseNine"
        className="accordion-collapse collapse"
        aria-labelledby="headingNine"
        data-bs-parent="#rulesAccordion"
      >
      
              <div className="accordion-body">
          <h5>Themes / Topics (Not Limited)</h5>
          <ul>
            <li>🤖 AI & Machine Learning</li>
            <li>🧠 Deep Learning</li>
            <li>📊 Data Science & Big Data Analytics</li>
            <li>🌐 IoT & Internet of Nano Things</li>
            <li>☁️ Cloud & Fog Computing</li>
            <li>🛡️ Cyber Security & Ethical Hacking</li>
            <li>🔗 Blockchain</li>
            <li>🧬 Bio Informatics</li>
            <li>🎮 AI Gaming</li>
            <li>🧠 Blue Brain</li>
            <li>🗣️ Natural Language Processing (NLP)</li>
            <li>🕶️ Augmented Reality</li>
            <li>🖧 Computer Networks</li>
          </ul>

          <h5>Rules</h5>
          <ul>
            <li>👥 <strong>Team:</strong> 2 participants per team.</li>
            <li>📄 <strong>Paper Length:</strong> The paper should not exceed 6 pages.</li>
            <li>📂 <strong>Submission:</strong> Upload your paper using the floating upload icon.</li>
            <li>📅 <strong>Deadline:</strong> On or before <strong>06/02/2026</strong>.</li>
            <li>📧 <strong>Selection Notification:</strong> Selected papers will be informed via email on <strong>07/02/2026</strong>.</li>
            <li>📄 <strong>Hard & Soft Copy:</strong> Bring 2 hard copies and send 1 soft copy via email.</li>
            <li>⏰ <strong>Presentation Duration:</strong> 6 Minutes
              <ul>
                <li>5 Minutes – Presentation</li>
                <li>1 Minute – Q&A</li>
              </ul>
            </li>
            <li>📂 <strong>PPT Requirement:</strong> Participants must bring the soft copy of their presentation.</li>
          </ul>

          <h5>Judging Criteria</h5>
          <p>Creativity | Content Quality | Presentation | Clarity</p>

          <h5>Paper Upload Link</h5>

          <p>
            <a
              href="http://localhost:5173/uploadPaper"
              target="_blank"
              rel="noopener noreferrer"
              title="Upload your paper"
            >
              <img
                src="/image-removebg-preview.png"
                alt="Upload Paper"
                style={{
                  width: "40px",
                  height: "auto",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, opacity 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.opacity = "1";
                }}
              />
            </a>
          </p>


        </div>
      </div>
    </div>

    </div>
  );
};

export default Rules;