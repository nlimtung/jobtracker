import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function AppliedJobsPage(props) {
    const [allJobs, setAllJobs] = useState([])

    useEffect(()=>{
        
        const  fetchData= async () => {
            try{
                const fetchReponse =  await fetch('/api/jobs') 
                const jobs =  await fetchReponse.json();
                setAllJobs(jobs)
            }
            catch(err){
                console.log(err)
            }
        }; 
        fetchData()
    }, [])



    return(
        <div>
            <NavBar/>
            {allJobs.map((j)=>(
                <div key = {j._id}>
                    <h2>{j.company}</h2>
                    <h4>Date Applied: {new Date(j.dateApplied).toDateString()}</h4>
                    <h4>Link: {j.postLink}</h4>
                    <h4>Status: {j.status}</h4>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}