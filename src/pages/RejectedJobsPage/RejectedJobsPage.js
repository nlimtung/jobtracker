import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function RejectedJobsPage (props) {

    const [rejectedJobs, setRejectedJobs] = useState([])
    useEffect(()=>{
        
        const  fetchData= async () => {
            try{
                const fetchReponse =  await fetch('/api/jobs/rejected') 
                const jobs =  await fetchReponse.json();
                setRejectedJobs(jobs)
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
            {rejectedJobs.map((r) =>(
                <div key = {r._id}>
                    <h4>{r.company}</h4>
                    <h5>{r.postLink}</h5>
                    <h5>{r.status}</h5>
                    <hr></hr>

                </div>
            )) }
        </div>
    )
}