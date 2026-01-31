import React from "react";
const Instructions = ({handleStart}) => {
  return (
    <div className="container">
     
      <div className="card shadow-lg">
        <div className="card-header bg-info text-white text-center">
          <h2 className="text-primary">Quiz Instructions</h2>  
         
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              1. A total of 20 questions will be provided.
            </li>
            <li className="list-group-item">
              2.Each question carries <strong>1 mark</strong>.
            </li>
            <li className="list-group-item">
              3. Once you move to the next question, you cannot go back.
            </li>
            <li className="list-group-item">
              4. Make sure to read each question carefully before answering.
            </li>
            <li className="list-group-item">
              5.Once submitted, answers cannot be modified.
            </li>
            <li className="list-group-item">
              6. The total time allotted for the quiz is 30 minutes.
            </li>
          </ul>
          <div className="text-center mt-4">
            <button
              className="btn btn-success btn-lg px-5"
              onClick={handleStart}
            >
            Ready to begin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
