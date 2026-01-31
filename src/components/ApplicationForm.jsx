import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [totalStudents, setTotalStudents] = useState(null);
  const [vegCount, setVegCount] = useState(0);
  const [nonVegCount, setNonVegCount] = useState(0);
  const [students, setStudents] = useState([]);
  const [contact, setContact] = useState("");
  const [isStaffIncluded, setIsStaffIncluded] = useState(false);
  const [staffDetails, setStaffDetails] = useState({
    name: "",
    contact: "",
    mealPreference: "veg",
  });

 const handleCheckboxChange = () => {
  const checked = !isStaffIncluded;
  setIsStaffIncluded(checked);

  if (!checked) {
    setStaffDetails({
      name: "",
      contact: "",
      mealPreference: ""
    });
  }
};

  const [participantCounts, setParticipantCounts] = useState({
    TECHARTIX: 0,
    FIXORA: 0,
    BRANDIFY: 0,
    TECHTRADE: 0,
    TRENDTECH: 0,
    TRIVIA: 0,
    INNOVEX: 0,
    EUREKA:0,

  });

  // const nav = useNavigate()

  const gameLimits = {
    TECHARTIX: 1,
    FIXORA: 2,
    BRANDIFY: 1,
    TECHTRADE: 5,
    TRENDTECH: 1,
    TRIVIA:2,
    INNOVEX:2,
    EUREKA:2,

  };

  const handleStudentChange = (index, field, value) => {
    const newStudents = [...students];
    newStudents[index][field] = value;
    setStudents(newStudents);
  };

  const handleGameChange = (index, game, isChecked) => {
    const newStudents = [...students];
    const newCounts = { ...participantCounts };

    if (isChecked) {
      if (newCounts[game] >= gameLimits[game]) {
        toast.error(
          `Maximum ${gameLimits[game]} participants allowed for ${game} `
        );
        return;
      }
      newStudents[index].games.push(game);
      newCounts[game] += 1;
    } else {
      newStudents[index].games = newStudents[index].games.filter(
        (g) => g !== game
      );
      newCounts[game] -= 1;
    }

    setStudents(newStudents);
    setParticipantCounts(newCounts);
  };

