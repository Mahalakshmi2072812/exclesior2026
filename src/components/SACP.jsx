import React from 'react'

const SACP = ({pgteamName,handleSubmit,setPgTeamName}) => {
  return (

        <>
        <div className=" d-flex  justify-content-center mt-5">
           
           <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
             <h2 className="text-center mb-4 text-success">SAC</h2>
             <form onSubmit={handleSubmit}>
               <div className="mb-3">
                 <label htmlFor="teamName" className="form-label">
                   Enter Team Name:
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="teamName"
                   placeholder="Your Team Name"
                   value={pgteamName}
                   onChange={(e) => setPgTeamName(e.target.value)}
                   required
                 />
               </div>
               <button type="submit" className="btn btn-warning w-100">
                 Start Quiz
               </button>
             </form>
           </div>
         </div>
        </>
  )
}

export default SACP
