import React, { useState, useEffect} from 'react';
import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar';
import AddJobForm from "../../components/AddJobForm/AddJobForm";
import StatusJobNumber from '../../components/StatusJobNumber/StatusJobNumber';
import { VictoryPie } from "victory-pie";


export default function HomePage(props) {
    const [company, setCompany] = useState("")
    const [dateApplied, setDateApplied] = useState("")
    const [postLink, setPostLink] = useState("")
    const [allJobs, setAllJobs] = useState([])


    const interviewingNumber  = allJobs.filter(i => i.status ==="Interview")
    const pendingNumber = allJobs.filter(i => i.status ==="Pending/No Response")
    const rejectedNumber = allJobs.filter(i => i.status ==="Rejected")


    const myData = [
      { x: `Interviewing ${interviewingNumber.length}/ ${allJobs.length}`, y: interviewingNumber.length },
      { x: `Pending/
      No Response 
      ${pendingNumber.length}/ ${allJobs.length}`, y: pendingNumber.length },
      { x: `Rejected 
      ${rejectedNumber.length}/${allJobs.length}`, y: rejectedNumber.length },
    ];

    useEffect(()=>{
        
        const  fetchData= async () => {
            try{
                let jwt = localStorage.getItem('token')
                const fetchReponse =  await fetch('/api/jobs/home', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
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
      let jwt = localStorage.getItem('token')
       const createPost = await fetch ("/api/jobs/new", {
         method: "POST", 
         headers:{"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
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
        <div className='HomePage'>
           <NavBar/>
           <h1 className='headerTitle'>Overview</h1>
           <VictoryPie
                data={myData}
                colorScale={["#47B39C", "#FFC154", "#EC6B56"]}
                radius={80}
                height = {250}
            />

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