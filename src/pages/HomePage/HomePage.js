import React, { useState, useEffect} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AddJobForm from "../../components/AddJobForm";
import StatusJobNumber from '../../components/StatusJobNumber/StatusJobNumber';

export default function HomePage(props) {
    const [company, setCompany] = useState("")
    const [dateApplied, setDateApplied] = useState("")
    const [postLink, setPostLink] = useState("")
    const [allJobs, setAllJobs] = useState([])


    const interviewingNumber  = allJobs.filter(i => i.status ==="Interview")
    const pendingNumber = allJobs.filter(i => i.status ==="Pending/No Response")
    const rejectedNumber = allJobs.filter(i => i.status ==="Rejected")

    useEffect(()=>{
        
        const  fetchData= async () => {
            try{
                const fetchReponse =  await fetch('/api/jobs/home') 
                const jobs =  await fetchReponse.json();
                setAllJobs(jobs)
            }
            catch(err){
                console.log(err)
            }
        }; 
        fetchData()
    }, [])




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
       window.location.href = '/applied'

     }
     catch(err){
       console.log(err)
     }
 
    }
    return(
        <div>
           <NavBar/>
           <StatusJobNumber
              allJobs = {allJobs.length}
              interviewingNumber = {interviewingNumber.length}
              pendingNumber = {pendingNumber.length}
              rejectedNumber = {rejectedNumber.length}
            />
            <AddJobForm
                company = {company}
                dateApplied = {dateApplied}
                postLink = {postLink}
                handleChange= {handleChange}
                handleSubmit= {handleSubmit}/>
        </div>
    )
}