const handleTotalStudentsChange = (e) => {
  const value = Number(e.target.value);

  if (!value) {
    setTotalStudents(null);
    return;
  }

  if (value >= 1 && value <= 15) {
    setTotalStudents(value);
    setStudents(
      Array.from({ length: value }, () => ({ name: "", games: [] }))
    );
    setVegCount(0);
    setNonVegCount(0);
  } else {
    toast.error("Please enter a valid number between 1 and 18.");
  }
};

  const handleVegCountChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    if (value >= 0 && value <= totalStudents) {
      setVegCount(value);
      setNonVegCount(totalStudents - value);
    }
  };

  const handleNonVegCountChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    if (value >= 0 && value <= totalStudents) {
      setNonVegCount(value);
      setVegCount(totalStudents - value);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStaffDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const sendToGoogleSheet = async () => {
  const finalVeg = Number(vegCount) || 0;
  const finalNonVeg = Number(nonVegCount) || (totalStudents - finalVeg);
    
    const data = {
    collegeName,
    department,
    coordinatorContact: contact,
    totalStudents,
    vegCount: finalVeg,
    nonVegCount: finalNonVeg,
    staffIncluded: isStaffIncluded ? "Yes" : "No",
    staffName: isStaffIncluded ? staffDetails.name : "",
    staffContact: isStaffIncluded ? staffDetails.contact : "",
    staffMealPreference: isStaffIncluded ? staffDetails.mealPreference : "",
  };

    // Add students dynamically (up to 18)
    students.forEach((student, i) => {
      data[`student${i + 1}Name`] = student.name || "";
      data[`student${i + 1}Games`] = student.games.join(", ") || "";
    });

    // Fill remaining empty students
    for (let i = students.length; i < 18; i++) {
      data[`student${i + 1}Name`] = "";
      data[`student${i + 1}Games`] = "";
    }

    try {
      const formData = new URLSearchParams();
      Object.keys(data).forEach(key => formData.append(key, data[key]));

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyLCUhlJT2-rZmXEWHdkIpd3iqS2oEEnfGAGfr-mTXIRMzSryh5nkRa25Hy_a8qDK-g/exec",
        {
          method: "POST",
          body: formData
        }
      );

      const text = await response.text();
      if (text.trim() === "success") {
        toast.success("🎉 Application submitted successfully!");
      } else {
        console.log("Server response:", text);
        toast.error("❌ Submission failed");
      }

    } catch (err) {
      console.error(err);
      toast.error("⚠️ Network or permission error");
    }
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await sendToGoogleSheet();

    toast.info("✅ Your Application Has Been Successfully Submitted!");
    toast.success("🎉 Thank you for registering for EXCELSIOR 2k26 🎉");

    // Reset state
    setCollegeName("");
    setDepartment("");
    setTotalStudents(null);
    setVegCount(0);
    setNonVegCount(0);
    setStudents([]);
    setParticipantCounts({
      TECHARTIX: 0,
      FIXORA: 0,
      BRANDIFY: 0,
      TECHTRADE: 0,
      TRENDTECH: 0,
      TRIVIA: 0,
      INNOVEX: 0,
      EUREKA: 0,
    });
    setIsStaffIncluded(false);

  } catch (err) {
    toast.error("⚠️ Submission failed due to network error");
  }
};


  return (
    <div className="applicationForm">
      <div className="container-fluid mt-5 py-5 ">
        <ToastContainer />
        <table className="table table-striped border border-warning table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Category</th>
              <th scope="col">Event Name</th>
              <th scope="col">Participants Allowed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Web Designing</td>
              <td>TECHARTIX</td>
              <td>Individual</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Debugging</td>
              <td>FIXORA</td>
              <td>Max 2 Members</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Logo Design</td>
              <td>BRANDIFY</td>
              <td>Individual</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Software Marketing</td>
              <td>TECH TRADE</td>
              <td>2–5 Members</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Reels Creation</td>
              <td>TREND TECH</td>
              <td>Individual</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Quiz</td>
              <td>TRIVIA</td>
              <td>2 Members</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>E-Waste Innovation</td>
              <td>INNOVEX</td>
              <td>2 Members</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Paper Presentation</td>
              <td>EUREKA</td>
              <td>2 Members</td>
            </tr>
          </tbody>
        </table>

        <p className="text-info text-center  my-"><strong style={{color:"red"}}>⚠️ Attention: </strong> Group registration only! The  <strong> team coordinator</strong> must complete the registration. </p>

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="form-group">
            <label>Name of College</label>
            <input
              type="text"
              className="form-control"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Team Coordinator’s Phone</label>
            <input
              type="text"
              className="form-control"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              pattern="^\d{10}$"
              title="Please enter a valid 10-digit phone number"
              required
            />
          </div>
          <div className="form-group">
            <label>Total Number of Students</label>
            <input
              type="number"
              className="form-control"
              value={totalStudents ?? ""}
              onChange={handleTotalStudentsChange}
              min={1}
              max={18}
              required
            />

          </div>
          {totalStudents !== null && (
            <>
              <div className="form-group">
                <label>Veg Count</label>
                <input
                  type="number"
                  className="form-control"
                  value={vegCount}
                  onChange={handleVegCountChange}
                  min="0"
                  max={totalStudents}
                  required
                />
              </div>
              <div className="form-group">
                <label>Non-Veg Count</label>
                <input
                  type="number"
                  className="form-control"
                  value={nonVegCount}
                  onChange={handleNonVegCountChange}
                  min="0"
                  max={totalStudents}
                  required
                />
              </div>
            </>
          )}
          {totalStudents !== null &&
            students.map((student, index) => (
              <div className="form-group">
  <label>{`Student ${index + 1} Name`}</label>
  <input
    type="text"
    className="form-control"
    value={student.name}
    onChange={(e) =>
      handleStudentChange(index, "name", e.target.value)
    }
    required
  />

  {/* TECHARTIX */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("TECHARTIX")}
      onChange={(e) =>
        handleGameChange(index, "TECHARTIX", e.target.checked)
      }
    />
    <label className="form-check-label">
      TECHARTIX (Web Designing)
    </label>
  </div>

  {/* FIXORA */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("FIXORA")}
      onChange={(e) =>
        handleGameChange(index, "FIXORA", e.target.checked)
      }
    />
    <label className="form-check-label">
      FIXORA (Debugging)
    </label>
  </div>

  {/* BRANDIFY */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("BRANDIFY")}
      onChange={(e) =>
        handleGameChange(index, "BRANDIFY", e.target.checked)
      }
    />
    <label className="form-check-label">
      BRANDIFY (Logo Design)
    </label>
  </div>

  {/* TECH TRADE */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("TECHTRADE")}
      onChange={(e) =>
        handleGameChange(index, "TECHTRADE", e.target.checked)
      }
    />
    <label className="form-check-label">
      TECH TRADE (Software Marketing)
    </label>
  </div>

  {/* TREND TECH */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("TRENDTECH")}
      onChange={(e) =>
        handleGameChange(index, "TRENDTECH", e.target.checked)
      }
    />
    <label className="form-check-label">
      TREND TECH (Reels Creation)
    </label>
  </div>

  {/* TRIVIA */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("TRIVIA")}
      onChange={(e) =>
        handleGameChange(index, "TRIVIA", e.target.checked)
      }
    />
    <label className="form-check-label">
      TRIVIA (Quiz)
    </label>
  </div>

  {/* INNOVEX */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("INNOVEX")}
      onChange={(e) =>
        handleGameChange(index, "INNOVEX", e.target.checked)
      }
    />
    <label className="form-check-label">
      INNOVEX (E-Waste Innovation)
    </label>
  </div>

  {/* EUREKA */}
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      checked={student.games.includes("EUREKA")}
      onChange={(e) =>
        handleGameChange(index, "EUREKA", e.target.checked)
      }
    />
    <label className="form-check-label">
      EUREKA (Paper Presentation)
    </label>
  </div>
</div>

            ))}
          <div className="form-check my-3 border px-5 py-3 border-warning ">
            <input
              type="checkbox"
              className="form-check-input"
              id="staffCheckbox"
              checked={isStaffIncluded}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="staffCheckbox">
              Are staff accompanying with the students?
            </label>
          </div>

          {isStaffIncluded && (
            <div className="my-3">
              <div className="mb-3">
                <label htmlFor="staffName" className="form-label">
                  Staff Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="staffName"
                  name="name"
                  value={staffDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter staff name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="staffContact" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="staffContact"
                  name="contact"
                  value={staffDetails.contact}
                  onChange={handleInputChange}
                  placeholder="Enter contact number"
                  pattern="^\d{10}$"
                  title="Please enter a valid 10-digit phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Meal Preference</label>
                <select
                  className="form-select"
                  name="mealPreference"
                  value={staffDetails.mealPreference}
                  onChange={handleInputChange}
                >
                  <option value="veg">Veg</option>
                  <option value="nonveg">Non-Veg</option>
                </select>
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;