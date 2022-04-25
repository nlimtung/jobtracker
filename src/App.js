import './App.css';
import React, { useState} from 'react';

function App() {
  // state
   const [company, setCompany] = useState("")
   const [dateApplied, setDateApplied] = useState("")
   const [postLink, setPostLink] = useState("")

   const handleChange =  (e) =>{
     const target = e.target
     const name = target.name
     const value = target.value
     if (name === "company") {
       setCompany(value)

     }
     else if(name ==="dateApplied") {
       setDateApplied(value)

     }
     else if (name ==="postLink"){
      setPostLink(value)
     }
   }
   
   const handleSubmit = (e) =>{
     e.preventDefault()
     const reqBody = {
       company,
       dateApplied, 
       postLink
     }
     console.log(reqBody)
   }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Company name</label>
        <input
          name = "company"
          value = {company}
          onChange= {handleChange}
        />

        <label>Date Applied</label>
        <input
          name = "dateApplied"
          type =  "date"
          value = {dateApplied}
          onChange= {handleChange}

        />

        <label>Link</label>
          <input
            name = "postLink"
            value = {postLink}
            onChange= {handleChange}


          />

        <button
          
          type = "submit"
        >Submit</button>
      </form>
      
    </div>
  );
}

export default App;
