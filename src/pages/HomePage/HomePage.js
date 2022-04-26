import React, { useState} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AddJobForm from "../../components/AddJobForm";

export default function HomePage(props) {
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
   
   const handleSubmit = async (e) =>{
     e.preventDefault()
     try{
       const createPost = await fetch ("/api/jobs/new", {
         method: "POST", 
         headers:{"Content-Type": "application/json"},
         body: JSON.stringify({
           company, 
           dateApplied, 
           postLink
         })

       })
       let serverResponse = await createPost.json()
       console.log("Success:", serverResponse)  
       setCompany("")
       setDateApplied("")
       setPostLink("")
     }
     catch(err){
       console.log(err)
     }
 
    }
    return(
        <div>
           <NavBar/>
            <AddJobForm
                company = {company}
                dateApplied = {dateApplied}
                postLink = {postLink}
                handleChange= {handleChange}
                handleSubmit= {handleSubmit}/>
        </div>
    )
}