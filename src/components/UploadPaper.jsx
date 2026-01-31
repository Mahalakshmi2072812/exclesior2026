// src/UrlSubmitForm.js
import  { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";


const UrlSubmitForm = () => {
  const [collegeName, setCollegeName] = useState('');
  const [department, setDepartment] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [teamLeadName, setTeamLeadName] = useState('');
  const [paperTitle, setPaperTitle] = useState('');

  const sendDataToGoogleSheets = async (formData) => {
    const data = {
      collegeName: formData.collegeName,
      department: formData.department,
      url: formData.url,
      email: formData.email,
      teamLeadName: formData.teamLeadName,
      paperTitle: formData.paperTitle,
    };

    const body = new URLSearchParams();
    Object.keys(data).forEach(key => body.append(key, data[key]));

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyVp02R45Z_V4QTB3XRnY93VRnuKSbRIPWmr2vxJ6Z3y4O4VkslO7NJV2m3wIQLBrhUxg/exec",
        {
          method: "POST",
          body 
        }
      );

      const text = await response.text();
      if (text.trim() === "success") {
        toast.success('Data submitted successfully!');
      } else {
        toast.error('Error: ' + text);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('An error occurred while submitting the data.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      collegeName,
      department,
      url,
      email,
      teamLeadName,
      paperTitle,
    };
    sendDataToGoogleSheets(formData);
    toast.info(" We will review your paper and notify you via email if it is selected for presentation.");
    toast.success(
      "✅ Successfully Submitted! "
    );
    setCollegeName('');
    setDepartment('');
    setEmail('')
    setPaperTitle('')
    setTeamLeadName('')
    setUrl('')
  };

  return (
    <div className="mt-5 pt-2 upload">
         <ToastContainer />
         <h3 className='text-center mt-5 text-danger'>EUREKA</h3>
         <h5 className='text-center'>Paper Presentation</h5>
      <form className="url-submit-form  p-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name of College <span className="required">*</span></label>
          <input
            type="text"
            className="form-control"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Department <span className="required">*</span></label>
          <input
            type="text"
            className="form-control"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <small className="form-text text-muted">
            Steps to Upload a PPT to Google Drive and Share It:
            <ol>
              <li>Open <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Google Drive</a> and sign in with your Google account.</li>
              <li>Click on the `➕ New` button on the left-hand side and select `File upload`.</li>
              <li>Browse your computer to find the PPT file you want to upload and select it.</li>
              <li>Once the upload is complete, right-click on the file and select `Share` or click on the file to open it and then click on the `Share` button in the top-right corner.</li>
              <li>In the sharing dialog, click on `Get link`, change the sharing settings to `Anyone with the link`, and select `Viewer` to allow anyone to view the file.</li>
              <li>Click `Copy link` to copy the shareable link to your clipboard.</li>
              <li>Paste the copied link in the URL field below.</li>
            </ol>
          </small>
          <label>URL<span className="required">*</span></label>
          <input
            type="url"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <small className="form-text text-muted">
          Note: Please provide the team lead email ID and name, along with the paper title.
        </small>
        <div className="form-group">
          <label>Email<span className="required">*</span></label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Team Lead Name <span className="required">*</span></label>
          <input
            type="text"
            className="form-control"
            value={teamLeadName}
            onChange={(e) => setTeamLeadName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Paper Title <span className="required">*</span></label>
          <input
            type="text"
            className="form-control"
            value={paperTitle}
            onChange={(e) => setPaperTitle(e.target.value)}
            required
          />
        </div>
        <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-primary mt-5">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UrlSubmitForm;
