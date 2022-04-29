import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import UpdateStatusForm from "../../components/UpdateStatusForm/UpdateStatusForm";

export default function AppliedJobsPage(props) {
    const [allJobs, setAllJobs] = useState([])
    const[status, setStatus] = useState("")
    const [jobID, setJobID] = useState("")


    const handleChangeStatus = async (e) =>{
        const target = e.target
        const id = target.id
        const value = target.value
        setJobID(id) 
        setStatus(value)
    }

    const handleChangeStatusButton = async (e) =>{
        e.preventDefault()
        try{

            const updateJob = await fetch ("/api/jobs/applied/:id/updatestatus", {
                method: "PUT", 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify ({
                    status,
                    jobID

                })
            })
            let serverResponse = await updateJob.json()
            console.log("Success:", serverResponse)  
            window.location.reload()


        }
        catch(err){
            console.log(err)  
        }
    }

    const handleFavourite = async (e) =>{
        e.preventDefault()
        console.log (e.target)
        try{

            const updateJob = await fetch ("/api/jobs/applied/:id/favourite", {
                method: "PUT", 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify ({
                    id: e.target.id

                })
            })
            let serverResponse = await updateJob.json()
            console.log("Success:", serverResponse)  
            window.location.reload()


        }
        catch(err){
            console.log(err)
        }
    }
    

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
            <h1>Active applications</h1>
    
 

            {allJobs.map((j)=>(
                <div key = {j._id}>
                    <h2>{j.company}</h2>
                    <h4>Date Applied: {new Date(j.dateApplied).toDateString()}</h4>
                    <h4>Link: {j.postLink}</h4>
                    <h4>Status: {j.status}</h4>


                    <UpdateStatusForm
                        handleChangeStatus= {handleChangeStatus} 
                        handleChangeStatusButton= {handleChangeStatusButton}
                        allJobs = {allJobs}
                        status = {status}
                        id = {j._id}

                    />
{j.favourite === false ? 

<div
    id = {j._id}
    className="bi bi-heart"
    onClick = {handleFavourite}
/>:
<div
    id = {j._id}
    className="bi bi-heart-fill"
    onClick = {handleFavourite}
/>

}






                    <hr></hr>
                </div>
            ))}
        </div>
    )
}